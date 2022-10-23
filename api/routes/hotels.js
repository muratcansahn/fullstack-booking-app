import express from "express";
const router = express.Router();
import {
  createHotel,
  getAllHotels,
  getHotel,
  updateHotel,
  deleteHotel,
} from "../controllers/hotel.js";
///CREATE HOTEL
router.post("/", createHotel);

///UPDATE HOTEL
router.put("/:id", updateHotel);

///DELETE HOTEL
router.delete("/:id", deleteHotel);

///GET HOTEL
router.get("/:id", getHotel);

///GET ALL HOTELS
router.get("/", getAllHotels);

export default router;
