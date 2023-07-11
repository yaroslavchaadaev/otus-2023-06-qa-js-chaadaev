// Задание 1

const kolobok = (characterName) => {
  if (typeof characterName === "string") {
    characterName = characterName.toLowerCase();

    switch (characterName) {
      case "дедушка":
        return "Я от дедушки ушел!";
      case "заяц":
        return "Я от зайца ушел!";
      case "лиса":
        return "Меня съели...";
      default:
        return `Я не знаю персонажа с именем ${characterName}`;
    }
  }

  if (typeof characterName !== "string") {
    return "Укажите имя персонажа в формате строки";
  }
};

kolobok("дЕдУшКа");
kolobok("ЗАЯЦ");
kolobok("Лиса");
kolobok("Рандом");
kolobok(true);

// Задание 2 ПЕРЕДЕЛАТь

const newYear = (characterName) => {
  if (typeof characterName === "string") {
    let customCharacterName = "";

    switch (characterName) {
      case "дед мороз":
      case "снегурочка":
        for (let i = 0; i < 3; i++) {
          customCharacterName += characterName + "!";
          customCharacterName += " ";
        }
        return customCharacterName;
      default:
        return "Введите корректное имя персонажа";
    }
  }

  if (typeof characterName !== "string") {
    return "Укажите имя персонажа в формате строки";
  }
};

newYear("дед мороз");
newYear("снегурочка");
newYear("колобок");
newYear(5);
