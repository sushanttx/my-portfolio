"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectData = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "Frontend Development",
        image: "frontproj.png",
        tag: ["All", "Frontend"],
        gitUrl: "https://github.com/sushanttx/my-portfolio",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "To-Do Backend App",
        description: "Backend Development",
        image: "backend.png",
        tag: ["All", "Backend"],
        gitUrl: "https://github.com/sushanttx/my-portfolio",
        previewUrl: "/"
    },
    {
        id: 3,
        title: "We Collab",
        description: "Full Stack Web and Cloud Development",
        image: "fullproj.png",
        tag: ["All", "Fullstack","Cloud"],
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

            {/* Project Tags - Now Responsive */}
            <div className="text-white flex flex-wrap justify-center items-center gap-2 py-4 overflow-x-auto whitespace-nowrap px-4 md:px-0 text-sm md:text-base">
                <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
                <ProjectTag onClick={handleTagChange} name="Frontend" isSelected={tag === "Frontend"} />
                <ProjectTag onClick={handleTagChange} name="Backend" isSelected={tag === "Backend"} />
                <ProjectTag onClick={handleTagChange} name="Fullstack" isSelected={tag === "Fullstack"} />
                <ProjectTag onClick={handleTagChange} name="Cloud" isSelected={tag === "Cloud"} />

            </div>

            {/* Project Cards - Adjusted for better spacing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 lg:mb-12 px-4">
                {filteredProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                ))}
            </div>
        </>
    )
}

export default ProjectsSection
