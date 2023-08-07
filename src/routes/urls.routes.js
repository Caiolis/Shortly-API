import { Router } from "express";

// Schemas
import { urlsSChema } from "../schemas/url.schema.js";

// Validations
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import {
  validateAdminUrl,
  validateURL,
} from "../middlewares/urlValidation.middleware.js";

// Controllers
import {
  getUrlById,
  openUrl,
  shortUrl,
  deleteUrl,
} from "../controllers/urls.controller.js";

const urlsRouter = Router();

urlsRouter.post(
  "/urls/shorten",
  validateSchema(urlsSChema),
  validateURL,
  shortUrl
);
urlsRouter.get("/urls/:id", getUrlById);
urlsRouter.get("/urls/open/:shortUrl", openUrl);
urlsRouter.delete("/urls/:id", validateURL, validateAdminUrl, deleteUrl);

export default urlsRouter;
