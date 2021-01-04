/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

const ActiveLink: React.FC<any> = ({ href, children }) => {
  const router = useRouter();

  let className = children.props.className || 'bg-gray-800 py-2 px-4 rounded';
  className = `${className} ${router.pathname === href ? 'text-white' : 'text-blue-300'}`;

  return (
    <Link href={href} passHref>
      {React.cloneElement(children, { className })}
    </Link>
  );
};

function Nav() {
  return (
    <div className="mt-8 flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0">
      <ActiveLink href="/play-audio">
        <a>Play audio</a>
      </ActiveLink>
      <ActiveLink href="/play-audio-after-promise">
        <a>Play audio after promise</a>
      </ActiveLink>
      <ActiveLink href="/play-audio-after-promise-workaround">
        <a>Play audio after promise workaround</a>
      </ActiveLink>
    </div>
  );
}
export default Nav;
