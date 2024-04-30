const cars = {
  bmw: ["i3", "i8", "1 series", "3 series", "5 series"],
  mb: ["A class", "C class", "E class", "S class"],
  vw: ["Golf", "Arteon", "UP"],
};

export function getCarsByBrand(req, res) {
  const params = req.params;
  const brand = params.brand;

  const brandArray = cars[brand];
  console.log(brandArray);

  res.json(brandArray);
}
