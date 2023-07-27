import "./App.css";

import Widget from "./Widget";
import Search from "./Search";

function App() {
  const width = 100;
  const height = 100;

  return (
    <>
      <Widget width={width} height={height} />
      <Search />
    </>
  );
}

export default App;
