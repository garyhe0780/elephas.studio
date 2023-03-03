import { HandlerContext } from "$fresh/server.ts";
import { createMessage } from "../../models/message.ts";
const corsInfo = {
  headers: {
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
  },
};

export const handler = {
  async POST(_req: Request, _ctx: HandlerContext) {
    const payload: Record<string, unknown> = await _req.json();

    if (!payload["name"] || !payload["email"] || !payload["message"]) {
      return new Response("error", corsInfo);
    }

    const bool = await createMessage({
      name: payload["name"] as string,
      email: payload["email"] as string,
      message: payload["message"] as string,
    });

    return new Response(bool ? "OK" : "error", corsInfo);
  },
};
