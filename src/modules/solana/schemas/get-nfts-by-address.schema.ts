import * as Joi from 'joi';

export const getNftsByAddressSchema = Joi.object({
    address: Joi.string().required(),
});
