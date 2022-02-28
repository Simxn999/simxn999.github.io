import { useEffect, useRef } from "react";
import { getAge } from "../resources/getAge";

export async function getResume() {
  const resume = await fetch('resume.json').then(response => response.json());

  return resume;
}

export function Resume() {
  const main = useRef();

  async function getResumeHTML() { // "ska byggas med ren javascript"???
    const resume = await getResume();

    main.current.innerHTML = 'Loading resume...';

    let output = `<article class="resume">
                  <header>
                    <h1>${resume.name}</h1>
                    <h2>${resume.title}</h2>
                  </header>
                <section class="about-me">
                  <h3>About Me</h3>`; resume.info.forEach(paragraph => output += `
                  <p>${paragraph.replace('$age', getAge(resume.birthday))}</p>`); output += `
                </section>
                <section class="education">
                  <h3>Education</h3>
                    <ul>`; resume.education.forEach(education => output += `
                      <li>
                        <h4>${education.school}</h4>
                        <h5>
                          <a href"${education.link}">
                            ${education.title}
                          </a>
                        </h5>
                        <p>${education.duration}</p>
                      </li>`); output += `
                    </ul>
                  </section>
                  <section class="languages">
                    <h3>Languages</h3>
                    <ul>`; resume.languages.forEach(language => output += `
                      <li>${language}</li>`); output += `
                    </ul>
                  </section>
                </article>`;

    main.current.innerHTML = output;
  }

  useEffect(() => getResumeHTML());


  return <main ref={main}></main>;
}