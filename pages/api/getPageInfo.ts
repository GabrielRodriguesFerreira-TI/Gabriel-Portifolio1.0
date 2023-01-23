import { PageInfo } from "@/typings";
import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "..";

const query = groq`
*[_type == "pageInfo"][0]
`;

type Data = {
  pageInfo: PageInfo;
};

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const pageInfo: PageInfo = await sanityClient.fetch(query);

  res.status(200).json({ pageInfo });
}
