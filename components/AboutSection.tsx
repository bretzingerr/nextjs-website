import React from "react"
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
        <h1 className="text-center my-4 font-bold text-4xl">
          About Me
          {/* <hr className="w-6 h-1 mx-auto my-4 bg-primary border-0 rounded bg-sky-600"></hr> */}
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top sm:mx-12 md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="relative md:w-1/2 ">
            <h1 className="text-center sm:text-left text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            {/* <p>
              Hi, my name is Becca and I am a{" "}
              <span className="font-bold">{"self-motivated"}</span>,
              <span className="font-bold">{" positive"}</span>, and
              <span className="font-bold">{" supportive"}</span> Frontend Developer
              based near Salt Lake City, Utah.
            </p>
            <br /> */}
            <p>For nearly two decades, I&apos;ve specialized in the field of "digital transformation," dedicating over 15 of those years to consulting on projects for notable companies. Among many roles in my professional journey, my experience includes developing custom themes using HubSpot CMS and creating high-traffic marketing websites for companies like Fidelity and Eli Lilly Pharmaceuticals.
            </p>
            <br />
            <p>All these milestones reflect the diverse consulting assignments I&apos;ve tackled at New Era Technology, where my tenure has spanned over 17 years. By embracing and applying a growth mindset, I&apos;ve been entrusted with excelling in varied roles and technologies. My commitment and performance have frequently been validated by positive feedback from clients and numerous in-house recognitions from colleagues and management.
            </p>
            <br />
            <p>While I still hold a special place in my heart for Indiana, Utah has been my home for the past seven years. Living just a stone's throw from the mountains with my husband and son, I love to ski, hike, and set out on road trips. When not in the great outdoors, I also enjoy attending concerts, listening to podcasts, and volunteering.
            </p>
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
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
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
            </div>
            <img
              src="/mountain1.png"
              alt=""
              width={420}
              height={420}
              className="mx-auto sm:mt-8 md:mt-0 md:float-right bottom-0 right-0 z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
