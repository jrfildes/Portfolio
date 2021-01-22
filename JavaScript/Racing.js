let raceNumber = Math.floor(Math.random() * 1000);

let earlyregistry = true

let runnerage = 18


if (runnerage > 18 && earlyregistry == true)
  {raceNumber += 1000};

if (runnerage > 18 && earlyregistry == true)
  {console.log(`You will start at 9:30 am and your race number is ${raceNumber}`)}
else if (runnerage > 18 && earlyregistry != true)
  {console.log(`You will start at 11:00 am and your race number is ${raceNumber}`)}

else if (runnerage < 18)
  {console.log(`You will start at 12:30 pm and your race number is ${raceNumber}`)}

else
  {console.log('Please go see the registration desk')}
