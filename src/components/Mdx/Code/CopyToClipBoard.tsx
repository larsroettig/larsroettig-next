import React from 'react';
import { FaCheck, FaCopy } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import useClipboard from 'react-use-clipboard';

interface CopyToClipBoardProps {
  text: string;
}

const CopyToClipBoard: React.FC<CopyToClipBoardProps> = ({ text }) => {
  const [isCopied, setCopied] = useClipboard(text, { successDuration: 3000 });
  const icon = isCopied === false ? <FaCopy /> : <FaCheck />;

  return (
    <button
      onClick={setCopied}
      type="button"
      className="copy-button"
      aria-label="Copy"
    >
      <IconContext.Provider value={{ size: `1.1rem` }}>
        {icon}
      </IconContext.Provider>
    </button>
  );
};

export default CopyToClipBoard;
