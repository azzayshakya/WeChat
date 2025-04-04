export default function ProjectsPageHeader() {
  return (
    <div>
      <section className="bg-navy-blue py-8 text-white md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">
              Your Projects
            </h2>
            <p className="mb-6 text-lg text-muted">
              Manage and organize your chat projects in one place.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
