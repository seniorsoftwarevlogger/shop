const description =
  "Senior Software Vlogger Merch Shop. T-shirts, Hoodies, Stickers and More.";
const title = "Senior Software Vlogger Merch";
const url = "https://shop.seniorsoftwarevlogger.com";

const seo = {
  title,
  titleTemplate: "%s | Senior Software Vlogger",
  description,
  openGraph: {
    description,
    title,
    type: "website",
    url,
  },
  twitter: {
    handle: "@softwarevlogger",
    site: "@softwarevlogger",
  },
};

export { seo as defaultSEO, url as defaultUrl };
