const { Command, flags } = require("@oclif/command");

class UpdateCommand extends Command {
  async run() {
    const { flags } = this.parse(UpdateCommand);
    const name = flags.name || "world";
    this.log(`TODO: app:update`);
  }
}

UpdateCommand.description = `Update a BlacksmithJS app
...
Extra documentation goes here
`;

UpdateCommand.flags = {
  name: flags.string({ char: "n", description: "name to print" })
};

module.exports = UpdateCommand;
