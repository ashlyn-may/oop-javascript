let name1 = "Maxwell Wright";
let phone1 = "(0191) 719 6495";
let email1 = "Curabitur.egestas.nunc@nomummyac.co.uk";

let name2 = "Raja Villarreal";
let phone2 = "0866 398 2895";
let email2 = "posuere.vulputate@sed.com";

let name3 = "Helen Richards";
let phone3 = "0800 1111";
let email3 = "libero@convallis.edu";

console.log(name1, "/", phone1, "/", email1)
console.log(name2, "/", phone2, "/", email2)
console.log(name3, "/", phone3, "/", email3)

console.log();

const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function() {
        console.log (`${person.name[0]} ${person.name[1]} is ${person.age} years old.`);
    },
    introduceSelf: function() {
        console.log(`Hi! I'm ${person.name[0]}.`);
    },
};

person.bio();
person.introduceSelf();