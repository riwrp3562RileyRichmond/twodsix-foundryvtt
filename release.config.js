module.exports = {
    "plugins": [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        ["@semantic-release/exec", {
            "prepareCmd": '' +
                'sed -ie \'s|\\(.*"version"\\): "\\(.*\\)",.*|\\1: \'"\\"${nextRelease.version}\\",|" package.json ' +
                '&& sed -ie \'s|\\(.*"version"\\): "\\(.*\\)",.*|\\1: \'"\\"${nextRelease.version}\\",|" static/system.json ' +
                '&& sed -ie \'s|\\(.*"manifest"\\): "\\(.*\\)",.*|\\1: \'"\\"https://github.com/xdy/twodsix-foundryvtt/releases/download/v${nextRelease.version}/system.json\\",|" static/system.json' +
                '&& sed -ie \'s|\\(.*"download"\\): "\\(.*\\)",.*|\\1: \'"\\"https://github.com/xdy/twodsix-foundryvtt/releases/download/v${nextRelease.version}/twodsix.zip\\",|" static/system.json' +
                '&& cp static/system.json dist' +
                '',
        }],
        ["@semantic-release/git"],
        ["@semantic-release/github", {
            "assets": ["dist/system.json", "dist/twodsix.zip"],
        }]
    ],
    "preset": "angular"
}