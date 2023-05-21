// DEPENDENCIES
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useState } from "react";


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

  return (
    <div className="App w-full h-full relative">
      <Router>
       {!errorPage && <Nav />}
        <Routes>
          <Route path="/" element={<Home setErrorPage={setErrorPage} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Index />} />
          <Route path="/projects/:id" element={<Show />} />
          <Route path="/projects/new" element={<New />} />
          <Route path="/projects/:id/edit" element={<Edit />} />
          <Route path="*" element={<FourOFour errorPage={errorPage} setErrorPage={setErrorPage}/>} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;
