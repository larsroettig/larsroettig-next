const title = `Blog - Lars Roettig `;
const description = `Senior Developer - Magento and React`;

const SEO = {
  title,
  description,
  canonical: `https://larsroettig.dev`,
  openGraph: {
    type: `website`,
    locale: `en`,
    url: `https://larsroettig.dev`,
    title,
    description,
    images: [
      {
        url: `https://larsroettig.dev/banner.jpg`,
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: `@LarsRoettig`,
    site: `@LarsRoettig`,
    cardType: `summary_large_image`,
  },
};

export default SEO;
