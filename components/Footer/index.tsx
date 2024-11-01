/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

/* -------------------------- Image Dependecy -------------------------- */

import {
  IconRight,
  Twitter,
  Facebook,
  Linkedin,
  Github,
  Instagram,
  Dribble,
} from '../Icons';

/* ---------------------------- Style Dependency ---------------------------- */
import { SocialMedia } from '../Layout/style';

interface IFooterLink {
  children: string | React.ReactNode;
  goto?: string;
}

const FooterLink: React.FC<IFooterLink &
  React.AnchorHTMLAttributes<HTMLParagraphElement>> = ({
  children,
  goto,
  ...rest
}) => {
  return (
    <>
      <FooterStyle>
        <Link href={`${goto}`}>
          <p {...rest}>
            {children}
            <IconRight />
          </p>
        </Link>
      </FooterStyle>
      <SocialMedia>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://x.com/nerd__ass"
          aria-label="Go To Naitik Patel's Twitter/X Page"
          title="Twitter/X Page"
        >
          <Twitter />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/naitik.patel.9484941"
          aria-label="Go To Naitik Patel's Facebook Page"
          title="Facebook Page"
        >
          <Facebook />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/naitik-patel-345676215/"
          aria-label="Go To Naitik Patel's Linkedin Page"
          title="Linkedin Page"
        >
          <Linkedin />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Naitikmp"
          aria-label="Go To Naitik Patel's Github Page"
          title="Github Page"
        >
          <Github />
        </a>
        {/* <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://dribbble.com/codewonders"
          aria-label="Go To Adenekan Wonderful Dribble Page"
          title="Dribbble Page"
        >
          <Dribble />
        </a> */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/naitik_p44"
          aria-label="Go To Naitik Patel's Instagram Page"
          title="Instagram Page"
        >
          <Instagram />
        </a>
      </SocialMedia>
    </>
  );
};

const FooterStyle = styled.footer`
  p {
    font-size: var(--font-sm);
    transition: all 1s ease;

    svg {
      margin-left: 1rem;
      animation-name: forward;
      animation-duration: 0.5s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }

    &:hover {
      @keyframes forward {
        from {
          margin-left: 1rem;
        }
        to {
          margin-left: 2rem;
        }
      }
    }
  }
`;

export default FooterLink;
