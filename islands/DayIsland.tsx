import { useState } from "preact/hooks";
import Present from "../components/Present.tsx";

interface DayIslandProps {
  dayNr: number;
}

enum Language {
  JS,
  PY,
  RS,
  GO,
}

export default function DayIsland({ dayNr }: DayIslandProps) {
  const languages = ["js", "py", "rs", "go"];
  const images = [
    "/Advent_calendar_01.png",
    "/Advent_calendar_02.png",
    "/Advent_calendar_03.png",
    "/Advent_calendar_04.png",
    "/Advent_calendar_05.png",
    "/Advent_calendar_06.png",
    "/Advent_calendar_07.png",
    "/Advent_calendar_08.png",
    "/Advent_calendar_09.png",
    "/Advent_calendar_10.png",
    "/Advent_calendar_11.png",
    "/Advent_calendar_12.png",
    "/Advent_calendar_13.png",
    "/Advent_calendar_14.png",
    "/Advent_calendar_15.png",
    "/Advent_calendar_16.png",
    "/Advent_calendar_17.png",
    "/Advent_calendar_18.png",
    "/Advent_calendar_19.png",
    "/Advent_calendar_20.png",
    "/Advent_calendar_21.png",
    "/Advent_calendar_22.png",
    "/Advent_calendar_23.png",
    "/Advent_calendar_24.png",
    "/Advent_calendar_25.png",
  ];

  const solutions = [
    [Language.JS, Language.PY, Language.RS, Language.GO],
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
              console.log("selectedLang", lang);
            }}
          />
        ))
      );
    }
    return null;
  };

  const renderGithubEmbed = () => {
    if (selectedLang >= 0) {
      return (
        <script
          src={`https://emgithub.com/embed-v2.js?target=https%3A%2F%2Fgithub.com%2Fapaulheim%2Faoc22code%2Fblob%2Fmain%2F${
            languages[selectedLang]
          }%2Fday${dayNr}.${
            languages[selectedLang]
          }&style=default&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on"></script>`}
        >
        </script>
      );
    }
    return null;
  };

  const renderReplit = () => {
    if (selectedLang >= 0) {
      return (
        <a
          href={`https://replit.com/@apaulheim/aoc22day${dayNr}${
            languages[selectedLang]
          }`}
          target="blank"
        >
          <div class="replit">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 5.5C7 4.67157 7.67157 4 8.5 4H15.5C16.3284 4 17 4.67157 17 5.5V12H8.5C7.67157 12 7 11.3284 7 10.5V5.5Z"
                fill="#F26207"
              >
              </path>
              <path
                d="M17 12H25.5C26.3284 12 27 12.6716 27 13.5V18.5C27 19.3284 26.3284 20 25.5 20H17V12Z"
                fill="#F26207"
              >
              </path>
              <path
                d="M7 21.5C7 20.6716 7.67157 20 8.5 20H17V26.5C17 27.3284 16.3284 28 15.5 28H8.5C7.67157 28 7 27.3284 7 26.5V21.5Z"
                fill="#F26207"
              >
              </path>
            </svg>Run on Replit
          </div>
        </a>
      );
    }
    return null;
  };

  return (
    <>
      <div class="container-code">
        <div class="presents">
          {renderPresents()}
        </div>
        {renderReplit()}
        {renderGithubEmbed()}
      </div>
      <div class="decoration">
        <img src={images[dayNr - 1]} width="250px" />
      </div>
    </>
  );
}
