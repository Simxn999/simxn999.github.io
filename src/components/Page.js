import { Header } from './Header';
import { Outlet as Content } from 'react-router-dom';
import { Eggs } from "./extra/Eggs";
import "../style/index.scss";

export function Page() {
  return (
    <>
      <Header />

      <Content />
      <Eggs />
    </>
  );
};