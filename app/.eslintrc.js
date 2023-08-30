module.exports = {
    root: true,
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "react-app",
      "react-app/jest",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: ["tsconfig.json"],
      tsconfigRootDir: __dirname,
      sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    rules: {
      "@typescript-eslint/strict-boolean-expressions": [
          2,
          {
            allowString: false,
            allowNumber: false,
          },
      ],
      indent: ["error", 2],
    },
    ignorePatterns: ["src/**/*.test.ts", "src/frontend/generated/*"],
};
