import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { CreateTodoButton } from "../index";

describe("CreateTodoButton", () => {
  test("should call setOpenModal when clicking the button", () => {
    const setOpenModal = jest.fn();
    const { getByText } = render(
      <CreateTodoButton setOpenModal={setOpenModal} />
    );
    const button = getByText("+");
    fireEvent.click(button);
    expect(setOpenModal).toHaveBeenCalled();
  });
});
