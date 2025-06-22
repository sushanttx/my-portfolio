"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
// 1port, 2collab
const projectData = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "Frontend Development Single Page Application",
        image: "frontproj.png",
        tag: ["All", "Frontend"],
        gitUrl: "https://github.com/sushanttx/my-portfolio",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "Visual DB",
        description: "Full Stack Web and Cloud Development Database",
        image: "visualdb2.png",
        tag: ["All", "Fullstack","Cloud"],
        gitUrl: "https://github.com/sushanttx/fullstack-filestorage",
        previewUrl: "/"
    },
    {
        id: 3,
        title: "Inboxtor",
        description: "Email Server Cloud Integration",
        image: "mail-server.png",
        tag: ["All", "Fullstack", "Cloud"],
        gitUrl: "https://github.com/sushanttx/mail-server",
        previewUrl: "/"
    },
    {
        id: 4,
        title: "Simple HTTP Server",
        description: "Core Java Development",
        image: "http-server2.png",
        tag: ["All", "Core Java"],
        gitUrl: "https://github.com/sushanttx/simple-http-server",
        previewUrl: "/"
    },
    {
        id: 5,
        title: "Image-Text Hider Tool",
        description: "LSB Method Text Embedder in Images",
        image: "stegano1.jpg",
        tag: ["All", "Python"],
        gitUrl: "https://github.com/sushanttx/Data-Hider-Steganography",
        previewUrl: "/"
    },
    {
        id: 6,
        title: "Image Colorizer",
        description: "B&W to colored Image Conversion",
        image: "bandw.png",
        tag: ["All", "Python"],
        gitUrl: "https://github.com/sushanttx/b-w_image-colorizer",
        previewUrl: "/"
    },
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
                <ProjectTag onClick={handleTagChange} name="Core Java" isSelected={tag === "Core Java"} />
                <ProjectTag onClick={handleTagChange} name="Python" isSelected={tag === "Python"} />

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
