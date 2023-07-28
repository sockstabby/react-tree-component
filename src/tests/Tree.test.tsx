import { describe, it, expect } from "vitest";
import {
  render,
  screen,
  fireEvent,
  getByTestId,
  waitFor,
} from "@testing-library/react";

import Tree, { TreeItem } from "../Tree";

const tree: TreeItem[] = [
  {
    label: "Illinois",
    children: [
      {
        label: "Chicago",
        children: [
          { label: "Pilsen", children: [] },
          { label: "Edgewood", children: [] },
        ],
      },
    ],
  },
];

describe("Tree", () => {
  it("renders a tree", () => {
    render(<Tree treeItems={tree} />);

    const children = screen.getByTestId("IllinoisSection");
    expect(children).toHaveAttribute("aria-hidden", "true");

    const button = screen.getByTestId("IllinoisButton");

    fireEvent.click(button);

    expect(children).toHaveAttribute("aria-hidden", "false");

    screen.debug();
  });
});

describe("something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});
