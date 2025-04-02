/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "node",
  transform: {
    "^.+\\.(js|jsx|mjs|cjs)$": "babel-jest",
  },
  preset: "ts-jest",
  transformIgnorePatterns: [
    "/node_modules/(?!your-problematic-dependency)/", // Replace with the actual dependency name
  ],
};

export default config;
