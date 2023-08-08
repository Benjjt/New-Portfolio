"use client";
import React, { useEffect, useState, useRef } from "react";
import projectInfo from "./projectInfo";
import { FaGithubAlt } from "react-icons/fa";
import { AiOutlineExpandAlt } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { MdOpenInNew } from "react-icons/md";
import Link from "next/link";
import {
  animated,
  useTransition,
  useSpring,
  useInView,
} from "@react-spring/web";
import { BsWindowStack } from "react-icons/bs";

const Projects = () => {
  const [ref, inView] = useInView();
  const router = useRouter();

  let maxHeightFrom = 1;
  let maxHeightTo = 1;

  if (typeof window !== "undefined") {
    // Code inside this block will only execute in the browser environment
    maxHeightFrom = inView ? 1 : window.innerHeight;
    maxHeightTo = inView ? window.innerHeight : 1;
  }

  const props = useSpring({
    from: { maxHeight: maxHeightFrom },
    to: { maxHeight: maxHeightTo },
    config: {
      friction: inView ? 500 : 100,
      velocity: inView ? 100 : 1000,
    },
  });

  const navigateToPage = (projectID) => {
    router.push(`/projects/${projectID}`);
  };

  return (
    <div
      name="projects"
      className="font-Archivo flex bg-dark  gap-4  lg:gap-12 p-[var(--mobile-padding)] lg:px-[var(--desktop-padding)]   justify-start items-start w-full h-full min-h-screen min-w-screen relative"
    >
      <div className="hidden md:flex flex-col justify-start items-center  h-screen gap-10 relative  ">
        <div className="w-[2.5rem] h-[2.5rem] relative  flex justify-center items-center">
          <div className="w-full  h-full absolute bg-cyan-500/50 blur-lg rounded-full bottom-0 left-0" />
          <BsWindowStack className="w-8 h-8 z-20 " />
        </div>

        <animated.div
          ref={ref}
          style={props}
          className="w-[2px] h-full bg-gradient-to-b from-cyan-500 to-[#773fc6]  rounded-lg"
        >
          <div className="w-[4px] h-full bg-gradient-to-b from-cyan-500 to-[#773fc6] blur-md rounded-lg " />
        </animated.div>
      </div>
      <div className="font-Archivo flex flex-col gap-12  justify-start items-center w-full h-full  ">
        <div className="flex justify-start items-center w-full h-full ">
          <div className="w-full h-full  flex flex-col justify-start items-start ">
            <div className="flex justify-start items-start gap-8">
              <div className="w-full h-full flex flex-col  justify-start items-start gap-4 md:gap-8">
                <h2
                  onClick={() => setLineActive(!lineActive)}
                  className="text-3xl font-bold"
                >
                  Projects
                </h2>
                <p className="text-3xl lg:text-5xl max-w-[30ch]">
                  <span className="text-cyan-500">A collection of work </span>
                  <br />
                  showcasing a variety of tools and tech stacks.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-fit gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 xl:grid-cols-3">
          {projectInfo.map((project) => {
            return (
              <div
                key={project.title}
                className="w-full h-[12rem]  flex justify-center items-center"
              >
                <div className="w-full h-full gap-2 flex flex-col justify-between items-start border border-white/50 rounded-xl p-6">
                  <div className="flex flex-col justify-start items-start gap-4 w-full">
                    <div className="flex justify-between items-center w-full">
                      <span className="font-bold">{project.title}</span>
                      <div className="flex justify-center items-center gap-2 text-sm">
                        {project.codeAvailable && (
                          <Link
                            href={project.gitHubLink}
                            target="_blank"
                            className="text-sm  rounded-lg px-2  text-light border border-light/50 hover:border-highlight hover:cursor-pointer transition-all"
                          >
                            GitHub
                          </Link>
                        )}
                        {project.livesiteAvailable && (
                          <Link
                            href={project.siteLink}
                            target="_blank"
                            className="text-sm  rounded-lg px-2 bg-light text-dark hover:bg-highlight hover:cursor-pointer transition-all"
                          >
                            Live Site
                          </Link>
                        )}
                      </div>
                    </div>

                    <span className="text-white/50 ">
                      {project.description}
                    </span>
                  </div>

                  <div className="flex justify-between w-full items-center gap-4 flex-wrap text-light/50 text-sm">
                    {project.technology.map((tech, index) => {
                      return (
                        <span
                          key={tech.name}
                          className="flex justify-start items-center gap-1"
                        >
                          <div
                            className={`w-2 h-2 rounded-full border mb-[2px]`}
                            style={{
                              borderColor: tech.color,
                            }}
                          />

                          <span>{tech.name}</span>
                        </span>
                      );
                    })}
                    <MdOpenInNew
                      onClick={() => {
                        navigateToPage(project.projectID);
                      }}
                      className="ml-auto w-6 h-6 hover:scale-105 transition-all cursor-pointer hover:fill-highlight"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
