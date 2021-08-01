const apiconstants = require('./')

const logger = (req,res,next) => {
    console.log("Middlewareeee")
   
    const { username , password: plainPassword } = req.body
    
    if (!username || typeof username !== 'string') {
        return res.json({status: apiconstants.ERROR_STATUS , message: apiconstants.INVALID_USERNAME})
    }
    if (!plainPassword || typeof plainPassword !== 'string') {
        return res.json({status: apiconstants.ERROR_STATUS , message: apiconstants.INVALID_PASSWORD})
    }
    if (plainPassword.length < 6) {
        return res.json({status: apiconstants.ERROR_STATUS , message: apiconstants.SHORT_PASSWORD})
    }
    next()
}

module.exports = logger