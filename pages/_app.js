import Link from "next/link";
import { Component } from "react";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Component {...pageProps} />
      <footer>app @2022</footer>
    </>
  );
};
export default MyApp;
