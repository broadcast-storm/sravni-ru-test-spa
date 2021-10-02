const express = require('express')
const cors = require('cors')
const config = require('config')
const router = require('./router')
const PORT = config.get('port') || 5000
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use('/api', router)
app.use(errorHandler)

async function start() {
    try {
        app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`))
    } catch (error) {
        console.log('Server error', e.message);
        process.exit(1)
    }
} 

start()


