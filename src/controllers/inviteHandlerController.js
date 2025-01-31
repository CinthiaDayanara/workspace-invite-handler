const { updateInviteStatus } = require("../services/inviteHandlerService");
const { validateInviteResponse } = require("../utils/validators");

exports.respondToInvite = async (req, res) => {
  try {
    const { inviteId } = req.params;
    const { action } = req.body;

    validateInviteResponse({ inviteId, action });

    const updatedInvite = await updateInviteStatus(inviteId, action);
    res.status(200).json({ message: `Invitación ${action}`, invite: updatedInvite });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
