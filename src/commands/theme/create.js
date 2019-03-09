const { Command } = require("@oclif/command");

class CreateCommand extends Command {
  async run() {
    this.log(`TODO: theme:create`);
  }
}

CreateCommand.description = `Create a new theme
...
Extra documentation goes here
`;

module.exports = CreateCommand;
