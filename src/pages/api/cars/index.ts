import fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import { CarModel, CarsResponse } from "~/types"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CarsResponse>
) {
  const fileContents = fs.readFileSync('public/api/cars.json', 'utf8');
  const items: CarModel[] = JSON.parse(fileContents);

  const result = {
    result: items ?? []
  }
  res.status(200).json(result);
}
