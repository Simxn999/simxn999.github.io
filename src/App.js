import { React } from "react";
import { InitializeEggs } from "./resources/eggs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from './Header';
import { Home } from './nav/Home';
import { Resume } from './nav/Resume';
import { Portfolio } from './nav/Portfolio';
import { WCAG } from './nav/WCAG';
import { Contact } from './nav/Contact';
import { PageError } from "./nav/PageError";

InitializeEggs();

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
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