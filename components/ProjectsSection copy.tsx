"use client"
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"

type ProjectType = {
  id: number;
  name: string;
  type: string;
  description: string;
  longDescription: string;
  image1: string;
  image2: string;
  image3: string;
};

type ProjectCardProps = {
  project: ProjectType;
  onOpenDetail: (projectId: number) => void;
};

const projects = [
  {
    id: 1,
    name: "Convert mobile menu to accordion-style",
type: "HubSpot CMS Custom Theme Development",
description:
  "Enhanced the mobile navigation by transitioning to an accordion-style interaction for sub-menus. Additionally, refactored the HTML and CSS to ensure each link occupies the full width of the menu, optimizing clickability and user experience.",
  longDescription:
  "Enhanced the mobile navigation by transitioning to an accordion-style interaction for sub-menus. Additionally, refactored the HTML and CSS to ensure each link occupies the full width of the menu, optimizing clickability and user experience.",
    image1: "/thankfulthoughts.png",
    image2: "/thankfulthoughts.png",
    image3: "/thankfulthoughts.png",
  },
  {
    id: 2,
    name: "Update mega meu to allow keyboard navigation",
    type: "HubSpot CMS Custom Theme Development",
    description:
    "Added JavaScript code in the Megamenu module.js file to allow keyboard navigation.",
    longDescription:
    "Added JavaScript code in the Megamenu module.js file to allow keyboard navigation.",
        image1: "/platoio.png",
        image2: "/platoio.png",
        image3: "/platoio.png",
  },
  {
    id: 3,
    name: "Improved blog listing filter",
    type: "HubSpot CMS Custom Theme Development",
    description:
    'Introduced a selectable option in the fields.json file allowing end users to choose the "Number of posts to display initially" and a corresponding "Load More" button in the blog listing filter module code (HTML. HubL, JavaScript, CSS), enhancing user experience by allowing incremental post loading without overwhelming the initial page view.',
    longDescription:
    'Introduced a selectable option in the fields.json file allowing end users to choose the "Number of posts to display initially" and a corresponding "Load More" button in the blog listing filter module code (HTML. HubL, JavaScript, CSS), enhancing user experience by allowing incremental post loading without overwhelming the initial page view.',
    image1: "/familyphotos.png",
    image2: "/familyphotos.png",
    image3: "/familyphotos.png",
  },
  {
    id: 4,
    name: "Frontend Development",
    type: "Angular, Material UI, TypeScript, Git, GitHub",

    description:
    "Two year assignment focustd on UI development on a complex accounts settlements web application. ",
    longDescription:
    "Two year assignment focustd on UI development on a complex accounts settlements web application. Collaborated closely with UI Designer, Backend Developers, and Project Manager to ensure business logic was correctly realized. Participated in daily standup meetings for alignment and progress tracking.",



    image1: "/thankfulthoughts.png",
    image2: "/thankfulthoughts.png",
    image3: "/thankfulthoughts.png",
  },
  {
    id: 5,
    name: "PlatoIO",
    type: "HubSpot CMS Custom Theme Development",

    description:
    "Adding fields to the theme editor UI for the end users, also add those fields to the theme.json file. Utilize those fields in the theme templates to create a custom mobile menu.",
    longDescription:
    "Adding fields to the theme editor UI for the end users, also add those fields to the theme.json file. Utilize those fields in the theme templates to create a custom mobile menu.",
    image1: "/platoio.png",
    image2: "/platoio.png",
    image3: "/platoio.png",
  },
  {
    id: 6,
    name: "Kator Family Photos",
    type: "HubSpot CMS Custom Theme Development",

    description:
    "Adding fields to the theme editor UI for the end users, also add those fields to the theme.json file. Utilize those fields in the theme templates to create a custom mobile menu.",
    longDescription:
    "Adding fields to the theme editor UI for the end users, also add those fields to the theme.json file. Utilize those fields in the theme templates to create a custom mobile menu.",
    image1: "/familyphotos.png",
    image2: "/familyphotos.png",
    image3: "/familyphotos.png",
  },
]

function ProjectCard({ project, onOpenDetail }: ProjectCardProps) {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-2">
        <h2>{project.type}</h2>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
      </div>
      <button onClick={() => onOpenDetail(project.id)}>View Details</button>
    </div>
  );
}



function Toolbar({
  currentIndex,
  total,
  onPrevious,
  onNext
}: {
  currentIndex: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
}) {
  return (
    <div className="flex items-center justify-center space-x-4">
      <button onClick={onPrevious}>&larr;</button>
      <span>{currentIndex} of {total}</span>
      <button onClick={onNext}>&rarr;</button>
    </div>
  );
}

interface ProjectDetailProps {
  project: ProjectType;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}



function ProjectDetail({
  project,
  onClose,
  onPrevious,
  onNext
}: ProjectDetailProps) {
  return (
    // ... (rest of the component)
    <Toolbar currentIndex={project.id} total={projects.length} onPrevious={onPrevious} onNext={onNext} />
    // ... (rest of the component)
  );
}



function ProjectSection() {
  const [view, setView] = useState<'cards' | 'detail'>('cards');
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  const handleOpenDetail = (projectId: number) => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      setSelectedProject(project);
      setView('detail');
    }
  };

  const handleClose = () => {
    setSelectedProject(null);
    setView('cards');
  };

  const handlePrevious = () => {
    if (selectedProject) {
      const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
      const previousIndex = (currentIndex - 1 + projects.length) % projects.length;
      setSelectedProject(projects[previousIndex]);
    }
  }

  const handleNext = () => {
    if (selectedProject) {
      const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
      const nextIndex = (currentIndex + 1) % projects.length;
      setSelectedProject(projects[nextIndex]);
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-4">
      <h1 className="text-xl font-bold mb-4">Projects</h1>
      {view === 'cards' ? (
        projects.map(project => (
          <ProjectCard key={project.id} project={project} onOpenDetail={handleOpenDetail} />
        ))
      ) : (




        selectedProject && (
          <ProjectDetail 
            project={selectedProject} 
            onClose={handleClose} 
            onPrevious={handlePrevious} 
            onNext={handleNext} 
          />
        )
        
      )}
    </div>
  );
}



export default ProjectSection;





