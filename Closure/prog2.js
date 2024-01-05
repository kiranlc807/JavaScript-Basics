if (Math.random() > 0.5) {
    var x = 1;
  } else {
    var x = 2;
  }
  console.log(x);

// we Can't Access the let and const becuase they are Block Scope
//   if (Math.random() > 0.5) {
//     const x = 1;
//   } else {
//     const x = 2;
//   }
//   console.log(x);  // ReferenceError: x is not defined