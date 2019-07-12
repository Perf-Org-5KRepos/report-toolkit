exports.meta = {
  docs: {
    description: 'Identify potential library version mismatches',
    category: 'runtime',
    url: 'https://more-information-for-this-rule'
  },
  schema: {
    type: 'object',
    properties: {
      ignore: {
        type: 'array',
        items: {
          type: 'string'
        },
        minItems: 1
      }
    },
    additionalProperties: false
  }
};

const VERSION_REGEXP = /(\d+(?:\.\d+)+[a-z]?)/;

exports.inspect = (config = {}) => {
  const ignoredComponents = new Set(config.ignore || []);
  return context => {
    const {sharedObjects, header} = context;
    return (
      Object.keys(header.componentVersions)
        .filter(component => !ignoredComponents.has(component))
        // this should be a flatMap()
        .reduce((acc, component) => {
          const version = header.componentVersions[component];
          return [
            ...acc,
            sharedObjects
              .filter(filepath => {
                const sharedVersion = VERSION_REGEXP.exec(filepath);
                return (
                  filepath.includes(component) &&
                  sharedVersion &&
                  sharedVersion[1] !== version
                );
              })
              .map(
                filepath =>
                  `Custom shared library at ${filepath} in use conflicting with ${component}@${version}`
              )
          ];
        }, [])
    );
  };
};