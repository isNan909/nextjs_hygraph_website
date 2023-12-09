import Link from "next/link";

export default function CTAButton() {
  return (
    <>
      <section className="bg-green-500 text-white py-8">
        <div className="mx-auto max-w-[700px] text-center">
          <h2 className="text-center block my-8 text-3xl font-bold">
            Organize a memorable event with us
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded border border-gray-600 bg-gray-600 px-12 py-3 text-sm font-medium text-white hover:bg-gray-700"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
