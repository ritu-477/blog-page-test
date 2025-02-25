import TradeMarquee from "@/components/common/TradeMarquee";
import Hero from "@/components/blog/Hero";
import AllBlogs from "@/components/blog/AllBlogs";
import LatestArticles from "@/components/blog/LatestArticles";
import Footer from "@/components/common/Footer";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
     <Suspense>
     <TradeMarquee />
      <Hero />
      <AllBlogs />
      <LatestArticles />
      <Footer />
      </Suspense>
    </>
  );
}
