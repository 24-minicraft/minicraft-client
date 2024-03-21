import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
    roots: ["<rootDir>/src/"],
    clearMocks: true,
    preset: "ts-jest",
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(t|j)sx?$": "@swc/jest",
    },
    globals: {
        "ts-jest": {
            diagnostics: true,
        },
    },
    testTimeout: 30000,
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
}

export default config
