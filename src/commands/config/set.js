const { Command } = require("@oclif/command");

class SetCommand extends Command {
  async run() {
    this.log(`TODO: config:set`);
  }
}

SetCommand.description = `Set a configuration variable
...
Extra documentation goes here
`;

module.exports = SetCommand;
