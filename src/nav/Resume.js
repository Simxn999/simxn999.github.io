import { useEffect, useState } from "react";
import { v4 as key } from "uuid";
import { getAge } from "../resources/getAge";

export function Resume() {
  const [resume, setResume] = useState(0);

  useEffect(() => {
    fetch('resume.json')
      .then(r => r.json())
      .then(r => setResume(r));
  }, []);

  return (
    <article className="resume">
      <header>
        <h1>{resume.name}</h1>
        <h2>{resume.title}</h2>
      </header>
      <section className="about-me">
        <h3>About Me</h3>
        {
          resume !== 0 ?
            resume.info.map(paragraph =>
              <p key={key()}>
                {paragraph.replace('$age', getAge(resume.birthday))}
              </p>
            ) : null
        }
      </section>
      <section className="education">
        <h3>Education</h3>
        <ul>
          {
            resume !== 0 ?
              resume.education.map(education =>
                <li key={key()}>
                  <h4>{education.school}</h4>
                  <h5>
                    <a href={education.link}>
                      {education.title}
                    </a>
                  </h5>
                  <p>{education.duration}</p>
                </li>
              ) : null
          }
        </ul>
      </section>
      <section className="languages">
        <h3>Languages</h3>
        <ul>
          {
            resume !== 0 ?
              resume.languages.map(language =>
                <li key={key()}>{language}</li>
              )
              : null
          }
        </ul>
      </section>
    </article>
  );
}
