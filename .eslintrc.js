module.exports = {
  ignorePatterns: [
    ".expo/**/*",
    ".github/**/*",
    ".vscode/**/*",
    "android/**/*",
    "assets/**/*",
    "env/**/*",
    "ios/**/*",
    "node_modules/",
    "patches/**/*",
    "src/reference/**/*",
  ],
  plugins: [
    "@typescript-eslint",
    "react",
    "react-native",
    "react-hooks",
    "import",
    "react-etc",
  ],
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:react-native/all",
    "plugin:@typescript-eslint/stylistic-type-checked",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: ".",
  },
  env: {
    es6: true,
    "react-native/react-native": true,
  },
  rules: {
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-arguments": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-enum-comparison": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: {
          arguments: false,
          attributes: false,
        },
      },
    ],
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/prefer-as-const": "off",
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-redeclare": ["error"],
    "react-native/sort-styles": 0,
    "react-native/no-raw-text": 0,
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 0,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 0,
    "react/no-unused-prop-types": "error",
    "react/prop-types": "off",
    "react/no-unstable-nested-components": "warn",
    "react/jsx-no-constructed-context-values": "error",
    "react/jsx-no-leaked-render": [
      "warn",
      { validStrategies: ["ternary", "coerce"] },
    ],
    "react/hook-use-state": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react-etc/prefer-usememo": "warn",
    "no-debugger": "error",
    "no-undef": "error",
    "no-dupe-keys": "error",
    "no-dupe-args": "error",
    "no-obj-calls": "warn",
    "require-await": "error",
    "no-await-in-loop": "error",
    "no-async-promise-executor": "error",
    "no-unsafe-finally": "error",
    "no-dupe-else-if": "error",
    "no-duplicate-case": "error",
    "no-nested-ternary": "warn",
    "no-redeclare": "off",
    "no-useless-catch": "error",
    "no-useless-escape": "warn",
    "no-extra-semi": "error",
    "no-duplicate-imports": "off",
    "no-restricted-syntax": [
      "error",
      {
        selector: "TSEnumDeclaration",
        message:
          "Don't use TS enums. Prefer const COLORS = { BLUE:'#00F', RED: '#F00' } ",
      },
    ],
    "sort-imports": 0,
    "import/extensions": [
      "error",
      "never",
      {
        svg: "always",
        json: "always",
        js: "ignorePackages",
        ts: "ignorePackages",
        jsx: "ignorePackages",
        tsx: "ignorePackages",
      },
    ],
    "import/no-useless-path-segments": [
      "error",
      {
        noUselessIndex: true,
      },
    ],
    "import/named": 2,
    "import/default": 2,
    "import/export": 2,
    "import/namespace": 2,
    "import/no-unresolved": 2,
    "import/no-self-import": 2,
    "import/no-absolute-path": 2,
    "import/no-named-as-default": 2,
    "import/no-anonymous-default-export": 2,
    "import/no-unused-modules": 2,
    "import/no-named-default": 2,
    "import/no-namespace": 2,
    "import/no-deprecated": 1,
    "import/no-duplicates": 2,
    "import/no-default-export": 2,
    "prefer-rest-params": 0,
    "no-restricted-imports": [
      "error",
      {
        name: "lodash",
        message:
          "Dont import entire lodash. Use a module instead, for example: import _uniqBy from 'lodash/uniqBy';",
      },
      "error",
      {
        name: "lodash-es",
        message:
          "Dont import entire lodash. Use a module instead, for example: import _uniqBy from 'lodash/uniqBy';",
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/core-modules": ["react-native", "react-native-reanimated"],
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".json", ".svg", ".mjs"],
      },
      typescript: {},
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
  globals: {
    TextEncoder: true,
    NOOP: true,
  },
  overrides: [
    {
      files: [
        "**/__tests__/**/*",
        "**/__test__/**/*",
        "jest/**/*",
        "**/__mocks__/**/*",
      ],
      env: {
        jest: true,
      },
      rules: {
        "react/no-unstable-nested-components": "off",
        "react/jsx-no-constructed-context-values": "off",
        "react/jsx-no-useless-fragment": "off",
        "no-console": "off",
        "import/no-anonymous-default-export": "off",
        "import/no-default-export": "off",
        "import/no-unassigned-import": "off",
      },
    },
  ],
};
