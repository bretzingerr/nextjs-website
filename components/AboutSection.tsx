import React from "react"
import Image from "next/image"

//import Image from "next/image"

// const skills = [
//   { skill: "HTML" },
//   { skill: "CSS" },
//   { skill: "JavaScript" },
//   { skill: "HubSpot CMS" },
//   { skill: "HubL" },
//   { skill: "React" },
//   { skill: "Angular" },
//   { skill: "TypeScript" },
//   { skill: "Next.js" },
//   { skill: "Tailwind CSS" },
//   { skill: "Storybook" },
//   { skill: "Material UI" },
//   { skill: "Git" },
//   { skill: "GitHub" },
//   { skill: "HubSpot CRM" },
//   { skill: "Email Marketing" },
//   { skill: "Figma" },
//   { skill: "Adobe XD" }
// ]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-18">
        <h1 className="text-left my-4 font-bold text-4xl">
          More About Me
          {/* <hr className="w-6 h-1 mx-auto my-4 bg-primary border-0 rounded bg-sky-600"></hr> */}
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top sm:mx-12 md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
        <div className="image-col">
          <Image className="rounded-full" src="/rebecca-bretzinger-hubspot-cms-developer2.jpg" alt="Rebecca Bretzinger" width={340} height={340} />
        </div>

<div className="text-col">
            <p>
            With over 19 years at New Era Technology, I’ve had the privilege of working with some of the world’s most recognizable brands, including Eli Lilly, Fidelity, Sallie Mae, Starbucks, and the Indianapolis Motor Speedway. My role often involved leading the technical implementation of solutions, including web development, complex email automation, responsive email templates, and CRM integrations. I’ve also onboarded and overseen other developers, refining workflows and documenting processes to ensure seamless collaboration across teams.           <br />
            </p>
            <p>
            I live in Utah with my husband, surrounded by the beautiful mountains that are perfect for our road trips and outdoor adventures with our dog. This year, we proudly watched our son embark on a new journey with the Navy after graduating from high school. We couldn't be prouder. When I'm not exploring the outdoors or studying for a new certification, I can be found at concerts enjoying the music and the community, listening to podcasts, or binge watching a TV series.</p>
          </div>
          <div className="relative text-left md:w-1/2 md:text-left">

          
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
