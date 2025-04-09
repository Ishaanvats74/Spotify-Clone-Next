import SideBar from "@/components/SideBar";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Spotify Clone </title>
      </Head>

      <h1></h1>

      <main>
        {/* SideBar */}
        <SideBar />
        {/* Center */}
      </main>


      <div>
      {/* Player */}
      </div>
    </div>
  );
}
