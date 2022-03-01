import "../../../style/eggs/css/password_egg.css";

export const PasswordEgg = (setIsOpen) => {
  const password = [...'1337'];
  const input = [];

  document.onkeyup = e => {
    if (e.key !== password[input.length]) {
      input.length = 0;

      return;
    }

    input.push(e.key);

    if (input.length !== password.length) return;

    setIsOpen(true);
  };
};

export const PasswordEggModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <button className="password-egg-background" onClick={onClose} />
      <section className="password-egg-modal">
        <h1>This is a funny message in a modal-popup.</h1>
        <button onClick={onClose} />
      </section>
    </>
  );
};
