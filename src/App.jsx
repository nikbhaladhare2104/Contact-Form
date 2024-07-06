import { useEffect, useState } from "react";
import ClassicalForm from "./components/ClassicalForm";
import ToggleButton from "./components/ToggleButton";
import ModernForm from "./components/ModernForm";

function App() {
  const [isModern, setIsModern] = useState(false);

  const body = document.querySelector("body");

  body.classList.toggle("dark", isModern);

  return (
    <main className={isModern ? "dark" : ""}>
      <ToggleButton setModern={setIsModern} />
      {!isModern ? <ClassicalForm /> : <ModernForm />}
    </main>
  );
}

export default App;
