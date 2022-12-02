import { asset, Head } from "$fresh/runtime.ts";
import {
  imagesPng,
  languageColors,
  languages,
  solutions,
} from "../components/Data.ts";
import MiniPresent from "../components/MiniPresent.tsx";

export default function Home() {
  const renderSolutions = (dayNr: number) => {
    if (solutions[dayNr]) {
      return solutions[dayNr].map((solution) => (
        <MiniPresent solution={solution} />
      ));
    }
  };

  const renderDay = (image: string, dayNr: number) => {
    return (
      <a href={`/day/${dayNr + 1}`}>
        <div
          class="day"
          style={`background: url(${image});background-size: contain;`}
        >
          <div class="solutions">
            {renderSolutions(dayNr)}
          </div>
        </div>
      </a>
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
          {imagesPng.map((image, index) => renderDay(image, index))}
        </div>
      </div>
    </>
  );
}
