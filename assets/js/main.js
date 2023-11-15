// ================== lev1_1: date new Date() =========
// Stelle die folgenden Daten im HTML-Dokument mit Hilfe des Befehls new Date() dar.

// Speichere die Werte in einer Variable (date1, date2, …)
// Nutze innerHTML um das Ergebnis darzustellen.
// Teste dann die Werte:
// new Date("September 2, 2019 09:00:00")
// new Date(0)
// new Date(31556908800)
// new Date(86400000)

const outputDate1 = document.body.querySelector("#date1");

const date1 = new Date("September 2, 2019 09:00:00");
const date2 = new Date(0);
const date3 = new Date(31556908800);
const date4 = new Date(86400000);

outputDate1.innerHTML = `${date1}<br> ${date2}<br> ${date3}<br> ${date4}<br>`;

// ================== lev1_3: date new Date() =========

// In dieser Übung lernen wir SET Date Methods.
// Zeige die Daten wie auf dem Screenshot auf und nutze die Set Date Methode.
// In der letzten Zeile wurden 30 Tage auf das damals aktuelle Datum addiert.
// Denkt daran, dass euer Ergebnis sich aufgrund des Datums von dem Screenshot unterscheiden wird.
// Nutzt Google, falls ihr nicht weiterkommt. :)

const date0 = new Date();
console.log(date0);

date0.setFullYear(2222);
date0.setMonth(9);
date0.setDate(23);
console.log(date0);

// ================== lev1_5: date new Date() =========

// Schreibe eine Funktion, die den Monatsnamen anhand eines bestimmten Datums ermittelt.
// Verwende den Code aus dem Kommentar.
// Nutze getMonth() um die Aufgabe zu lösen.
// Überprüfe deine Funktion mit folgenden Argumenten für deine Parameter in der Konsole:

let list = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

const variableDate = new Date(2001, 3, 4);
console.log(variableDate);

const monatsName = (yearParam, monthParam, dayParam) => {
  let newDate = new Date(
    Number(yearParam),
    Number(monthParam),
    Number(dayParam)
  );
  return list[monthParam];
};

console.log(monatsName(2001, 2, 4)); //März
console.log(monatsName(2019, 11, 24)); //Dezember
console.log(monatsName(1410, 06, 15)); //Juli

// ================== lev1_6: AM PM =========

// Schreibe eine Funktion, um AM und PM zu erhalten. Wenn die Uhrzeit kleiner als 12 Uhr ist, wird AM angezeigt. Wenn die Uhrzeit größer als 12 Uhr ist, wird PM angezeigt.
// Die Funktion enthält:
// Ein Parameter
// Ternary Operator oder if
// getHours()
// Überprüfe deine Funktion in der Konsole.
// Teste sie mit folgenden Argumenten:

const date5 = new Date(1999, 10, 5, 15); // PM
const date6 = new Date();
const date7 = new Date(2019, 12, 3, 12); // PM
const date8 = new Date(2000, 1, 1, 11); // AM

let checkTime = (date) => {
  let hours = date.getHours();
  if (hours < 12) {
    console.log(`${hours}AM`);
  } else {
    console.log(`${hours}PM`);
  }
};

checkTime(date5);
checkTime(date6);
checkTime(date7);
checkTime(date8);

// ================== lev1_7: Weekend =========

// Schreibe eine Funktion, die überprüft, ob an einem bestimmten Datum Wochenende ist oder nicht.
// Schreibe eine Funktion und überprüfe dein Ergebnis in der Konsole.
// Nutze:
// Conditionals Statement
// Comparison Operators
// Funktion mit einem Parameter
// Aktuelles Datum
// getDay()
// return "Weekend"
// return "Arbeitstag"

const istWeekend = (dateString) => {
  const currentDate = new Date(dateString);

  let currentDay = currentDate.getDay();

  if (currentDay === 0 || currentDay === 6) {
    return "Weekend";
  } else {
    return "Arbeitstag";
  }
};

console.log(istWeekend("12,15,2019")); // Weekend
console.log(istWeekend("2,16,2001")); // Arbeitstag
console.log(istWeekend("2,1,2020")); // Arbeitstag
console.log(istWeekend("2,29,2020")); // Weekend

// ================== lev1_10: Tag Monat Jahr  =========

// Schreibe eine Funktion, die das aktuelle Datum anzeigt.
// Erwartete Ergebnisse: tt-mm-jjjj oder tt/mm/jjjj. (Tag, Monat, Jahr)
// Nutze Befehle:
// getDate(), getMonth(), getFullYear()
// getElementById() oder querySelector()
// Lass Dir das Ergebnis im HTML-Dokument anzeigen.

const outputDate10 = document.body.querySelector("#date10");
const todayDate = new Date();

const showDate = () => {
  let day = todayDate.getDate();
  let month = todayDate.getMonth() + 1;
  let year = todayDate.getFullYear();

  outputDate10.textContent = `${day}/${month}/${year}`;
};

showDate();
