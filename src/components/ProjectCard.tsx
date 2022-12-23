import React from "react";

type ProjectCardProps = {
   project: {
      id: string;
      description: string;
      title: string;
      stack: string[];
      sourceCodeLink: string;
      liveLink: string;
   };
};

export default function ProjectCard({ project }: ProjectCardProps) {
   return (
      <div className="flex flex-col text-center justify-between  border-2 border-black rounded h-96 w-80 m-4 p-3">
         <div>
            <h2 className="text-2xl my-2">{project.title}</h2>
            <p>{project.description}</p>
            <div className="flex justify-center">
               {project.stack.map((stack, i) => (
                  <p
                     key={i}
                     className="border border-black rounded p-1 m-1 text-green-500"
                  >
                     {stack}
                  </p>
               ))}
            </div>
         </div>

         <div>
            <a href={project.liveLink}>
               <button className="border rounded p-1 bg-black hover:bg-white hover:text-black mx-2">
                  View Live
               </button>
            </a>
            <a href={project.sourceCodeLink}>
               <button className="border rounded p-1 bg-black hover:bg-white hover:text-black mx-2">
                  Source code link
               </button>
            </a>
         </div>
      </div>
   );
}
