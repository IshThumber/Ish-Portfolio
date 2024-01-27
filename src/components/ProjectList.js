import React from 'react'
import { Link } from "react-router-dom"




const ProjectList = () => {

  const projects = [
    {
      id: 1,
      name: "Personal Portfolio",
      year: "2023 - Present",
      description: "",
      Link: "https://github.com/IshThumber/Ish-Portfolio",
      Tech: ["React.js", "TailwindCSS", "GSAP"]
    },
    {
      id: 2,
      name: "PhD Admission Portal",
      year: "2022 - 2023",
      description: "A web portal for PhD admissions at Charusat University. The portal is used by the faculties and admins to manage the applications and the students to apply for the PhD program.",
      Link: "https://github.com/IshThumber",
      Tech: ["React.js", "Node.js", "Express.js", "Docker", "AWS", "PostgreSQL"]
    },
  ]
  // console.log(projects[0].Tech.map((T) => { return T }));
  return (
    <>
      <div className="w-11/12 mx-auto md:w-full">
        <div className="flex flex-col w-full gap-10 font-bold tracking-wide md:w-4/5 lg:ml-14 font-gtReg text-wild-sand-200/80">
          {projects.map(key => (
            <Link key={key.id} to={key.Link} target="_blank" rel="noopener noreferrer">
              <div className="flex flex-col gap-5 p-5 text-lg duration-300 border-2 py-7 rounded-3xl hover:bg-orange-400 transtion-colors">
                <h1 className="text-3xl font-black underline font-urbanist underline-offset-4 decoration-2 text-wild-sand-200">{key.name}</h1>
                <span className='ml-3'>{key.year}</span>
                {key.description && <span className='ml-3'>{key.description}</span>}
                <div className="flex flex-row flex-wrap gap-3">
                  {key.Tech.sort().map((T) => (
                    <span key={T} className="inline-block px-3 py-1 text-sm tracking-wide text-black align-middle bg-orange-300 rounded-lg">{T}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}

          ...
        </div>
      </div>
    </>
  )
}

export default ProjectList