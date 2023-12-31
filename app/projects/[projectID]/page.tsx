"use client";
import projectInfo from "../../../components/Projects/projectInfo";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoChevronDownCircle } from "react-icons/io5";
import { MdOpenInNew } from "react-icons/md";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { IoArrowBackCircleOutline } from "react-icons/io5";

export default function Page({ params }: { params: { projectID: string } }) {
  const [currentProject, setCurrentProject] = useState(null);
  const [featureOpen, setFeatureOpen] = useState(null);

  const nextProject = () => {
    const currentProjectIndex = projectInfo.findIndex(
      (project) => project.projectID === currentProject.projectID
    );

    if (currentProjectIndex + 1 < projectInfo.length) {
      setCurrentProject(projectInfo[currentProjectIndex + 1]);
    } else {
      setCurrentProject(projectInfo[0]);
    }
  };

  useEffect(() => {
    setFeatureOpen(null);
  }, [currentProject]);

  useEffect(() => {
    // Search for the project that matches the projectID
    const matchedProject = projectInfo.find(
      (project) => project.projectID === params.projectID
    );

    // If a matching project is found, update the state
    if (matchedProject) {
      setCurrentProject(matchedProject);
    } else {
      // Handle the case where the projectID does not match any project
      setCurrentProject("invalid");
    }
  }, [params.projectID]);

  // If no project with the matching projectID is found, you can handle it like this:
  if (currentProject === "invalid") {
    return <div>Project not found or invalid ID</div>;
  }
  return (
    currentProject && (
      <div className="w-screen min-h-screen relative flex flex-col pt-[140px]  justify-center items-center md:bg-myBackground bg-cover bg-dark  lg:bg-contain font-Archivo p-[var(--mobile-padding)] lg:p-[var(--desktop-padding)] text-white  ">
        <div className="flex-col flex lg:flex-row justify-between items-start h-full w-full gap-8 m-auto max-w-[var(--desktop-max)]">
          <div className="flex bg-dark/5 backdrop-blur-sm flex-col justify-start lg:border-r border-white/50 items-start  gap-8   h-full w-full lg:w-1/2 lg:p-8">
            <div className="lg:hidden w-full   bg-dark  relative  border-white/50 border-4 rounded-xl overflow-hidden">
              <Image
                alt="change this"
                height={250}
                width={1000}
                style={{ objectFit: "contain" }}
                src={currentProject.screenshot}
              />
            </div>
            {currentProject.projectLogo ? (
              <Image
                width={200}
                height={100}
                src={currentProject.projectLogo}
                alt={`${currentProject.projectName} - logo`}
              />
            ) : (
              <h1 className="text-4xl text-white font-bold">
                {currentProject.title}
              </h1>
            )}

            <p className="text-white text-md ">
              {currentProject.descriptionLong}
            </p>
            <h3 className="text-xl font-bold ">Features</h3>
            <ul className="flex flex-col justify-start items-start gap-4 h-full w-full">
              {Object.keys(currentProject.features).map((feature) => {
                return (
                  <li
                    key={feature}
                    className="flex flex-col justify-start items-start gap-2 w-full border border-white/50 rounded-lg p-4"
                  >
                    <span className="font-bold w-full  rounded-lg flex justify-between items-center">
                      <span>{feature}</span>
                      {featureOpen === feature ? (
                        <IoChevronDownCircle
                          onClick={() => setFeatureOpen(null)}
                          className="w-6 h-6 rotate-180"
                        />
                      ) : (
                        <IoChevronDownCircle
                          onClick={() => setFeatureOpen(feature)}
                          className="w-6 h-6 "
                        />
                      )}
                    </span>
                    {featureOpen === feature && (
                      <span>{currentProject.features[feature]}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex   flex-col justify-between items-start  gap-4 rounded-xl h-full  w-full lg:w-1/2 ">
            <div className="hidden lg:flex w-full  bg-dark  relative  border-white/50 border-4 rounded-xl overflow-hidden">
              <Image
                alt="change this"
                height={250}
                width={1000}
                style={{ objectFit: "contain" }}
                src={currentProject.screenshot}
              />
            </div>
            {currentProject.livesiteAvailable ||
            currentProject.codeAvailable ? (
              <div className="flex flex-col justify-start items-start gap-4">
                <h3 className="text-xl font-bold">Links</h3>
                <div className="flex justify-start items-center w-full gap-4">
                  {currentProject.livesiteAvailable && (
                    <a
                      target="_blank"
                      href={currentProject.siteLink}
                      className="flex justify-start hover:border-highlight group transition-all hover:cursor-pointer items-center gap-2 border border-white/50 rounded-xl p-2"
                    >
                      <span className="group-hover:text-highlight">
                        Live Site
                      </span>
                      <MdOpenInNew className="w-6 h-6  group-hover:fill-highlight" />
                    </a>
                  )}
                  {currentProject.codeAvailable && (
                    <a
                      href={currentProject.gitHubLink}
                      className="flex justify-start hover:border-highlight group transition-all hover:cursor-pointer items-center gap-2 border border-white/50 rounded-xl p-2"
                    >
                      <span className="group-hover:text-highlight">Github</span>
                      <FaGithubAlt className="w-6 h-6 hover:cursor-pointer group-hover:fill-highlight" />
                    </a>
                  )}
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="flex-col flex md:flex-row  justify-between md:items-end  w-full gap-4">
              <div className="flex flex-col justify-start items-start gap-4">
                <h3 className="text-xl font-bold">Technology</h3>
                <ul className="flex justify-between items-center gap-4">
                  {currentProject.technology.map((item, index) => {
                    return (
                      <li
                        key={item.name}
                        className="w-[4rem] bg-dark/5 backdrop-blur-lg h-[4rem] relative border border-white/50 p-2 rounded-lg flex justify-center items-center"
                      >
                        <Image
                          width={70}
                          height={70}
                          alt={item.name}
                          src={item.logo}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div
                onClick={() => {
                  nextProject();
                }}
                className="p-4 h-[4rem] flex justify-center items-center rounded-lg border gap-2 border-white/50 group hover:text-highlight hover:border-highlight hover:cursor-pointer"
              >
                Next Project
                <IoArrowBackCircleOutline className="w-6 h-6 rotate-180" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
