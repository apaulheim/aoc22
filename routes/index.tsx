import { asset, Head } from "$fresh/runtime.ts";
import { imagesJpg } from "../components/Data.ts";

export default function Home() {
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
          {imagesJpg.map((image, index) => renderDay(image, index))}
        </div>
      </div>
    </>
  );
}
