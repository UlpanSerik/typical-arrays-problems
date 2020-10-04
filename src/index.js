
exports.min = function min (array) {
  if (array === undefined || array[0] === undefined){
  return 0;
} else { let minV = array[0];
  for (let i = 0; i<array.length; i++){
    if (array[i]<minV)
    {
      minV = array[i];
    }
  }
  return minV;
}
}

exports.max = function max (array) {
  if (array === undefined || array[0] === undefined){
  return 0;
} else {let maxV = array[0];
  for (let i = 0; i<array.length; i++){
    if (array[i]>maxV)
    {
      maxV = array[i];
    }
  }
  return maxV;
}}

exports.avg = function avg (array) {
  if (array === undefined || array[0] === undefined){
  return 0;
   } let avgV = 0;
  for (let i = 0; i<array.length; i++){
    avgV += array[i];
  }
  return avgV / array.length;
}
