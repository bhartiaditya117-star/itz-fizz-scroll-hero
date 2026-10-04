"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const hero = useRef(null);
  const visual = useRef(null);
  const title = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".letter", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.04,
        ease: "power3.out"
      })
      .from(".subtitle", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out"
      }, "-=0.4")
      .from(".stat", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out"
      }, "-=0.3")
      .from(".visual", {
        scale: 0.6,
        rotation: -20,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.7");

      gsap.to(visual.current, {
        y: -300,
        x: 100,
        rotation: 30,
        scale: 1.3,
        scrollTrigger: {
          trigger: hero.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });

      gsap.to(title.current, {
        y: -150,
        scale: 0.8,
        opacity: 0.25,
        scrollTrigger: {
          trigger: hero.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });
    }, hero);

    return () => ctx.revert();
  }, []);

  const text = "WELCOME ITZ FIZZ";

  return (
    <main>
      <section ref={hero} className="hero">
        <div className="content">
          <div ref={title} className="title">
            {text.split("").map((char, i) => (
              <span className="letter" key={i}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>

          <p className="subtitle">
            Refresh your perspective.
            <br />
            Experience creativity in motion.
          </p>

          <div className="stats">
            <div className="stat">
              <strong>92%</strong>
              <span>Customer Retention</span>
            </div>
            <div className="stat">
              <strong>87%</strong>
              <span>Creative Growth</span>
            </div>
            <div className="stat">
              <strong>96%</strong>
              <span>Experience Score</span>
            </div>
          </div>
        </div>

        <div ref={visual} className="visual">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="fizz">FIZZ</div>
          <div className="number">01</div>
        </div>

        <div className="scroll">SCROLL ↓</div>
      </section>

      <section className="next">
        <p>02 — EXPERIENCE</p>
        <h2>DESIGNED<br />TO MOVE.</h2>
      </section>

      <section className="end">
        <p>03 — END</p>
        <h2>KEEP<br />SCROLLING.</h2>
      </section>
    </main>
  );
}
