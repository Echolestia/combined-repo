import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export const data = require('../dummyJSON/users.json');

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // const filePath = path.resolve('../', 'dummyJSON', 'users.json');
  // const fileContents = fs.readFileSync(filePath, 'utf8');
  // const data = JSON.parse(fileContents);

  res.status(200).json(data);
};

export default handler;