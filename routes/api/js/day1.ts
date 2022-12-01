import { HandlerContext } from "$fresh/server.ts";

export const handler = async (
  _req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  const resp = await fetch(
    new URL(`${_req.url.slice(0, _req.url.indexOf("api"))}api/input/1`),
  );
  const input = await resp.text();
  const elves = input
    .split("\r\n\r\n")
    .map((elf: string) =>
      elf
        .split("\r\n")
        .map((item: string) => parseInt(item))
        .reduce((acc, val) => acc + val, 0)
    ).sort((a, b) => b - a);
  const silver = elves[0];
  const gold = elves[0] + elves[1] + elves[2];
  const body = { silver, gold };
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
};
