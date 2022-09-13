// imports
import Head from 'next/head';

type Props = {
  title: string;
  description: string;
  image: string;
  pageUrl: string;
};

export const SEO = ({ title, description, image, pageUrl }: Props) => {
  return (
    <Head>
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content="Mattis Erkensten" />
      <meta property="og:locale" content="sv" />

      {/* Twitter */}
      <meta name="twitter:title" content={title}></meta>
      <meta name="twitter:description" content={description}></meta>
      <meta name="twitter:image" content={image}></meta>
    </Head>
  );
};

// https://cheatcode.co/tutorials/how-to-handle-seo-metadata-in-next-js
