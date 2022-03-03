import "../../style/home.scss";

import { useEffect, useState } from "react";
import { getAge } from "../extra/getAge";


export const Home = () => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    fetch('resume.json')
      .then(r => r.json())
      .then(r => setAge(getAge(r.birthday)));
  });

  if (age === 0) return null;

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