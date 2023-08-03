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

describe("Tree component", () => {
  it("renders a tree and toggles children visibility", () => {
    render(<Tree treeItems={tree} />);

    let illinoisButton = screen.getByTestId("IllinoisButton");
    let chicagoButton = screen.getByTestId("ChicagoButton");
    let edgewoodButton = screen.getByTestId("EdgewoodButton");

    let children = screen.getByTestId("IllinoisSection");
    expect(children).toHaveAttribute("aria-hidden", "true");

    // test for children items
    let illinoisSubDivs = screen
      .getByTestId("IllinoisSection")
      .querySelector("div");

    expect(illinoisSubDivs).not.toBe(null);

    // test that this item has a expand collapse svg
    let illinoisIcon = screen
      .getByTestId("IllinoisButton")
      .querySelector("svg");
    expect(illinoisIcon).not.toBe(null);

    expect(illinoisButton).toHaveAttribute("aria-expanded", "false");

    // expand Illinois
    fireEvent.click(illinoisButton);
    expect(illinoisButton).toHaveAttribute("aria-expanded", "true");
    expect(children).toHaveAttribute("aria-hidden", "false");

    //collapse Illinois
    fireEvent.click(illinoisButton);
    expect(illinoisButton).toHaveAttribute("aria-expanded", "false");
    expect(children).toHaveAttribute("aria-hidden", "true");

    //expand Illinois
    fireEvent.click(illinoisButton);
    expect(illinoisButton).toHaveAttribute("aria-expanded", "true");
    expect(children).toHaveAttribute("aria-hidden", "false");

    // now toggle chicago children visibility
    // children should be collapsed initially
    let chicagoIcon = screen.getByTestId("ChicagoButton").querySelector("svg");
    expect(chicagoIcon).not.toBe(null);

    children = screen.getByTestId("ChicagoSection");
    expect(chicagoButton).toHaveAttribute("aria-expanded", "false");
    expect(children).toHaveAttribute("aria-hidden", "true");

    // expand chicago
    fireEvent.click(chicagoButton);
    expect(chicagoButton).toHaveAttribute("aria-expanded", "true");
    expect(children).toHaveAttribute("aria-hidden", "false");

    // verify chicago has child divs
    let chicagoSubDivs = screen
      .getByTestId("ChicagoSection")
      .querySelector("div");

    expect(chicagoSubDivs).not.toBe(null);

    // click on a leaf item. nothing should happen an they shoulnt have children
    expect(edgewoodButton).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(edgewoodButton);
    expect(edgewoodButton).toHaveAttribute("aria-expanded", "true");

    // verify leaf does not have child divs
    let edgewoodSubDivs = screen
      .getByTestId("EdgewoodSection")
      .querySelector("div");

    // these are leaves so they dont have children.
    expect(edgewoodSubDivs).toBe(null);

    // leaves should not have collapse expand icons

    let pilsenIcon = screen.getByTestId("PilsenButton").querySelector("svg");
    expect(pilsenIcon).toBe(null);
  });
});
