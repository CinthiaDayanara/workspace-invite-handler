const Invite = require("../models/Invite");

const updateInviteStatus = async (inviteId, status) => {
  const invite = await Invite.findByPk(inviteId);
  if (!invite) throw new Error("Invitación no encontrada.");

  invite.status = status;
  await invite.save();

  return invite;
};

module.exports = { updateInviteStatus };
