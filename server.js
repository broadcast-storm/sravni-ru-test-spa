const express = require('express')
const config = require('config')

const PORT = config.get('port') || 5000

const app = express()

app.use('/api', require('./router'))

async function start() {
    try {
        app.listen(PORT, ()=>console.log('server started', PORT))
    } catch (error) {
        console.log('Server error', e.message);
        process.exit(1)
    }
} 

start()


