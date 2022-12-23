import { graphql, HeadFC } from "gatsby";
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
         <h1 className="text-center text-3xl underline my-5">Projects</h1>
         <div className="flex flex-wrap justify-center h-full mb-8 overflow-auto">
            {edges.map((edge) => (
               <ProjectCard project={edge.node} key={edge.node.id} />
            ))}
         </div>
      </Layout>
   );
}

export const Head: HeadFC = () => <title>Projects</title>;

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
