const app = (module.exports=require('express')())

app.get('/', (req, res)=>{
    res.render('../views/pages/testimonial.ejs')
})