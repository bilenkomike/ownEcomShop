import React from "react";
import "jest-dom/extend-expect";
import { render, cleanup, waitFor, screen } from "@testing-library/react";
// waitForElement
import axiosMock from "axios";
import Currencies from "./Currencies";

afterEach(cleanup);

it("fetches data and returns list of currencies", async () => {
  render(<Currencies />);
  const resolvedItem = await waitFor(() => screen.findByTestId("resolved"));
  expect(resolvedItem).toContain("li");
});
