const express = require('express');
const nodemailer = require('nodemailer');
const randomstring = require('randomstring');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const eventUser = require('./models/preEvent.js');
const workshopUser = require('./models/preworkshop.js');
const event_registration=require('./models/event_registration.js')
const merch=require('./models/merchPurchase.js')
const proshow= require('./models/proShow.js')
require('dotenv').config();

const session = require('express-session');
const passport = require('passport');
const connectEnsureLogin = require('connect-ensure-login');
const insta = require('instamojo-nodejs');

const cors = require('cors');

const User = require('./models/User');

const app = express();

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// TODO: Move these to a config file
const PORT = process.env.PORT || 8800 ;
const MONGODB_URL = "mongodb+srv://tirutsavatest:testtirutsava@cluster0.jyhpmxn.mongodb.net/tirutsava_2k23?retryWrites=true&w=majority"; //process.env.MONGODB_URL
const SESSION_SECRET = process.env.SESSION_SECRET;
const PRIVATE_API_KEY = process.env.PRIVATE_API_KEY;
const PRIVATE_AUTH_KEY = process.env.PRIVATE_AUTH_KEY;
const PRIVATE_EMAIL_ID =process.env.EMAIL_ID;
const PRIVATE_EMAIL_PASS=process.env.EMAIL_PASS;



insta.setKeys(PRIVATE_API_KEY, PRIVATE_AUTH_KEY);

var data = new insta.PaymentData();

mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => {
    console.log('Successfully connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
    console.log('Error in connecting to MongoDB', err);
});

app.use(
    session({
        secret: SESSION_SECRET, //SESSION_SECRET
        resave: false,
        saveUninitialized: false,
        cookie: { secure: true }
    })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// TODO: Create a route for these
app.post('/signup', (req, res) => {
    console.log("entered!!!!");
    // if(User.find({username: req.body.username})) {
    //     console.log(User.find({username: req.body.username}))
    //     console.log("In if statement")
    //     console.log(req.body.username)
    //     res.status(500).send("User Already exists");
    // }
    User.register(req.body, req.body.password, (err, user) => {
        if (err) {
            console.log("error", err);
            console.log("In register if");
            res.status(500).send(err);
        } else {
            passport.authenticate('local')(req, res, () => {
                console.log("In register else")
                res.send('Signed up');
            });
        }
    });
});

app.get('/session', connectEnsureLogin.ensureLoggedIn('/'), (req, res) => {
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()) {
        console.log(":");
        res.status(200).send(req.user);
    }
    else {
        console.log("::");
        res.status(400).send('Please Log in Again');
    }

});

app.post('/logout', function (req, res, next) {
    req.session.destroy(function () {
        res.clearCookie('connect.sid');
        res.redirect('/');
    });
});

app.post('/login',
    passport.authenticate('local', {
        failureRedirect: '/',
    }), (req, res) => {
        console.log(req.user);
        console.log(req.session);
        console.log(req.isAuthenticated());
        console.log("Logged in")
        res.status(200).send(req.user);
    });

app.post('/otp', async (req, res) => {
        const { username } = req.body;
        try {
            const user = await User.findOne({ username: username }).exec();
            if (!user) {
                console.log(12)
                return res.status(404).json({ message: 'User not found' });
            }
            const otp = randomstring.generate({ length: 6, charset: 'numeric' });
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: PRIVATE_EMAIL_ID,
                    pass: PRIVATE_EMAIL_PASS,
                }
            });
            
            const mailOptions = {
                from: PRIVATE_EMAIL_ID,
                to: username,
                subject: 'OTP for password reset',
                text: `Your OTP for password reset is: ${otp}`
            };

            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log(error);
                    res.status(500).json({ message: 'Server error' });
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });

            res.status(200).send(otp)

        } catch (err) {
                console.error(err);
                res.status(500).json({ message: 'Server error' });
            }
    });

app.post('/forgot', async (req, res) => {
    const { username, password } = req.body;
    try{
        const user = await User.findOne({ username: username }).exec();
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const updatedUser = new User({
            username: username,

            password: password,

            name: user.name,

            phone_number: user.phone_number,
        
            college_state: user.college_state,

            college_city: user.college_city,

            college_name: user.college_name,

            facebook_id : user.facebook_id,

            instagram_id: user.instagram_id,

            referral_id : user.referral_id,
            
        });
        await User.deleteOne({ username: username }),
        await User.register(updatedUser, password);
            res.status(200).json({updatedUser})
        }catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server error' });
        }
        
    });


app.get('/cultevent', async (req, res) => {

    // const collection=db.collection('culturaleventschemas');

    const curItem = await eventUser.find({ type: "Cultural" });
    console.log(curItem);
    res.send(curItem)
});
app.get('/techevent', async (req, res) => {

    // const collection=db.collection('culturaleventschemas');
    const curItem = await eventUser.find({ type: "Technical" });

    console.log(curItem);
    res.send(curItem)
});
app.get('/workshop', async (req, res) => {

    // const collection=db.collection('culturaleventschemas');

    const curItem = await workshopUser.find();
    console.log(curItem);
    res.send(curItem)
})
app.post('/eventregistration',(req, res) => {
  const { sname, email ,event} = req.body;
  console.log(sname)

  event_registration.findOne({ sname, email }, (err, user) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else if (user) {
      res.status(409).send('Already registered');
    } else {
      const newUser = new event_registration({ sname, email ,event});

      newUser.save((err) => {
        if (err) {
          console.error(err);
          res.status(500).send('Internal Server Error');
        } else {
          res.status(201).send('User registered successfully');
        }
      });
    }
  });
})


