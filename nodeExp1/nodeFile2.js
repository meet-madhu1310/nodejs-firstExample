let questions = [
  "What is your nick name?",
  "How many times did you have sex?",
  "Did you really enjoy those moments?"
];

function ask(i) {
  process.stdout.write(`\n\n ${questions[i]}`);
  process.stdout.write(": ");
}

let answers = [];

process.stdin.on('data', function(data) {

  answers.push(data.toString());

  if (answers.length < questions.length)
    ask(answers.length);
  else
    process.exit();

});

process.on('exit', function() {

  process.stdout.write("\n\n");
  process.stdout.write(`Now I know your name is ${answers[0]}, you had sex ${answers[1]} times and you enjoyed or not? ${answers[2]}`);

});

ask(0);
