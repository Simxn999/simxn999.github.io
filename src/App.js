import { useEffect, useState } from "react";
import { fetchGitRepos } from "./data/fetchGitRepos";
import { fetchResume } from "./data/fetchResume";
import { getAge } from "./components/extra/getAge";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Page } from './components/Page';
import { Home } from './components/pages/Home';
import { Resume } from './components/pages/Resume';
import { Portfolio } from './components/pages/portfolio/Portfolio';
import { WCAG } from './components/pages/WCAG';
import { Contact } from './components/pages/Contact';
import { PageError } from "./components/pages/PageError";

export default function App() {
  const [repos, setRepos] = useState(false);
  const [resume, setResume] = useState(false);

  useEffect(() => {
    fetchGitRepos().then(data => setRepos(data));

    fetchResume().then(data => setResume(data));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<Home {...{ age: resume ? getAge(resume.birthday) : 999 }} />} />
          <Route path="resume" element={<Resume {...{ resume }} />} />
          <Route path="portfolio" element={<Portfolio {...{ repos }} />} />
          <Route path="wcag" element={<WCAG />} />
          <Route path="contact-me" element={<Contact />} />
          <Route path="*" element={<PageError />} />
        </Route>
      </Routes>
    </Router>
  );
}