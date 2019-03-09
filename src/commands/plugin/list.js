const { Command } = require("@oclif/command");

class ListCommand extends Command {
  async run() {
    this.log(`TODO: plugins:list`);
  }
}

ListCommand.description = `List installed plugins
...
Extra documentation goes here
`;

module.exports = ListCommand;
