module.exports = {
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    platform: 'github',
    repositories: [
        "Ruhsi/gepardec-default-quarkus"
    ],
    baseBranches: ["main"],
    allowedPostUpgradeCommands: ["ls"],
    prHourlyLimit: 70,
    postUpgradeTasks: {
        "commands": ["ls -l"]
    },
    recreateWhen: "always"
}