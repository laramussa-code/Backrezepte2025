const express = require('express');
const mongoose= require('mongoose');
require('dotenv'.config());

const app = express();
app.use(cors());
app.use(express.json());

//Hier verbindung zu Mongo erstellen?
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/bakeit')

//Rezepte-schema
const Recipe = mongoose.model('Rezept', new mongoose.Schema) ({
    titel: String,
});
    
    //Read alle rezepte anzeigen
    app.get('/api/rezepte', async (req, res) => {
        const rezepte = await Recipe.find();
        res.json(rezepte);
    
    });

    //Create, neues rezept hinzufügen
    app.post('/api/rezepte', async (req,res) => {
        const rezepte = new Rezepte(req.body);
        const saved = await rezepte.save();
    });

    //Delete Rezept löschen
    app.delete('/api/rezepte/:id', async (req,res) => {
        await Rezepte.findByIdAndDelete(req.params.id);
        res.json({ message: 'Gelöscht'});
    });

    //Server starten
    const PORT = process.env.PORT ||3000;
app.listen(PORT, () => console.log ('Server läuft'));