app.post('/purchasemerch', (req, res) => {
    const email = req.body.email;
    const type = req.body.type;
    const quantity = req.body.quantity;
    const paymentid = req.body.paymentid;
    const size = req.body.size;

    const newMerchPurchase = new merchandise({email: email, type: type, quantity: quantity, paymentid: paymentid, size: size});

    newMerchPurchase.save((err) => {
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        else{
            res.status(201).send('Merchandise purchased successfully');
        }
    })
})

// app.post('/fetchuserdetails', (req, res) => {
//     console.log("IN api")
//     console.log(req)
//     console.log(req.body)
//     const email = req.body.email;
//     console.log(email);
//     User.findOne({username: email}, (res1,err) => {
//         console.log("In user find one")
//         if(err){
//             console.error(err);
//             res.status(500).send('Internal Server Error');
//         }
//         else if (res1) {
//             console.log("sucesss")
//             console.log(res1)
//             res.status(200).send(res1);
//         }
//     })
// })

app.post('/userdetails',async (req,res)=>{
    console.log("In userdetails API")
    //console.log(req)
    console.log(req.body)
    const email= req.body.email
    console.log(email)
    console.log(typeof email)
    const user=await User.find({username:email})
   
    console.log(user)


if (user) {
  res.status(200).json(user);
} else {

  res.status(500).json({ message: "User not found" });
}
    

})


app.post('/merchpayment', (req, res) => {
    data.purpose = req.body.purpose;
    data.amount = req.body.amount;
    data.buyer_name = req.body.name;
    data.email = req.body.email;
    // data.send_sms  = 'True';
    data.phone = req.body.phoneNumber
    // data.allow_repeated_payments = false;                  // REQUIRED
    data.setRedirectUrl(req.body.redirectUrl);
    //data.webhook = req.body.webhook;

    insta.createPayment(data, function (error, response) {
        if (error) {
            // some error
            console.log("error in  merch payment gateway"+error);
        } else {
            // Payment redirection link at response.payment_request.longurl
            console.log("response from payment gateway"+response);
            const responseData = JSON.parse(response)
            const redirectUrl = responseData.payment_request.longurl
            const request_id = responseData.payment_request.id;
            
            res.status(200).json({redirectUrl: redirectUrl, requestId: request_id});
        }
    });
})


app.post('/addmerchandise',(req,res)=>{
    console.log("in add merchanidse to db")
    const { name, phoneNumber,email ,merchandise,size,paymentId,quantity,amount} = req.body;
    console.log(size)
    console.log(req.body)
    merchitem=new merch({name,phoneNumber,email,merchandise,size,paymentId,quantity,amount})
    console.log(merchitem)
    merchitem.save((err) => {
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        else{
            res.status(200).send('Merchandise purchased successfully');
        }
    })
}

)


app.post ('/proshowpayment',(req, res) => {
    data.purpose = req.body.purpose;
    data.amount = req.body.amount;
    data.buyer_name = req.body.name;
    data.email = req.body.email;
    // data.send_sms  = 'True';
    data.phone = req.body.phoneNumber
    // data.allow_repeated_payments = false;                  // REQUIRED
    data.setRedirectUrl(req.body.redirectUrl);
    //data.webhook = req.body.webhook;

    insta.createPayment(data, function (error, response) {
        if (error) {
            // some error
            console.log("error in payment gateway in proshow"+error);
        } else {
            // Payment redirection link at response.payment_request.longurl
            console.log("response from payment gateway"+response);
            const responseData = JSON.parse(response)
            const redirectUrl = responseData.payment_request.longurl
            const request_id = responseData.payment_request.id;
            
            res.status(200).json({redirectUrl: redirectUrl, requestId: request_id});
        }
    });
})


app.post('/addticket',(req,res)=>{
    console.log("in add merchanidse to db")
    const { name, phoneNumber,email ,paymentId,quantity,amount} = req.body;


  //  console.log(size)
    console.log(req.body)
    merchitem=new proshow({name,phoneNumber,email,paymentId,quantity,amount})
    console.log(merchitem)
    merchitem.save((err) => {
        if(err){
            console.log(err);
            res.status(500).send('Could not save in db');
        }
        else{

               try{
                const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: PRIVATE_EMAIL_ID,
                    pass: PRIVATE_EMAIL_PASS,
                }
            });
            const mailOptions = {
                from: PRIVATE_EMAIL_ID,
                to: email,
                subject: 'Confirmation of booking',
                text: `Hey, ${name}!\n\nYou have successfully booked ${quantity} ticket(s).\n Your entry ID is: ${paymentId}.\nTirutsava looks forward to having you for a memorable experience.\n\nRegards\nTeam Tiurtsava.`
            };

            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log(error);
                    res.status(500).json({ message: 'Server error' });
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });

            res.status(200).send('Ticket purchased successfully');
                }
            catch(err){
                console.error(err);
                res.status(500).json({ message: 'Server error cant send email' });
            }
            
        }
    })
 
}

)


app.post('/getpaymentdetails',(req,res)=>{
    console.log("in get payment details")
    insta.getPaymentDetails(req.body.request_id,req.body.id,function(error,response){
        if(error){
            console.log(error)
        }
        else{
            console.log("Response from payment details",response)
            res.json(response)
        }
    });
})



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
