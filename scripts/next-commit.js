const { execSync } = require('child_process');

let currentCommit = 0;
const maxCommits = execSync('git rev-list --count HEAD').toString().trim();
console.log('maxCommits:', maxCommits);

// function getNextCommit() {
//   currentCommit++;
//   if (currentCommit > maxCommits) {
//     currentCommit = 1;
//   }
//   return currentCommit;
// }

// function runCommand(command) {
//   console.log(`Running command: ${command}`);
//   execSync(command, { stdio: 'inherit' });
// }

// function switchToCommit(commit) {
//   runCommand(`git checkout ${commit}`);
// }

// function getNext() {
//   const nextCommit = getNextCommit();
//   switchToCommit(nextCommit);
// }

// getNext();
