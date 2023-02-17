import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { TodoItem } from "../index.js";

const mockOnComplete = jest.fn();

describe("TodoItem component", () => {
  test("renders todo item text", () => {
    render(<TodoItem text={"Buy milk"} />);
    const todoText = screen.getByText(/Buy milk/i);
    expect(todoText).toBeInTheDocument();
  });
  test("marks the item as completed when clicking the CompleteIcon", () => {
    const handleComplete = jest.fn();
    const { getByTestId } = render(
      <TodoItem text="Buy milk" completed={false} onComplete={handleComplete} />
    );
    const completeIcon = getByTestId("complete-icon");
    fireEvent.click(completeIcon);
    expect(handleComplete).toHaveBeenCalledTimes(1);
  });
  test("calls the onDelete prop when clicking the DeleteIcon", () => {
    const handleDelete = jest.fn();
    const { getByTestId } = render(
      <TodoItem text="Buy milk" completed={false} onDelete={handleDelete} />
    );
    const deleteIcon = getByTestId("delete-icon");
    fireEvent.click(deleteIcon);
    expect(handleDelete).toHaveBeenCalledTimes(1);
  });
  test("adds the TodoItem-p--complete class when completed prop is true", () => {
    const { container } = render(<TodoItem text="Buy milk" completed={true} />);
    const todoItemP = container.querySelector(".TodoItem-p");
    expect(todoItemP).toHaveClass("TodoItem-p--complete");
  });
  test("does not add the TodoItem-p--complete class when completed prop is false", () => {
    const { container } = render(
      <TodoItem text="Buy milk" completed={false} />
    );
    const todoItemP = container.querySelector(".TodoItem-p");
    expect(todoItemP).not.toHaveClass("TodoItem-p--complete");
  });
  // test("adds the TodoItem-p--complete class when clicking the CompleteIcon", () => {
  //   const { container, getByTestId } = render(
  //     <TodoItem text="Buy milk" completed={false} onComplete={mockOnComplete} />
  //   );
  //   const completeIcon = getByTestId("complete-icon");
  //   const todoItemP = container.querySelector(".TodoItem-p");
  //   fireEvent.click(completeIcon);
  //   expect(todoItemP).toHaveClass("TodoItem-p--complete");
  // });
});
