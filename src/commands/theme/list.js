const { Command } = require("@oclif/command");

class ListCommand extends Command {
  async run() {
    this.log(`TODO: theme:list`);
  }
}

ListCommand.description = `List installed themes
...
Extra documentation goes here
`;

module.exports = ListCommand;
