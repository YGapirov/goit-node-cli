const { program } = require("commander");
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts");

// // TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // ...
      const allContacts = await listContacts();
      console.table(allContacts);
      break;

    case "get":
      // ... id
      const contact = await getContactById(id);
      console.table(contact);
      break;

    case "add":
      // ... name email phone
      const newContact = await addContact(name, email, phone);
      console.table(newContact);
      break;

    case "remove":
      // ... id
      const removedContact = await removeContact(id);
      console.table(removedContact);

      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "e6ywwRe4jcqxXfCZOj_1e3" });
// invokeAction({
//   action: "add",
//   name: "Yurii Gapirov",
//   email: "gasdas@mail.com",
//   phone: "123456789",
// });
// invokeAction({ action: "remove", id: "-RrkV7v_T_N8XBcoyY5Ww" });

invokeAction(options);
