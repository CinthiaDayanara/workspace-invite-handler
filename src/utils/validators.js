const Joi = require("joi");

const inviteResponseSchema = Joi.object({
  inviteId: Joi.number().integer().required(),
  action: Joi.string().valid("accepted", "declined").required()
});

const validateInviteResponse = (data) => {
  const { error } = inviteResponseSchema.validate(data, { abortEarly: false });
  if (error) throw new Error(error.details.map(err => err.message).join(", "));
};

module.exports = { validateInviteResponse };
