import Image from "next/image";
import Link from "next/link";

export default function Banner({ data }) {
  return (
    <>
      {data && (
        <section>
          <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative flex items-center">
                <div className="p-8 sm:p-16 lg:p-24 align-center">
                  <h2 className="text-2xl font-bold sm:text-3xl">
                    {data?.heading}
                  </h2>

                  <p className="mt-4 text-gray-600">{data?.description}</p>

                  <Link
                    href="/contact"
                    className="mt-8 inline-block rounded border border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-green-700"
                  >
                    {data?.buttonText}
                  </Link>
                </div>
              </div>

              <div className="relative z-10 lg:py-16">
                <div className="relative h-64 sm:h-80 lg:h-full">
                  <Image
                    alt="House"
                    width="583"
                    height="583"
                    src={data?.image?.url}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
