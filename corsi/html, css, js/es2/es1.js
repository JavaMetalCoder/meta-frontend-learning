for (let i = 1; i <= 4; i++) {
  console.log("Settimana: ", i);
  for (let j = 1; j <= 7; j++) {
    console.log("Giorno: ", j);
  }
}

let genres = [];

genres.push("Metalcore");
genres.push("Dubstep");
genres.push("Classic");
genres.pop(); 


let me = {
  age : 26,
  isWorking : true,
  saluta : function() {
               console.log("Hiii");
}
};
me.name = "Fabio";

console.log(me," and ", genres);
