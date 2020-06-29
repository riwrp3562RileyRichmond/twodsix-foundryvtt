module.exports = {
    "plugins": [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        ["@semantic-release/exec", {
            "prepareCmd": 'sed -ie \'s|\\(.*"version"\\): "\\(.*\\)",.*|\\1: \'"\\"${nextRelease.version}\\",|" package.json && sed -ie \'s|\\(.*"version"\\): "\\(.*\\)",.*|\\1: \'"\\"${nextRelease.version}\\",|" static/system.json && cp static/system.json dist',
        }],
        ["@semantic-release/git", {
            "assets": ["CHANGELOG.md", "package.json", "static/system.json", "dist/**/*"],
            "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
        }],
        ["@semantic-release/github", {
            "assets": ["dist/**/*"],
        }]
    ],
    "preset": "angular"
}