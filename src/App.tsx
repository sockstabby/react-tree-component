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
];

function App() {
  return (
    <>
      <Tree treeItems={tree} />
    </>
  );
}

export default App;
