import Sidebar from "../components/Sidebar";
import Center from "../components/Center";
import { getSession } from "next-auth/react";
import Player from "@/components/Player";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <title>Spotify Karaoke Webapp2.0</title>

      {/* <h1>Welcome to the Spotify Karaoke Webapp</h1> */}
      <main className="flex">
        <Sidebar></Sidebar>
        <Center></Center>
      </main>
      <div className="sticky bottom-0">
        <Player></Player>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
