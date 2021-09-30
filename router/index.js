const {Router} = require('express')

const router = Router()

const data = require('../data')

router.get('/data',async (req, res)=>{
    try {
        return res.status(200).json({data: data.slice(0, 10)})
        
    } catch (error) {
        res.status(500).json({message: 'Что-то не так'})
    }
    
})

module.exports = router