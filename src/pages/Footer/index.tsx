

import { FC } from "react";

const Footer: FC = () => {
  
  const sections = [
    {
      title: "Shopings",
      links: ["New Arrivals", "Best Sellers", "Collections"],
    },
    {
      title: "About",
      links: ["Our Story", "Sustainability", "Careers"],
    },
    {
      title: "Support",
      links: ["Contacts'", "FAQ", "Shipping & Returens"],
    },
  ];

  return (
    <footer className="bg-slate-100 dark:bg-slate-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">

          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-6 text-slate-900 dark:text-white">
                <svg
                  fill="currentColor"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"></path>
                </svg>
              </div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Vogue
              </h2>
            </div>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              Timeless fashion for every  modern wardrobes.
            </p>
          </div>

          {sections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-sm text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors duration-200"
                    >
                    {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-slate-300 dark:border-slate-700 pt-8">
          <p className="text-center text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} Vogue. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
