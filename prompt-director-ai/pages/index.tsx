import Head from "next/head";
import PromptDirector from "@/components/PromptDirector";

export default function Home() {
  return (
    <>
      <Head>
        <title>PromptDirector AI</title>
        <meta name="description" content="Cinematic Prompt Generator for Video Creators" />
      </Head>
      <PromptDirector />
    </>
  );
}