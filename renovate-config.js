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
        "^./quarkus-update {{branchName}} {{repository}} {{platform}} {{currentVersion}} {{newVersion}} {{env.JAVA_HOME}}$" //{{newMajor}}.{{newMinor}}$"
    ],
    postUpgradeTasks: {
        commands: [
            "./quarkus-update {{branchName}} {{repository}} {{platform}} {{currentVersion}} {{newVersion}} {{env.JAVA_HOME}}" //{{newMajor}}.{{newMinor}}"
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
    customEnvVariables: {
        JAVA_HOME: process.env.JAVA_HOME
    },
    //repositoryCache: true, // This option decides if Renovate uses a JSON cache to speed up extractions.
    ignorePrAuthor: false,
    requireConfig: true,
    optimizeForDisabled: true, // checks for enabled in renovate.json
};