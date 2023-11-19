let i = 0
console.log(i);

const homeRoute = (req, res) => {

    
    const homeGET= (req, res) => {

        i+=1
        console.log(`${i} from home`);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        const response = { message: "Home GET Request" }
        res.end(JSON.stringify(response));
    }

    const homePOST= (req, res) => {

    }

    switch (req.method) {

        case "GET":
            homeGET(req, res)
            break;

        case "POST":
            homePOST(req, res)
            break;

        default:

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            const response = { message: "Method Not Allowed" }
            res.end(JSON.stringify(response));
            break;
    }

}


export default homeRoute