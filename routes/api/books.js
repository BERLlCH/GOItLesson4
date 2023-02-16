const express = require("express");
const Joi = require("joi");
const books = require("../../models/books");
const {ctrlWrapper} = require("../../helpers/index");
const validateBody = require("../../middlewares/index")
const {addSchema} = require("../../schema/book")
const controllers = require("../../controller/books")

const router = express.Router();

router.get("/", ctrlWrapper(controllers.getAll));

router.get("/:id", ctrlWrapper(controllers.getById))

router.post("/", validateBody(addSchema), ctrlWrapper(controllers.add));

router.put("/:id", validateBody(addSchema), ctrlWrapper(controllers.updateById))

router.delete("/:id", ctrlWrapper(controllers.deleteById))

module.exports = router;