import express from "express";
import {
    getUser,
    getUserFriends,
    addRemoveFriend,
} from "../controllers/users.mjs";
import { verifyToken } from "../middleware/auth.mjs";
const router = express.Router();


/* Read */
router.get("/:id", verifyToken,getUser);
router.get("/:id/friends",verifyToken,getUserFriends);

/* Update */
router.patch("/:id/:friendId",verifyToken,addRemoveFriend);

export default router;