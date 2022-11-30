import { asset, Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
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

  const renderDay = (image: string, dayNr: number) => {
    return (
      <div>
        <a href={`/day/${dayNr + 1}`}>
          <img src={image} width="150" />
        </a>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Annis AOC22</title>
        <link rel="stylesheet" href={asset("/global.css")} />
      </Head>
      <div class="container">
        <div class="calendar">
          {images.map((image, index) => renderDay(image, index))}
        </div>
      </div>
    </>
  );
}
