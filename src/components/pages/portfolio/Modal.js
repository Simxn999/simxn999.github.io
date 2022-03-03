export function Modal({ project, close }) {
  const MODAL_BACKGROUND_STYLE = {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    backdropFilter: 'blur(4px)',
    border: 0,
    zIndex: 990
  };
  const MODAL_STYLE = {
    position: 'fixed',
    zIndex: 999
  };

  return (
    <>
      <button onClick={() => close()} style={MODAL_BACKGROUND_STYLE} />
      <section style={MODAL_STYLE}>
        <h1>{project.name}</h1>
        <p>{project.description}, {project.created_at}, {project.owner.login}, {project.owner.html_url}, {project.owner.avatar_url}, {project.html_url}</p>
        <a href={project.html_url}>{project.name}</a>
        <button onClick={() => close()}>xxxxxxxxx</button>
      </section>
    </>
  );
}