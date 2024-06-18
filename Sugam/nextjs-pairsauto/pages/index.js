import { Head } from "next/head";
import Main from "../components/Main";

function Home() {
  return (
    <>
      <Head>
        <title>PairsAuto</title>
        <meta
          name="description"
          content="A One Stop Solution to your Auto Inspection, Repairs &
      Detailing"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </>
  );
}
export default Home;
