const showInfo = (content) => {
  const lines = content.trim().split('\n');
  const dataLines = lines.slice(1);

  const carCount = dataLines.length;
  console.log(`Количество автомобилей: ${carCount}`);

  const totalMileage = dataLines.reduce((sum, line) => {
    const columns = line.split(',');
    return sum + parseInt(columns[4], 10); 
  }, 0);
  const averageMileage = Math.round(totalMileage / carCount);
  console.log(`Средний пробег: ${averageMileage}`);

  const maxPrice = Math.max(...dataLines.map((line) => {
    const columns = line.split(',');
    return parseInt(columns[7], 10);
  }));
  console.log(`Стоимость самой дорогой машины: ${maxPrice}`);

  const oldestCar = dataLines.reduce((oldest, line) => {
    const columns = line.split(',');
    const year = parseInt(columns[2], 10);
    const brand = columns[0];
    const model = columns[1];
    if (year < oldest.year) {
      return { year, brand, model };
    }
    return oldest;
  }, { year: Infinity, brand: '', model: '' });
  console.log(`Самый старый автомобиль: ${oldestCar.brand} ${oldestCar.model}`);

  const colorCount = {};
  dataLines.forEach((line) => {
    const columns = line.split(',');
    const color = columns[8];
    colorCount[color] = (colorCount[color] || 0) + 1;
  });

  const colorString = Object.entries(colorCount)
    .map(([color, count]) => `${color}: ${count}`)
    .join(', ');
  console.log(`Все цвета: ${colorString}`);
};

export default showInfo;


