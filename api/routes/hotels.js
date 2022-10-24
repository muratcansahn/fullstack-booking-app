import express from "express";
const router = express.Router();
import { verifyAdmin } from "../utils/verifyToken.js";

import {
  createHotel,
  getAllHotels,
  getHotel,
  updateHotel,
  deleteHotel,
} from "../controllers/hotel.js";
///CREATE HOTEL
router.post("/", verifyAdmin, createHotel);

///UPDATE HOTEL
router.put("/:id", verifyAdmin, updateHotel);

///DELETE HOTEL
router.delete("/:id", verifyAdmin, deleteHotel);

///GET HOTEL
router.get("/:id", getHotel);

///GET ALL HOTELS
router.get("/", getAllHotels);

export default router;
