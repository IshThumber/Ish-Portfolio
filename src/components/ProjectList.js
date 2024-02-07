import React from 'react'
import { Link } from "react-router-dom"

const ProjectList = () => {

  const projects = [
    {
      name: "CRUDSify",
      year: "2023",
      description: "CRUDSify is a powerful data management application that simplifies CRUD operations (Create, Read, Update, Delete) with an intuitive user interface, seamless integration between frontend and backend, and email features, ensuring efficient and secure data handling.",
      Link: "https://crudsify.vercel.app/",
      gh: "https://github.com/IshThumber/CRUDSify",
      Tech: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "Node-Mailer"]
    },
    {
      name: "Personal Portfolio",
      year: "2023 - Present",
      description: "",
      Link: "https://github.com/IshThumber/Ish-Portfolio",
      gh: "https://github.com/IshThumber/Ish-Portfolio",
      Tech: ["React.js", "TailwindCSS", "GSAP"]
    },
    {
      name: "PhD Admission Portal",
      year: "2022 - 2023",
      description: "A web portal for PhD admissions at Charusat University. The portal is used by the faculties and admins to manage the applications and the students to apply for the PhD program.",
      Link: "https://charusatphd.vercel.app/",
      gh: "Private",
      Tech: ["React.js", "Node.js", "Express.js", "Docker", "AWS", "PostgreSQL"]
    },
  ]
  // console.log(projects[0].Tech.map((T) => { return T }));
  return (
    <>
      <div className="w-11/12 mx-auto md:w-full">
        <div className="flex flex-col w-full gap-10 tracking-wide md:w-4/5 lg:ml-14 font-gtReg text-wild-sand-200/80">
          {projects.map((key, i) => (
            <Link key={i} to={key.Link} target="_blank" rel="noopener noreferrer">
              <div className="flex flex-col gap-5 p-5 text-lg duration-300 border-2 py-7 rounded-3xl hover:bg-genoa-600 transtion-colors cursor-cell">
                <h1 className="text-3xl font-bold tracking-normal underline font-urbanist underline-offset-4 decoration-2 text-wild-sand-200">{key.name}</h1>
                <span className='ml-3'>{key.year}</span>
                {key.description && <span className='ml-3'>{key.description}</span>}
                <div className="flex flex-row flex-wrap gap-3">
                  {key.Tech.sort().map((T) => (
                    <span key={T} className="inline-block px-3 py-1 text-sm tracking-wide text-black align-middle rounded-lg bg-genoa-300">{T}</span>
                  ))}
                </div>
                {key.gh === "Private"
                  ?
                  <span className='cursor-not-allowed hover:text-red-600 text-red-400 ml-3'> Oops! Seems the link is Private 😥</span>
                  :
                  <Link to={key.gh}>
                    <span className='ml-3 hover:text-green-300'>{key.gh}</span>
                  </Link>
                }

              </div>
            </Link>
          ))}
          ...
        </div>
      </div >
    </>
  )
}

export default ProjectList