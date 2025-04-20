import Loading from "@/components/Loading";
import SideBar from "@/components/SideBar";
import Head from "next/head";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify Clone </title>
      </Head>

      <main className="">
        {/* SideBar */}
        <Suspense fallback={<Loading />}>
        <SideBar />
        </Suspense>
        {/* Center */}
      </main>


      <div>
      {/* Player */}
      </div>
    </div>
  );
}
