const { Command } = require("@oclif/command");

class InstallCommand extends Command {
  async run() {
    this.log(`TODO: theme:install`);
  }
}

InstallCommand.description = `Install theme(s) from the BlacksmithJS community repository
...
Extra documentation goes here
`;

module.exports = InstallCommand;
