const getSleepHours = day => {
  switch (day){
  case 'Monday':
  return 6
  break;
  case 'Tuesday':
  return 7
  break;
  case 'Wednesday':
  return 5
  break;
  case 'Thursday':
  return 8
  break;
  case 'Friday':
  return 4
  break;
  case 'Saturday':
  return 9
  break;
  case 'Sunday':
  return 10
  break;
  default:
  return 'Error'
  }
};

const getActualSleepHours = () =>
  getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday')


console.log(getSleepHours('Monday'))

console.log(getActualSleepHours())

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours()
  let idealSleepHours = getIdealSleepHours()
  let sleepDebt = actualSleepHours - idealSleepHours

  if (actualSleepHours === idealSleepHours) {
    console.log(`You got the perfect amount of sleep, ${sleepDebt} hours more than required!`)
  }
    else if (actualSleepHours > idealSleepHours) {
    console.log('You got more than the perfect amount of sleep!')
  }
    else if (actualSleepHours < idealSleepHours) {
    console.log(`You have not slept enough, ${sleepDebt} hours than you should!`)
  }
}

calculateSleepDebt()
