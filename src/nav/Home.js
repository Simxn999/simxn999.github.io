import { useEffect, useRef } from "react";
import { getAge } from "../resources/getAge";
import { getResume } from "./Resume";


export function Home() {
  const age = useRef();

  async function printAge() {
    const resume = await getResume();

    age.current.innerHTML = getAge(resume.birthday);
  }

  useEffect(() => printAge());

  return (
    <main>
      <h1 className="main-title">Welcome!</h1>
      <p className="introduction">
        My name is Simon Johansson and I am a <span ref={age}></span> year old software developer student situated in northern Sweden,
        Örnsköldsvik.
      </p>
    </main>
  );
}