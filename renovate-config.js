module.exports = {
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    platform: 'github',
    repositories: [
        "Ruhsi/gepardec-default-quarkus"
    ],
    prHourlyLimit: 0,
    postUpgradeTasks: {
        commands: ["./scripts/quarkus-update"],
        fileFilters: ["**/*", "**/.*"],
        executionMode: "branch"
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
        "^./scripts/quarkus-update$"  // Adjusted regex to match the full path
    ],
};