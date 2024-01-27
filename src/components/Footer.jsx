import React from "react";
import logo from "/public/logo-ordinary.svg";
import Image from "next/image";
import { footerLinks, socialLinks } from "@/constants/nav";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-primary py-10">
      <div className="max-w-[1300px] mx-auto bg-primary flex flex-col justify-between items-center space-y-5 px-4 md:space-y-0 md:flex-row lg:px-0">
        <div className="space-y-4 flex flex-col items-center md:items-start">
          <Image src={logo} alt="greenmind" />
          <p className="text-gray-light lg:text-lg">
            We help you find your dream plant
          </p>
          <div className="flex items-center justify-center md:justify-normal gap-4">
            {socialLinks.map((social, id) => (
              <Link
                href={social.path}
                target="_blank"
                rel="no referrer"
                className="hover:opacity-70 transition-opacity"
              >
                <Image src={social.image} alt={social.name} />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-between text-dark-two flex-wrap capitalize gap-5 lg:gap-10">
          {footerLinks.map((link, id) => (
            <Link
              href={link.path}
              className="hover:underline hover:underline-offset-4 hover:font-light transition-all "
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
