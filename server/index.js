require('dotenv').config()
require('dotenv').config()
const express = require('express')
const sequelize = require('./utils/db')

// const cors = require('cors')
// const fileUpload = require('express-fileupload')
const router = require('./routers/index')
// const errorHandler = require('./middleware/ErrorHandlingMiddleware')
// const path = require('path')

const PORT = process.env.PORT || 9000

const app = express()

// app.use(cors())
// app.use(json())
// app.use(fileUpload({}))
app.use('/api', router)


const start = async () => {
    try {
        // await authenticate()
        // await sync()
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}


start()