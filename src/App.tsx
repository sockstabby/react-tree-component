import "./App.css";

import Tree, { TreeItem } from "./Tree";

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

  {
    label: "California",
    children: [
      {
        label: "San Francisco",
        children: [
          { label: "Pilsen", children: [] },
          { label: "Edgewood", children: [] },
        ],
      },
    ],
  },
  {
    label: "New York",
    children: [
      {
        label: "Albany",
        children: [
          { label: "Bronx", children: [] },
          { label: "Brooklyn", children: [] },
        ],
      },
    ],
  },
];

function App() {
  return (
    <>
      <Tree treeItems={tree} />
    </>
  );
}

export default App;
