import { employmentdata } from "./employment_data";

export default function datahandler(req, res) {
  console.log("Into the Handler");

    console.log("200 logged");
      res.status(200).json(employmentdata);
}
