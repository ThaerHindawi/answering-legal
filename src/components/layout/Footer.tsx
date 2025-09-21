"use client";

import { useState } from "react";
import Divider from "../common/Divider";

const footerLinks = [
  {
    id: "our-service",
    title: "Our Service",
    links: [
      {
        title: "Who We Serve",
        href: "/who-we-serve",
      },
      {
        title: "FAQs",
        href: "/faqs",
      },
      {
        title: "Tutorials",
        href: "/tutorials",
      },
      {
        title: "What Is An Answering Service?",
        href: "/what-is-an-answering-service",
      },
      {
        title: "What Is A Legal Intake Receptionist?",
        href: "/what-is-a-legal-intake-receptionist",
      },
      {
        title: "What Is A Virtual Receptionist?",
        href: "/what-is-a-virtual-receptionist",
      },
    ],
  },
  {
    id: "company",
    title: "Company",
    links: [
      {
        title: "Meet The Team",
        href: "/meet-the-team",
      },
      {
        title: "Our Authors",
        href: "/our-authors",
      },
    ],
  },
  {
    id: "partnerships",
    title: "Partnerships",
    links: [
      {
        title: "Integrations",
        href: "/integrations",
      },
      {
        title: "Affiliate Program",
        href: "/affiliate-program",
      },
      {
        title: "Law Firm Marketing",
        href: "/law-firm-marketing",
      },
    ],
  },
  {
    id: "resources",
    title: "Resources",
    links: [
      {
        title: "Blog",
        href: "/blog",
      },
      {
        title: "Podcast",
        href: "/podcast",
      },
      {
        title: "Videos",
        href: "/videos",
      },
      {
        title: "Let&apos;s Talk Legal",
        href: "/lets-talk-legal",
      },
      {
        title: "Marketing",
        href: "/marketing",
      },
      {
        title: "The Answering Legal",
        href: "/the-answering-legal",
      },
      {
        title: "Book Club",
        href: "/book-club",
      },
      {
        title: "Top Legal Softwares",
        href: "/top-legal-softwares",
      },
    ],
  },
  {
    id: "support",
    title: "Support",
    links: [
      {
        title: "Contact Us",
        href: "/contact-us",
      },
      {
        title: "Submit A Ticket",
        href: "/submit-a-ticket",
      },
      {
        title: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        title: "Terms Of Service",
        href: "/terms-of-service",
      },
      {
        title: "Employment",
        href: "/employment",
      },
      {
        title: "Opportunities",
        href: "/opportunities",
      },
    ],
  },
  {
    id: "follow-us",
    title: "Follow Us",
    links: [
      {
        title: "Twitter",
        href: "/twitter",
      },
      {
        title: "Facebook",
        href: "/facebook",
      },
      {
        title: "Instagram",
        href: "/instagram",
      },
      {
        title: "LinkedIn",
        href: "/linkedin",
      },
    ],
  },
];

export default function Footer() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  function toggleSection(id: string) {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <footer className="bg-brand-dark text-white py-100px px-4 xmd:px-106px flex flex-col gap-45px items-center">
      <div className="flex flex-col gap-13px justify-center items-center text-center w-full sm:w-456px">
        <h3 className="text-white text-2xl font-bold">
          Have questions? Our team is here to help. Call 631-400-8888
        </h3>
        <p className="text-accent-cyan font-extrabold text-12px  uppercase">
          Monday to Friday from 9 am to 7 pm EST.
        </p>
      </div>
      {/* Divider */}
      <Divider className="!max-w-1228px bg-white mix-blend-overlay h-0.5 !rounded-8px" />

      <div className="w-full max-w-1228px mx-auto lg:px-0">
        <div className="flex w-full justify-center lg:justify-between flex-wrap lg:flex-nowrap gap-8 lg:gap-0">
          {footerLinks.map((section) => (
            <div
              key={section.id}
              className="flex flex-col gap-5px w-[40%] xxs:w-[45%] sm:w-[30%] items-center lg:items-start lg:w-auto"
            >
              <button
                type="button"
                className="text-base xxs:text-2xl font-semibold w-full flex items-center justify-between
                lg:justify-start cursor-pointer text-center lg:text-left"
                onClick={() => toggleSection(section.id)}
                aria-expanded={!!openSections[section.id]}
                aria-controls={`footer-section-${section.id}`}
              >
                <span className="w-full text-center lg:text-left">{section.title}</span>
              </button>
              <ul
                id={`footer-section-${section.id}`}
                className={`text-sm leading-245% ${
                  openSections[section.id] ? "block" : "hidden"
                } lg:block text-center lg:text-left`}
              >
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Divider */}
      <Divider className="!max-w-1228px bg-white mix-blend-overlay h-0.5 !rounded-8px" />

      {/* Bottom section */}
      <div className="text-center text-12px font-extrabold uppercase leading-none ">
        <p className="">© 2024 Answering Legal · All Rights Reserved</p>
      </div>
    </footer>
  );
}
