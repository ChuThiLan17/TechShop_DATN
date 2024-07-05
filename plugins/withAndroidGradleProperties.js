const { withGradleProperties } = require("@expo/config-plugins");

module.exports = (config) => {
  const newGraddleProperties = [];
  newGraddleProperties.push({
    type: "property",
    key: "FLIPPER_VERSION",
    value: "0.247.0",
  });

  return withGradleProperties(config, (config) => {
    newGraddleProperties.map((gradleProperty) =>
      config.modResults.push(gradleProperty)
    );
    return config;
  });
};
