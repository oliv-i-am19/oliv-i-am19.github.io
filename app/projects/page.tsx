import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-4 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Projects
          </h1>

          {/* UPDATED: Download Portfolio Button */}
          <div className="pt-2">
            <a
              href="/static/Olivia_Ma_Portfolio_2025.pdf" // Make sure to name your file portfolio.pdf in public/static/
              download="Olivia_Ma_Portfolio_2025.pdf"
              className="inline-block rounded-lg bg-black px-6 py-3 text-base font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Download Portfolio PDF
            </a>
          </div>
        </div>

        <div className="container py-12">
          {/* This '-m-4 flex flex-wrap' layout relies on the Card component 
            having a class like 'md:w-1/2' to create the 2-column effect.
          */}
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
