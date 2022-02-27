import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from './pages/Nav';
import { Home } from './pages/Home';
import { Resume } from './pages/Resume';
import { Portfolio } from './pages/Portfolio';
import { WCAG } from './pages/WCAG';
import { Contact } from './pages/Contact';
import { PageError } from "./pages/PageError";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="resume" element={<Resume />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="wcag" element={<WCAG />} />
          <Route path="contact-me" element={<Contact />} />
          <Route path="*" element={<PageError />} />
        </Route>
      </Routes>
    </Router>
  );
}