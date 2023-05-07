const data = require("./data");
const yargs = require("yargs");
yargs.command({
  command: "add",
  describe: "to add an item",
  builder: {
    fname: {
      describe: "this is the first name in add command ",
      // demandOption: true,
      type: "string",
    },
    lname: {
      describe: "this is the last name in add command ",
      // demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    data.addperson(x.fname, x.lname, x.age, x.city, x.id);
  },
});

yargs.command({
  command: "delete",
  describe: "to deleted an item",
  handler: (x) => {
    data.deletedData(x.id);
  },
});

yargs.command({
  command: "read",
  describe: "Read data",
  builder: {
    id: {
      describe: "this is id desc in read command ",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    data.readData(x.id);
  },
});

yargs.command({
  command: "list",
  describe: "list data",
  handler: () => {
    data.listData();
  },
});

console.log(yargs.argv);
