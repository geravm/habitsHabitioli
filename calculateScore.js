const HARD = 5;
const MEDIUM = 3;
const EASY = 2;

const PLUS_BAD = 1;
const PLUS_REGULAR = 0.5;
const PLUS_GOOD = 0;
const MINUS_BAD = -2;
const MINUS_REGULAR = -1.5;
const MINUS_GOOD = -1;

const NO_EXTRA = 0;
const EXTRA = 1;

module.exports = function(score, plusMinus, difficulty){
    var colour;
    var extra;
    var mult;
    var how_hard;

    if (score < 0){
			colour = "red";
		} else if (0 <= score && score < 11){
			colour = "orange";
		} else if (10 < score && score < 41 ){
			colour = "yellow";
		} else if (40 < score && score < 51){
			colour = "green";
		} else {
			colour = "blue";
		}

    if (plusMinus == "plus"){
      if(colour == "red" ||
         colour == "orange" ||
         colour == "yellow"){
           extra = NO_EXTRA;
           mult = PLUS_BAD;
      }else if(colour == "green"){
           extra = NO_EXTRA;
           mult = PLUS_REGULAR;
      }else if(colour == "blue"){
           extra = EXTRA;
           mult = PLUS_GOOD;
      }
    }else if(plusMinus == "minus"){
      if(colour == "red"){
           extra = NO_EXTRA;
           mult = MINUS_BAD;
      }else if(colour == "orange"){
           extra = NO_EXTRA;
           mult = MINUS_REGULAR;
      }else if
        (colour == "yellow" ||
         colour == "green" ||
         colour == "blue"){
           extra = NO_EXTRA;
           mult = MINUS_GOOD;
      }
    }

    if(difficulty == "hard"){
      how_hard = HARD;
    }else if(difficulty == "medium"){
      how_hard = MEDIUM;
    }else if(difficulty == "easy"){
      how_hard = EASY;
    }

    score = score + (mult * how_hard) + extra;
    if (score < 0){
  		colour = "red";
  	} else if (0 <= score && score < 11){
			colour = "orange";
  	} else if (10 < score && score < 41 ){
  		colour = "yellow";
  	} else if (40 < score && score < 51){
		  colour = "green";
	  } else {
  		colour = "blue";
  	}
    return [score, colour]
}
