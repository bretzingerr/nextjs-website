"use client"
import React, { useState } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import SlideUp from "./SlideUp"

type ProjectType = {
  id: number;
  name: string;
  company: string;
  description: string;
  longDescription: string;
  image1: string;
  image2: string;
  image3?: string;
  image4?: string;
  classNameUL: string;
  classNameLI: string;
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
    name: "HubSpot CMS Custom Theme Development1",
    company: "New Era Technology",
    description: "Enhanced the mobile navigation by transitioning to an accordion-style interaction for sub-menus.",
    longDescription: `
      Frontend development on multiple HubSpot CMS themes listed in the HubSpot CMS Marketplace. Tasks have included:
      <ul>
        <li>Enhanced a mobile navigation by transitioning to an accordion-style interaction for sub-menus.</li>
        <li>Refactored the HTML and CSS to ensure each link occupies the full width of the menu, optimizing clickability and user experience.</li>
        <li>On a blog listing module, introduced a selectable option in the fields.json file allowing end users to choose the "Number of posts to display initially" and a corresponding "Load More" button. This enhanced user experience by allowing incremental post loading without overwhelming the initial page view.</li>
      </ul>
    `,
    image1: "/mobile-menu-accordian-hubspot-cms-custom-theme-development-thumb.jpg",
    image2: "/mobile-menu-accordian-hubspot-cms-custom-theme-development.jpg",
    image3: "",
    classNameUL: "list-decimal pl-5",
    classNameLI: "mb-2"
  },

  {
    id: 2,
    name: "HubSpot CMS Custom Theme Development2",
    company: "New Era Technology",
    description: "Enhanced the mobile navigation by transitioning to an accordion-style interaction for sub-menus.",
    longDescription: `
      Frontend development on multiple HubSpot CMS themes listed in the HubSpot CMS Marketplace. Tasks have included:
      <ul>
        <li>Enhanced a mobile navigation by transitioning to an accordion-style interaction for sub-menus.</li>
        <li>Refactored the HTML and CSS to ensure each link occupies the full width of the menu, optimizing clickability and user experience.</li>
        <li>On a blog listing module, introduced a selectable option in the fields.json file allowing end users to choose the "Number of posts to display initially" and a corresponding "Load More" button. This enhanced user experience by allowing incremental post loading without overwhelming the initial page view.</li>
      </ul>
    `,
    image1: "/mobile-menu-accordian-hubspot-cms-custom-theme-development-thumb.jpg",
    image2: "/mobile-menu-accordian-hubspot-cms-custom-theme-development.jpg",
    image3: "",
    classNameUL: "list-decimal pl-5",
    classNameLI: "mb-2"
  },
  {
    id: 3,
    name: "HubSpot CMS Custom Theme Development3",
    company: "New Era Technology",
    description: "Enhanced the mobile navigation by transitioning to an accordion-style interaction for sub-menus.",
    longDescription: `
      Frontend development on multiple HubSpot CMS themes listed in the HubSpot CMS Marketplace. Tasks have included:
      <ul>
        <li>Enhanced a mobile navigation by transitioning to an accordion-style interaction for sub-menus.</li>
        <li>Refactored the HTML and CSS to ensure each link occupies the full width of the menu, optimizing clickability and user experience.</li>
        <li>On a blog listing module, introduced a selectable option in the fields.json file allowing end users to choose the "Number of posts to display initially" and a corresponding "Load More" button. This enhanced user experience by allowing incremental post loading without overwhelming the initial page view.</li>
      </ul>
    `,
    image1: "/mobile-menu-accordian-hubspot-cms-custom-theme-development-thumb.jpg",
    image2: "/mobile-menu-accordian-hubspot-cms-custom-theme-development.jpg",
    image3: "",
    classNameUL: "list-decimal pl-5",
    classNameLI: "mb-2"
  },
//   {
//     id: 2,
//     name: "Update mega meu to allow keyboard navigation",
//     type: "HubSpot CMS Custom Theme Development",
//     description:
//     "Added JavaScript code in the Megamenu module.js file to allow keyboard navigation.",
//     longDescription:
//     "Added JavaScript code in the Megamenu module.js file to allow keyboard navigation.",
//         image1: "/platoio.png",
//         image2: "/platoio.png",
//         image3: "",
//   },
//   {
//     id: 3,
//     name: "Improved blog listing filter",
//     type: "HubSpot CMS Custom Theme Development",
//     description:
//     'Introduced a selectable option in the fields.json file allowing end users to choose the "Number of posts to display initially" and a corresponding "Load More" button in the blog listing filter module code (HTML. HubL, JavaScript, CSS), enhancing user experience by allowing incremental post loading without overwhelming the initial page view.',
//     longDescription:
//     'Introduced a selectable option in the fields.json file allowing end users to choose the "Number of posts to display initially" and a corresponding "Load More" button in the blog listing filter module code (HTML. HubL, JavaScript, CSS), enhancing user experience by allowing incremental post loading without overwhelming the initial page view.',
//     image1: "/familyphotos.png",
//     image2: "/familyphotos.png",
//     image3: "/familyphotos.png",
//   },
//   {
//     id: 4,
//     name: "Angular Frontend Development",
//     type: "Angular, Material UI, TypeScript, Git, GitHub",

