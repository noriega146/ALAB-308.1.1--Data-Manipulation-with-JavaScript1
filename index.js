// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


  //Part1 Mathproblems
  //Check if all #'s divisible by 5. Cache result in variable 
  const alldivisibleby5 = n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;
  console.log('All #s are divisible by 5: ${alldivisibleby5}');

  //Check if first # is > than the last 
  const firstlargerthanlast = n1>n4;
  console.log('First # is larger than last: ${firstlargerthanlast}');

  //arithmetic chain
  const arithmeticchain = ((n2-n1)*n3)%n4;
  console.log ('Result = ${arithmeticchain}');

  //Check if any # is over 25 with out ! OR 
  const under25 = n1<=25 && n2<=25 && n3<=25 && n4<=25;
  console.log ('No number is over 25: ${under25}'); 

  //update isvalid to use under25
  const isvalid = isSum50 && isTwoOdd && under25 && isUnique;
  console.log('The 4 numbers are valid according to the provided criteria: ${isvalid}');


  //Part2 Practical math for the road trip 
  //varibales for the trip 
  const distance = 1500; //miles 
  const fuelcost = 3; // $$ per gallon 
  const budget = 175; // dollars
  
  //miles per gallon at different speeds

  const fueleffi55 = 30; 
  const fueleffi60 = 28; 
  const fueleffi75 = 23; 

  //calculate fuel neeed for trip at different speeds

  const gallonneededat55 = distance / fueleffi55;
  const gallonneededat60 = distance / fueleffi60;
  const gallonneededat75 = distance / fueleffi75;

  console.log('Gallons neeed at 55 mph: ${gallonneededat55}');
  console.log('Gallons neeed at 60 mph: ${gallonneededat60}');
  console.log('Gallons neeed at 75 mph: ${gallonneededat75}');

  //calculate total fuel cost for the trip at different speeds

  const totalcostat55 = gallonneededat55 * fuelcost;
  const totalcostat60 = gallonneededat60 * fuelcost;
  const totalcostat75 = gallonneededat75 * fuelcost;

  console.log('Total fuel cost at 55mph: $${totalcostat55}');
  console.log('Total fuel cost at 60mph: $${totalcostat60}');
  console.log('Total fuel cost at 75mph: $${totalcostat75}');

  //Check if enough budget 
  const enoughbudgetat55 = totalcostat55 <= budget;
  const enoughbudgetat60 = totalcostat60 <= budget;
  const enoughbudgetat75 = totalcostat75 <= budget;

  console.log('Is budget enought at 55 mph: ${enoughbudgetat55}');
  console.log('Is budget enought at 60 mph: ${enoughbudgetat60}');
  console.log('Is budget enought at 75 mph: ${enoughbudgetat75}');

  //Trip duration at different speeds 
  const tripdurationat55 = distance / 55;
  const tripdurationat60 = distance / 60;
  const tripdurationat75 = distance / 75;

  console.log('Trip duration at 55mph:${tripdurationat55}');
  console.log('Trip duration at 60mph:${tripdurationat60}');
  console.log('Trip duration at 75mph:${tripdurationat75}');

  // best speed based on fuel efficiency and budget 
  let bestspeed;
  if (enoughbudgetat55){
    bestspeed = 55;
  } else if (enoughbudgetat60){
    bestspeed = 60;
  }else {
    bestspeed = 75
  }

  console.log(' The best speed based on budget and efficiency: ${bestspeed}');











