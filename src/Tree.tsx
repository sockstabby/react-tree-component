import { useState } from "react";
import { useCollapse } from "react-collapsed";
import { FC } from "react";

export interface TreeItem {
  label: string;
  children: TreeItem[];
}

interface ITreeProps {
  treeItems: TreeItem[];
}

interface ITreeRowProps {
  treeItem: TreeItem;
}

const TreeRow: React.FC<ITreeRowProps> = ({ treeItem }) => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  const childItems = treeItem.children.map((i) => {
    return <TreeRow key={i.label} treeItem={i}></TreeRow>;
  });

  return (
    <div>
      <button
        data-testid={treeItem.label + "Button"}
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {treeItem.label}
      </button>
      <section data-testid={treeItem.label + "Section"} {...getCollapseProps()}>
        {childItems}
      </section>
    </div>
  );
};

const Tree: FC<ITreeProps> = ({ treeItems }) => {
  const childItems = treeItems.map((i) => {
    return <TreeRow key={i.label} treeItem={i}></TreeRow>;
  });

  return <div>{childItems}</div>;
};

export default Tree;
