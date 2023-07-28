const { Router } = require("express");
const getAllTemplates = require("../controllers/templates.controllers/get-all-templates");

const templatesRouter = Router();

templatesRouter.get("/", getAllTemplates);

module.exports = templatesRouter;
