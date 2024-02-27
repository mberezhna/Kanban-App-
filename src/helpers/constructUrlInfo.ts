export const ConstructUrlInfo = (url: string) => {
  const urlInfo = new URL(url);
  const hostname = urlInfo.hostname;
  const [user, repository] = urlInfo.pathname.split('/');

  const issuesLink = `${hostname}/${user}/${repository}/issues`;

  return {issuesLink, user, repository};
}
