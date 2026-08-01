const coinFlip = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isHeads = Math.random() < 0.5;
      if (isHeads) resolve("Heads");
      else reject("Tails");
    }, 500);
  });
};

const tryFlip = async () => {
  try {
    const result = await coinFlip();
    console.log(`You got ${result}, you win!`);
  } catch (result) {
    console.log(`You got ${result}, you lose!`);
  }
};

tryFlip();