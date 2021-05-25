const collectAnswers = require("./collectAnswers");

const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you going to do with nodeJs? "
];

// collectAnswers(questions, answers => {
//     console.log("Thank You for your answers");
//     console.log(answers);
//     process.exit;
// });


collectAnswers(questions);

