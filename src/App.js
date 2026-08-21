import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
return (
<BrowserRouter>
<Navbar />
<main>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/career" element={<Career />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</main>
<Footer />
</BrowserRouter>
);
}
export default App;