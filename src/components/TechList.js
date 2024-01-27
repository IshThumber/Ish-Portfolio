import React from "react";
import { MdCircle } from "react-icons/md";
const TechList = () => {
  const List = [
    { techName: "React.Js", number: 6 },
    { techName: "Node.Js", number: 8 },
    { techName: "Tailwindcss", number: 7 },
    { techName: "Express.Js", number: 8 },
    { techName: "MongoDB", number: 6 },
    { techName: "PostgreSQL", number: 8 },
  ]

  return (
    <>
      <div className="relative w-full mt-16 overflow-hidden wrapper text-wild-sand-200">
        <div className="w-11/12 mx-auto my-10 font-black tracking-tight text-7xl md:text-8xl md:w-3/4">Tech Stack</div>
        <div>
          {List.map((tech, index) => (
            <div key={index} className="flex items-center justify-center gap-4 mb-8 tech-row text-wild-sand-200/20 font-gtReg">
              {Array.from({ length: 15 }, (_, index) => (
                <React.Fragment key={index}>
                  <span
                    className={`${index === tech.number && "text-shamrock-400"} tech-item text-2xl md:text-3xl font-extrabold uppercase tracking-tighter `}
                  >
                    {tech.techName}
                  </span>
                  <span className="text-lg">
                    <MdCircle />
                  </span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div >
    </>
  )
}

export default TechList