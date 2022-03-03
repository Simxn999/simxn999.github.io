import { useState } from 'react';
import { Modal } from "./Modal";

export function Project({ project }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <li id={project.id}>
      <button style={{ border: 0, backgroundColor: 'transparent' }} onClick={open}>
        <h2 className="title">{project.name}</h2>
        <div className="frame">
          <img src={project.owner.avatar_url} alt="Project" />
        </div>
      </button>
      {
        isOpen ? (
          <Modal {...{ project, close }} />
        ) : null
      }
    </li>
  );
}