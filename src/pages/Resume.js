import { useRef, useEffect } from "react";
import { getAge } from "../resources/getAge";

export async function getResume() {
  const resume = await fetch('resume.json').then(response => response.json());

  return resume;
}

export function Resume() {
  const main = useRef();

  async function printResume() { // "ska byggas med ren javascript"???
    main.current.innerHTML = 'Loading resume...';

    const resume = await getResume();
    let output = `<article class="resume">
                    <header>
                      <h1>${resume.name}</h1>
                      <h2>${resume.title}</h2>
                    </header>
                    <section class="about-me">
                      <h3>About Me</h3>`; resume.info.forEach(p => output += `
                      <p>${p.replace('$age', getAge(resume.birthday))}</p>`); output += `
                    </section>
                    <section class="education">
                      <h3>Education</h3>
                      <ul>`; resume.education.forEach(e => output += `
                        <li>
                          <h4>${e.school}</h4>
                          <h5>
                            <a href"${e.link}">
                              ${e.title}
                            </a>
                          </h5>
                          <p>${e.duration}</p>
                        </li>`); output += `
                      </ul>
                    </section>
                    <section class="languages">
                      <h3>Languages</h3>
                      <ul>`; resume.languages.forEach(l => output += `
                        <li>${l}</li>`); output += `
                      </ul>
                    </section>
                  </article>`;

    main.current.innerHTML = output;
  }

  useEffect(() => printResume());

  return <main ref={main}></main>;
}