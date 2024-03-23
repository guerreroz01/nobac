"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "@/utils";
import Image from "next/image";
import VideoCarousel from "./VideoCarousel";

export default function Highlights() {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
  }, []);
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width ">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Cononoce los beneficios..
          </h1>
          <div className="flex flex-wrap items-end md:gap-5 gap-2">
            <p className="link">
              Mira una demostración
              <Image
                src={watchImg}
                alt="watch"
                width={18}
                height={18}
                className="ml-2"
              />
            </p>
            <p className="link">
              Consigue el tuyo ahora
              <Image
                src={rightImg}
                alt="watch"
                width={12}
                height={12}
                className="ml-2"
              />
            </p>
          </div>
        </div>
        {typeof window !== "undefined" && <VideoCarousel />}
      </div>
    </section>
  );
}
