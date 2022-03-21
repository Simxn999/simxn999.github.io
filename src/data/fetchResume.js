export async function fetchResume() {
  return await fetch('resume.json')
    .then(response => response.ok ? response.json() : false);
}