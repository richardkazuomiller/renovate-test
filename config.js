module.exports = {
  platform: 'github',
  enabledManagers: [
    // 'npm',
    // 'dockerfile',
    // 'docker-compose',
    // 'nodenv',
    'nvm',
    // 'circleci',
    // 'github-actions'
  ],
  token: process.env.AUTOMATION_TOKEN,
  npmrcMerge: true,
  npmrc: `@my-company:registry=https://npm.pkg.github.com/my-company\n//npm.pkg.github.com/:_authToken=${process.env.AUTOMATION_TOKEN}`,
  prConcurrentLimit: 5,
  branchConcurrentLimit: 16,
  onboardingPrTitle: 'chore(deps): configure renovate',
  onboardingCommitMessage: 'chore(deps): configure renovate',
  labels: [
    'renovate'
  ],
  updateLockFiles: true,
  // extends: [
    // ':semanticCommits',
    // 'github>whitesource/merge-confidence:beta'
  // ],
  packageRules: [
    {
      excludePackagePrefixes: [
        '@my-company/'
      ],
      stabilityDays: 3
    },
  ],
  repositories: [
    'richardkazuomiller/renovate-test'
  ],
}