// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = () => drivers.slice(0,2);   
const returnLastTwoDrivers = () => drivers.slice(2,4);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (num) => {
  const fareMultiplier = () => num * num

  return fareMultiplier
}  
    
    
 
   function fareDoubler(fareMultiplier) {
    return fareMultiplier * 2
  }
    
  function fareTripler(fareMultiplier) {
    return fareMultiplier * 3
  }

  const selectDifferentDrivers = (array, functionName) => {
    return functionName(array)

  }
  


 

