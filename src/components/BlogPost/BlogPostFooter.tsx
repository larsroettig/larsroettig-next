import React from 'react';
import config from '../../config.json';
import EditOnGithub from '@/components/EditOnGithub';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPostFooterProps {
  slug: string;
  title: string;
}

const BlogPostFooter = ({ slug, title }: BlogPostFooterProps) => {
  const BlogPostUrl = `${config.baseUrl}/${slug}`;

  return (
    <div className="relative grid gap-x-4 lg:gap-x-6 pt-5">
      <div className="col-span-full mb-12 flex flex-col flex-wrap justify-between gap-2 border-b border-gray-600 pb-12 text-lg font-medium text-blueGray-500 lg:col-span-8 lg:col-start-3 lg:flex-row lg:pb-6">
        <div className="flex space-x-5">
          <a
            className="font-mono text-sm hover:underline"
            target="_blank"
            rel="noreferrer noopener"
            href={`https://twitter.com/intent/tweet?${new URLSearchParams({
              url: BlogPostUrl,
              text: `I just read "${title}" by @LarsRoettig\n\n`,
            })}`}
          >
            Tweet this article
          </a>
        </div>
        <div className="flex">
          <a
            className="font-mono text-sm hover:underline hover:accent-blue-900"
            target="_blank"
            rel="noreferrer noopener"
            href={`https://twitter.com/search?${new URLSearchParams({
              q: BlogPostUrl,
            })}`}
          >
            Discuss on Twitter
          </a>
          <span className="mx-3 self-center text-xs">•</span>
          <EditOnGithub slug={slug} />
        </div>
      </div>
      <div className="col-span-full lg:col-span-2 lg:col-start-3">
        <Image
          className="hero-image"
          src="/images/larsroettig.jpg"
          alt="Profile"
          width={100}
          height={100}
        />
      </div>
      <div className="lg:col-start:5 col-span-full lg:col-span-6">
        <p className="max-w-full text-lg text-secondary mb-12 mt-3 prose prose-light dark:prose-dark">
          Lars Roettig is a Senior Software Engineer at
          <a href={`https://www.techdivision.com/`}> TechDivision GmbH</a>.
          digital agency focused on Adobe Commerce and modern web development.
          My personal goal is to teach you how to write stable software with
          quality.
        </p>
        <Link href="/about" legacyBehavior>
          <span className="font-mono text-md hover:underline">
            <a>Learn more about Lars</a>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BlogPostFooter;
