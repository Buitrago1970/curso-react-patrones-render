import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { TodoSearch } from "../index";

describe("TodoSearch", () => {
  it("renders input with initial value and change search value", () => {
    const setSearchValue = jest.fn();
    const { getByPlaceholderText } = render(
      <TodoSearch
        searchValue="test value"
        setSearchValue={setSearchValue}
        loading={false}
      />
    );
    const input = getByPlaceholderText("Buscar...");
    expect(input).toHaveValue("test value");
    fireEvent.change(input, { target: { value: "new test value" } });
    expect(setSearchValue).toHaveBeenCalledWith("new test value");
  });

  it("disables input while loading", () => {
    const setSearchValue = jest.fn();
    const { getByPlaceholderText } = render(
      <TodoSearch
        searchValue=""
        setSearchValue={setSearchValue}
        loading={true}
      />
    );
    const input = getByPlaceholderText("Buscar...");
    expect(input).toBeDisabled();
  });
  it("enables input while not loading", () => {
    const setSearchValue = jest.fn();
    const { getByPlaceholderText } = render(
      <TodoSearch
        searchValue=""
        setSearchValue={setSearchValue}
        loading={false}
      />
    );
    const input = getByPlaceholderText("Buscar...");
    expect(input).not.toBeDisabled();
  });
});
