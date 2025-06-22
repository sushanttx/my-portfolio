"use client";
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Programming Languages: Java, Python, C++, HTML, CSS, JavaScript.</li><br />
        <li>Frameworks and libraries: Spring Boot, ReactJS, Next.js.</li><br />
        <li>Databases: MySQL/SQL, PostgreSQL, MongoDB.</li><br />
        <li>Developer Tools: VS Code, Eclipse, IntelliJ IDEA.</li><br />
        <li>Version Control, Cloud Platforms and Containerization: Git/GitHub, AWS, Docker.</li><br />
        <li>Operating Systems: Linux, Windows.</li>
      </ul>
    )
  },
  {
    title: "Publications",
    id: "publications",
    content: (
      <ul className="list-disc pl-2">
        <li>Automating Helmet Usage Detection: A YOLOv8 Based Framework.
          <br /> 
          - DOI:10.22214/ijraset.2024.61533
          <br />
          - Feb 2024 – April 2024</li><br />
        <li>The Potential And Security of Smart Contracts.
        <br />- DOI: 10.13140/RG.2.2.28364.83840
        <br /> - Sept 2023 – November 2023
        </li>
        
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>PICT (Computer Engineering), Pune.
          <br /> - CGPA: 7.71 <br />- Tenure: 2021 - 2025</li><br />
        <li>Fergusson College - HSC, Pune. <br />- Marks: 80%
        <br /> - Tenure: 2019 – 2021</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) =>{
    startTransition(() => {
      setTab(id);
    });
  }
  return (
    <section id="about" className="text-white">
        <div className="md: grid md:grid-cols-2 gap-8 items-center py-4 px-0 xl:gap-16 sm:py-8 xl:px-16 ">
              <Image src="/images/study.jpg" width={320} height={320} alt="Study Image"/>
              <div className= "mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">
                  About ME
                </h2>
                <p className="text-base lg:text-lg">
                  I am an aspiring Software Engineer with proficiency in Java and Full-Stack Web application development with an interest in cloud computing platforms and machine learning. Actively, practically, and theoretically gaining a better understanding of computer operations. 
                </p>
                <div className=" flex flex-row justify-start mt-8">
                  <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"} >
                    {"  "}Skills {"  "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("publications")} active={tab === "publications"} >
                    {"  "}Publications {"  "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"} >
                    {"  "}Education {"  "}
                    </TabButton>
                </div>
                <div className = "mt-8">
                  {TAB_DATA.find((t) => t.id === tab).content}
                </div>
              </div>
        </div>
    </section>
  )
}

export default AboutSection