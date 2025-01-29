"use client"
import React, {useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectData = [
    {
        id:1,
        title: "Portfolio Website",
        description: "Frontend Development",
        image: "frontproj.png",
        tag: ["All", "Web Dev"],
        gitUrl: "https://github.com/sushanttx/my-portfolio",
        previewUrl: "/"
    },
    {
        id:2,
        title: "We Collab",
        description: "Full Stack Web and Cloud Development",
        image: "/images/projects/2.jpg",
        tag: ["All","Web Dev", "Cloud"],
        gitUrl: "https://github.com/sushanttx/fullstack-filestorage",
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
        <h2 id="projects" className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">

            <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"}/>

            <ProjectTag onClick={handleTagChange} name="Web Dev" isSelected={tag === "Web Dev"}/>

            <ProjectTag onClick={handleTagChange} name="Cloud" isSelected={tag === "Cloud"}/>

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