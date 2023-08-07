import { Router } from "express";

// Schemas
import { signupSchema } from "../schemas/user.schema.js";

// Validations
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { userValidation } from "../middlewares/userValidation.middleware.js";

// Controllers
import { signup } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post('/signup', validateSchema(signupSchema), userValidation, signup);

export default userRouter;