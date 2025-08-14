"use client";

import FlipCards from "@/components/FlipCards";
import ScrollContent from "@/components/ScrollContent";
import { useState } from "react";

export default function Home() {
  const [index, setIndex] = useState<number | null>(0); // Track selected card

  const contentArray = [
    {
      title: "Building the user Interface",
      description:
        "Frontend development is the art of crafting the user interface of websites and web applications. It involves a deep understanding of HTML, CSS, and JavaScript, which together form the backbone of modern web development. By combining these technologies with frameworks like React, Angular, and Vue.js, developers can create dynamic, responsive, and visually appealing user interfaces that captivate and engage users.",
    },
    {
      title: "Powering the server-side Logic",
      description:
        "Backend development focuses on the server-side logic and infrastructure that powers web applications. It involves working with programming languages like Python, Ruby, and Node.js to build APIs, process data, and manage databases. Backend developers are responsible for ensuring the security, scalability, and performance of web applications. By mastering frameworks like Django, Ruby on Rails, and Express.js, developers can efficiently build robust and scalable backend systems.",
    },
    {
      title: "Intelligent Machines, Limitless Possibilities",
      description:
        "Artificial intelligence (AI) is revolutionizing the way we live and work. By enabling machines to learn from data and make intelligent decisions, AI is driving innovation across various sectors. Machine learning, a subset of AI, empowers algorithms to recognize patterns, make predictions, and automate tasks. Natural language processing (NLP) enables computers to understand and respond to human language, while computer vision allows machines to interpret and analyze visual information. As AI continues to advance, it will reshape industries and create new opportunities.",
    },
    {
      title: "Designing for User Delight",
      description:
        "User experience (UX) design is the process of enhancing user satisfaction by improving the usability, accessibility, and pleasure provided in the interaction between the user and the product. UX designers focus on understanding user needs and behaviors, and then designing products and services that meet those needs. By creating intuitive and enjoyable user experiences, UX designers can drive user engagement and loyalty.",
    },
    {
      title: "The Future of Computing",
      description:
        "Cloud computing has transformed the way businesses operate by providing scalable and flexible computing resources on demand. Cloud platforms like AWS, Azure, and Google Cloud offer a wide range of services, including virtual machines, storage, databases, and machine learning. By leveraging the cloud, organizations can reduce costs, improve scalability, and enhance security. Cloud-native technologies, such as containers and serverless computing, are further driving innovation and enabling rapid development and deployment of applications.",
    },
    {
      title: "Accelerating Software Delivery",
      description:
        "DevOps is a cultural and technical movement that aims to shorten the software development lifecycle and improve collaboration between development and operations teams. By adopting DevOps practices, organizations can achieve faster time-to-market, increased reliability, and enhanced efficiency. Key DevOps tools and technologies include version control systems (Git), continuous integration/continuous delivery (CI/CD) pipelines, and infrastructure as code. By embracing DevOps, teams can deliver high-quality software products more frequently and reliably.",
    },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto pt-[56px] pb-[146px]">
        <div className="flex justify-center mb-[96px]">
          <h1 className="grotesk font-medium text-[40px] text-black w-[700px] text-center">
            Digital Innovations: Shaping the Future
          </h1>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-between">
          {/* Pass data to components */}
          <ScrollContent content={contentArray[index || 0]} />
          <FlipCards setIndex={setIndex} />
        </div>
      </div>
    </div>
  );
}
