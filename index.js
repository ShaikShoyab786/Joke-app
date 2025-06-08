import express from "express";
import axios from "axios";
import path from "path";
import { fileURLToPath } from "url";

const port = 3000;
const app= express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));



app.get("/", async (req, res)=>{
    try{
        const result = await axios.get("https://v2.jokeapi.dev/joke/Any")
        res.render("index.ejs", {joke: result.data});
    }catch(error){
        console.log(error.response.data);
        res.status(500);;

    }
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});