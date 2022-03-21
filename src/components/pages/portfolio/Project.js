import "../../../style/portfolio.scss";

import { useState } from 'react';
import { Modal } from "./Modal";

export function Project({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="project-clickable" onClick={() => setOpen(true)}>
        <h2 className="title">{project.name}</h2>
        <div className="frame">
          <img src={project.owner.avatar_url ? project.owner.avatar_url : "buddy1.jpg"} alt="Project" />
        </div>
      </button>
      {
        open ? (
          <Modal {...{ project, close: () => setOpen(false) }} />
        ) : null
      }
    </>
  );
}