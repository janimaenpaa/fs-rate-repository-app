import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { SignInContainer } from "../../components/SignIn";

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const mockFn = jest.fn();
      const { getByTestId } = render(<SignInContainer onSubmit={mockFn} />);

      fireEvent.changeText(getByTestId("username"), "John");
      fireEvent.changeText(getByTestId("password"), "Doe");
      fireEvent.press(getByTestId("submitButton"));

      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(mockFn.mock.calls[0][0]).toEqual({
          username: "John",
          password: "Doe",
        });
      });
    });
  });
});
