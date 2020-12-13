import React from 'react';
import config from '../config.json';

interface EditOnGithubProps {
  slug: string;
}

const EditOnGithub: React.FC<EditOnGithubProps> = ({ slug }) => {
  const editLink = `${config.gitRepo}/${slug}.mdx`;
  return (
    <a
      className="no-underline hover:underline text-gray-200"
      target="_blank"
      rel="noopener noreferrer"
      href={editLink}
    >
      Edit post on GitHub
    </a>
  );
};

export default EditOnGithub;
