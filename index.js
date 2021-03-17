const express = require('express')
const mongoose = require('mongoose')
const app = express()

//  constants
const PORT = process.env.PORT || 5000

app.use(express.json({
    extended: true,
}))

app.use('/api/auth', require('./routes/auth'))

async function start(){
    try {
        await mongoose.connect('mongodb+srv://admin:admin@learmmongo.1luea.mongodb.net/todo?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true
        })

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}.`)
        })
    } catch (err){
         console.error(err)
    }
}

start()