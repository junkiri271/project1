const app = (module.exports=require('express')())
const sendMail = require('../auth/email')
app.get('/', (req, res)=>{
    res.render('../views/pages/quote.ejs')
}).post('/', (req, res) => {
    let receipentEmail = 'junkiri271@gmail.com'

    let subject = "Your quote details"
    let descriptionWithHtml = ` <div style="height: 100%; background-color: azure; border: 5px solid grey; border-radius: 5px; padding: 2%; margin: 2%;">
    <div  style="height: 25px; background-color: rgb(81, 81, 81); font-weight: bold; color: whitesmoke; padding: 2%;"> Hi, ${req.body.fullname}, your quote details are as follows</div>
    <div style="margin-top: 2%;">Service selected : ${req.body.service} </div>
    <div style="margin-top: 2%;">Based on your selected service , our starting price is Nrs 35, 000. This includes 1 website and 1 mobile application development (if you need one)
    If your requirements are higher and subject to change in future, the price varies accordingly. We offer 1 year maintainance and hosting that is included in the starting package.
    If you have more questions, please reply to this email. One of our expertise would get back to you soon.    
    </div>
    <div style="margin-top: 3%;"> Thankyou, </div>
    <div style="margin-top: 3%;"> King regards, </div>
    <div style="margin-top: 1%;"> Delta solution </div>
</div>
`
    console.log(sendMail.sendEmail(receipentEmail, subject, descriptionWithHtml))
    console.log(sendMail.sendEmail(req.body.email, subject, descriptionWithHtml))



    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
        JSON.stringify(
            {
                success: true,
                msg: "Your quote have been submitted, if your provided details are correct, we will hear from us shortly",

            },
            null,
            3
        )
    );
})