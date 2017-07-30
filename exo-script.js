var classe1 = [
{ nom: 'Pierre', age: 40, sexe: 'M' },
{ nom: 'Marie', age: 18, sexe: 'F' },
{ nom: 'Louise', age: 16 , sexe: 'F' },
{ nom: 'Damien', age: 55, sexe: 'M' },
{ nom: 'Louis', age: 19, sexe: 'M' }
];

var classe2 = [
{ nom: 'Elodie', age: 27, sexe: 'F' },
{ nom: 'Christophe', age: 48, sexe: 'M' },
{ nom: 'Aurelie', age: 32, sexe: 'F' },
{ nom: 'Jeanne', age: 15, sexe: 'F' },
{ nom: 'Martin', age: 77, sexe: 'M' },
{ nom: 'Eric', age: 18, sexe: 'M' },
{ nom: 'Jacques', age: 35, sexe: 'M' },
{ nom: 'Eric', age: 47, sexe: 'M' }
];

// calcul du nombre d'hommes par
function nombreHommes(classe) {
	var nbHomme = 0;

	for(i = 0; i < classe.length; i++) {
		if('M' === classe[i].sexe ) {
			nbHomme++;
		}
	}

	return nbHomme;
}

var nbHommes = nombreHommes(classe1);
console.log("Il y a " + nbHommes + " hommes dans la classe");


// calcul du pourcentage d'hommes
function proportionHomme(classe) {
	var nombreTotal= classe.length;
	var nbHommes = nombreHommes(classe);
	var proportion= nbHommes/nombreTotal * 100;

	return proportion;
	
}

console.log("Il y a " + proportionHomme(classe1) + "% d'hommes.");


// calcul proportion femmes
function proportionFemme(classe) {
	var propHomme = proportionHomme(classe);
	var propFemme = 100 - propHomme;
	console.log("Il y a " + propFemme + "% de femmes.");
}
proportionFemme(classe1);


 //Définissez une fonction moyenneAge( classe ) qui renvoie la moyenne d'age de la classe.
 function moyenneAge(classe) {
 	var sommeAges = 0;

 	for(var i = 0, c = classe.length; i < c; i++) {
 		sommeAges = sommeAges + (classe[i].age);
 	}

 	var moyenne = sommeAges / c;
 	return moyenne;
 }

 console.log("La moyenne d'âge de la classe est " + moyenneAge(classe1) + " ans.");


 // moyenne d'age par sexe
 function moyenneAge2(classe, sexe = "T") {
 	
 		var sommeAges = 0;
 		var nombrePers = 0;

 		for(var i = 0, c = classe.length; i < c; i++) {
 			if (classe[i].sexe === sexe) {

 				var sommeAges = sommeAges + classe[i].age;
 				nombrePers++;
 				var moyenne = sommeAges / nombrePers;
 			} 
 			else if(sexe === "T") {
 				var moyenne = moyenneAge(classe);
 			}
  		}
		console.log("La moyenne d'âge est " +  moyenne + " ans.");
 }

 moyenneAge2(classe1);


//Afficher l'objet du plus vieux
function plusVieux(classe) {
	var max = 0;
	var vieux = 0
	for(var i = 0, c = classe.length; i < c; i++) {
		if (classe[i].age > max) {
			max = classe[i].age;
			vieux = i;
		}
	}
	return classe[vieux]; 
}

console.log(plusVieux(classe2));

