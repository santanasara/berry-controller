const path = require("path");

module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: ["prettier"],
  plugins: ["import-helpers", "prettier"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    // Prettier for autofix
    "prettier/prettier": "off",
    // Some logic need reassign (such sequelize hooks)
    "no-param-reassign": "off",
    // Allow for of
    "no-restricted-syntax": "off",
    // Import ordering and allow no default
    "import/prefer-default-export": "off",
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always",
        groups: ["/^react/", "module", "/^@\\//", ["parent", "sibling", "index"]],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
    "@typescript-eslint/dot-notation": "off",
  },
  overrides: [
    {
      files: ["./**/*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
      },
    },
    {
      files: ["./src/**/*.ts", "./src/**/*.tsx"],
      extends: ["airbnb-typescript", "airbnb/hooks", "plugin:@typescript-eslint/recommended", "prettier"],
      plugins: ["@typescript-eslint", "import-helpers", "prettier"],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          tsx: true,
        },
        project: path.resolve("tsconfig.json"),
      },
      rules: {
        // Prettier for autofix
        "prettier/prettier": "off",
        // Some logic need reassign (such sequelize hooks)
        "no-param-reassign": "off",
        // Allow for of
        "no-restricted-syntax": "off",
        // Use inference of type
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/object-curly-spacing": "off",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-unused-vars": "error",
        // Import ordering and allow no default
        "import/no-extraneous-dependencies": ["error", { optionalDependencies: true }],
        "import/prefer-default-export": "off",
        "import-helpers/order-imports": [
          "warn",
          {
            newlinesBetween: "always",
            groups: ["/^react/", "module", "/^@\\//", ["parent", "sibling", "index"]],
            alphabetize: { order: "asc", ignoreCase: true },
          },
        ],
        // Some rules that causes some issues
        "react/button-has-type": "off",
        "react/require-default-props": "off",
        "react/prop-types": "off",
        "react/jsx-props-no-spreading": "off",
        "react/react-in-jsx-scope": "off",
        "jsx-a11y/label-has-for": "off",
        "no-underscore-dangle": ["error", { allow: ["_id"] }],
      },
    },
  ],
};
