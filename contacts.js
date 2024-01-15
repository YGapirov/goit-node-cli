// У файл contacts.js зроби імпорт модулів fs (у версії, яка працює з промісами - fs/promises) і path для роботи з файловою системою.
// Створи змінну contactsPath і запиши в неї шлях до файлу contacts.json. Для складання шляху використовуй методи модуля path.
// Додай асинхронні функції для роботи з колекцією контактів. У функціях використовуй модуль fs та його методи readFile() і writeFile(). Відповідні функції мають повертати необхідні дані за допомогою оператора return. Вивід в консоль в написаних функціях здійснюватись не повинен.
// Зроби експорт створених функцій.

const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contact.json"); //пас джоін обєднання шляху до поточного каталогу, папки і імелі файлу

async function listContacts() {
  // ...твій код. Повертає масив контактів.
  const allContacts = await fs.readFile("contactsPath", "utf-8");
}

async function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
}

module.exports = {
  allContacts,
};
