const { Command } = require("@oclif/command");

class ExportCommand extends Command {
  async run() {
    this.log(`TODO: config:export`);
  }
}

ExportCommand.description = `Export configuration to file
...
Extra documentation goes here
`;

module.exports = ExportCommand;
