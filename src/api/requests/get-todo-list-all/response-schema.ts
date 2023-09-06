import Joi from 'joi';

// ? почему со схемой приходит ответ 500 ?
// export const responseSchema = Joi.object({
//   id: Joi.string().required(),
//   name: Joi.string().required(),
//   description: Joi.string().required(),
//   createDate: Joi.string().required(),
// });
export const responseSchema = Joi.any();
