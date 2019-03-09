const { Command } = require("@oclif/command");

class GetCommand extends Command {
  async run() {
    this.log(`TODO: config:get`);
  }
}

GetCommand.description = `Get a configuration variable
...
Extra documentation goes here
`;

module.exports = GetCommand;
