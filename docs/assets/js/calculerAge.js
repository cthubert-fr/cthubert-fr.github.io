
function calculerAge(dateNaissance) {
  const aujourdhui = new Date();
  const naissance = new Date(dateNaissance);

  let age = aujourdhui.getFullYear() - naissance.getFullYear();
  const moisDiff = aujourdhui.getMonth() - naissance.getMonth();

  // Si l'anniversaire n'est pas encore passé cette année, on retire 1 an
  if (moisDiff < 0 || (moisDiff === 0 && aujourdhui.getDate() < naissance.getDate())) {
    age--;
  }

  return age;
}
