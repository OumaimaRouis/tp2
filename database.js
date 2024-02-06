const sqlite3 = require('sqlite3').verbose();

// Connexion à la base de données SQLite
const db = new sqlite3.Database('./maBaseDeDonnees.sqlite', sqlite3.OPEN_READWRITE |
sqlite3.OPEN_CREATE, (err) => {
if (err) {
console.error(err.message);
} else {
    db.run(`CREATE TABLE IF NOT EXISTS personnes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nom TEXT NOT NULL,
        adresse TEXT
        )`, (err) => {
        if (err) {
        console.error(err.message);
        } else {
        // Insertion de données initiales avec adresses
            // const initialData = [ {nom: 'Bob', adresse: 'Paris'},
            //                       {nom: 'Alice', adresse: 'Berlin'},
            //                       {nom: 'Charlie', adresse: 'UK'}];
    
            // initialData.forEach((person)=> {
            //     db.run('INSERT INTO personnes(nom,adresse) VALUES(?,?)',[person.nom, person.adresse]);
            // });
        }
        });
    }
});
/*console.log('Connecté à la base de données SQLite.');
db.run(`CREATE TABLE IF NOT EXISTS personnes (
id INTEGER PRIMARY KEY AUTOINCREMENT,
nom TEXT NOT NULL
)`, (err) => {
if (err) {
console.error(err.message);
} else {
// Insertion de données initiales
const personnes = ['Bob', 'Alice', 'Charlie'];
personnes.forEach((nom) => {
db.run(`INSERT INTO personnes (nom) VALUES (?)`, [nom]);
});
}
});
}
});*/

module.exports = db;



    