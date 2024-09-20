import React from "react"
import Image from "next/image"

//import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "HubSpot CMS" },
  { skill: "HubL" },
  { skill: "React" },
  { skill: "Angular" },
  { skill: "TypeScript" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Storybook" },
  { skill: "Material UI" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "HubSpot CRM" },
  { skill: "Email Marketing" },
  { skill: "Figma" },
  { skill: "Adobe XD" }
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-18">
        <h1 className="text-left my-4 font-bold text-4xl">
          More About Me
          {/* <hr className="w-6 h-1 mx-auto my-4 bg-primary border-0 rounded bg-sky-600"></hr> */}
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top sm:mx-12 md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="relative md:w-1/2 ">
            {/* <h1 className="text-center sm:text-left text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1> */}
            {/* <p>
              Hi, my name is Becca and I am a{" "}
              <span className="font-bold">{"self-motivated"}</span>,
              <span className="font-bold">{" positive"}</span>, and
              <span className="font-bold">{" supportive"}</span> Frontend Developer
              based near Salt Lake City, Utah.
            </p>
            <br /> */}
            <p>
            With over 19 years at New Era Technology, I’ve had the privilege of working with some of the world’s most recognizable brands, including Eli Lilly, Fidelity, Sallie Mae, Starbucks, and the Indianapolis Motor Speedway. My role often involved leading the technical implementation of solutions, including web development, complex email automation, responsive email templates, and CRM integrations. I’ve also onboarded and overseen other developers, refining workflows and documenting processes to ensure seamless collaboration across teams.           <br />
            </p>
            <p>
            I live in Utah with my husband, surrounded by the beautiful mountains that are perfect for our road trips and outdoor adventures with our dog. This year, we proudly watched our son embark on a new journey with the Navy after graduating from high school. We couldn't be prouder. When I'm not exploring the outdoors or studying for a new certification, I can be found at concerts enjoying the music and the community, listening to podcasts, or binge watching a TV series.</p>
            <br />
            {/* <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-primary">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p> */}
          </div>
          <div className="relative text-left md:w-1/2 md:text-left">

          <div className="image-col">
          <Image className="rounded-full" src="/rebecca-bretzinger-hubspot-cms-developer2.jpg" alt="Rebecca Bretzinger" width={340} height={340} />
        </div>

            {/* <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-50 border border-slate-400 px-2 py-1 m-1 text-gray-600 font-medium"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div> */}
            {/* <img
              src="/mountain1.png"
              alt=""
              width={420}
              height={420}
              className="mx-auto sm:mt-8 md:mt-0 md:float-right bottom-0 right-0 z-0"
            /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
