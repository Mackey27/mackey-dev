const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-700 mt-8 py-6 text-center">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Niño Mark Zaspa. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
