export const release = (scope) => {
  return {
    tagFormat: `@trash-kit/${scope}-\${version}`,
    plugins: [
      [
        '@semantic-release/commit-analyzer',
        {
          preset: 'conventionalcommits',
          releaseRules: [
            { scope: scope, type: 'chore', release: 'patch' },
            { scope: scope, type: 'feat', release: 'minor' },
            { scope: scope, type: 'fix', release: 'patch' },
            { scope: scope, type: 'perf', release: 'patch' },
            { scope: scope, breaking: true, release: 'major' },
            { scope: scope, release: false },
            { scope: 'all', release: 'minor' },
            { type: 'release', release: 'minor' }
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
