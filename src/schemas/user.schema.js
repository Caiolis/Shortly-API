import joi from "joi";

export const signupSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().required().email(),
  password: joi.string().required().min(3),
  confirmPassword: joi.string().required().min(3)
});