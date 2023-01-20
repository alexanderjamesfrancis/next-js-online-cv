import { employmentdata } from "./employment_data";

export function datahandler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      res.status(200).json(employmentdata);
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
