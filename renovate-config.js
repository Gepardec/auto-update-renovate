module.exports = {
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    platform: 'github',
    repositories: [
        "Ruhsi/gepardec-default-quarkus"
    ],
    extends: [
        "config:recommended",
        "github>ruhsi/renovate-config:gepardec(Ruhsi)#1.0.0"
    ],
    //separateMultipleMinor: true,
    branchPrefix: "renovate/",
    //newMajor and newMinor may not be necessary...
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
    //repositoryCache: true, // This option decides if Renovate uses a JSON cache to speed up extractions.
    ignorePrAuthor: false,
    requireConfig: true,
    optimizeForDisabled: true, // checks for enabled in renovate.json
};