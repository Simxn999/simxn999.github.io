import ReactDOM from 'react-dom';
import { useState } from "react";
import { PasswordEgg, PasswordEggModal } from "./eggs/PasswordEgg";
import { WallpaperEgg } from "./eggs/WallpaperEgg";

export function Eggs() {
  const [isOpen, setIsOpen] = useState(false);

  PasswordEgg(setIsOpen);

  return ReactDOM.createPortal(
    <>
      <WallpaperEgg />
      <PasswordEggModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>,
    document.getElementById('xtra')
  );
}