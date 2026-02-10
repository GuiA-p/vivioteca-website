import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/seu-user',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/seu-user',
    icon: FaLinkedin,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/seu-user',
    icon: FaInstagram,
  },
];

export function SocialLinks() {
  return (
    <div className="flex gap-3">
      {socialLinks.map(({ name, href, icon: Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="rounded-md p-2 text-orange-400 transition hover:bg-zinc-100 hover:text-orange-600 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
        >
          <Icon className="text-xl" />
        </a>
      ))}
    </div>
  );
}
