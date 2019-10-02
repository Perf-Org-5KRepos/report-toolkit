import {constants, observable as obs} from '@report-toolkit/common';

import * as observable from './observable.js';

const {fromAny, of, toArray} = obs;

export {
  registeredRuleDefinitions,
  compatibleTransforms,
  builtinTransformerIds,
  isPluginRegistered,
  deregisterPlugins
} from './observable.js';

/**
 * [RxJS](https://rxjs.dev) Observable-based API. See
 * {@link @report-toolkit/core.observable} for more info.
 */
export {observable};

/**
 * Returns the difference between two reports.
 *
 * Example:
 *
 * ```js
 * const {diff} = require('@report-toolkit/core');
 *
 * const report1 = process.report.getReport();
 * const report2 = process.report.getReport();
 * const results = await diff(report1, report2, {
 *   filterProperties: ['header', 'javascriptStack', 'nativeStack'],
 *   showSecretsUnsafe: false
 * });
 * results.forEach(({op, path, newValue, oldValue}) => {
 *   console.log(`[${op}] <${path}> ${oldValue} => ${newValue}`);
 * });
 *```
 * @param {import('@report-toolkit/common/src/report').ReportLike} report1 - First report to diff
 * @param {import('@report-toolkit/common/src/report').ReportLike} report2 - Second report to diff
 * @param {Partial<import('./observable').DiffOptions>} [opts] Options
 * @returns {Promise<import('./observable').DiffResult[]>} Array of results, one per difference
 */
export async function diff(report1, report2, opts = {}) {
  return observable
    .diff(report1, report2, opts)
    .pipe(toArray())
    .toPromise();
}

/**
 * Inspect one or more reports, running rules against each.  Resolves with an array of zero or more {@link @report-toolkit/inspector.message.Message|Messages}.
 *
 * Example:
 *
 * ```js
 * const {inspect} = require('@report-toolkit/core');
 *
 * const report = process.report.getReport();
 * const results = await inspect(report, {
 *   severity: 'info',
 *   sort: true,
 *   sortDirection: 'asc',
 *   sortField: 'header.dumpEventTimestamp',
 *   showSecretsUnsafe: false,
 *   ruleConfig: {
 *     'long-timeout': {
 *       timeout: '2s'
 *     }
 *   }
 * });
 * results.forEach(({message, filename}) => {
 *   console.log(`${filename}: ${message}`);
 * });
 ```
 * @param {import('@report-toolkit/common/src/report').ReportLike} reports - One or more reports
 * @param {Partial<import('./observable').InspectOptions>} [opts] - Options
 * @returns {Promise<import('@report-toolkit/inspector/src/message').Message[]>}
 */
export async function inspect(reports, opts = {}) {
  return observable
    .inspect(reports, opts)
    .pipe(toArray())
    .toPromise();
}

/**
 * Resolves with a normalized config object from a raw config object.
 *
 * Example:
 *
 * ```js
 * const {loadConfig} = require('@report-toolkit/core');
 *
 * // or require('./path/to/.rtkrc.js')
 * const rawConfig = [
 *   'report-toolkit:recommended',
 *   {
 *     rules: {
 *       'long-timeout': {
 *         timeout: '2s'
 *       }
 *     }
 *   }
 * ];
 * // `normalizedConfig` contains contents of "recommended" settings,
 * // with our override of custom rule config
 * const normalizedConfig = await loadConfig(rawConfig);
 * ```
 * @param {object} config - Raw config object
 * @returns {Promise<import('./observable').Config>} A normalized config object
 */
export async function loadConfig(config) {
  return observable.loadConfig(config).toPromise();
}

/**
 * Convert a plain object (usually parsed from a JSON report generated by See [process.report.writeReport](https://nodejs.org/api/process.html#process_process_report_writereport_filename_err)) to a {@link @report-toolkit/common.report.Report|Report} instance.
 *
 * Example:
 *
 * ```js
 * const {toReportFromObject} = require('@report-toolkit/core');
 *
 * const json = fs.readFileSync('./report-xxxxx.json');
 * // `Report` instance with secrets redacted
 * const report = await toReportFromObject(json, {
 *   showSecretsUnsafe: false
 * });
 * ```
 * @param {object} value - Raw report
 * @param {Partial<import('./observable').ToReportFromObjectOptions>} [opts]
 */
export async function toReportFromObject(value, opts = {}) {
  return of(value)
    .pipe(observable.toReportFromObject(opts))
    .toPromise();
}

/**
 * Register & enable a plugin.
 *
 * Example:
 *
 * ```js
 * const {use} = require('@report-toolkit/core');
 *
 * await use('some-plugin-in-node_modules');
 * await use('./relative/path/to/plugin.js');
 * ```
 * @param {string} pluginId - ID of plugin to register; a resolvable path to a module
 * @returns {Promise<import('./observable').RTKPlugin>}
 */
export async function use(pluginId) {
  return observable.use(pluginId).toPromise();
}

/**
 * Run `source` through chain of one or more transformers.  Performs validation before piping.
 * If the final transformer does not output the desired `endType`, the `defaultTransformer` will be appended to the chain; otherwise it is ignored.
 *
 * Example:
 *
 * ```js
 * const {transform, toReportFromObject} = require('@report-toolkit/core');
 *
 * // by default, `report` has its secrets redacted
 * const report = await toReportFromObject(process.report.getReport());
 * const [header, ...data] = await transform(['filter', 'csv'], report, {
 *   transformers: {
 *     filter: {include: 'header'},
 *     csv: {flatten: true}
 *   }
 * });
 * ```
 * @param {string | string[]} transformerIds - Unique transformer identifier(s), in order.  Can be one of `csv`, `filter`, `json`, `newline`, `numeric`, `redact`, `stack-hash`, `table`.
 * @param {object} source - Source, typically one or more {@link @report-toolkit/common.report.Report|Reports}.
 * @param {Partial<import('./observable').Config>} config - As returned by {@link loadConfig}; can contain transformer-specific settings.
 * @param {Partial<import('./observable').TransformOptions>} options - Optional constraints & default behavior; overrides settings in `config`, if present.
 */
export async function transform(
  transformerIds,
  source,
  config = {},
  options = {}
) {
  return observable
    .fromTransformerChain(transformerIds, config)
    .pipe(
      observable.transform(fromAny(source), options),
      toArray()
    )
    .toPromise();
}

export {constants};
