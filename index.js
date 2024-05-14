const express = require('express');
const app = express();
const exphbs = require('express-handlebars');


app.listen(3000, () => {
    console.log("servidor en el puesto http://localhost:3000/");
});

app.engine("Handlebars", exphbs.engine({
    layoutsDir: __dirname + "/views",
    partialsDir: __dirname + "/views/componentes",
}))
app.set("view engine", "Handlebars");

app.use("/css", express.static(__dirname + 
    "/node_modules/bootstrap/dist/css"));

app.use("/js", express.static(__dirname + 
    "/node_modules/bootstrap/dist/js"));

app.use("/js", express.static(__dirname + 
    "/node_modules/jquery/dist"));

app.use(express.static("assets"));

app.get("/", (req, res) => {
    res.render("dashboard", {
        layout: "dashboard",
        productos: [
            "banana",
            "cebollas",
            "lechuga",
            "papas",
            "pimenton",
            "tomate"
        ]
    });
});