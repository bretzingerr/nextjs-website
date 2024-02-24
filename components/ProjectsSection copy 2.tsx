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
  image3?: string;
};

type ProjectCardProps = {
  project: ProjectType;
  onOpenDetail: (projectId: number) => void;
};

interface ProjectDetailProps {
  project: ProjectType;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  totalProjects: number;
}

const projects = [
  {
    id: 1,
    name: "Convert mobile menu to accordion-style",
type: "HubSpot CMS Custom Theme Development",
description:
  "Enhanced the mobile navigation by transitioning to an accordion-style interaction for sub-menus.",
  longDescription:
  "Enhanced the mobile navigation by transitioning to an accordion-style interaction for sub-menus. Additionally, refactored the HTML and CSS to ensure each link occupies the full width of the menu, optimizing clickability and user experience.",
    image1: "/mobile-menu-accordian-hubspot-cms-custom-theme-development-thumb.jpg",
    image2: "/mobile-menu-accordian-hubspot-cms-custom-theme-development.jpg",
    image3: "",
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
        image3: "",
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
    name: "Angular Frontend Development",
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
    name: "Fidelity Investments Marketing Websites",
    type: "Frontend Development, Project Team Management",

    description:
    "Two-year assignment leading marketing website projects. Managed end-to-end process, from requirement gathering to final delivery and launch.",

    longDescription:
    "Over a two-year period, I spearheaded marketing website projects, overseeing the entire process from:\n\n- Initial consultations with business division managers to gather requirements\n- Evaluating design files\n- Determining the appropriate coding toolset and approach\n- Leading the coding efforts\n- Conducting status meetings\n- Ensuring successful delivery and launch.\n\nRequested as the primary web delivery contact for the high net worth division, due to my prompt responsiveness and amiable demeanor.",

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

import { FaExpand } from 'react-icons/fa';  // Import the expand icon from react-icons

function ProjectCard({ project, onOpenDetail }: ProjectCardProps) {
  return (
    // <div
    //   className="group cursor-pointer relative border border-gray-300 p-4 bg-gray-100 hover:bg-gray-200 hover:border-gray-400 transition-all rounded-md" 
    //   onClick={() => onOpenDetail(project.id)}
    // >
    //   <img src={project.image1} alt={project.name} className="rounded-md shadow-md mb-2"/>
    //   <div className="p-4">
    //     <p className="uppercase text-sm text-gray-500 mb-1">{project.type}</p>
    //     {/* Underline the project name when the parent (card) is hovered */}
    //     <h2 className="text-xl mt-1 font-semibold text-sky-800 group-hover:underline">{project.name}</h2>
    //     <p className="text-gray-600 mt-1">{project.description}</p>
    //   </div>

    //   {/* Change the expand icon's color based on the hover state of the parent (card) */}
    //   <div className="absolute bottom-2 right-2 text-slate-400 group-hover:text-slate-500">
    //     <FaExpand size={20} />
    //   </div>
    // </div>

    <div
    className="group cursor-pointer relative border border-gray-200 bg-white hover:shadow-xl transition-shadow duration-300 rounded-lg flex hover:border-transparent"
    onClick={() => onOpenDetail(project.id)}
  >
    {/* Image on the left */}
    <div className="flex-none w-1/4 p-4"> {/* Adjusted width to 1/4 and added padding */}
      <img 
        src={project.image1} 
        alt={project.name} 
        className="object-cover h-full w-full rounded shadow-sm"
      />
    </div>
    
    {/* Details on the right */}
    <div className="flex-1 p-5">
      <p className="uppercase text-xs font-medium text-gray-400 mb-2 tracking-wide">{project.type}</p>
      <h2 className="text-xl mt-1 font-bold text-sky-800 transition-underline duration-500 group-hover:underline">{project.name}</h2> {/* Increased transition duration */}
      <p className="text-gray-600 mt-3 leading-relaxed">{project.description}</p>
  
      {/* Change the expand icon's color based on the hover state of the parent (card) */}
      <div className="absolute bottom-4 right-4 text-slate-400 group-hover:text-slate-500 transition-colors duration-200">
        <FaExpand size={24} />
      </div>
    </div>
  </div>
  

  )
};



function ProjectDetail({
  project,
  onClose,
  onPrev,
  onNext,
  currentIndex,
  totalProjects
}: ProjectDetailProps) {
  return (
    <div className="flex flex-col border rounded border-gray-300 bg-gray-100 p-4">
      
      {/* Top Toolbar */}
      <div className="detail-arrows flex justify-between items-center my-4 w-full">
        <div className="flex justify-center items-center flex-grow">
            <button 
                onClick={onPrev} 
                className="cursor-pointer text-neutral-100 font-semibold px-1 py-0 bg-sky-700 rounded shadow hover:bg-sky-800"
            >
                ←
            </button>
            
            <span className="mx-4">Project {currentIndex + 1} of {totalProjects}</span>
            
            <button 
                onClick={onNext} 
                className="cursor-pointer text-neutral-100 font-semibold px-1 py-0 bg-sky-700 rounded shadow hover:bg-sky-800"
            >
                →
            </button>
        </div>

        <button 
            onClick={onClose} 
            className="text-lg cursor-pointer text-neutral-100 font-semibold px-2 py-0 bg-sky-700 rounded shadow hover:bg-sky-800"
        >
            &times;
        </button>
    </div>

      {/* Project Details */}
      {project.image3 ? (
        <>
          {/* When image3 is available */}
          <div className="text-center max-w-3xl mx-auto my-4">
            <hr className="w-11/12 mx-auto my-4"/>
            <p className="uppercase text-gray-500 mb-2">{project.type}</p>
            <h2 className="text-xl text-sky-800 font-semibold mb-4">{project.name}</h2>
            <p className="text-gray-600">{project.longDescription}</p>
          </div>
          <div className="flex justify-center items-start space-x-4 mt-4">
            <img src={project.image2} alt="Image 2" className="w-1/2"/>
            <img src={project.image3} alt="Image 3" className="w-1/2"/>
          </div>
        </>
      ) : (
        <>
          {/* When image3 is not available */}
          <div className="detail-columns flex"> 
            <div className="w-1/2">
                <img src={project.image2} alt="Image 2" className="mb-2"/>
            </div>
            <div className="w-1/2 pl-4">
                <hr className="w-11/12 mx-auto my-4"/>
                <p className="uppercase text-gray-500 mb-2">{project.type}</p>
                <h2 className="text-xl text-sky-800 font-semibold mb-4">{project.name}</h2>
                <p className="text-gray-600">{project.longDescription}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}


function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);
  const [showDetail, setShowDetail] = useState(false);

  function handleOpenDetail(projectId: number) {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      setSelectedProject(project);
      setShowDetail(true);
      
      // Scroll to the Projects header
      const header = document.querySelector('section#projects h1');
      if (header) {
        const top = header.getBoundingClientRect().top + window.scrollY - 84; // minus 20 for some padding
        window.scrollTo({
          top: top,
          behavior: 'smooth'
        });
      }
    }
  }
  

  function handleCloseDetail() {
    setSelectedProject(null);
    setShowDetail(false);
  }

  function handlePrev() {
    const currentIndex = projects.findIndex(p => p.id === selectedProject?.id);
    const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    setSelectedProject(projects[prevIndex]);
  }

  function handleNext() {
    const currentIndex = projects.findIndex(p => p.id === selectedProject?.id);
    const nextIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    setSelectedProject(projects[nextIndex]);
  }

  return (
    <section id="projects">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-center font-bold text-4xl">
          Projects
         
        </h1>
        <p className="text-center">A selection of projects I've worked on.</p>
        <hr className="w-6 h-1 mx-auto my-4 bg-primary border-0 rounded rounded bg-sky-600"></hr>

        {!showDetail ? (
          <div className="grid grid-cols-1 md:grid-cols-1 gap-9">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} onOpenDetail={handleOpenDetail} />
            ))}
          </div>
        ) : (
          selectedProject && (
            <ProjectDetail
              project={selectedProject}
              onClose={handleCloseDetail}
              onPrev={handlePrev}
              onNext={handleNext}
              currentIndex={projects.indexOf(selectedProject)}
  totalProjects={projects.length}
            />
          )
        )}
      </div>
    </section>
  );
}

export default ProjectSection;
