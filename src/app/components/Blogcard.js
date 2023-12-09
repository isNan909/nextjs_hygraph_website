import Image from "next/image";
import Link from "next/link";

export default function blogCard() {
  return (
    <>
      <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
        <Image
          alt="Office"
          src="next.svg"
          width="300"
          height="300"
          className="w-full"
        />
        <div className="p-4 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900">
            The biggest react conference in the history
          </h3>
          <p className="mt-2 line-clamp-4 text-sm/relaxed text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
            dolore sed nulla ipsum eveniet corporis
          </p>
          <Link
            href={`/`}
            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-600"
          >
            Find out more
            <span
              aria-hidden="true"
              className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              &rarr;
            </span>
          </Link>
        </div>
      </article>
    </>
  );
}
