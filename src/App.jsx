import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Account from "./pages/Account";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Account />
    </>
  );
}

export default App;
