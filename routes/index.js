const app = (module.exports=require('express')())

app.get('/', (req, res)=>{
    res.render('../views/pages/index.ejs', {
        page:'home'
    })
})

app.use('/about', require('./about'))
app.use('/contact', require('./contact'))
app.use('/quote', require('./quote'))
app.use('/service', require('./service'))
app.use('/testimonial', require('./testimonial'))