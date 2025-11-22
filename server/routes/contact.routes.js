import { Router } from "express";
import { sendContactMail } from "../controllers/contact.controller.js";

const router = Router();

router.route("/send-message").post(sendContactMail);

export default router;
