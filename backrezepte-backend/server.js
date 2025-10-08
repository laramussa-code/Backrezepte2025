const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let rezepte = [
    {
        id: 1,
        titel: "Schokokuchen",
        beschreibung: "Saftiger Schokokuchen",
        bild: "src/assets/schokokuchen.jpg",
        zutaten:"Mehl, Zucker, Eier, Butter, Kakao",
        zubereitung:"alles zusammen mixen und anschließend backen."
    },

    {
        id: 2,
        titel: "Apfelkuchen",
        beschreibung: "Apfelkuchen mit Zimt",
        bild: "assets/apfelkuchen.jpg",
        zutaten: "Mehl, Butter, Äpfel",
        zubereitung:"Äpfel schneiden und Teig zubereiten."
    }
];
 app.get("/", (req, res) => {  //Test route
    res.send("Backend läuft..");
 });

 app.get("/rezepte", (req,res) => {     // Alle Rezepte
    res.json(rezepte);  
 });

 app.get("/rezepte/:id", (req, res) => {   //rezepte nach Id
    const id = parseInt(req.params.id);
    const rezept = rezepte.find(e => e.id === id);
    if (rezept) {
        res.json(rezept);
    } else {
        res.status(404).json({ message: "Rezept nicht gefunden"});
    }
    });
 
    //Neues Rezept hinzufügen:
    app.post("/rezepte", (req, res) => {
        const neuesRezept = {id: rezepte.length + 1, ...req.body };
        rezepte.push(neuesRezept);
        res.status(201).json(neuesRezept);
    });
    
app.put("/rezepte/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = rezepte.findIndex(r => r.id === id);

    if (index !== -1) {
        rezepte[index] = { ...rezepte[index], ...req.body, id};
        res.json(rezepte[index]);
    }else {
        res.status(404).json({ message: "Rezept nicht gefunden "});
    }
    });
// Rezept löschen
app.delete("/rezepte/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = rezepte.findIndex(r => r.id == id);

    if (index !== -1) {
        const geloescht = rezepte.splice(index, 1);
        res.json(geloescht[0]);
    }else {
        res.status(404).json({ message: "Rezept nicht gefunden" });
    }
    });
// Server starten
// Server starten
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
  });
  
    