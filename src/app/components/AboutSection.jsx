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
        <li>Java</li>
        <li>C++</li>
        <li>Cloud Computing</li>
        <li>FrontEnd Development</li>
        <li>SQL</li>
        <li></li>
      </ul>
    )
  },
  {
    title: "Publications",
    id: "publications",
    content: (
      <ul>
        <li>Enhancing Helmet Detection: A YOLOv8 Approach.</li>
        <li>The Potential And Security of Smart Contracts.</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Bach</li>
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
    <section className="text-white">
        <div className="md: grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
            <Image src="/images/study.jpg" width={400} height={400}/>
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