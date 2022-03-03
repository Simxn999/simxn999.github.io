import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Page } from './components/Page';
import { Home } from './components/pages/Home';
import { Resume } from './components/pages/Resume';
import { Portfolio } from './components/pages/portfolio/Portfolio';
import { WCAG } from './components/pages/WCAG';
import { Contact } from './components/pages/Contact';
import { PageError } from "./components/pages/PageError";

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