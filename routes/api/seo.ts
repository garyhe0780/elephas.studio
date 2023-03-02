import { HandlerContext } from "$fresh/server.ts";

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  const data: Record<string, unknown> = {
    description:
      "he asset management division of JP Morgan Chase &amp; Co., offers a wide range of mutual funds spanning all asset classes, adhering to distinct investment styles, to build portfolios to suit various investor goals and objectives.",
    keywords: "asset managements funds",
  };

  const body = JSON.stringify(data);

  return new Response(body);
};
