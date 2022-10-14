import joi from "joi"

const signinSCHEMA = joi.object({

    email: joi.string().required().pattern(new RegExp('^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$')),
    password: joi.string().required().min(5)

})

export {signinSCHEMA}