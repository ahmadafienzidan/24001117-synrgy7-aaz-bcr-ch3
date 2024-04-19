// function sortCarByYearAscendingly(cars) {
//   // Sangat dianjurkan untuk console.log semua hal hehe
//   console.log(cars);

//   // Clone array untuk menghindari side-effect
//   // Apa itu side effect?
//   const result = [...cars];

//   // Tulis code-mu disini

//   // // Pakai function Expression
//   // let yearAscent = function (a, b) {
//   //   return a.year - b.year;
//   // };
//   // result.sort(yearAscent);

//   result.sort(function (a, b) {
//     return a.year - b.year;
//   });

//   // Rubah code ini dengan array hasil sorting secara ascending
//   return result;
// }

function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  const result = [...cars];

  // Tulis code-mu disini

  let flag;
  do {
    flag = false;
    for (let i = 0; i < result.length - 1; i++) {
      if (result[i].year > result[i + 1].year) {
        const temp = result[i];
        result[i] = result[i + 1];
        result[i + 1] = temp;
        flag = true;
      }
    }
  } while (flag);

  // Rubah code ini dengan array hasil sorting secara ascending
  console.log(result);
  return result;
}

// console.log(sortCarByYearAscendingly(cars));
