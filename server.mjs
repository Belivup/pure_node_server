import http from "http"
import homeRoute from "./homeRoute.mjs"
import userRoute from "./user.mjs"


const port = 4005
let i = 0


const server = http.createServer( (req, res) => {

    const url = req.url

    switch (url) {

        case "/home":
            homeRoute(req, res)
            break;

        case "/user":
            userRoute(req, res)
            break
    
        default:
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            const response = { message: "Can't Get Route" }
            res.end(JSON.stringify(response));
            break;
    }
})



server.listen(port, () => {
    console.log(`server running at PORT : ${port}`);
})


