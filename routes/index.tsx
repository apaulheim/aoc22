import { asset, Head } from "$fresh/runtime.ts";
import {
  imagesJpg,
  languageColors,
  languages,
  solutions,
} from "../components/Data.ts";

export default function Home() {
  const renderSolutions = (dayNr: number) => {
    if (solutions[dayNr]) {
      return solutions[dayNr].map((solution) => (
        <div
          class={`solution ${languages[solution]}`}
        >
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 122.88 103.92"
          >
            <g>
              <path d="M74.69,26.73c1.71-4.74,1.23-9.3-1.95-13.62c4.02-2.87,26.48-13.59,39.98-13.1c3.66,0.13,6.72,0.81,8.72,4.06 c0.66,1.07,1.11,2.27,1.41,3.57v32.84C110.56,27.04,93.57,24.65,74.69,26.73L74.69,26.73z M61.97,10.45 c6.31,0,11.42,5.11,11.42,11.42s-5.11,11.42-11.42,11.42c-6.31,0-11.42-5.11-11.42-11.42S55.66,10.45,61.97,10.45L61.97,10.45z M22.85,103.92L54.9,38.85L1.32,81.12l18.82,0.32L22.85,103.92L22.85,103.92z M37.46,38.78c4.68-2.38,9.21-4.82,13.57-7.3 c-15.78-3.37-33.14-1.97-45.47,9.32c-2.15,1.97-4,4.1-5.56,6.39c1.09,1.99,3.49,2.89,7.18,2.71C16.92,49.43,28.77,43.2,37.46,38.78 L37.46,38.78z M48.19,26.73c-1.71-4.74-1.23-9.3,1.95-13.62c-4.02-2.87-26.48-13.59-39.98-13.1C6.51,0.15,3.44,0.83,1.44,4.08 C0.78,5.15,0.33,6.35,0.04,7.64v32.84C12.33,27.04,29.31,24.65,48.19,26.73L48.19,26.73z M100.03,103.92L67.98,38.85l53.59,42.26 l-18.82,0.32L100.03,103.92L100.03,103.92z M85.42,38.78c-4.68-2.38-9.21-4.82-13.57-7.3c15.78-3.37,33.14-1.97,45.47,9.32 c2.15,1.97,4,4.1,5.56,6.39c-1.09,1.99-3.49,2.89-7.18,2.71C105.96,49.43,94.11,43.2,85.42,38.78L85.42,38.78z" />
            </g>
          </svg>
          <img src={`/${languages[solution]}.png`} />
        </div>
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
          {imagesJpg.map((image, index) => renderDay(image, index))}
        </div>
      </div>
    </>
  );
}
