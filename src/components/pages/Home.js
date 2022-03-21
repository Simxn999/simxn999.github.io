import "../../style/home.scss";

export function Home({ age }) {
  return (
    <main>
      <h1 className="main-title">Welcome!</h1>
      <p className="introduction">
        My name is Simon Johansson and I am a {age} year old software developer student situated in northern Sweden,
        Örnsköldsvik.
      </p>
    </main>
  );
};