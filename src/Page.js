import { React } from "react";
import { Header } from './Header';
import { Outlet as Content } from 'react-router-dom';
import { InitializeEggs } from "./resources/eggs";

export function Page() {
  InitializeEggs();

  return (
    <>
      <Header />

      <Content />
    </>
  );
}