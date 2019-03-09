const { Command } = require("@oclif/command");

class UpdateCommand extends Command {
  async run() {
    this.log(`TODO: plugins:update`);
  }
}

UpdateCommand.description = `Update plugin(s)
...
Extra documentation goes here
`;

module.exports = UpdateCommand;
