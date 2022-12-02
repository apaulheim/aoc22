import { languageColors } from "./Data.ts";

type PresentProps = { language: number; onClick: (lang: number) => void };

export default function Present(
  { language, onClick }: PresentProps,
) {
  const colors = languageColors;
  const images = ["js.png", "py.png", "rs.png", "go.png"];
  const hslvalues = colors[language];

  return (
    <div class="present" onClick={() => onClick(language)}>
      <div
        class="lid"
        style={`background: -webkit-radial-gradient(rgba(255,255,255,0.6) 15%, transparent 15.1%), -webkit-radial-gradient(rgba(255,255,255,0.6) 15%, transparent 15.1%), hsl(${
          hslvalues[0]
        }, ${hslvalues[1]}%, ${
          hslvalues[2]
        }%); background-position: 0 0, 12px 12px; background-size: 25px 25px;`}
      >
        <span
          style={`background: hsl(${hslvalues[0]}, ${hslvalues[1]}%, ${
            hslvalues[3]
          }%, 0.8);`}
        >
        </span>
      </div>
      <div
        class="box"
        style={`background: -webkit-radial-gradient(rgba(255,255,255,0.6) 15%, transparent 15.1%), -webkit-radial-gradient(rgba(255,255,255,0.6) 15%, transparent 15.1%), hsl(${
          hslvalues[0]
        }, ${hslvalues[1]}%, ${
          hslvalues[2]
        }%); background-position: 0 0, 12px 12px; background-size: 25px 25px;`}
      >
        <span
          style={`background: hsl(${hslvalues[0]}, ${hslvalues[1]}%, ${
            hslvalues[3]
          }%, 0.8);`}
        >
        </span>
        <img src={`/${images[language]}`} />
        <span
          style={`background: hsl(${hslvalues[0]}, ${hslvalues[1]}%, ${
            hslvalues[3]
          }%, 0.8);`}
        >
        </span>
      </div>
    </div>
  );
}
