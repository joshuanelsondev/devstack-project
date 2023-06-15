// DEPENDENCIES
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useState, useEffect } from "react";


// PAGES
import Edit from "./Pages/Edit";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import FourOFour from "./Pages/FourOFour";

// COMPONENTS
import Nav from "./Components/Nav";

function App() {
  const [errorPage, setErrorPage] = useState(false);

  useEffect(() => {
    const currentMode = localStorage.getItem("mode");
    if (currentMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleMode = () => {
    document.documentElement.classList.toggle("dark");
    const currentMode = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    localStorage.setItem("mode", currentMode);
  };

  return (
    <div className="App w-full h-full relative bg-gray text-dark dark:text-blue dark:bg-gradient-to-b from-dark from-0% via-primary via-50% to-dark">
      <Router>
        {!errorPage && <Nav toggleMode={toggleMode} />}
        <Routes>
          <Route path="/" element={<Home setErrorPage={setErrorPage} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/projects"
            element={<Index setErrorPage={setErrorPage} />}
          />
          <Route path="/projects/:id" element={<Show />} />
          <Route path="/projects/new" element={<New />} />
          <Route path="/projects/:id/edit" element={<Edit />} />
          <Route
            path="*"
            element={
              <FourOFour errorPage={errorPage} setErrorPage={setErrorPage} />
            }
          />
        </Routes>
      </Router>
    </div>
  );

}

export default App;
