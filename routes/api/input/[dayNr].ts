import { HandlerContext } from "$fresh/server.ts";

export const handler = async (
  _req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  console.log(_ctx);
  try {
    const input = await Deno.readTextFile(
      `./routes/api/input/day${_ctx.params.dayNr}.txt`,
    );
    return new Response(input, {
      status: 200,
      headers: {
        "content-type": "text/plain",
      },
    });
  } catch (e) {
    return new Response("");
  }
};
