import { render, screen } from "@testing-library/react";
import App, { GET_DOGS } from "src/App";
import { MockedProvider } from "@apollo/client/testing";

describe("App", () => {
  beforeEach(() => jest.useFakeTimers());
  afterEach(() => jest.useRealTimers());

  it("renders", async () => {
    const dogMock = {
      request: { query: GET_DOGS },
      error: new Error("An error occurred"),
    };
    render(
      <MockedProvider mocks={[dogMock]}>
        <App />
      </MockedProvider>
    );
    expect(await screen.findByText("An error occurred")).toBeDefined();
  });
});
