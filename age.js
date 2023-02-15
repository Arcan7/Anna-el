// date de naissance de la personne
const dateDeNaissance = new Date('2003-04-02');

// date d'aujourd'hui
const dateActuelle = new Date();

// calcul de l'âge en années
const ageEnAnnees = Math.floor((dateActuelle - dateDeNaissance) / (365 * 24 * 60 * 60 * 1000));

// affichage de l'âge
document.getElementById('monage').innerHTML = ageEnAnnees;
