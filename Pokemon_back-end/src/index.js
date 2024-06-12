import  express  from  'express';
import cors from "cors";
import "dotenv/config";

const PORT = process.env.PORT;

const  app  =  express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: "*" }));


// Esempio di rotta
app.get("/", (req, res) => {
    res.send("");
});



app.listen(PORT, () => {
    console.log(`Application listening at port "${PORT}"`);
});
