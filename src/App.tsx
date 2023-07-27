import { useState } from "React";

import "./App.css";

import Widget from "./Widget";

import Search from "./Search";

interface Item {
  image: string;
}

const myFunction2 = (padding: "left" | "center" | "right") => {
  console.log(padding);
};

const wrapperFunction = (fn: (items: [Item] | null) => void, items: Item[]) => {
  return fn(items);
};

const myFunction = (items: Item[] | null) => {
  if (items != null) {
    return items[0].image;
  } else {
    return null;
  }
};

function App() {
  const width = 100;
  const height = 100;

  const [ item, setItem ] = useState()

  const images: Item[] = [{ image: "adsfasdf" }];

  //let r = myFunction2("whatevers");

  let val = wrapperFunction(myFunction, images);

  //let ret = myFunction(images);

  return (
    <>
      <Widget width={width} height={height} />
      <Search />
    </>
  );
}

export default App;
