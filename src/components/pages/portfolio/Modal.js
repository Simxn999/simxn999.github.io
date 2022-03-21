export function Modal({ project, close }) { // Orkar inte designa
  return (
    <>
      <section className="modal">
        <h1>{project.name}</h1>
        <ul>
          <li>{project.description}</li>
          <li>Created {project.created_at.substring(0, 10)} by {project.owner.login} on GitHub</li>
        </ul>
        <img style={{ aspectRatio: 1, maxWidth: '25%' }} src={project.owner.avatar_url} alt="Project" />
        <a className="project-link" href={project.html_url}>{project.name}</a>
      </section>
      <button className="close-background" onClick={close} />
      <button className="close" onClick={close} />
    </>
  );
}