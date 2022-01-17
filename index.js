function wakeDog(dogName, dogBreed) {
  const wake = `Wake ${dogName} the ${dogBreed}`;
  console.log(wake);
  return wake
}

function leashDog(dogName, dogBreed) {
  const leash = `Leash ${dogName} the ${dogBreed}`;
  console.log(leash);
  return leash
}

function walkToPark(dogName, dogBreed) {
  const walk = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(walk);
  return walk
}

function throwFrisbee(dogName, dogBreed) {
  const throwIt = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(throwIt);
  return throwIt
}

function walkHome(dogName, dogBreed) {
  const walkHm = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(walkHm);
  return walkHm
}

function unleashDog(dogName, dogBreed) {
  const unleash = `Unleash ${dogName} the ${dogBreed}`;
  console.log(unleash);
  return unleash
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
  const dogCommands = [];

  for (let i = 0; i < routine.length; i++) {
    const activity = routine[i](dogName, dogBreed);
    dogCommands.push(activity);
  }

  return dogCommands;
}