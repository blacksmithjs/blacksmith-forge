const { Command } = require("@oclif/command");

class EnableCommand extends Command {
  async run() {
    this.log(`TODO: plugins:enable`);
  }
}

EnableCommand.description = `Enable plugin(s)
...
Extra documentation goes here
`;

module.exports = EnableCommand;
