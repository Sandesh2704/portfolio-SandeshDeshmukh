
// app/page.tsx

import { generateBreadcrumbSchema, generateMetadata, generateWebPageSchema } from "@/config/seo.config";
import siteConfig from "@/config/site.config";
import Home from "@/page/home";


// Specify dates for the homepage
const PAGE_PUBLISHED_TIME = "2024-01-01T00:00:00.000Z";
const PAGE_MODIFIED_TIME = new Date().toISOString(); // Current time

export const metadata = generateMetadata({
  ...siteConfig.pages.home,
  path: "/",
  publishedTime: PAGE_PUBLISHED_TIME,
  modifiedTime: PAGE_MODIFIED_TIME,
});

export default function HomePage() {
  const breadcrumbSchema = generateBreadcrumbSchema();
  const webpageSchema = generateWebPageSchema(
    siteConfig.pages.home.title,
    siteConfig.pages.home.description,
    "/",
    PAGE_MODIFIED_TIME
  );

  return (
    <>
      {/* Your page content */}
       <main>
        <h1 className="sr-only">{siteConfig.pages.home.title}</h1>
        <Home/>
        {/* Your home page content */}
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