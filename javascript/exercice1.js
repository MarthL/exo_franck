
/* Exercice 1 */ 

// Palindrome en Javascript à intégrer sur une page web 

let word = prompt('Veuillez entrer un mot: ').toUpperCase(); 
let word_reverse = word.split('').reverse().join(''); // Nouvelle variable inversée du mot

if (word === word_reverse){ 
    alert("C'est un palindrome");
} else { 
    alert("Ce n'est pas un palindrome");
}
