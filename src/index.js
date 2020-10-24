module.exports = function toReadable (number) {
  let finalStr = [];
  
  if(number === 0){
    return 'zero';
  }
  if(number >= 100){
    switch(Math.floor(number/100)){
      case 1:
        finalStr.push('one hundred');
      break;
      
      case 2:
        finalStr.push('two hundred');
      break;
      
      case 3:
        finalStr.push('three hundred');
      break;
      
      case 4:
        finalStr.push('four hundred');
      break;
      
      case 5:
        finalStr.push('five hundred');
      break;
      
      case 6:
        finalStr.push('six hundred');
      break;
      
      case 7:
        finalStr.push('seven hundred');
      break;
      
      case 8:
        finalStr.push('eight hundred');
      break;
      
      case 9:
        finalStr.push('nine hundred');
      break;
    }
    number = number % 100;
  }
  if(number >= 20){
    switch(Math.floor(number/10)){
      case 2:
        finalStr.push('twenty');
      break;
      
      case 3:
        finalStr.push('thirty');
      break;
      
      case 4:
        finalStr.push('forty');
      break;
      
      case 5:
        finalStr.push('fifty');
      break;
      
      case 6:
        finalStr.push('sixty');
      break;
      
      case 7:
        finalStr.push('seventy');
      break;
      
      case 8:
        finalStr.push('eighty');
      break;
      
      case 9:
        finalStr.push('ninety');
      break;
    }
    number = number % 10;
  }
  if(number >= 1){
    switch(number){
      case 1:
        finalStr.push('one');
      break;
      
      case 2:
        finalStr.push('two');
      break;
      
      case 3:
        finalStr.push('three');
      break;
      
      case 4:
        finalStr.push('four');
      break;
      
      case 5:
        finalStr.push('five');
      break;
      
      case 6:
        finalStr.push('six');
      break;
      
      case 7:
        finalStr.push('seven');
      break;
      
      case 8:
        finalStr.push('eight');
      break;
      
      case 9:
        finalStr.push('nine');
      break;
      
      case 10:
        finalStr.push('ten');
      break;

      case 11:
        finalStr.push('eleven');
      break;
      
      case 12:
        finalStr.push('twelve');
      break;
      
      case 13:
        finalStr.push('thirteen');
      break;
      
      case 14:
        finalStr.push('fourteen');
      break;
      
      case 15:
        finalStr.push('fifteen');
      break;
      
      case 16:
        finalStr.push('sixteen');
      break;
      
      case 17:
        finalStr.push('seventeen');
      break;
      
      case 18:
        finalStr.push('eighteen');
      break;
      
      case 19:
        finalStr.push('nineteen');
      break;
    }
  }

  return finalStr.join(' ');
}
