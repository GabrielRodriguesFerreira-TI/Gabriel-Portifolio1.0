import { Experience } from "@/typings";
import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "..";

const query = groq`
*[_type == "pageInfo"] {
    ...,
    technologies[]->
  }
`;

type Data = {
  experiences: Experience[];
};

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experiences: Experience[] = await sanityClient.fetch(query);

  res.status(200).json({ experiences });
}
