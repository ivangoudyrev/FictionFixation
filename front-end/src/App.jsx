import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import AppleFrame from "./components/AppleFrame";
import Note from "./components/Note";
import AboutUs from "./components/AboutUs";
import Subscribe from "./components/Subscribe";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <AppleFrame />
      <InputForm />
      <Note />
      <AboutUs />
      <Subscribe />
    </>
  );
}

export default App;
