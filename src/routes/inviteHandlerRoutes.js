const express = require("express");
const { respondToInvite } = require("../controllers/inviteHandlerController");

const router = express.Router();

router.post("/:inviteId/respond", respondToInvite);

module.exports = router;
