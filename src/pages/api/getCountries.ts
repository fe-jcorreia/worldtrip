import { NextApiRequest, NextApiResponse } from "next";
import data from "../../data.json";

export default function getCountries(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}
