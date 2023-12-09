import Blogcard from "@/app/components/Blogcard";

export default function blogList() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center block my-8 text-3xl font-bold">
            Our blogs
          </h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="rounded-lg">
              <Blogcard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
