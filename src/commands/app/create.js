const { Command } = require("@oclif/command");

class CreateCommand extends Command {
  async run() {
    this.log(`TODO: app:create`);
  }
}

CreateCommand.description = `Create a BlacksmithJS app
...
Extra documentation goes here
`;

module.exports = CreateCommand;
