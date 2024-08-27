import React from "react";
import Button from "./components/Button/Button";

export default function App() {
  const handleClick = () => {
    console.log("console.log is the best :D");
  };
  return (
    <div>
      <Button label={"Try Me"} onClick={handleClick} />
    </div>
  );
}
