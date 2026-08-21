import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Calculator from "../Calculator";

describe("Calculator", () => {
  it("performs addition and chained operations", async () => {
    const user = userEvent.setup();
    render(<Calculator />);

    await user.click(screen.getByRole("button", { name: "1" }));
    await user.click(screen.getByRole("button", { name: "2" }));
    await user.click(screen.getByRole("button", { name: "+" }));
    await user.click(screen.getByRole("button", { name: "7" }));
    await user.click(screen.getByRole("button", { name: "=" }));

    expect(screen.getByTestId("calculator-display")).toHaveTextContent("19");

    await user.click(screen.getByRole("button", { name: "×" }));
    await user.click(screen.getByRole("button", { name: "2" }));
    await user.click(screen.getByRole("button", { name: "=" }));

    expect(screen.getByTestId("calculator-display")).toHaveTextContent("38");
  });

  it("handles decimals, delete, and clear actions", async () => {
    const user = userEvent.setup();
    render(<Calculator />);

    await user.click(screen.getByRole("button", { name: "9" }));
    await user.click(screen.getByRole("button", { name: "8" }));
    await user.click(screen.getByRole("button", { name: "⌫" }));
    expect(screen.getByTestId("calculator-display")).toHaveTextContent("9");

    await user.click(screen.getByRole("button", { name: "." }));
    await user.click(screen.getByRole("button", { name: "5" }));
    await user.click(screen.getByRole("button", { name: "-" }));
    await user.click(screen.getByRole("button", { name: "4" }));
    await user.click(screen.getByRole("button", { name: "=" }));

    expect(screen.getByTestId("calculator-display")).toHaveTextContent("5.5");

    await user.click(screen.getByRole("button", { name: "C" }));
    expect(screen.getByTestId("calculator-display")).toHaveTextContent("0");
  });
});

