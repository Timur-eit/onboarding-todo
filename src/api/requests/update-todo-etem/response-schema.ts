import Joi from 'joi';

export const responseSchema = Joi.object({
  id: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
  createDate: Joi.string().required(),
});
