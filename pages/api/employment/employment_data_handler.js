import { employmentdata } from "./employment_data";

export default function datahandler(req, res) {
      res.status(200).json(employmentdata);
}
