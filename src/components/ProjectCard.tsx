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
      <div
         style={{
            border: "2px solid black",
            borderRadius: "10px",
            height: "350px",
            width: "300px",
            margin: "10px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
         }}
      >
         <h2 style={{marginBottom:"5px"}}>{project.title}</h2>
         <p style={{marginBottom:"5px"}}>{project.description}</p>
         <div
            style={{
               display: "flex",
               flexWrap: "wrap",
               justifyContent: "center",
            }}
         >
            {project.stack.map((stack, i) => (
               <p key={i} className="dib" style= {{margin:"2px"}} >{stack}</p>
            ))}
         </div>

         <div style={{ margin: "10px 0" }}>
            <a href={project.liveLink}><button>View Live</button></a>
            <a href={project.sourceCodeLink}><button>Source code link</button></a>
         </div>
      </div>
   );
}
