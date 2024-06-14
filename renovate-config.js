module.exports = {
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    platform: 'github',
    repositories: [
        "Ruhsi/gepardec-default-quarkus"
    ],
    baseBranches: ["main"],
    allowedPostUpgradeCommands: ["tslint --fix"],
    prHourlyLimit: 70,
    recreateWhen: "always"
}