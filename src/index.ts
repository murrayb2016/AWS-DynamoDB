import express from "express"; 
require("./db/dynamoose");
import {userRouter} from "./routers/user";
import hbs from "hbs"; 
import path from "path"; 

const app = express();
const port = process.env.PORT || 3000;

const viewsPath = path.join(__dirname, "../../views"); 
const partialsPath = path.join(__dirname, "../../views/partials"); 

app.set("view engine", "hbs"); 
app.set("views", viewsPath); 
hbs.registerPartials(partialsPath); 

app.use(express.static(path.join(__dirname, "../public"))); 


app.use(express.json());
app.use(userRouter); 


app.listen(port, () => {
    console.log('Server is up on port ' + port)
});
 