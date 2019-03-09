const { Command } = require("@oclif/command");

class ImportCommand extends Command {
  async run() {
    this.log(`TODO: config:import`);
  }
}

ImportCommand.description = `Import configuration from file
...
Extra documentation goes here
`;

module.exports = ImportCommand;
