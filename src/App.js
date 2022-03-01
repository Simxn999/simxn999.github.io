import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Page } from './Page';
import { Home } from './nav/Home';
import { Resume } from './nav/Resume';
import { Portfolio } from './nav/Portfolio';
import { WCAG } from './nav/WCAG';
import { Contact } from './nav/Contact';
import { PageError } from "./nav/PageError";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />}>
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