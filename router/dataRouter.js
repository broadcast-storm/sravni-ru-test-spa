const Router = require('express')
const router = new Router()
const dataController = require('../controllers/dataController')

router.get('/', dataController.getAll)
router.get('/:id', dataController.getOne)

module.exports = router
