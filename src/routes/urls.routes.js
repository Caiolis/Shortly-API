import { Router } from "express";

// Schemas
import { urlsSChema } from "../schemas/url.schema.js";

// Validations
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { validateURL } from "../middlewares/urlValidation.middleware.js";

// Controllers
import { shortUrl } from "../controllers/urls.controller.js";

const urlsRouter = Router();

urlsRouter.post('/urls/shorten', validateSchema(urlsSChema), validateURL, shortUrl);

export default urlsRouter;