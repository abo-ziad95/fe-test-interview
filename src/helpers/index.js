const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

export const fakeApi = (data, timeout = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const showRandomError = getRandomInt(9) === 5;

      if (showRandomError) {
        reject({ message: "Error message" });
      } else {
        resolve(data);
      }
    }, timeout);
  });
};
