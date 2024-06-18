module.exports = {
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    platform: 'github',
    repositories: [
        "Ruhsi/gepardec-default-quarkus"
    ],
    extends: ["config:recommended", ":dependencyDashboard", ":prConcurrentLimitNone", ":prHourlyLimitNone", ":timezone(Europe/Vienna)", ":assignee(Ruhsi)"],
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
    repositoryCache: true,
    ignorePrAuthor: false,
    onboarding: false,
    requireConfig: true,
    optimizeForDisabled: true,
    allowPostUpgradeCommandTemplating: true,
    recreateWhen: "always",
    allowScripts: true,
    allowedPostUpgradeCommands: [
        "^./quarkus-update {{branchName}} {{currentVersion}} {{newVersion}} {{newMajor}}.{{newMinor}}$"
    ],
};