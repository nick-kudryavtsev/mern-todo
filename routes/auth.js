const {Router} = require('express')
const router = Router()

//  models
const User = require('../Models/User')

router.post('/reg', async (req, res) => {
    try {
        const {email, password} = req.body
        const isUsed = await User.findOne({email})

        if(isUsed){
            return res.status(300).json({message: 'Email уже занят. Попробуйте другой'})
        }
        const user = new User({
            email,
            password
        })

        await user.save()
        res.status(201).json({message: 'Пользователь создан!'})
    } catch (err){
        console.log(err)
    }
})

module.exports = router