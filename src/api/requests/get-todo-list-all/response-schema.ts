import Joi from 'joi';

const item = Joi.object({
  id: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
  createDate: Joi.string().required(),
});

export const responseSchema = Joi.array().items(item);
