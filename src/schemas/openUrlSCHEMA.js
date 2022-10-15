import joi from "joi"

const openUrlSCHEMA = joi.object({

    shortUrl: joi.string().min(8).max(8).required()

})

export {openUrlSCHEMA}