//     description:
//     "Two year assignment focustd on UI development on a complex accounts settlements web application. ",
//     longDescription:
//     "Two year assignment focustd on UI development on a complex accounts settlements web application. Collaborated closely with UI Designer, Backend Developers, and Project Manager to ensure business logic was correctly realized. Participated in daily standup meetings for alignment and progress tracking.",



//     image1: "/thankfulthoughts.png",
//     image2: "/thankfulthoughts.png",
//     image3: "/thankfulthoughts.png",
//   },
//   {
//     id: 5,
//     name: "Fidelity Investments Marketing Websites",
//     type: "Frontend Development, Project Team Management",

//     description:
//     "Two-year assignment leading marketing website projects. Managed end-to-end process, from requirement gathering to final delivery and launch.",

//     longDescription:
//     "Over a two-year period, I spearheaded marketing website projects, overseeing the entire process from:\n\n- Initial consultations with business division managers to gather requirements\n- Evaluating design files\n- Determining the appropriate coding toolset and approach\n- Leading the coding efforts\n- Conducting status meetings\n- Ensuring successful delivery and launch.\n\nRequested as the primary web delivery contact for the high net worth division, due to my prompt responsiveness and amiable demeanor.",

//     image1: "/platoio.png",
//     image2: "/platoio.png",
//     image3: "/platoio.png",
// },

//   {
//     id: 6,
//     name: "Kator Family Photos",
//     type: "HubSpot CMS Custom Theme Development",

//     description:
//     "Adding fields to the theme editor UI for the end users, also add those fields to the theme.json file. Utilize those fields in the theme templates to create a custom mobile menu.",
//     longDescription:
//     "Adding fields to the theme editor UI for the end users, also add those fields to the theme.json file. Utilize those fields in the theme templates to create a custom mobile menu.",
//     image1: "/familyphotos.png",
//     image2: "/familyphotos.png",
//     image3: "/familyphotos.png",
//   },
]

import { FaExpand } from 'react-icons/fa';  // Import the expand icon from react-icons

function ProjectCard({ project, onOpenDetail }: ProjectCardProps) {
  return (
    <div
  className="group cursor-pointer relative bg-white hover:shadow-md transition-shadow duration-300 flex overflow-hidden"
  onClick={() => onOpenDetail(project.id)}
>
  {/* Details on the left */}
  <div className="flex-1 p-5">
    <h2 className="text-xl mt-1 font-bold text-gray-800 transition-all duration-300 group-hover:underline">{project.name}</h2>
    <p className="text-slate-700">{project.company}</p>
  </div>
  
  {/* Image on the right */}
  <div className="flex-none w-1/3 p-4">
    <img
      src={project.image1}
      alt={project.name} 
      className="object-cover w-full h-full"
    />
  </div>
  
  {/* Icon at the bottom right corner for expansion */}
  <div className="absolute bottom-4 right-4 text-slate-400 group-hover:text-slate-500 transition-colors duration-200">
    <FaExpand size={24} />
  </div>
</div>

  )
}




function ProjectDetail({
  project,
  onClose,
  onPrev,
  onNext,
  // currentIndex,
  // totalProjects
}: ProjectDetailProps) {
  return (


  




  <div className=" mx-auto p-4">
  {/* Top Toolbar */}
<div className="flex justify-between items-center my-4">
  {/* Back to Project List on the left */}
  <a onClick={onClose} className="cursor-pointer text-slate-400 hover:text-slate-200 transition-colors duration-200 text-sm">
    ◀︎ Back to Project List
  </a>

  {/* Previous & Next on the right */}
  <div className="flex items-center">
    <a 
      onClick={onPrev} 
      className="cursor-pointer text-slate-400 hover:text-slate-200 transition-colors duration-200 text-sm"
    >
      ◀︎ Previous
    </a>
    <span className="mx-2">|</span>
    <a 
      onClick={onNext} 
      className="cursor-pointer text-slate-400 hover:text-slate-200 transition-colors duration-200 text-sm"
    >
      Next ▶︎
    </a>
  </div>
</div>


  {/* Project Details */}
  <div className="flex flex-wrap md:flex-nowrap md:justify-center items-start mt-4">
    {/* Images stack on the left */}
    <div className="w-full md:w-2/3 space-y-4">
      <img src={project.image2} alt={`${project.name} - Main`} className="w-full" />
      {project.image3 && <img src={project.image3} alt={`${project.name} - Additional`} className="w-fulls" />}
      {project.image4 && <img src={project.image4} alt={`${project.name} - More Views`} className="w-full" />}
    </div>

    {/* Text details on the right */}
    <div className="w-full md:w-1/3 mt-4 md:mt-0 md:pl-4">
      <h2 className="text-2xl text-stone-200 font-semibold mb-2">{project.name}</h2>
      <p className="text-sky-300 mb-4">Company: {project.company}</p>
      <div
        className="prose text-stone-100"
        dangerouslySetInnerHTML={{ __html: project.longDescription }}
      />
    </div>
  </div>
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
    <section id="projects" >
  <div className="container mx-auto px-4 sm:my-16 md:my-48">
    <h1 className="text-left text-4xl">
      Projects
    </h1>
    <p className="text-center text-stone-200 my-4 ">A selection of projects I&apos;ve worked on.</p>
    {/* <hr className="w-6 h-1 mx-auto my-4 bg-primary border-0 rounded bg-sky-600"></hr> */}

    {!showDetail ? (
      <div className="grid grid-cols-3 gap-9"> {/* Updated this line */}
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
