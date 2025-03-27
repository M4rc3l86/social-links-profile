// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  // Add language options with parser and project for type-aware rules
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true, // Will use tsconfig.json in your project
        tsconfigRootDir: __dirname,
      },
    },
  },
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "slp",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "slp",
          style: "kebab-case",
        },
      ],
      "@angular-eslint/component-class-suffix": "warn",
      "@angular-eslint/component-max-inline-declarations": "off",
      "@angular-eslint/consistent-component-styles": "off",
      "@angular-eslint/contextual-decorator": "warn",
      "@angular-eslint/contextual-lifecycle": "error",
      "@angular-eslint/directive-class-suffix": "warn",
      "@angular-eslint/no-async-lifecycle-method": "error",
      "@angular-eslint/no-attribute-decorator": "error",
      "@angular-eslint/no-conflicting-lifecycle": "error",
      "@angular-eslint/no-duplicates-in-metadata-arrays": "error",
      "@angular-eslint/no-empty-lifecycle-method": "error",
      "@angular-eslint/no-forward-ref": "error",
      "@angular-eslint/no-input-prefix": "off",
      "@angular-eslint/no-input-rename": "off",
      "@angular-eslint/no-inputs-metadata-property": "error",
      "@angular-eslint/no-lifecycle-call": "error",
      "@angular-eslint/no-output-native": "error",
      "@angular-eslint/no-output-on-prefix": "warn",
      "@angular-eslint/no-output-rename": "error",
      "@angular-eslint/no-outputs-metadata-property": "error",
      "@angular-eslint/no-pipe-impure": "error",
      "@angular-eslint/no-queries-metadata-property": "error",
      "@angular-eslint/pipe-prefix": "off",
      "@angular-eslint/prefer-on-push-component-change-detection": "warn",
      "@angular-eslint/prefer-output-readonly": "warn",
      "@angular-eslint/prefer-signals": "warn",
      "@angular-eslint/prefer-standalone": "error",
      // "@angular-eslint/prefer-standalone-component": "error", // This rule doesn't exist in your version
      "@angular-eslint/relative-url-prefix": "error",
      // "@angular-eslint/require-localize-metadata": no i18n
      // "@angular-eslint/runtime-localize": no 18n
      "@angular-eslint/sort-lifecycle-methods": "warn",
      "@angular-eslint/use-component-selector": "error",
      "@angular-eslint/use-component-view-encapsulation": "error",
      "@angular-eslint/use-injectable-provided-in": "error",
      "@angular-eslint/use-lifecycle-interface": "error",
      "@angular-eslint/use-pipe-transform-interface": "error",
      "@typescript-eslint/prefer-readonly": "warn",
      "@typescript-eslint/no-floating-promises": "error",
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  },
);
