import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/myFourthReactProject/fourthReactProject/src/pages/About.jsx"}>About</Link>
        <Link to={"/myFourthReactProject/fourthReactProject/src/pages/Contact.jsx"}>Contact</Link>
        {/* based on the anchor tag is this Link tag */}
      </nav>

      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/myFourthReactProject/fourthReactProject/src/pages/About.jsx" element={<About/>} />
        <Route path="/myFourthReactProject/fourthReactProject/src/pages/Contact.jsx" element={<Contact />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

// figure out the useNavigate hook, dynamic routing and how to use it

export default App;
