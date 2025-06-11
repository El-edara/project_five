import { FaTwitter, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
const links = [
  {
    href: "https://twitter.com/@huxnwebdev",
    label: "Twitter",
    icon: <FaTwitter className="h-6 w-6 text-blue-500" />,
  },
  {
    href: "https://www.facebook.com/profile.php?id=100009512776540",
    label: "Facebook",
    icon: <FaFacebook className="h-6 w-6 text-blue-700" />,
  },
  {
    href: "https://github.com/El-edara",
    label: "GitHub",
    icon: <FaGithub className="h-6 w-6 text-gray-900" />,
  },
  {
    href: "https://www.instagram.com/el_edarah/",
    label: "Instagram",
    icon: <FaInstagram className="h-6 w-6 text-pink-500" />,
  },
];
const Contact = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:py-6 lg:py-8">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Contact Me</h2>
      <div className="flex items-center">
        {links.map((link) => (
          <a
            href={link.href}
            key={link.label}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-900 hover:text-gray-600 mr-[2rem]"
          >
            {link.icon}
            <span className="text-lg font-medium">{link.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};
export default Contact;
