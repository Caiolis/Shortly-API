import joi from "joi";

export const urlsSChema = joi.object({
  url: joi.string().uri().required()
});