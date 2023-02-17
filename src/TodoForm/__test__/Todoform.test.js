import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { TodoForm } from "../index";

describe("TodoForm", () => {
  const mockAddTodo = jest.fn();
  const mockSetOpenModal = jest.fn();

  beforeEach(() => {
    mockAddTodo.mockClear();
    mockSetOpenModal.mockClear();
  });

  it("renders the form with input and two buttons", () => {
    const { getByLabelText, getByText } = render(
      <TodoForm addTodo={mockAddTodo} setOpenModal={mockSetOpenModal} />
    );
    const input = getByLabelText("✍︎ Escribe tu nuevo TODO");
    const cancelButton = getByText("Cancelar");
    const addButton = getByText("Añadir");
    expect(input).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  it("calls addTodo and setOpenModal when form is submitted with a value", () => {
    const { getByLabelText, getByText } = render(
      <TodoForm addTodo={mockAddTodo} setOpenModal={mockSetOpenModal} />
    );
    const input = getByLabelText("✍︎ Escribe tu nuevo TODO");
    const addButton = getByText("Añadir");
    fireEvent.change(input, { target: { value: "New todo value" } });
    fireEvent.click(addButton);
    expect(mockAddTodo).toHaveBeenCalledTimes(1);
    expect(mockAddTodo).toHaveBeenCalledWith("New todo value");
    expect(mockSetOpenModal).toHaveBeenCalledTimes(1);
    expect(mockSetOpenModal).toHaveBeenCalledWith(false);
  });

  it("calls setOpenModal when cancel button is clicked", () => {
    const { getByText } = render(
      <TodoForm addTodo={mockAddTodo} setOpenModal={mockSetOpenModal} />
    );
    const cancelButton = getByText("Cancelar");
    fireEvent.click(cancelButton);
    expect(mockSetOpenModal).toHaveBeenCalledTimes(1);
    expect(mockSetOpenModal).toHaveBeenCalledWith(false);
  });
  it("does not call addTodo when form is submitted with an empty value", () => {
    const { getByLabelText, getByText } = render(
      <TodoForm addTodo={mockAddTodo} setOpenModal={mockSetOpenModal} />
    );
    const input = getByLabelText("✍︎ Escribe tu nuevo TODO");
    const addButton = getByText("Añadir");
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.click(addButton);
    expect(mockAddTodo).toHaveBeenCalledTimes(0);
    expect(mockSetOpenModal).toHaveBeenCalledTimes(0);
  });
  it("does not call addTodo when form is submitted with only spaces", () => {
    const { getByLabelText, getByText } = render(
      <TodoForm addTodo={mockAddTodo} setOpenModal={mockSetOpenModal} />
    );
    const input = getByLabelText("✍︎ Escribe tu nuevo TODO");
    const addButton = getByText("Añadir");
    fireEvent.change(input, { target: { value: "    " } });
    fireEvent.click(addButton);
    expect(mockAddTodo).toHaveBeenCalledTimes(0);
    expect(mockSetOpenModal).toHaveBeenCalledTimes(0);
  });
});
