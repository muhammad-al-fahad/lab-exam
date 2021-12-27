const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Fahad:software12@cluster0.v8hoj.mongodb.net/e-commerce?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true},
    err => {
        if (!err)
            console.log('Mongodb connection succeeded.')
        else
            console.log('Error while connecting MongoDB : ' + JSON.stringify(err, undefined, 2))
    })