import { useEffect, useState } from "react";
import "../../../style/portfolio.scss";
import { Project } from "./Project";

export const Portfolio = () => {
  const [repos, setRepos] = useState(false);
  const [info, setInfo] = useState('Loading portfolio...');

  useEffect(() => {
    fetch('https://api.github.com/users/Simxn999/repos')
      .then(response => response.json())
      .then(response => setRepos(response))
      .catch(error => {
        setInfo('Error loading portfolio!');
        console.log(error);
      });
  }, []);

  if (!repos)
    return (
      <h1 style={{ textAlign: 'center', padding: '3rem' }}>
        {info}
      </h1>
    );

  return (
    <main>
      <h1 className="main-title">Projects I have worked on</h1>
      <section className="projects">
        <ul>
          {
            repos.map(project =>
              <Project key={project.id} project={project} />
            )
          }
        </ul>
      </section>
    </main>
  );
};