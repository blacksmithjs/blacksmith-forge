const { Command } = require("@oclif/command");

class UpdateCommand extends Command {
  async run() {
    this.log(`TODO: theme:update`);
  }
}

UpdateCommand.description = `Update theme(s)
...
Extra documentation goes here
`;

module.exports = UpdateCommand;
