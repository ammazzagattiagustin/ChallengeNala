import React from "react";
import { render } from "@testing-library/react";
import DownloadExcelButton from "./index";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

it("Renders correctly", () => {
  const { queryByTestId } = render(<DownloadExcelButton />);
  expect(queryByTestId("downloadExcelButton")).toBeTruthy();
});
