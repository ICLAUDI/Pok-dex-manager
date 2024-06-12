import  express  from "express";

const app = express();
app.use(express.static('public'));

app.set('view engine', 'ejs');

// '/' indica il percorso di base (solitamente la homepage)
app.get('/', (req, res) => {
    // il metodo render parte già dalla cartella 'views' quindi specifichiamo il file partendo dal suo interno. Inoltre non serve specificare l'estensione '.ejs'
    res.render('pages/layout');
})

app.get('/index', (req, res) => {
    // il metodo render parte già dalla cartella 'views' quindi specifichiamo il file partendo dal suo interno. Inoltre non serve specificare l'estensione '.ejs'
    res.render('pages/index');
})

app.get('/pokemon/:id', (req, res) => {
    // il metodo render parte già dalla cartella 'views' quindi specifichiamo il file partendo dal suo interno. Inoltre non serve specificare l'estensione '.ejs'

    const pokemonId = +req.params.id
    res.render('pages/poke_stats',{pokemonId : pokemonId});
})




app.listen(3000);