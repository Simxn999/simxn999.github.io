import "../../../style/portfolio.scss";
import { Project } from "./Project";

export function Portfolio({ repos }) {
  if (!repos) return (
    <h1 style={{ textAlign: 'center', padding: '3rem' }}>
      Loading Portfolio...
    </h1>
  );

  return (
    <main>
      <h1 className="main-title">Projects I have worked on</h1>
      <section className="projects">
        <ul>
          {
            repos.map(project =>
              <li key={project.id}>
                <Project {...{ project }} />
              </li>
            )
          }
        </ul>
      </section>
    </main>
  );
};