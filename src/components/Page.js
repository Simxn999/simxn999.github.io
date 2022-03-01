import { Header } from './Header';
import { Outlet as Content } from 'react-router-dom';
import { Eggs } from "./extra/Eggs";
import "../style/css/index.css";

export const Page = () => {
  return (
    <>
      <Header />

      <Content />
      <Eggs />
    </>
  );
};