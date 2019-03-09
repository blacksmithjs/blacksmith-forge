const { Command } = require("@oclif/command");

class UninstallCommand extends Command {
  async run() {
    this.log(`TODO: plugins:uninstall`);
  }
}

UninstallCommand.description = `Uninstall plugin(s)
...
Extra documentation goes here
`;

module.exports = UninstallCommand;
