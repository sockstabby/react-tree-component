import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

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

    let children = screen.getByTestId("IllinoisSection");
    expect(children).toHaveAttribute("aria-hidden", "true");

    let button = screen.getByTestId("IllinoisButton");

    fireEvent.click(button);

    expect(children).toHaveAttribute("aria-hidden", "false");

    button = screen.getByTestId("ChicagoButton");

    fireEvent.click(button);

    children = screen.getByTestId("IllinoisSection");
    expect(children).toHaveAttribute("aria-hidden", "false");

    screen.debug();
  });
});
