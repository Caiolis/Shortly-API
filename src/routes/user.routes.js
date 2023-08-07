import { Router } from "express";

// Schemas
import { signinSchema, signupSchema } from "../schemas/user.schema.js";

// Validations
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { signupValidation, signinValidation } from "../middlewares/userValidation.middleware.js";

// Controllers
import { signin, signup } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post('/signup', validateSchema(signupSchema), signupValidation, signup);
userRouter.post('/signin', validateSchema(signinSchema), signinValidation, signin);

export default userRouter;