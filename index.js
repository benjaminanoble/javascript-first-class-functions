function runFiveMiles() {
  console.log('Go for a five-mile run');
}

function liftWeights() {
  console.log('Pump iron');
}

function swimFortyLaps() {
  console.log('Swim 40 laps');
}

function exerciseRoutine(postRunActivity) {
  runFiveMiles();
  postRunActivity();
}

function monday() {
  exerciseRoutine(liftWeights);
}

function tuesday() {
  exerciseRoutine(function() {
    console.log('Stretch! Work that core!');
  });

function wednesday() {
  exerciseRoutine(runFiveMiles);
}

function thursday() {
  exerciseRoutine(liftWeights);
}

function friday() {
  exerciseRoutine(swimFortyLaps);
}

function morningRoutine(exercise) {
  var breakfast = null;

  if (exercise === liftWeights) {
    breakfast = 'protein bar';
  } else if (exercise === swimFortyLaps) {
    breakfast = 'kale smoothie';
  } else {
    breakfast = 'granola';
  }

  exerciseRoutine(exercise);

  return function() {
    console.log(`Nom nom nom, this ${breakfast} is delicious!`);
  };
}

var afterExercise = morningRoutine(liftWeights);
afterExercise();

