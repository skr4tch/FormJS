let programTheme = document.querySelector("#programTheme");

let endDateField, placeField, districtField, responsiblePersonsField;

endDateField = document.querySelector("#endDate");
placeField = document.querySelector("#place");
districtField = document.querySelector("#district");
responsiblePersonsField = document.querySelector("#responsiblePersons");

const programsData = [
  {
    id: 0,
    theme: "Не выбрано",
    date: null,
    place: null,
    district: null,
    respPersons: null,
  },
  {
    id: 1,
    theme: "Эффективные практики инклюзивного образования в сельской школе",
    date: "05.10.2020",
    place: "МКОУ Варламовская СОШ",
    district: "Болотнинский район",
    respPersons: [
      {
        name: "Бугаева Юлия Владимировна",
        position: "куратор СП",
        respPersonEmail: "shkolasvitko@mail.ru",
      },
      {
        name: "Иванова Ю.Н",
        position: "методист Мошковского филиала",
        respPersonEmail: "Julia_74_28@mail.ru",
      },
    ],
  },
  {
    id: 2,
    theme:
      "Психолого-педагогический консилиум, как инструмент сопровождения обучающихся с ограниченными возможностями здоровья в образовательном процессе",
    date: "09.12.2020",
    place: "МКОУ Болтовская СОШ",
    district: "Сузунский район",
    respPersons: [
      {
        name: "Бочкова Екатерина Валерьевна",
        position: "куратор СП",
        respPersonEmail: "bochkova.nsk@mail.ru",
      },
      {
        name: "Козлова Е.Н",
        position: "методист Сузунского филиала",
        respPersonEmail: "lena.kozlova.76@inbox.ru",
      },
    ],
  },
  {
    id: 3,
    theme:
      "Инклюзия. Художественно-эстетическое образование как развивающий ресурс в работе с детьми с ограниченными возможностями здоровья",
    date: "08.12.2020",
    place: "МБОУ СОШ №3 Пеликан",
    district: "г. Бердск",
    respPersons: [
      {
        name: "Гладышева Наталья Дмитриевна",
        position: "куратор СП",
        respPersonEmail: "s_3_berds@edu54.ru",
      },
      {
        name: "Тихонова О.В.",
        position: "методист ОЦДК",
        respPersonEmail: "baranova.79@inbox.ru",
      },
    ],
  },
];

programTheme.addEventListener("change", (event) => {
  if (event.target.value === programsData[0].theme) {
    endDateField.value = programsData[0].date;
    placeField.value = programsData[0].place;
    districtField.value = programsData[0].district;
    responsiblePersonsField.value = programsData[0].respPersons;
  }

  if (event.target.value === programsData[1].theme) {
    endDateField.value = programsData[1].date;
    placeField.value = programsData[1].place;
    districtField.value = programsData[1].district;
    responsiblePersonsField.value = `${programsData[1].respPersons[0].name}, ${programsData[1].respPersons[1].name}`;
  }
});

function fillOptions(optionsArr) {
  optionsArr.forEach((item) => {
    const option = document.createElement("option");
    option.textContent = item.theme;
    programTheme.appendChild(option);
  });
}

fillOptions(programsData);
