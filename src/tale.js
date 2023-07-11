// Задание 1

const kolobok = (characterName) => {
  if (typeof characterName === "string") {
    characterName = characterName.toLowerCase();

    switch (characterName) {
      case "дедушка":
        console.log("Я от дедушки ушел!");
        break;
      case "заяц":
        console.log("Я от зайца ушел!");
        break;
      case "лиса":
        console.log("Меня съели...");
        break;
      default:
        console.log(`Я не знаю персонажа с именем ${characterName}`);
        break;
    }
  }

  if (typeof characterName !== "string") {
    console.log("Укажите имя персонажа в формате строки");
  }
};

kolobok("дЕдУшКа");
kolobok("ЗАЯЦ");
kolobok("Лиса");
kolobok("Рандом");
kolobok(true);

// Задание 2

const newYear = (characterName) => {
  if (typeof characterName === "string") {
    switch (characterName) {
      case "дед мороз":
      case "снегурочка":
        for (let i = 0; i < 3; i++) {
          console.log(`${characterName}!`);
        }
        break;
      default:
        console.log(`Введите корректное имя персонажа`);
    }
  }

  if (typeof characterName !== "string") {
    console.log("Укажите имя персонажа в формате строки");
  }
};

newYear("дед мороз");
