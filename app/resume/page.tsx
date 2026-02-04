import { generateBreadcrumbSchema, generateMetadata, generateWebPageSchema } from "@/config/seo.config";
import siteConfig from "@/config/site.config";
import Resume from "@/page/Resume";




// Resume page dates
const RESUME_PUBLISHED_TIME = "2024-01-01T00:00:00.000Z";
const RESUME_MODIFIED_TIME = new Date().toISOString(); // Current time

export const metadata = generateMetadata({
  ...siteConfig.pages.resume,
  path: "/resume",
  publishedTime: RESUME_PUBLISHED_TIME,
  modifiedTime: RESUME_MODIFIED_TIME,
  category: "Professional",
  author: siteConfig.author.name,
});

export default function ResumePage() {
  const breadcrumbSchema = generateBreadcrumbSchema("/resume", "Resume");
  const webpageSchema = generateWebPageSchema(
    siteConfig.pages.resume.title,
    siteConfig.pages.resume.description,
    "/resume",
    RESUME_MODIFIED_TIME
  );

  return (
    <>
      {/* Your resume content */}
        <main>
        <h1  className="sr-only">{siteConfig.pages.resume.title}</h1>
        {/* Your resume content */}
        <Resume/>
      </main>
      
      {/* Add schemas to page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
    </>
  );
}