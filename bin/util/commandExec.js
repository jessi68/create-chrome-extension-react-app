
const execCommandSynchronized = function(command) {
    require("child_process").execSync(command).toString();
}

export default execCommandSynchronized;