module.exports = {
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    platform: 'github',
    repositories: [
        "ludwigsteindl/gepardec-default-quarkus"
    ],
    extends: [
        "config:recommended",
        "github>ludwigsteindl/renovate-config:gepardec(ludwigSteindl)#1.0.0"
    ],
    branchPrefix: "renovate/",
    allowedCommands: [
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
            matchPackageNames: [
                "io.quarkus{/,}**"
            ]
        }
    ],
    // repositoryCache: true, // This option decides if Renovate uses a JSON cache to speed up extractions.
    // ignorePrAuthor: false,
    // requireConfig: true,
    // optimizeForDisabled: true, // checks for enabled in renovate.json
};
