import { Language, languages } from "./Data.ts";

export enum MiniPresentType {
  Language,
  Navbar,
}

type MiniPresentProps = {
  type: MiniPresentType;
  id: number;
};

export function MiniPresent(
  { type, id }: MiniPresentProps,
) {
  const renderContent = () => {
    if (type == MiniPresentType.Language) {
      return <img src={`/${languages[id]}.png`} />;
    } else return <div class="navbarday">{id + 1}</div>;
  };

  return (
    <div
      class={`minipresent ${
        type == MiniPresentType.Language ? languages[id] : "navbar"
      }`}
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
          <path d="M74.69,26.73c1.71-4.74,1.23-9.3-1.95-13.62c4.02-2.87,26.48-13.59,39.98-13.1c3.66,0.13,6.72,0.81,8.72,4.06 c0.66,1.07,1.11,2.27,1.41,3.57v32.84C110.56,27.04,93.57,24.65,74.69,26.73L74.69,26.73z M61.97,10.45 c6.31,0,11.42,5.11,11.42,11.42s-5.11,11.42-11.42,11.42c-6.31,0-11.42-5.11-11.42-11.42S55.66,10.45,61.97,10.45L61.97,10.45z M37.46,38.78c4.68-2.38,9.21-4.82,13.57-7.3 c-15.78-3.37-33.14-1.97-45.47,9.32c-2.15,1.97-4,4.1-5.56,6.39c1.09,1.99,3.49,2.89,7.18,2.71C16.92,49.43,28.77,43.2,37.46,38.78 L37.46,38.78z M48.19,26.73c-1.71-4.74-1.23-9.3,1.95-13.62c-4.02-2.87-26.48-13.59-39.98-13.1C6.51,0.15,3.44,0.83,1.44,4.08 C0.78,5.15,0.33,6.35,0.04,7.64v32.84C12.33,27.04,29.31,24.65,48.19,26.73L48.19,26.73z M85.42,38.78c-4.68-2.38-9.21-4.82-13.57-7.3c15.78-3.37,33.14-1.97,45.47,9.32 c2.15,1.97,4,4.1,5.56,6.39c-1.09,1.99-3.49,2.89-7.18,2.71C105.96,49.43,94.11,43.2,85.42,38.78L85.42,38.78z" />
        </g>
      </svg>
      {renderContent()}
    </div>
  );
}
