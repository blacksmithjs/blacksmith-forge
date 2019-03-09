const { Command } = require("@oclif/command");

class UninstallCommand extends Command {
  async run() {
    this.log(`TODO: theme:uninstall`);
  }
}

UninstallCommand.description = `Uninstall theme(s)
...
Extra documentation goes here
`;

module.exports = UninstallCommand;
