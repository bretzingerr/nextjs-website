"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="hero-col-wrapper">
        <div className="text-col">
          <h1>Hello, I&#39;m Rebecca!</h1>
          <p>
            With 19 years of experience as a web developer and marketing
            technology specialist, I’ve worked across a wide variety of roles
            for notable companies. This year, I earned certifications as a
            Salesforce Marketing Cloud Email Specialist and Developer. Scroll
            down to learn more about me and explore key web development and SFMC
            projects I’ve worked on.
          </p>
          <div className="links-wrapper">
            <Link
              to="about"
              className="link-with-arrow"
              smooth={true}
              offset={-84} // Adjust the offset to match your sticky header height
              duration={500}>
              <h3>More About Me</h3>
              <i className="fas fa-arrow-right"></i>
            </Link>

            <Link
              to="projects"
              className="link-with-arrow"
              smooth={true}
              offset={-84} // Same offset for consistent behavior
              duration={500}>
              <h3>View My Projects</h3>
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          </div>
          <div className="image-col">
            <div className="image-wrapper">
              <Image
                src="/Rebecca7-square.png"
                alt="Rebecca Bretzinger"
                width={370}
                height={370}
              />
          </div>
          </div>
          </div>
    </section>
  )
}

export default HeroSection
