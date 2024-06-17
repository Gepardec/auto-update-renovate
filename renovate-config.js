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
    ignorePrAuthor: false, // default: false, set to true when migrating bot account
    onboarding: false, // renovate.json files exist, so no onboarding MR is needed
    requireConfig: true, // require a renovate.json or other valid renovate config be present
    optimizeForDisabled: true, // first check in config if renovate is disabled
    allowPostUpgradeCommandTemplating: true,
    recreateWhen: "always",
    allowScripts: true,
    allowedPostUpgradeCommands: [
        // array of regex strings of allowed `postUpgradeTasks` commands.
        "^quarkus-update$"
    ],

}