$(document).ready(function () {

    // event listeners
    $("#remaining-time").hide();
    $("#start").on('click', trivia.startGame);
    $(document).on('click', '.option', trivia.guessChecker);

})

var trivia = {
    // trivia properties
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    currentSet: 0,
    timer: 20,
    timerOn: false,
    timerId: '',
    // questions options and answers data
    questions: {
        q1: 'What New York City (NYC) Art Deco building has six levels of stainless steel arches topped by a lit lancet spire on its top?',
        q2: 'The city of New York is made up of ______ boroughs?',
        q3: 'What NYC museum started in Gracie Mansion and later moved to 5th Ave. between 103rd St. and 104th St.?',
        q4: 'The largest art museum in the Western Hemisphere is located in NYC, what is its name?',
        q5: 'One of the most unusual gardens in NYC, until June 29th 2002, had sculptures by Matisse, Miro, and Rodin. This garden was at the ________?',
        q6: 'One of the great bridges into Manhattan was designed by John Roebling with Gothic arches, and opened in 1883, it is the ________________?',
        q7: 'What is the oldest bridge in NYC?'
    },
    options: {
        q1: [''],
        q2: [''],
        q3: [''],
        q4: [''],
        q5: [''],
        q6: [''],
        q7: ['High Bridge', 'Brooklyn Bridge', 'Williamsburg Bridge', 'Triboro Bridge']
    },
    answers: {
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        q6: '',
        q7: 'High Bridge'
    },