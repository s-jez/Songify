// import Head from "next/head";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      {/* <Head>
        <title key="title">Create Next App</title>
        <meta
          name="description"
          content="Generated by create next app"
          key="description"
        />
        <link rel="icon" href="/favicon.ico" key="icon" />
      </Head> */}
      <Component {...pageProps} />;
    </>
  );
};

export default MyApp;