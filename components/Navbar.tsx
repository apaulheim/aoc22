import { solutions } from "../components/Data.ts";
import { MiniPresent, MiniPresentType } from "./MiniPresent.tsx";

export function Navbar() {
  return (
    <div class="navbar">
      {solutions.map((val, i) => (
        <a href={`/day/${i + 1}`}>
          <MiniPresent type={MiniPresentType.Navbar} id={i} />
        </a>
      ))}
    </div>
  );
}
