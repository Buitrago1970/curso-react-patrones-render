import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TodoCounter } from "../index";

describe("TodoCounter", () => {
  test("renders the correct message with the given props", () => {
    render(<TodoCounter totalTodos={3} completedTodos={1} />);

    const message = screen.getByRole("heading", {
      name: /has completado 1 de 3 todos/i,
    });
    expect(message).toBeInTheDocument();
  });
  test("adds a loading class when loading prop is true", () => {
    const { container } = render(
      <TodoCounter totalTodos={3} completedTodos={1} loading={true} />
    );
    expect(container.firstChild).toHaveClass("TodoCounter--loading");
  });
  test("does not add a loading class when loading prop is false", () => {
    const { container } = render(
      <TodoCounter totalTodos={3} completedTodos={1} loading={false} />
    );
    expect(container.firstChild).not.toHaveClass("TodoCounter--loading");
  });
});
