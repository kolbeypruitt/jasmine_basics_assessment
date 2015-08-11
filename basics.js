exports.letterGrader = function (score) {
 if (score > 89.5 && score < 101) {
  if (score > 94.9) {
    return 'A+'
  }
  else {
    return 'A-'
  }
 }
 if (score > 79.5 && score < 90) {
  if (score > 84.5) {
    return 'B+'
  }
  else {
    return 'B-'
  }
 }
 if (score > 69.5 && score < 80) {
  if (score > 74.5) {
    return 'C+'
  }
  else {
    return 'C-'
  }
 }
 if (score > 59.5 && score < 70) {
  if (score > 64.5) {
    return 'D+'
  }
  else {
    return 'D-'
  }
 }
 else {
  return 'F'
  }
}



exports.averageScore = function (scores) {
  var sum = scores.reduce(function(a, b) { return a + b; });
  var avg = sum / scores.length;
  return Math.floor(avg)
}

exports.medianScore = function (scores) {
  var sorted = scores.sort(function(a, b){
    return a-b
  });
  if (scores.length%2===0) {
    return sorted[scores.length/2-1]
  }
  else {return sorted[Math.floor(scores.length/2)]}
}

// exports.modeScore = function (scores) {
//   var catchDoubles = [];
//   scores.reduce(function(previousValue, currentValue)
// });
//     }
//   }
// }