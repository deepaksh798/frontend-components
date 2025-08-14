"use client";

import { useEffect, useRef, useState } from "react";
import icon from "../../public/ai_icon.svg";
import icon1 from "../../public/generative_icon.svg";
import Image from "next/image";
import { Layers } from "lucide";

export default function Home() {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const stackAreaRef = useRef<HTMLDivElement | null>(null);
  const [temp, setTemp] = useState<number>(-1);

  const rotateCards = () => {
    let angle = 0;
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      if (card.classList.contains("active")) {
        // Prevent the last card from moving up
        if (index === cardsRef.current.length - 1) {
          card.style.transform = `translate(-50%, -50%) rotate(0deg)`;
        } else {
          card.style.transform = `translate(-50%, -120vh) rotate(-48deg)`;
        }
      } else {
        card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
        angle += 5;
      }
    });
  };

  const handleScroll = () => {
    if (!stackAreaRef.current) return;

    const stackAreaTop = stackAreaRef.current.getBoundingClientRect().top;
    const proportion = stackAreaTop / window.innerHeight;

    if (proportion <= 0) {
      let index =
        Math.abs(Math.ceil((proportion * cardsRef.current.length) / 7)) - 1;

      // Ensure the index doesn't exceed the number of cards
      index = Math.min(index, cardsRef.current.length - 1);
      setTemp(index);

      cardsRef.current.forEach((card, i) => {
        if (card) {
          card.classList.toggle("active", i <= index);
        }
      });

      rotateCards();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    rotateCards();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const icons = [
    {
      icon: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="4" y="8" width="56" height="10" rx="2" fill="#7793FF" />
          <rect x="4" y="27" width="56" height="10" rx="2" fill="#7793FF" />
          <rect x="4" y="46" width="56" height="10" rx="2" fill="#7793FF" />
        </svg>
      ),
      icon_title: "Full Stack Architecture",
      content:
        "Designing scalable, maintainable, and robust architectures using modern full stack technologies.",
    },
    {
      icon: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="10" y="16" width="44" height="32" rx="4" fill="#7793FF" />
          <rect x="14" y="20" width="36" height="4" fill="white" />
          <rect x="14" y="28" width="24" height="4" fill="white" />
          <rect x="14" y="36" width="18" height="4" fill="white" />
        </svg>
      ),
      icon_title: "Frontend Development",
      content:
        "Crafting intuitive, responsive, and performant user interfaces using React, Next.js, and modern design systems.",
    },
    {
      icon: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="32" cy="16" rx="24" ry="8" fill="#7793FF" />
          <path d="M8 16v16c0 4.4 10.7 8 24 8s24-3.6 24-8V16" fill="#7793FF" />
          <path d="M8 32v16c0 4.4 10.7 8 24 8s24-3.6 24-8V32" fill="#7793FF" />
        </svg>
      ),
      icon_title: "Backend Development",
      content:
        "Building powerful, secure APIs and business logic with Node.js, Express, and server-side frameworks.",
    },
    {
      icon: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="32" cy="12" rx="22" ry="6" fill="#7793FF" />
          <path d="M10 12v12c0 3.3 9.9 6 22 6s22-2.7 22-6V12" fill="#7793FF" />
          <path d="M10 24v12c0 3.3 9.9 6 22 6s22-2.7 22-6V24" fill="#7793FF" />
          <path d="M10 36v12c0 3.3 9.9 6 22 6s22-2.7 22-6V36" fill="#7793FF" />
        </svg>
      ),
      icon_title: "Database Design",
      content:
        "Modeling efficient and scalable databases using PostgreSQL, MongoDB, and other modern DB systems.",
    },
    {
      icon: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="32" cy="32" r="30" stroke="#7793FF" stroke-width="4" />
          <path
            d="M32 8v8M32 48v8M8 32h8M48 32h8"
            stroke="#7793FF"
            stroke-width="4"
          />
          <circle cx="32" cy="32" r="8" fill="#7793FF" />
        </svg>
      ),
      icon_title: "DevOps & Deployment",
      content:
        "Streamlining CI/CD pipelines and deploying apps with Docker, Vercel, Netlify, and cloud platforms.",
    },
    {
      icon: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="8" y="8" width="20" height="48" rx="3" fill="#7793FF" />
          <rect x="36" y="14" width="20" height="36" rx="3" fill="#7793FF" />
          <circle cx="18" cy="50" r="2" fill="white" />
        </svg>
      ),
      icon_title: "Cross-Platform Apps",
      content:
        "Building web and mobile apps from a single codebase using React Native and modern web stacks.",
    },
    {
      icon: (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 6v10M32 48v10M6 32h10M48 32h10"
            stroke="#7793FF"
            stroke-width="4"
          />
          <circle cx="32" cy="32" r="8" fill="#7793FF" />
          <path
            d="M20 20l4 4M44 44l-4-4M20 44l4-4M44 20l-4 4"
            stroke="#7793FF"
            stroke-width="3"
          />
        </svg>
      ),
      icon_title: "System Optimization",
      content:
        "Improving performance, scalability, and maintainability of full stack applications through deep code analysis.",
    },
  ];

  return (
    <div ref={stackAreaRef} className="relative w-full h-[1000vh] bg-black">
      {/* Top-Centered Heading */}
      {/* <div className=" sticky top-[168px] w-full text-center flex justify-center z-50">
      <h1 className="grotesk absolute text-[40px] font-medium text-white">
        Software Development Services: <br /> Where We Excel
      </h1>
    </div> */}

      <div className="flex items-start justify-between sticky top-0 h-screen w-full bg-gradient-to-t from-black to-[#071844]">
        <div className=" absolute inset-x-0 top-[168px] w-full  flex justify-center">
          <h1 className="grotesk text-[40px] font-medium text-white text-center">
            Software Development Services: <br /> Where We Excel
          </h1>
        </div>
        {/* Right Section */}
        <div className="relative w-1/2 h-full flex justify-center items-center">
          {icons.map((icons, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className={`absolute top-2/3 left-1/2 h-[305px] w-[305px] bg-white rounded-lg transform transition-all duration-500 overflow-hidden shadow-xl `}
              style={{ zIndex: 70 - index * 10 }}
            >
              <div className="relative">
                <svg
                  width="307"
                  height="305"
                  viewBox="0 0 307 305"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M308 271L308 305L-3.26787e-09 305L0 -2.5C-2.31142e-09 215 308 134.844 308 271Z"
                    fill="url(#paint0_linear_2164_2426)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2164_2426"
                      x1="269.189"
                      y1="-136.938"
                      x2="269.189"
                      y2="346.515"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#7693FF" />
                      <stop offset="1" stopColor="white" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute top-0 flex flex-col justify-between w-full h-full p-6">
                  <div className="w-full flex flex-row justify-end">
                    {icons.icon}
                  </div>
                  <p className="grotesk text-[32px] font-medium text-black">
                    {icons.icon_title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Left Section */}
        <div className="w-1/2 h-screen flex flex-col justify-center items-start px-8 lg:px-16">
          <div className="mt-[250px]">
            <h1 className="text-[40px] lg:text-[50px] font-medium text-white">
              {temp === 6
                ? icons[temp]?.icon_title
                : icons[temp + 1]?.icon_title}
            </h1>
            <p className="text-[20px] lg:text-[24px] text-[#BBBBBB] font-medium mt-4">
              {temp === 6 ? icons[temp]?.content : icons[temp + 1]?.content}
            </p>
            <button className="rounded-full text-white bg-[#7793FF] h-[65.29px] w-[209.86px] mt-8">
              Hire US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
