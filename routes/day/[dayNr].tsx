import { PageProps } from "$fresh/server.ts";
import { asset, Head } from "$fresh/runtime.ts";
import DayIsland from "../../islands/DayIsland.tsx";

export default function DayPage(props: PageProps) {
  const { dayNr } = props.params;
  const colors = [
    "#aed1d3", // blau
    "#fbd3c9", // rosa
    "#ffffff",
    "#e6e6e6",
    "#ffffff",
    "#f8efe8",
    "#ffffff",
    "#e6e6e6",
    "#ffffff",
    "#fbd3c9", // rosa
    "#ffffff",
    "#f8efe8",
    "#fbd3c9", // rosa
    "#aed1d3", // blau
    "#ffffff",
    "#fbd3c9", // rosa
    "#ffffff",
    "#f8efe8",
    "#ffffff",
    "#aed1d3", // blau
    "#aed1d3", // blau
    "#f8efe8",
    "#ffffff",
    "#e6e6e6",
    "#f8efe8",
  ];

  return (
    <>
      <Head>
        <title>Annis AOC22</title>
        <link rel="stylesheet" href={asset("/global.css")} />
        <link rel="stylesheet" href={asset("/present.css")} />
      </Head>
      <main
        class="container-day"
        style={`background-color: ${colors[parseInt(dayNr) - 1]}`}
      >
        <DayIsland dayNr={parseInt(dayNr)} />
      </main>
    </>
  );
}
