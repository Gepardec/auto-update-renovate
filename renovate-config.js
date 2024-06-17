module.exports = {
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    platform: 'github',
    repositories: [
        "Ruhsi/gepardec-default-quarkus"
    ],
    prHourlyLimit: 0,
    postUpgradeTasks: {
        commands: ["./scripts/quarkus-update.sh"],
        fileFilters: ["**/*", "**/.*"],
        executionMode: "branch"
    },
    recreateWhen: "always",
    allowScripts: true,
    allowedPostUpgradeCommands: ["quarkus-update.sh", ".*"],
}