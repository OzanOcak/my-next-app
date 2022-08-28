import Link from "next/link";
import styled from "styled-components";
import { Normalize } from "styled-normalize";
import Navbar from "../components/Navbar";

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=DynaPuff:wght@400;700&display=swap");

  background: lightblue;
  font-family: "DynaPuff", cursive;
  color: #444;
`;

const Page = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`;

const MyApp = ({ Component, pageProps }) => {
  return (
    <Container>
      <Normalize />
      <Navbar />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Component {...pageProps} />
    </Container>
  );
};

export default MyApp;
