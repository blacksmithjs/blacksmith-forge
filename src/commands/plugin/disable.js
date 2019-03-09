const { Command } = require("@oclif/command");

class DisableCommand extends Command {
  async run() {
    this.log(`TODO: plugin:disable`);
  }
}

DisableCommand.description = `Disable plugin(s)
...
Extra documentation goes here
`;

module.exports = DisableCommand;
