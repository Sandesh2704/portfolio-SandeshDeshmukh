"use client";

import Link from "next/link.js";
import { Download, ExternalLink, Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import resumeData from "@/config/resume.Config";
import { Container } from "@/components/Component";
import FloatingNav from "@/components/FloatingNav";

export default function Resume() {
    const resumeRef = useRef<HTMLDivElement>(null);
    const [isDownloading, setIsDownloading] = useState(false);


    return (
        <div>
            <Container className="relative my-28">
                {/* =========================
                    RESUME
                ========================== */}

                <div
                    ref={resumeRef}
                    className="bg-white relative rounded-lg overflow-hidden"
                >
                    {/* Header */}
                    <header className="bg-gray-800 text-white px-6 md:px-8 py-6">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="text-center md:text-left w-full">
                                <h2 className="text-3xl md:text-5xl font-bold">
                                    {resumeData.personalInfo.name}
                                </h2>

                                <p className="text-xl mt-1">
                                    {resumeData.personalInfo.title}
                                </p>

                                <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3">
                                    {resumeData.personalInfo.contact.map(
                                        (contact, index) => (
                                            <Link
                                                key={index}
                                                href={contact.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-base md:text-lg hover:text-pink-400"
                                            >
                                                {contact.icon && (
                                                    <span className="mr-1 text-sm">
                                                        <contact.icon
                                                            size={16}
                                                        />
                                                    </span>
                                                )}

                                                {contact.title}
                                            </Link>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Resume Content */}
                    <div className="p-6 md:p-8 space-y-8">
                        {/* Professional Summary */}
                        <section id="summary">
                            <SectionTitle title="Professional Summary" />

                            <Paragraph>
                                {resumeData.summary}
                            </Paragraph>

                            <div className="flex flex-wrap">
                                {resumeData.keySkills.map((skill, index) => (
                                    <SkillTag
                                        key={index}
                                        skill={skill}
                                    />
                                ))}
                            </div>
                        </section>

                        {/* Technical Skills */}
                        <section id="technical-skills">
                            <SectionTitle title="Technical Skills" />

                            <div className="space-y-4">
                                {resumeData.technicalSkills.map(
                                    (category, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col md:flex-row"
                                        >
                                            <span className="font-semibold text-gray-700 w-40 mb-2 md:mb-0">
                                                {category.category}
                                            </span>

                                            <div className="flex-1 flex flex-wrap gap-2">
                                                {category.skills.map(
                                                    (skill, skillIndex) => (
                                                        <span
                                                            key={skillIndex}
                                                            className="bg-gray-200 px-2 py-1 rounded text-sm text-gray-700"
                                                        >
                                                            {skill}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </section>

                        {/* Work Experience */}
                        <section id="experience">
                            <SectionTitle title="Work Experience" />

                            <div className="space-y-6">
                                {resumeData.experience.map((job, index) => (
                                    <div
                                        key={index}
                                        className="md:pl-4 md:ml-2"
                                    >
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900">
                                                {job.role}
                                            </h3>

                                            <div className="flex flex-col md:flex-row md:justify-between text-gray-600 mb-2">
                                                <p>
                                                    {job.company}
                                                    {job.location
                                                        ? ` - ${job.location}`
                                                        : ""}
                                                </p>

                                                <p>
                                                    {job.duration}
                                                </p>
                                            </div>
                                        </div>

                                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                                            {job.tasks.map(
                                                (task, taskIndex) => (
                                                    <li key={taskIndex}>
                                                        {task}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Projects */}
                        {resumeData.projects &&
                            resumeData.projects.length > 0 && (
                                <section id="projects">
                                    <SectionTitle title="Projects" />

                                    <div className="space-y-6">
                                        {resumeData.projects.map(
                                            (project, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-gray-50 rounded-lg p-5 border border-gray-100"
                                                >
                                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                                                        <div>
                                                            <h3 className="text-xl font-semibold text-gray-900">
                                                                {
                                                                    project.name
                                                                }
                                                            </h3>

                                                            <p className="text-gray-600 mt-1">
                                                                {project.type}
                                                            </p>

                                                            {project.duration && (
                                                                <p className="text-sm text-gray-500 mt-1">
                                                                    {
                                                                        project.duration
                                                                    }
                                                                </p>
                                                            )}
                                                        </div>

                                                        {project.link && (
                                                            <Link
                                                                href={
                                                                    project.link
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-pink-500"
                                                            >
                                                                View Project

                                                                <ExternalLink
                                                                    size={15}
                                                                />
                                                            </Link>
                                                        )}
                                                    </div>

                                                    {project.description && (
                                                        <p className="text-gray-600 text-sm xl:text-base mt-4">
                                                            {
                                                                project.description
                                                            }
                                                        </p>
                                                    )}

                                                    {project.technologies &&
                                                        project.technologies
                                                            .length > 0 && (
                                                            <div className="flex flex-wrap gap-2 mt-4">
                                                                {project.technologies.map(
                                                                    (
                                                                        technology,
                                                                        techIndex
                                                                    ) => (
                                                                        <span
                                                                            key={
                                                                                techIndex
                                                                            }
                                                                            className="bg-white border border-gray-200 px-2 py-1 rounded text-sm text-gray-700"
                                                                        >
                                                                            {
                                                                                technology
                                                                            }
                                                                        </span>
                                                                    )
                                                                )}
                                                            </div>
                                                        )}
                                                </div>
                                            )
                                        )}
                                    </div>
                                </section>
                            )}

                        {/* Professional Course & Education */}
                        <section id="professional-course-education">
                            <SectionTitle title="Professional Course & Education" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {
                                            resumeData.professionalCourse
                                                .course
                                        }
                                    </h3>

                                    <p className="text-gray-600">
                                        {
                                            resumeData.professionalCourse
                                                .institution
                                        }
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        {
                                            resumeData.professionalCourse
                                                .duration
                                        }
                                    </p>
                                </div>

                                {resumeData.education.map((edu, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-50 p-4 rounded-lg"
                                    >
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {edu.degree}
                                        </h3>

                                        <p className="text-gray-600">
                                            {edu.institution}
                                        </p>

                                        <p className="text-sm text-gray-500">
                                            {edu.duration}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Soft Skills & Languages */}
                        <section id="soft-skills-languages">
                            <SectionTitle title="Soft Skills & Languages" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Soft Skills
                                    </h3>

                                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                                        {resumeData.softSkills.map(
                                            (skill, index) => (
                                                <li key={index}>
                                                    {skill}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        Languages
                                    </h3>

                                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                                        {resumeData.languages.map(
                                            (language, index) => (
                                                <li key={index}>
                                                    {language}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Download Resume */}
                <div
                    className="fixed bottom-6 left-6 z-[60]"
                    data-resume-download
                >
                    <Link href="/resume/Sandesh_Deshmukh_Frontend_Engineer.pdf" target="\_blank" rel="noopener noreferrer"
                        type="button"
                        className="
                            pointer-events-auto
                            flex
                            items-center
                            gap-2
                            px-4
                            py-3
                            rounded-xl
                            bg-gradient-to-br
                            from-[#111]
                            to-[#0b0b0b]
                            border
                            border-white/10
                            text-white/80
                            shadow-lg
                            hover:text-pink-400
                            hover:border-white/20
                            transition
                            cursor-pointer
                            disabled:opacity-60
                            disabled:cursor-not-allowed
                        "
                    >
                        {isDownloading ? (
                            <Loader2
                                size={17}
                                className="animate-spin"
                            />
                        ) : (
                            <Download size={17} />
                        )}

                        <span className="hidden md:flex text-sm font-medium">
                            {isDownloading
                                ? "Generating PDF..."
                                : "Download Resume"}
                        </span>
                    </Link>
                </div>
            </Container>

            {/* Floating Navigation */}
            <FloatingNav />
        </div>
    );
}

const SectionTitle = ({ title }: { title: string }) => (
    <h2 className="text-2xl font-bold text-gray-900 mb-4">
        {title}
    </h2>
);

const Paragraph = ({
    children,
}: {
    children: React.ReactNode;
}) => (
    <p className="text-gray-600 text-sm xl:text-base mb-4">
        {children}
    </p>
);

const SkillTag = ({ skill }: { skill: string }) => (
    <span className="px-3 lg:px-4 py-1 rounded-full bg-gray-200 text-sm text-gray-700 mr-2 mb-2">
        {skill}
    </span>
);
