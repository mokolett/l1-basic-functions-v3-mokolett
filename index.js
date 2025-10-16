const showInfo = (content) => {
  const lines = content.trim().split('\n');
  const dataLines = lines.slice(1); // Пропускаем заголовок

  // Шаг 1: Количество автомобилей
  const carCount = dataLines.length;
  console.log(`Количество автомобилей: ${carCount}`);

  // Шаг 2: Средний пробег
  const totalMileage = dataLines.reduce((sum, line) => {
    const columns = line.split(',');
    return sum + parseInt(columns[4], 10); // Пробег в 5-й колонке (индекс 4)
  }, 0);
  const averageMileage = Math.round(totalMileage / carCount);
  console.log(`Средний пробег: ${averageMileage}`);

  // Шаг 3: Самая дорогая машина
  const maxPrice = Math.max(...dataLines.map((line) => {
    const columns = line.split(',');
    return parseInt(columns[7], 10); // Цена в 8-й колонке (индекс 7)
  }));
  console.log(`Стоимость самой дорогой машины: ${maxPrice}`);

  // Шаг 4: Самый старый автомобиль
  const oldestCar = dataLines.reduce((oldest, line) => {
    const columns = line.split(',');
    const year = parseInt(columns[2], 10); // Год в 3-й колонке (индекс 2)
    const brand = columns[0]; // Марка в 1-й колонке (индекс 0)
    const model = columns[1]; // Модель во 2-й колонке (индекс 1)

    if (year < oldest.year) {
      return { year, brand, model };
    }
    return oldest;
  }, { year: Infinity, brand: '', model: '' });
  console.log(`Самый старый автомобиль: ${oldestCar.brand} ${oldestCar.model}`);

  // Шаг 5: Подсчет цветов
  const colorCount = {};
  dataLines.forEach((line) => {
    const columns = line.split(',');
    const color = columns[8]; // Цвет в 9-й колонке (индекс 8)
    colorCount[color] = (colorCount[color] || 0) + 1;
  });

  const colorString = Object.entries(colorCount)
    .map(([color, count]) => `${color}: ${count}`)
    .join(', ');
  console.log(`Все цвета: ${colorString}`);
};

export default showInfo;
