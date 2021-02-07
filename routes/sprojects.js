const express = require("express");
const router = express.Router();

const sproject = require("../controllers/sprojController");

//   Prefix     '/sprojects'

router.post("/create", auth, sproject.create); 

router.patch("/update/:id", sproject.update);

router.post("/delete/:id", sproject.delete);
router.post("/deleteall", sproject.deleteAll);

router.get("/:id", sproject.getOne);

router.get("/", sproject.getAll);

module.exports = router;
