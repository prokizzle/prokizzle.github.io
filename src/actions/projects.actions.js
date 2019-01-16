const FETCH_REPOS = "FETCH_REPOS";
const UPDATE_REPOS = "UPDATE_REPOS";

export function fetchRepos(user) {
  fetch(`https://api.github.com/users/${user}/repos`).then(data => updateRepos(data));
}

export function updateRepos(repos) {
  return { type: UPDATE_REPOS, repos };
}

export default { fetchRepos, updateRepos };
