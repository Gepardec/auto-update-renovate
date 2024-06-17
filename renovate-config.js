module.exports = {
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    platform: 'github',
    repositories: [
        "Ruhsi/gepardec-default-quarkus"
    ],
    prHourlyLimit: 0,
    postUpgradeTasks: {
        commands: ["ls -l"],
        fileFilters: ["**/*.txt"],
        executionMode: "branch"
    },
    allowScripts: true,
    allowedPostUpgradeCommands: ["touch", "ls", "ls -l"]
}