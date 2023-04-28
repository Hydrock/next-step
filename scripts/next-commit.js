const { execSync } = require('child_process');

let currentCommitHash = '';
let maxCommits = '';

function getMaxCommits() {
  maxCommits = execSync('git rev-list --count HEAD').toString().trim();
}

function getNextCommitHash() {
  const nextCommitHash = execSync(`git rev-list --reverse HEAD | awk "NR == ${currentCommitHash ? currentCommitHash + 1 : 1}"`).toString().trim();
  return nextCommitHash;
}

function runCommand(command) {
  console.log(`Running command: ${command}`);
  execSync(command, { stdio: 'inherit' });
}

function switchToCommit(commitHash) {
  runCommand(`git checkout ${commitHash}`);
}

function getNext() {
  const nextCommitHash = getNextCommitHash();
  switchToCommit(nextCommitHash);
  currentCommitHash = nextCommitHash;
  if (currentCommitHash === '') {
    currentCommitHash = getNextCommitHash();
  }
}

getMaxCommits();
getNext();
