module.exports = {
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    platform: 'github',
    repositories: [
        "Ruhsi/gepardec-default-quarkus"
    ],
    prHourlyLimit: 0,
    packageRules: [
        {
            matchPackageNames: ["io.quarkus"],
            postUpgradeTasks: {
                commands: [
                    "npm ci --ignore-scripts",
                    "npx ng update {{{depName}}} --from={{{currentVersion}}} --to={{{newVersion}}} --migrate-only --allow-dirty --force"
                ]
            }
        }
    ],
    recreateWhen: "always",
    allowScripts: true,
    allowPostUpgradeCommandTemplating: true,
    allowedPostUpgradeCommands: ['^npm ci --ignore-scripts$', '^npx ng update']
}