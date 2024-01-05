const person = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
];

let res = person.map((Object)=>[Object.firstname,Object.lastname].join(" "));
console.log(res);