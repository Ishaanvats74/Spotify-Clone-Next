import SideBar from "@/components/SideBar";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      {/* <Head>
        <title>Spotify Clone </title>
      </Head> */}

      <main className="">
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
