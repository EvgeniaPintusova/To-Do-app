const groupBy = (arr, keyValue) => {
  if (!arr) {
    throw new Error("No array in function");
  }
  if (!keyValue) {
    throw new Error("No key in function");
  }
  try {
    const res = [];
    arr.forEach((el) => {
      Object.keys(el).forEach((key) => {
        if (el[key] === keyValue) {
          res.push(el);
        }
      });
    });
    return {[keyValue]: res};
  } catch (e) {
    throw new Error(e);
  }
};

const data = [
  { id: 1, universe: "marvel", name: "Spider Man", city: "NY" },
  { id: 2, universe: "marvel", name: "Iron Man", city: "LA" },
  { id: 3, universe: "dc", name: "Aqua Man", city: "NY" },
  { id: 4, universe: "dc", name: "Bat Man", city: "NY" },
  { id: 5, universe: "msc", name: "Hulk", city: "Moskow" },
  { id: 6, universe: "msc", name: "Super Man", city: "Minsk" },
  { id: 7, universe: "msc", name: "Fire Man", city: "Minsk" },
  { id: 8, universe: "power", name: "Torr", city: "Minsk" },
  { id: 9, universe: "power", name: "Hulk", city: "LA" },
];
console.log(groupBy(data, "dc"));
