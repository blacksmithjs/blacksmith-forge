const { Command } = require("@oclif/command");

class InstallCommand extends Command {
  async run() {
    this.log(`TODO: plugin:install`);
  }
}

InstallCommand.description = `Install plugin(s) from the BlacksmithJS community repository
...
Extra documentation goes here
`;

module.exports = InstallCommand;
