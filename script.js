// function pow(num, degree) {
//     if (degree === 1) {
//       console.log(num)
//     } else {
//       console.log(degree * Math.pow(num ** degree));
//     }
//   }
//   console.log(Math.pow(2,8));

function pow( num, degree ) {
  if(degree === 1) {
      return num;
  } else {
      return num * pow(num, degree - 1);
  }
}
console.log(pow(3,2))