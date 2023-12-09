"use client";

import Banner from "@/app/components/Banner";
import Blog from "@/app/components/Blogs";
import CTAButton from "@/app/components/Cta";
import Questions from "@/app/components/Questions";
import Services from "@/app/components/Services";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Banner />
      <Services />
      <Blog />
      <CTAButton />
      <Questions />
    </main>
  );
}
