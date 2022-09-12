import type { NextApiRequest, NextApiResponse } from "next";
import { INVOICES } from "../../interfaces/invoices";
import Papa from "papaparse";
import fs from "fs";


let content = fs.readFileSync('/Users/adamp/coding/SOC/JOBAPPS/VETCT/technical-test/pages/api/data.csv', { encoding: 'utf-8' });
const parseData = (content: string) => {
  let data: unknown;
  return new Promise( (resolve) => {
    Papa.parse(content, {
      header: true,
      delimiter: ',',
      dynamicTyping: true,
      complete: (results) => {
        data = results.data;
      }
    });
    resolve(data);
  });
};

const contentObject = parseData(content);

export default async function handler(req: any, res: { json: (arg0: unknown) => void; }) {
  res.json( await contentObject );
}
