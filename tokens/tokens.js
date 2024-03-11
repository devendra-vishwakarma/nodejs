import express from "express";
import jwt from 'jsonwebtoken';


const app = express();

const secret = 'dev';
app.use('/tokens', (req, res) => {

    const payload = {
        id: 1,
        username: 'devendra_vishwakarma',
        password: '8959876646'
    }

    let token = jwt.sign(payload, secret,{expiresIn:'1h'});
    // token = token.split(" ")[1];
    // console.log(token);
    res.send(token);
});

app.get('/verify', (req, res) => {
    const token = req.headers.token;
    console.log(token);

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(500).json({ Error: 'Invalid token' });
        }

        return res.status(200).json({
            Message: 'Token is valid',
            Data: decoded,
        });
    });
});


app.listen(3000, () => {
    console.log("server started");
})