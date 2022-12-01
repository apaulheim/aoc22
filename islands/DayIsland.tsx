import { useState } from "preact/hooks";
import Present from "../components/Present.tsx";

interface DayIslandProps {
  dayNr: number;
}

enum Language {
  JS,
}

export default function DayIsland({ dayNr }: DayIslandProps) {
  const languages = ["js"];
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

  const solutions = [
    [Language.JS],
  ];

  const [selectedLang, setSelectedLang] = useState(-1);

  const renderPresents = () => {
    if (dayNr - 1 < solutions.length) {
      return (
        solutions[dayNr - 1].map((lang: Language) => (
          <Present
            language={lang}
            onClick={(lang: Language) => {
              setSelectedLang(lang);
              console.log("selectedLAng", lang);
            }}
          />
        ))
      );
    }
    return null;
  };

  const renderReplit = () => {
    if (selectedLang >= 0) {
      return (
        <iframe
          width="800px"
          height="500px"
          src={`https://replit.com/@apaulheim/aoc22day${dayNr}${
            languages[selectedLang]
          }?embed=true`}
        >
        </iframe>
      );
    }
    return null;
  };

  return (
    <>
      <div class="container-code">
        {renderPresents()}
        {renderReplit()}
      </div>
      <div class="decoration">
        <img src={images[dayNr - 1]} width="250px" />
      </div>
    </>
  );
}
