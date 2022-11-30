import { PageProps } from "$fresh/server.ts";
import { asset, Head } from "$fresh/runtime.ts";

export default function DayPage(props: PageProps) {
  const { dayNr } = props.params;
  const images = [
    "/Advent_calendar_01.jpg",
    "/Advent_calendar_02.jpg",
    "/Advent_calendar_03.jpg",
    "/Advent_calendar_04.jpg",
    "/Advent_calendar_05.jpg",
    "/Advent_calendar_06.jpg",
    "/Advent_calendar_07.jpg",
    "/Advent_calendar_08.jpg",
    "/Advent_calendar_09.jpg",
    "/Advent_calendar_10.jpg",
    "/Advent_calendar_11.jpg",
    "/Advent_calendar_12.jpg",
    "/Advent_calendar_13.jpg",
    "/Advent_calendar_14.jpg",
    "/Advent_calendar_15.jpg",
    "/Advent_calendar_16.jpg",
    "/Advent_calendar_17.jpg",
    "/Advent_calendar_18.jpg",
    "/Advent_calendar_19.jpg",
    "/Advent_calendar_20.jpg",
    "/Advent_calendar_21.jpg",
    "/Advent_calendar_22.jpg",
    "/Advent_calendar_23.jpg",
    "/Advent_calendar_24.jpg",
    "/Advent_calendar_25.jpg",
  ];
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
      </Head>
      <main
        class="container"
        style={`background-color: ${colors[parseInt(dayNr) - 1]}`}
      >
        <div>
          <h1>Day {dayNr}!</h1>
        </div>
        <div class="decoration">
          <img src={images[parseInt(dayNr) - 1]} width="250px" />
        </div>
      </main>
    </>
  );
}
