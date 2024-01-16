// У файл contacts.js зроби імпорт модулів fs (у версії, яка працює з промісами - fs/promises) і path для роботи з файловою системою.
// Створи змінну contactsPath і запиши в неї шлях до файлу contacts.json. Для складання шляху використовуй методи модуля path.
// Додай асинхронні функції для роботи з колекцією контактів. У функціях використовуй модуль fs та його методи readFile() і writeFile(). Відповідні функції мають повертати необхідні дані за допомогою оператора return. Вивід в консоль в написаних функціях здійснюватись не повинен.
// Зроби експорт створених функцій.

const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db", "contacts.json"); //пас джоін обєднання шляху до поточного каталогу, папки і імелі файлу

async function listContacts() {
  // ...твій код. Повертає масив контактів.
  const data = await fs.readFile(contactsPath, "utf-8"); //parse сам робе ютф-8, можем не прописувати
  return JSON.parse(data);
}

async function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  const contacts = await listContacts();
  const contact = contacts.find((item) => item.id === contactId);
  return contact || null;
}

async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === contactId); //пошук книжки яку треба видалити
  if (index === -1) return null; //якщо книжку не знайшли повернули нал
  const [result] = contacts.splice(index, 1); //повернувся масив з одним елементов видаленим, і записали в змінну
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
}

async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
