const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(
  "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ? \n",
  answer => {
    pyramide(answer);

    rl.close();
  }
);
const pyramide = n => {
  let output = "";
  if (n < 25) {
    for (let i = 1; i <= n; i++) {
      for (let k = 1; k <= n - i; k++) {
        output += " ";
      }
      for (let j = 1; j <= i; j++) {
        output += "# ";
      }
      console.log(output);
      output = "";
    }
  } else {
    console.log("we can't go past 25");
  }
};
