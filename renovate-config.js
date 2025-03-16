module.exports = {
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    platform: 'github',
    repositories: [
        "ludwigsteindl/gepardec-default-quarkus"
    ],
    prHourlyLimit: 0,
    ignoreDeps: ["write-open-rewrite"],
    separateMajorMinor: false,
    packageRules: [
        {
            matchPackageNames: ["io.quarkus{/,}**"],
            groupName: "quarkus",
            groupSlug: "quarkus_{{currentVersion}}_{{newVersion}}"
        }
    ],
    recreateWhen: "always"
    // repositoryCache: true, // This option decides if Renovate uses a JSON cache to speed up extractions.
    // ignorePrAuthor: false,
    // requireConfig: true,
    // optimizeForDisabled: true, // checks for enabled in renovate.json
};
