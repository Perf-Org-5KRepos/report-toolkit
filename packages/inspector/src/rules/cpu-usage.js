import {constants} from '@report-toolkit/common';

const {INFO} = constants;

const MODE_ALL = 'all';
const MODE_MEAN = 'mean';
const MODE_MIN = 'min';
const MODE_MAX = 'max';

const modeDescriptions = new Map([
  [MODE_ALL, 'Report'],
  [MODE_MAX, 'Maximum'],
  [MODE_MEAN, 'Mean'],
  [MODE_MIN, 'Minimum']
]);

const computations = {
  [MODE_MAX]: /** @param {number[]} usages */ usages =>
    usages.reduce((max, usage) => Math.max(max, usage), 0),
  [MODE_MEAN]: /** @param {number[]} usages */ usages =>
    usages.reduce(
      (acc, value, i, arr) =>
        i === arr.length - 1
          ? parseFloat(((acc + value) / arr.length).toFixed(2))
          : acc + value,
      0
    ),
  [MODE_MIN]: /** @param {number[]} usages */ usages =>
    usages.reduce((acc, value) => Math.min(acc, value), Infinity)
};

/**
 * Returns `true` if `usage` is between `min` and `max` inclusive
 * @param {number} min
 * @param {number} max
 * @param {number} usage
 */
const withinRange = (min, max, usage) => usage >= min && usage <= max;

const ok = ({max, min, mode, usage}) => {
  return {
    data: {
      max,
      min,
      mode,
      usage
    },
    message: `${modeDescriptions.get(
      mode
    )} CPU consumption percent (${usage}%) is within the allowed range of ${min}-${max}%`,
    severity: INFO
  };
};

const fail = ({max, min, mode, usage}) => {
  return {
    data: {
      max,
      min,
      mode,
      usage
    },
    message: `${modeDescriptions.get(
      mode
    )} CPU consumption percent (${usage}%) is outside the allowed range of ${min}-${max}%`
  };
};
export const id = 'cpu-usage';

/**
 * @type {import('../rule').RuleDefinitionMeta}
 */
export const meta = {
  docs: {
    category: 'resource',
    description: 'Assert CPU usage % is within a range',
    url: 'https://more-information-for-this-rule'
  },
  constants: {MODE_ALL, MODE_MAX, MODE_MEAN, MODE_MIN},
  schema: {
    additionalProperties: false,
    properties: {
      max: {
        default: 50,
        minimum: 0,
        type: 'integer'
      },
      min: {
        default: 0,
        minimum: 0,
        type: 'integer'
      },
      mode: {
        default: 'mean',
        enum: ['mean', 'min', 'max', 'all'],
        type: 'string'
      }
    },
    type: 'object'
  }
};

/**
 * @type {import('../rule').RuleDefinitionInspectFunction}
 */
export const inspect = (config = {}) => {
  let {max, min, mode} = config;
  min = min || 0;
  max = max || 50;
  mode = mode || 'mean';
  /**
   * @type {number[]}
   */
  const usages = [];
  return {
    complete() {
      if (mode !== MODE_ALL && usages.length) {
        const usage = computations[mode](usages);
        return withinRange(min, max, usage)
          ? ok({max, min, mode, usage})
          : fail({max, min, mode, usage});
      }
    },
    next(context) {
      if (!context.header.cpus) {
        throw new Error(
          `Property "header.cpus" missing in report at ${context.filepath}; cannot compute CPU usage.`
        );
      }
      const usage = parseFloat(
        (
          context.resourceUsage.cpuConsumptionPercent /
          context.header.cpus.length
        ).toFixed(2)
      );
      if (mode === MODE_ALL) {
        return withinRange(min, max, usage)
          ? ok({max, min, mode, usage})
          : fail({max, min, mode, usage});
      }
      usages.push(usage);
    }
  };
};
