export const release = (scope) => {
  return {
    tagFormat: `@trash-kit/${scope}-v\${version}`,
    plugins: [
      [
        '@semantic-release/commit-analyzer',
        {
          preset: 'conventionalcommits',
          releaseRules: [
            { scope, type: 'chore', release: 'patch' },
            { scope, type: 'feat', release: 'minor' },
            { scope, type: 'refactor', release: 'minor' },
            { scope, type: 'fix', release: 'patch' },
            { scope, type: 'perf', release: 'patch' },
            { scope, breaking: true, release: 'major' },
            { type: 'release', release: 'patch' }
          ]
        }
      ],
      '@semantic-release/release-notes-generator',
      ['@semantic-release/changelog', { changelogFile: 'CHANGELOG.md' }],
      ['@semantic-release/exec', { prepareCmd: 'npm run build' }],
      '@semantic-release/npm',
      [
        '@semantic-release/git',
        {
          assets: ['package.json', 'CHANGELOG.md'],
          message: `chore(release): @trash-kit/${scope} v\${nextRelease.version} [skip ci]\n\n\${nextRelease.notes}`
        }
      ]
    ]
  }
}
