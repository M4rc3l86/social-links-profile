import { fileURLToPath } from "url";
import { dirname, join } from "path";

const getBasePath = () => {
  const filename = fileURLToPath(import.meta.url);
  return dirname(filename);
};

const getBrowserConfig = () => ({
  ChromiumHeadless: {
    base: "Chromium",
    flags: [
      "--no-sandbox",
      "--headless",
      "--disable-gpu",
      "--disable-dev-shm-usage",
      "--remote-debugging-port=9222",
    ],
  },
});

const getCoverageConfig = (basePath) => ({
  dir: join(basePath, "./coverage"),
  subdir: ".",
  reporters: [{ type: "html" }, { type: "text-summary" }],
  check: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
});

const getPlugins = () => [
  "karma-jasmine",
  "karma-chrome-launcher",
  "karma-jasmine-html-reporter",
  "karma-coverage",
  "@angular-devkit/build-angular/plugins/karma",
];

const getClientConfig = () => ({
  clearContext: false,
  jasmine: {
    failSpecWithNoExpectations: true,
  },
});

export default (config) => {
  const basePath = getBasePath();

  const karmaConfig = {
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: getPlugins(),
    client: getClientConfig(),
    coverageReporter: getCoverageConfig(basePath),
    reporters: ["progress", "kjhtml"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["ChromiumHeadless"],
    customLaunchers: getBrowserConfig(),
    singleRun: false,
    restartOnFileChange: true,
    browserDisconnectTimeout: 10000,
    browserDisconnectTolerance: 3,
    browserNoActivityTimeout: 60000,
  };

  config.set(karmaConfig);
};
