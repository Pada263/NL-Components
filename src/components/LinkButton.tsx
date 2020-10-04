import React from 'react';
import clsx from 'clsx';
//import styles from './../styles/LinkButton.module.scss';

interface LinkButtonProps {
  label: String;
  theme: String;
}

const LinkButton: React.FC<LinkButtonProps> = (props) => {


function handleLinkClick(e: { preventDefault: () => void; }) {}

  return (
    <a href="#" onClick={handleLinkClick} className={clsx(
      [props.theme]
    )}>
      {props.label}
    </a>
  );
};


export default LinkButton;
