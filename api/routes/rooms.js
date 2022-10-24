import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();
import {
  createRoom,
  getAllRooms,
  getRoom,
  updateRoom,
  deleteRoom,
} from "../controllers/room.js";

///CREATE ROOM
router.post("/:hotelid", verifyAdmin, createRoom);

///UPDATE ROOM
router.put("/:id", verifyAdmin, updateRoom);

///DELETE ROOM
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

///GET ROOM
router.get("/:id", getRoom);

///GET ALL ROOMS
router.get("/", getAllRooms);

export default router;
