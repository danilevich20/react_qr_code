import React from "react";
import { render, cleanup } from "react-testing-library";

import App from ".";

describe("<App /> tests", () => {
  afterEach(cleanup);

  it("should render", () => {
    const { getByAltText } = render(<App />);
    getByAltText(/QR Code/);
  });
});
