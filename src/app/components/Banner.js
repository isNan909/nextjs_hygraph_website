import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative flex items-center">
              <div className="p-8 sm:p-16 lg:p-24 align-center">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Expert Event Management Services Tailored to You
                </h2>

                <p className="mt-4 text-gray-600">
                  We are professional management for memorable gatherings. Our
                  Expert Team Delivers Precision Planning, Impeccable Execution,
                  and Unmatched Creativity for Unforgettable Events Tailored to
                  Your Unique Vision and Needs.
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-block rounded border border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-green-700"
                >
                  Contact us
                </Link>
              </div>
            </div>

            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <Image
                  alt="banner image"
                  width="583"
                  height="583"
                  src="/next.svg"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
