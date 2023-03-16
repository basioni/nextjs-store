import { products } from "../../../models/products";

export default function handler(req, res) {
    res.status(200).json({ products })
  }
  