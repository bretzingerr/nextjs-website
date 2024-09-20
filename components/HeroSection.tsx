"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
// import { HiArrowDown } from "react-icons/hi"




const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 sm:my-32 sm:mx-12 md:my-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2 flex justify-center">
          <Image className="rounded-full shadow-2xl" src="/rebecca-bretzinger-hubspot-cms-developer2.jpg" alt="Rebecca Bretzinger" width={340} height={340} />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-2xl font-volkhov mt-6 md:mt-0 md:text-4xl">Hello, I&#39;m Rebecca!</h1>
          <p className="mt-4 mb-10 font-normal text-2xl">
            I&#39;m an experienced{" "}
            <span className="font-semibold text-yellow-500">
            Frontend Developer{" "}
            </span>
            specializing in crafting web solutions, recently focusing on HubSpot CMS. I&apos;m based in the beautiful state of Utah. Dive in to know more about me and my skills.
          </p>
          <Link
            to="projects"
            className="cursor-pointer text-neutral-100 font-semibold px-6 py-3 bg-sky-700 rounded shadow hover:bg-sky-800"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-84}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
