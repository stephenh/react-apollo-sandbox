import { render, screen } from "@testing-library/react";
import App, { GET_DOGS, GET_CATS } from "src/App";
import { MockedProvider } from "@apollo/client/testing";
// import { MockedProvider } from "@homebound/better-apollo-mocked-provider";

describe("App", () => {
  it("renders", async () => {
    const dogMock = {
      request: { query: GET_DOGS },
      error: new Error("An error occurred"),
    };
    const catMock = {
      request: { query: GET_CATS },
      result: { data: { cats: [] } },
    };
    render(
      <MockedProvider mocks={[dogMock, catMock]}>
        <App />
      </MockedProvider>
    );
    expect(await screen.findByText("An error occurred")).toBeDefined();
  });
});

beforeEach(() => jest.useFakeTimers());
afterEach(() => jest.useRealTimers());
