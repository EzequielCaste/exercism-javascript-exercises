//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, ageInSeconds) => {
  //
  let op = 1;
  switch (planet) {
    case 'mercury':
      op = 0.2408467;
      break;
    case 'venus':
      op = 0.61519726;
      break;
    case 'mars':
      op = 1.8808158;
      break;
    case 'saturn':
      op = 29.447498;
      break;
    case 'jupiter':
      op = 11.862615;
      break;
    case 'uranus':
      op = 84.016846;
      break;
    case 'neptune':
      op = 164.79132;
      break;
    default:
      break;
  }
  const ageInMinutes = ageInSeconds / 60;
  const ageInHours = ageInMinutes / 60;
  const ageInDays = ageInHours / 24;
  const ageInYears = ageInDays / (365.25 * op);

  return +ageInYears.toFixed(2);
};
