import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white text-center py-4">
      <p>&copy; {new Date().getFullYear()} Tomasz Bachula. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;