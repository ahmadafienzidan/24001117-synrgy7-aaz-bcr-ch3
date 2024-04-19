// function sortCarByYearDescendingly(cars) {
//   // Sangat dianjurkan untuk console.log semua hal hehe
//   console.log(cars);

//   // Clone array untuk menghindari side-effect
//   // Apa itu side effect?
//   const result = [...cars];

//   // Tulis code-mu disini

//   // // Pakai function Expression
//   // let yearDescent = function (a, b) {
//   //   return b.year - a.year;
//   // };
//   // result.sort(yearDescent);

// result.sort(function (a, b) {
//   return b.year - a.year;
// });

//   // Rubah code ini dengan array hasil sorting secara descending
//   return result;
// }

function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  let flag;
  do {
    flag = false;
    for (let i = 0; i < result.length - 1; i++) {
      if (result[i].year < result[i + 1].year) {
        const temp = result[i];
        result[i] = result[i + 1];
        result[i + 1] = temp;
        flag = true;
      }
    }
  } while (flag);

  // Rubah code ini dengan array hasil sorting secara descending
  console.log(result);
  return result;
}
