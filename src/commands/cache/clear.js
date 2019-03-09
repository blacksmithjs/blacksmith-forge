const { Command, flags } = require("@oclif/command");

class ClearCommand extends Command {
  async run() {
    this.log(`TODO: cache:clear`);
  }
}

ClearCommand.description = `Clear all cached objects
...
Extra documentation goes here
`;

module.exports = ClearCommand;
