import express from "express";
import {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("You are authenticated");
// });
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("You are logged in and you can delete your account");
// });
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("You are logged in and you are admin");
// });
///update
router.put("/:id", verifyUser, updateUser);
///delete
router.delete("/:id", verifyUser, deleteUser);
///get
router.get("/:id", verifyUser, getUser);
///get all
router.get("/", verifyAdmin, getUsers);
export default router;
