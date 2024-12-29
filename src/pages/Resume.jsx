import React from 'react';
import { Link } from 'react-router-dom';
import resumeData from '../deta/resumedeta.js'
import propfile from "../assets/profile-img/demo-profile-img.webp"


const SectionTitle = ({ title }) => (
    <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
)

const Paragraph = ({ children }) => (
    <p className="text-gray-600 text-sm xl:text-base  mb-4">{children}</p>
)

const SkillTag = ({ skill }) => (
    <span className= "px-3 lg:px-4 py-1 rounded-full bg-gray-200 text-sm text-gray-700 mr-2 mb-2">{skill}</span>
)

export default function Resume() {
    return (
        <div className="">
            <div className="container lg:mx-auto py-12 max-w-5xl">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <header className="bg-gray-600 text-white px-6 md:px-8 py-6">
                        <div className="flex flex-col md:flex-row items-center">
                            <img
                                src={propfile}
                                alt="Profile"
                                width={150}
                                height={150}
                                className="rounded-full border-2 border-white mb-4 md:mb-0 md:mr-6"
                            />
                            <div className="text-center md:text-left">
                                <h1 className="text-3xl md:text-5xl font-bold">{resumeData.personalInfo.name}</h1>
                                <p className="text-xl mt-1">{resumeData.personalInfo.title}</p>
                                <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3">
                                    {resumeData.personalInfo.contact.map((contact, index) => (
                                        <Link 
                                        key={index}
                                        to={contact.link} 
                                        target="_blank"
                                         rel="noopener noreferrer"
                                         className="flex items-center hover:text-blue-700">
                                            {contact.icon && <span className="mr-1">{contact.icon}</span>}

                                            
                                            {contact.title}

                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </header>

                    <div className="p-6 md:p-8 space-y-8">
                        <section id="summary">
                            <SectionTitle title="Professional Summary" />
                            <Paragraph>{resumeData.summary}</Paragraph>
                            <div className="flex flex-wrap">
                                {resumeData.keySkills.map((skill, index) => (
                                    <SkillTag key={index} skill={skill} />
                                ))}
                            </div>
                        </section>

                        <section id="technical-skills">
                            <SectionTitle title="Technical Skills" />
                            <div className="space-y-4">
                                {resumeData.technicalSkills.map((category, index) => (
                                    <div key={index} className="flex flex-col md:flex-row">
                                        <span className="font-semibold text-gray-700 w-40 mb-2 md:mb-0">{category.category}</span>
                                        <div className="flex-1 flex flex-wrap gap-2">
                                            {category.skills.map((skill, skillIndex) => (
                                                <span key={skillIndex} className="bg-gray-200 px-2 py-1 rounded text-sm text-gray-700">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="experience">
                            <SectionTitle title="Work Experience" />
                            <div className="space-y-6">
                                {resumeData.experience.map((job, index) => (
                                    <div key={index} className="md:border-l-2 border-gray-300 md:pl-4 md:ml-2">
                                        <div className="relative">
                                             <h3 className="text-xl font-semibold text-gray-900">{job.role}</h3>
                                            <div className="flex flex-col md:flex-row md:justify-between text-gray-600 mb-2">
                                                <p>{job.company} - {job.location}</p>
                                                <p>{job.duration}</p>
                                            </div>
                                        </div>
                                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                                            {job.tasks.map((task, taskIndex) => (
                                    
 <li key={taskIndex}>{task}</li>
                                          
                                               
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="professional-course-education">
                            <SectionTitle title="Professional Course & Education" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="text-lg font-semibold text-gray-900">{resumeData.professionalCourse.course}</h3>
                                    <p className="text-gray-600">{resumeData.professionalCourse.institution}</p>
                                    <p className="text-sm text-gray-500">{resumeData.professionalCourse.duration}</p>
                                </div>
                                {resumeData.education.map((edu, index) => (
                                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                        <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                                        <p className="text-gray-600">{edu.institution}</p>
                                        <p className="text-sm text-gray-500">{edu.duration}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="soft-skills-languages">
                            <SectionTitle title="Soft Skills & Languages" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Soft Skills</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                                        {resumeData.softSkills.map((skill, index) => (
                                            <li key={index}>{skill}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Languages</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                                        {resumeData.languages.map((language, index) => (
                                            <li key={index}>{language}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

