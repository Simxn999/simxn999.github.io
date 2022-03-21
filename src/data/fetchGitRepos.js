export async function fetchGitRepos() {
  const personal = await fetch('https://api.github.com/users/Simxn999/repos')
    .then(response => response.ok ? response.json() : false);

  const contributing = await fetch('https://api.github.com/orgs/NET21-Team-Rabbits/repos')
    .then(response => response.ok ? response.json() : false);

  return personal.concat(contributing);
}