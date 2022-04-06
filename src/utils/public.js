export default (path) => {
  const publicURL = path.startsWith("data:image") ? "" : process.env.PUBLIC_URL;
  return publicURL + path;
};
