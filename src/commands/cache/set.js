const { Command } = require("@oclif/command");

class SetCommand extends Command {
  async run() {
    this.log(`TODO: cache:set`);
  }
}

SetCommand.description = `Cache an object expressed in JSON
...
Extra documentation goes here
`;

module.exports = SetCommand;
