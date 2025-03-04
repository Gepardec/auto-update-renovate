module.exports = {
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    platform: 'github',
    repositories: [
        "ludwigSteindl/gepardec-default-quarkus"
    ],
    extends: [
        "config:recommended",
        "github>ludwigSteindl/renovate-config:gepardec(ludwigSteindl)#1.0.0"
    ],
    branchPrefix: "renovate/",
    allowedPostUpgradeCommands: [
        "^./quarkus-update {{branchName}} {{repository}} {{platform}} {{currentVersion}} {{newVersion}}$"
    ],
    postUpgradeTasks: {
        commands: [
            "./quarkus-update {{branchName}} {{repository}} {{platform}} {{currentVersion}} {{newVersion}}"
        ],
        fileFilters: ["**/*", "**/.*"],
        executionMode: "branch"
    },
    packageRules: [
        {
            groupName: "quarkus",
            matchPackagePrefixes: [
                "io.quarkus"
            ]
        }
    ],
    // repositoryCache: true, // This option decides if Renovate uses a JSON cache to speed up extractions.
    // ignorePrAuthor: false,
    // requireConfig: true,
    // optimizeForDisabled: true, // checks for enabled in renovate.json
};