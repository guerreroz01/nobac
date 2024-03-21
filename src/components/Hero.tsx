"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { nobacHeroVideo, smallHeroVideo } from "@/utils";
import Link from "next/link";

function Hero() {
  const [videoSrc, setVideoSrc] = useState(
    typeof window !== "undefined" && window.innerWidth < 760
      ? smallHeroVideo
      : nobacHeroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(nobacHeroVideo);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleVideoSrcSet);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleVideoSrcSet);
      }
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 1.5,
    });
    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      delay: 2,
    });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title absolute top-20">
          DENTOK presents
        </p>
        <div className="md:w-8/12 w-6/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20 "
      >
        <Link className="btn" href="#highlights">
          Comprar
        </Link>
        <p className="font-normal text-lg">por sólo 50€</p>
      </div>
    </section>
  );
}

export default Hero;
