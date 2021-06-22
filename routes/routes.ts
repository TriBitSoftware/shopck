import { Router } from "express"
import { registrationEmail } from "../controllers/emailController"
import { submitForm } from "../controllers/formController"

const router: Router = Router()

router.post("/submitForm", submitForm)
router.post("/registrationEmail", registrationEmail)

export default router