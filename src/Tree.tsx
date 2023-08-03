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
  level: number;
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
      <path d="M10.707 17.707L16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
      <path d="M16.293 9.293L12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
    </svg>
  );
}

function getTreeItemStyle() {
  return {
    display: "flex",
    width: "auto",
    justifyContent: "start",
    alignItems: "center",
  };
}

function getTreeSectionStyle(level: number) {
  return {
    left: level * 15,
    position: "relative",
  };
}

const TreeRow: React.FC<ITreeRowProps> = ({ treeItem, level }) => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  const childItems = treeItem.children.map((i) => {
    return <TreeRow key={i.label} treeItem={i} level={level + 1}></TreeRow>;
  });

  let collapseProps = getCollapseProps();

  collapseProps.style = {
    ...collapseProps.style,
    ...getTreeSectionStyle(level),
  };

  const Icon = isExpanded ? <ChevronDown /> : <ChevronRight />;

  return (
    <>
      <div
        style={getTreeItemStyle()}
        className="tree-item"
        data-testid={treeItem.label + "Button"}
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        <div className="tree-item__icon ">{childItems.length > 0 && Icon}</div>
        {treeItem.label}
      </div>
      <section data-testid={treeItem.label + "Section"} {...collapseProps}>
        {childItems}
      </section>
    </>
  );
};

const Tree: FC<ITreeProps> = ({ treeItems }) => {
  const childItems = treeItems.map((i) => {
    return <TreeRow key={i.label} treeItem={i} level={1}></TreeRow>;
  });

  return <div className="tree-container">{childItems}</div>;
};

export default Tree;
