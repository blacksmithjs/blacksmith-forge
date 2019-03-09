const { Command } = require("@oclif/command");

class GetCommand extends Command {
  async run() {
    this.log(`TODO: cache:get`);
  }
}

GetCommand.description = `Fetch a cached object and display it
...
Extra documentation goes here
`;

module.exports = GetCommand;
