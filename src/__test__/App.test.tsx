import { render } from "@testing-library/react"
import App from "./../App"

describe("my function or component", () => {
    test("does the following", () => {})
})

describe("true is truthy and false falsy", () => {
    test("true is truthy", () => {
        expect(true).toBe(true)
    })

    test("false is falsy", () => {
        expect(false).toBe(false)
    })
})

describe("App", () => {
    test("renders App component", () => {
        render(<App />)
    })
})
