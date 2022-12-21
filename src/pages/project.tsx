import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

type ProjectProp = {
   data: {
      allProjectsJson: {
         edges: {
            node: {
               id: string;
               description: string;
               title: string;
               stack: string[];
               sourceCodeLink: string;
               liveLink: string;
            };
         }[];
      };
   };
};

export default function project({ data }: ProjectProp) {
   const { edges } = data.allProjectsJson;
   return (
      <Layout>
         <h1 className="center" style={{ margin: "10px 0" }}>
            Projects
         </h1>
         <div
            style={{
               display: "flex",
               flexWrap: "wrap",
               justifyContent: "center",
               height: "90%",
               overflow: "auto",
            }}
         >
            {edges.map((edge) => (
               <ProjectCard project={edge.node} key={edge.node.id} />
            ))}
         </div>
      </Layout>
   );
}

export const queryProject = graphql`
   {
      allProjectsJson {
         edges {
            node {
               id
               description
               title
               stack
               sourceCodeLink
               liveLink
            }
         }
      }
   }
`;
