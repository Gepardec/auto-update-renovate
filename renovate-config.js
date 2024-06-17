module.exports = {
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    platform: 'github',
    repositories: [
        "Ruhsi/gepardec-default-quarkus"
    ],
    prHourlyLimit: 0,
    postUpgradeTasks: {
        commands: ["quarkus-update", "./quarkus-update"],
        fileFilters: ["**/*", "**/.*"],
        executionMode: "update"
    },
    repositoryCache: true,
    ignorePrAuthor: false,
    onboarding: false,
    requireConfig: true,
    optimizeForDisabled: true,
    allowPostUpgradeCommandTemplating: true,
    recreateWhen: "always",
    allowScripts: true,
    allowedPostUpgradeCommands: [
        "^quarkus-update$",
        "^\\./quarkus-update$",
        "^ls -l$"
    ],
};