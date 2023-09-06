import Joi from 'joi';

export const responseSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});
