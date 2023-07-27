interface DummyProps {
  width: number;
  height: number;
}

const Widget: React.FC<DummyProps> = ({ width, height }) => {
  let s = `${width} ${height}`;

  return <> {s}</>;
};

export default Widget;
