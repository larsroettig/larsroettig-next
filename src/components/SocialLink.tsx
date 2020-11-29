import React from 'react';

type SocialIconProps = { url: string; children: React.ReactNode };

const SocialLink: React.FC<SocialIconProps> = ({
  url,
  children,
}: SocialIconProps) => (
  <a
    rel="me noopener noreferrer"
    data-a11y="false"
    aria-label={`Link to ${url}`}
    href={url}
  >
    {children}
  </a>
);

export default SocialLink;
