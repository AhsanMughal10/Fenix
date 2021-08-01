const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const apiconstants = require('../api_constants')

const loginRider =  async (req,res) => {
    console.log(req.body)
    const { username , password } = req.body
    const rider = await User.findOne({ username }).lean()

    if (!rider) {
        return res.json({ status: apiconstants.ERROR_STATUS , message: apiconstants.NOT_REGISTERED})
    }
    else {
        const result = await bcrypt.compare(password,  rider.password, function(err, match) {
            if (err) {return res.json({ status: apiconstants.ERROR_STATUS , message: apiconstants.INTERNAL_ERROR})}
            else if (match == false) {
                return res.json({ status: apiconstants.ERROR_STATUS , message: apiconstants.WRONG_CRED})
            } else {
                return res.json({ status: apiconstants.SUCCESS_STATUS , message: apiconstants.LOGIN_SUCCESS
                , user: rider.username });
            }
        })    
    }
}

const registerRider =  async (req,res) => {
    console.log(req.body)

    const { username , password: plainPassword } = req.body

    const password = await bcrypt.hash(plainPassword , 10)

    try {
       const response = await User.create({
           username,
           password
       })
    } catch(error) {
        if (error.code === 11000) {
            return res.json({status: apiconstants.ERROR_STATUS , message: apiconstants.DUPLICATE_USER})
        }
        throw error
    }
     res.json({status: apiconstants.SUCCESS_STATUS , message: apiconstants.SINGUP_SUCCESS})

}

module.exports = { loginRider , registerRider }