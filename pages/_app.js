import styled from "styled-components";
import { Normalize } from "styled-normalize";
import Cart from "../components/Cart";
import Navbar from "../components/Navbar";
import CartProvider from "../context/Cart";

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
    <CartProvider>
      <Container>
        <Normalize />
        <Navbar />
        <Page>
          <Component {...pageProps} />
        </Page>
        <Cart />
      </Container>
    </CartProvider>
  );
};

export default MyApp;
