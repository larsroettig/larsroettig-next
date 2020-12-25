/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';
import { FaEnvelope, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface ShareProps {
  url: string;
  title: string;
}

const Share: React.FC<ShareProps> = ({ url, title }) => (
  <>
    <div className="text-center font-mono border-b-2 p-2 m-5 mt-10 mb-2">
      Useful? Share it!
    </div>
    <div className="flex justify-center">
      <div>
        {/* @ts-ignore: https://github.com/nygardk/react-share/issues/277 */}
        <FacebookShareButton
          url={url}
          quote={title}
          className="opacity-75 hover:opacity-100"
        >
          <FaFacebook size={29} />
        </FacebookShareButton>
      </div>
      <div className="pl-2">
        {/* @ts-ignore: https://github.com/nygardk/react-share/issues/277 */}
        <TwitterShareButton
          url={url}
          title={title}
          className="opacity-75 hover:opacity-100"
        >
          <FaTwitter size={29} />
        </TwitterShareButton>
      </div>

      <div className="pl-2">
        {/* @ts-ignore: https://github.com/nygardk/react-share/issues/277 */}
        <EmailShareButton
          url={url}
          title={title}
          className="opacity-75 hover:opacity-100"
        >
          <FaEnvelope size={29} />
        </EmailShareButton>
      </div>
      <div className="pl-2">
        {/* @ts-ignore: https://github.com/nygardk/react-share/issues/277 */}
        <LinkedinShareButton
          url={url}
          title={title}
          className="opacity-75 hover:opacity-100"
        >
          <FaLinkedin size={29} />
        </LinkedinShareButton>
      </div>
    </div>
  </>
);

export default Share;
