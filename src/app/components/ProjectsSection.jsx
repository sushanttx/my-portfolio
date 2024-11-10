"use client"
import React, {useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectData = [
    {
        id:1,
        title: "React Portfolio Website.",
        description: "haha",
        image: "/images/projects/1.jpg",
        tag: ["All", "Web Dev"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id:2,
        title: "Blah",
        description: "huha",
        image: "/images/projects/2.jpg",
        tag: ["All"],
        gitUrl: "/",
        previewUrl: "/"
    }
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All")

    const handleTagChange = (newTag) => {
        setTag(newTag)
    }

    const filteredProjects = projectData.filter((project) => 
        project.tag.includes(tag)
    )
  return (
    <>
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">

            <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"}/>

            <ProjectTag onClick={handleTagChange} name="Web Dev" isSelected={tag === "Web Dev"}/>

        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 lg:mb-12">
            {filteredProjects.map((project) => <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}/>)}
        </div>
    </>
  )
}

export default ProjectsSection