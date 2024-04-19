function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini

  // // Pakai function Expression
  // let yearAscent = function (a, b) {
  //   return a.year - b.year;
  // };
  // result.sort(yearAscent);

  result.sort(function (a, b) {
    return a.year - b.year;
  });

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}