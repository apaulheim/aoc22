import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

async function handleRequest(request: Request): Promise<Response> {
  const { pathname } = new URL(request.url);

  // This is how the server works:
  // 1. A request comes in for a specific asset.
  // 2. We read the asset from the file system.
  // 3. We send the asset back to the client.

  if (pathname.startsWith("/favicon")) {
    const file = await Deno.readFile("./static/favicon.ico");
    return new Response(file, {
      headers: {
        "content-type": "image/x-icon",
      },
    });
  }
  if (pathname.startsWith("/main")) {
    const file = await Deno.readFile("./static/main.js");
    return new Response(file, {
      headers: {
        "content-type": "text/javascript",
      },
    });
  }
  if (pathname.startsWith("/polyfills")) {
    const file = await Deno.readFile("./static/polyfills.js");
    return new Response(file, {
      headers: {
        "content-type": "text/javascript",
      },
    });
  }
  if (pathname.startsWith("/runtime")) {
    const file = await Deno.readFile("./static/runtime.js");
    return new Response(file, {
      headers: {
        "content-type": "text/javascript",
      },
    });
  }
  if (pathname.startsWith("/styles.css")) {
    const file = await Deno.readFile("./static/styles.css");
    return new Response(file, {
      headers: {
        "content-type": "text/css",
      },
    });
  }
  if (pathname.startsWith("/assets/advent")) {
    const [_, end] = pathname.split("advent");
    const file = await Deno.readFile(`./static/assets/advent${end}`);
    return new Response(file, {
      headers: {
        "content-type": "image/gif",
      },
    });
  }

  const file = await Deno.readFile("./static/index.html");
  return new Response(file, {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
}

serve(handleRequest);
