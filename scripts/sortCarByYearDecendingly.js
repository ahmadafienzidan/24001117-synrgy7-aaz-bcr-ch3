function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini

  // // Pakai function Expression
  // let yearDescent = function (a, b) {
  //   return b.year - a.year;
  // };
  // result.sort(yearDescent);

  result.sort(function (a, b) {
    return b.year - a.year;
  });

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
