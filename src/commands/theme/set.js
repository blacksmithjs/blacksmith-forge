const { Command } = require("@oclif/command");

class SetCommand extends Command {
  async run() {
    this.log(`TODO: theme:set`);
  }
}

SetCommand.description = `Set active theme
...
Extra documentation goes here
`;

module.exports = SetCommand;
