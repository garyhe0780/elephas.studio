import { HandlerContext } from "$fresh/server.ts";

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  const data: Record<string, unknown>[] = [
    {
      section1: [
        {
          image: "http://site.asia.trinity.s3-website.ap-northeast-2.amazonaws.com/images/advisor.svg",
          title: "Investment Advisor",
          desc: "We provide investment advisory services to help our clients achieve their financial goals. As an independent and legally registered investment advisory firm, we help to structure portfolios that are diversified across asset classes to reduce overall portfolio volatility risk. The portfolio is constantly reviewed and adjusted to better match the prevailing financial market environment.",
        },
        {
          image: "http://site.asia.trinity.s3-website.ap-northeast-2.amazonaws.com/images/lecturer.svg",
          title: "Top Finance Lecturer",
          desc: 'Our courses are designed with the logic of a "professional investor" to help clients understand the trends of investment.',
        },
        {
          image: "http://site.asia.trinity.s3-website.ap-northeast-2.amazonaws.com/images/expert.svg",
          title: "Qualifications of Fund Distributors",
          desc: "We are legally licensed to sell funds and being  a fund distributor. Please contact us for business cooperation if you are interested in selling your funds in Taiwan.",
        },
      ],
    },
  ];

  const body = JSON.stringify(data[0]["section1"]);

  return new Response(body);
};
