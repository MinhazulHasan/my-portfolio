import React, { useState } from 'react';
import { graphql, useStaticQuery } from "gatsby";
import Title from "./Title";
import { Link } from "gatsby";

const Skills = () => {
    const data = useStaticQuery(query);
    const { allStrapiSkills: { nodes: skills } } = data;
    const [value, setValue] = useState(0);
    const { label, mySkills } = skills[value];
    return (
        <section className="section jobs">
            <Title title="SKILLS" />
            <div className="jobs-center">
                <div className="btn-container">
                    {
                        skills.map((item, index) => (
                            <button
                                key={item.strapiId}
                                className={`job-btn ${index === value && 'active-btn'}`}
                                onClick={() => setValue(index)}
                            >
                                {item.label}
                            </button>
                        ))
                    }
                </div>
                <article className='job-info'>
                    <div className="project-stack">
                        {
                            mySkills.map(item => <span key={item.id}>{item.title}</span>)
                        }
                    </div>
                </article>
            </div>
            <Link to='/about' className='btn center-btn'>more info</Link>
        </section>
    );
};

export default Skills;

export const query = graphql`
  {
    allStrapiSkills {
      nodes {
        strapiId
        label
        mySkills {
          id
          title
        }
      }
    }
  }
`