import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import AppleFrame from "./components/AppleFrame";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <AppleFrame />
      <div className="container text-center" style={{ maxWidth: "658px" }}>
        <p className="p-0 fs-1 mb-2 playfair-display">Contact us!</p>
        <p className="text-center p-0 fs-3 mb-0 playfair-display">
          We love to hear from our listeners
        </p>
        <p className="mt-0 playfair-display">
          (as long as they don't make it weird).
        </p>
      </div>
      <InputForm />
    </>
  );
}

export default App;
