const userSettings = {
  calories: 2700,
  protein: 150,
};

const fakeHistory = [
  {
    id: "12379129",
    date: "13/11/2020",
    calories: {
      target: "2600",
      actual: "2700",
    },
    protein: {
      target: "150",
      actual: "135",
    },
  },
  {
    id: "12387610",
    date: "14/11/2020",
    calories: {
      target: "2600",
      actual: "2600",
    },
    protein: {
      target: "150",
      actual: "155",
    },
  },
  {
    id: "17610129",
    date: "15/11/2020",
    calories: {
      target: "2600",
      actual: "2600",
    },
    protein: {
      target: "150",
      actual: "100",
    },
  },
  {
    id: "123876124",
    date: "16/11/2020",
    calories: {
      target: "2600",
      actual: "2700",
    },
    protein: {
      target: "150",
      actual: "135",
    },
  },
];

export const updateSettings = (calories, protein) => {
  userSettings.calories = calories;
  userSettings.protein = protein;
};

export const getSettings = () => {
  return userSettings;
};

export const saveDay = (data) => {
  data.id = Date.now().toString();
  const date = new Date();
  const localDate = date.toLocaleDateString("en-GB");
  data.date = localDate;
  fakeHistory.push(data);
};

export const getHistory = () => {
  return fakeHistory;
};
