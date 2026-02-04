import Link from 'next/link.js';
import { Download } from 'lucide-react';
import resumeData from "@/config/resume.Config";


import { Container } from '@/components/Component';
import FloatingNav from '@/components/FloatingNav';


export default function Resume() {




    return (
        <div className="">

            <Container className='relative my-28'>
                <div className="bg-white   relative 
          rounded-lg">
                    <header className="bg-gray-800 relative md:sticky md:top-0 text-white px-6 md:px-8 py-6 z-0">
                        <div className="flex flex-col md:flex-row items-center">

                            <div className="text-center md:text-left">
                                <h2 className="text-3xl md:text-5xl font-bold">{resumeData.personalInfo.name}</h2>
                                <p className="text-xl mt-1">{resumeData.personalInfo.title}</p>
                                <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3">
                                    {resumeData.personalInfo.contact.map((contact, index) => (
                                        <Link
                                            key={index}
                                            href={contact.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-base md:text-lg hover:text-pink-400">
                                            {contact.icon && <span className="mr-1 text-sm"><contact.icon size={16} /></span>}
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
                                    <div key={index} className=" md:pl-4 md:ml-2">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900">{job.role}</h3>
                                            <div className="flex flex-col md:flex-row md:justify-between text-gray-600 mb-2">
                                                <p>{job.company} - {job.location}</p>
                                                <p>{job.duration}</p>
                                            </div>
                                        </div>
                                        <ul className="list-disc  text-gray-600 space-y-1">
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



                {/* STICKY DOWNLOAD BUTTON */}

                {/* STICKY DOWNLOAD BUTTON */}
                <Link
                    href="https://docs.google.com/document/d/1eoLigljS_pVKCFpcLwsmKKereg6j4L_2HlqcdEr2d5w/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sticky bottom-4 left-0 ml-4 w-fit p-4 bg-gray-800 text-white rounded-lg shadow-lg hover:scale-105 flex items-center space-x-2 z-50"
                >
                    <Download size={18} />
                    <span className="hidden md:flex">Download Resume</span>
                </Link></Container>

            {/* Floating navigation (shared) */}
            <FloatingNav />


        </div>
    )
}




const SectionTitle = ({ title }: { title: string }) => (
    <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
)

const Paragraph = ({ children }: { children: React.ReactNode }) => (
    <p className="text-gray-600 text-sm xl:text-base  mb-4">{children}</p>
)

const SkillTag = ({ skill }: { skill: string }) => (
    <span className="px-3 lg:px-4 py-1 rounded-full bg-gray-200 text-sm text-gray-700 mr-2 mb-2">{skill}</span>
)
