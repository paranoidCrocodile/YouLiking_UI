const sizeMap: Record<string, string> = {
  tiny: "320px",
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1200px",
  huge: "1500px",
};

const mediaQuery = (from?: string, to?: string): string => {
  return `@media ${from ? `(min-width:${sizeMap[from]})` : ""}${
    from && to ? " and " : ""
  }${to ? `(max-width:${sizeMap[to]})` : ""}`;
};

export default mediaQuery;
