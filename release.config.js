module.exports = {
  branches: 'main',
  repositoryUrl: 'https://github.com/Mcfli/actions-react-app',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
  ],
};
