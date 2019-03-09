const { Command } = require("@oclif/command");

class CreateCommand extends Command {
  async run() {
    this.log(`TODO: plugin:create`);
  }
}

CreateCommand.description = `Create a new plugin
...
Extra documentation goes here
`;

module.exports = CreateCommand;
