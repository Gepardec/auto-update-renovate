module.exports = {
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    platform: 'github',
    repositories: [
        "Ruhsi/gepardec-default-quarkus"
    ],
    extends: [
        "config:recommended",
        ":dependencyDashboard",
        ":prConcurrentLimitNone",
        ":prHourlyLimitNone",
        ":timezone(Europe/Vienna)",
        ":assignee(Ruhsi)"
    ],
    separateMultipleMinor: true,
    packageRules: [
        {
            groupName: "quarkus",
            matchPackagePrefixes: [
                "io.quarkus"
            ]
        }
    ],
    postUpgradeTasks: {
        commands: ["./quarkus-update {{branchName}} {{currentVersion}} {{newVersion}} {{newMajor}}.{{newMinor}}"],
        fileFilters: ["**/*", "**/.*"],
        executionMode: "branch"
    },
    repositoryCache: true, // This option decides if Renovate uses a JSON cache to speed up extractions.
    ignorePrAuthor: false,
    requireConfig: true,
    optimizeForDisabled: true, // checks for enabled in renovate.json
    recreateWhen: "always",
    allowPostUpgradeCommandTemplating: true,
    allowScripts: true,
    allowedPostUpgradeCommands: [
        "^./quarkus-update {{branchName}} {{currentVersion}} {{newVersion}} {{newMajor}}.{{newMinor}}$"
    ],
};