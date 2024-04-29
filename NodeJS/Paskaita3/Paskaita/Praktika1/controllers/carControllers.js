const cars = [];

export function getCarsController(req, res) {
  res.json(cars);
}

export function addNewCar(req, res) {
  const body = req.body;
  console.log(body);

  cars.push(body);

  res.json({
    success: true,
  });
}
