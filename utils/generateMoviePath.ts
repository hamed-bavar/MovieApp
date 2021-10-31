export const generatePath = () => {
  const cats = ["popular", "now_playing", "top_rated", "upcoming"];
  const pages = [...Array(10)].map((_, i) => i.toString());
  const paths = [];
  for (const category of cats) for (const page of pages) paths.push({ params: { category, page } });
  return paths;
};
