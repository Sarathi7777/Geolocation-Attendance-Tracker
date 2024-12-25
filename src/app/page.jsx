"use client";
import Image from "next/image";
import React, { createContext } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BoxReveal } from "@/components/magicui/box-reveal";
import BlurFade from "@/components/magicui/blur-fade";
import Globe from "@/components/home/globe";
import NewFooter from "@/components/home/footer";

export default function Home() {
  return (
    <>
      <main className="bg-black">
        <nav className="m-0 p-0 fixed top-0 w-full bg-black z-10">
          <div className="mx-auto">
            <div className="flex justify-between items-center py-4 px-4 md:px-16 bg-black">
              <div className="w-40 md:w-64">
                <Image src="/logo.svg" alt="Logo" width="250" height="150" />
              </div>
              <div>
                <Link href="/login" className="text-[#00f7d6] font-eurostile-bold">
                  Login
                </Link>
                <Link href="/signup">
                  <Button className="ml-2 bg-[#00f7d6] font-eurostile-bold hover:!bg-cyan-700 text-black">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="flex md:flex-row md-0 md:mb-32 flex-col md:mt-32 mt-16 px-3 md:px-32 mx-auto bg-black font-eurostile-bold">
          <div className="h-full w-full max-w-[40rem] items-center justify-center overflow-hidden pt-8 font-eurostile-bold">
            <BoxReveal boxColor={"#04BFAD"} duration={0.5}>
              <p className="md:text-[3rem] text-[1.75rem] font-eurostile-bold text-white">
                Geolocation-Based Mobile Attendance for Your On-the-Go Workforce{" "}
                <span className="text-[#00f7d6]">.</span>
              </p>
            </BoxReveal>

            <BoxReveal boxColor={"#00f7d6"} duration={0.5}>
              <h2 className="mt-[.5rem] text-[1rem] text-white">
                Attendance Management app for{" "}
                <span className="text-[#00f7d6]">GAIL (India) Limited</span>
              </h2>
            </BoxReveal>

            <BoxReveal boxColor={"#00f7d6"} duration={0.5}>
              <div className="mt-[1.5rem] text-white">
                <p>
                  -&gt; Real-time attendance tracking with geolocation accuracy
                  up to 10 meters. <br />
                  -&gt; Automatic work hours calculation to streamline employee
                  management. <br />
                  -&gt; Comprehensive leave management system, including
                  approval and tracking of Paid Leaves (PL). <br />
                  -&gt; Built using
                  <span className="font-semibold text-[#00f7d6]"> Next.js</span>
                  ,
                  <span className="font-semibold text-[#00f7d6]"> MongoDB</span>
                  ,
                  <span className="font-semibold text-[#00f7d6]">
                    {" "}
                    Tailwind CSS
                  </span>
                  , and
                  <span className="font-semibold text-[#00f7d6]">
                    {" "}
                    Capacitor
                  </span>
                  . <br />
                </p>
              </div>
            </BoxReveal>

            <BoxReveal boxColor={"#00f7d6"} duration={0.5}>
              <Link href={"/signup"}>
                <Button className="mt-[1.6rem] bg-[#00f7d6] hover:!bg-cyan-700 text-black">
                  Get Started
                </Button>
              </Link>
              <Link href={"glbat.apk"}>
                <Button className="mt-[1.6rem] bg-[#00f7d6] hover:!bg-cyan-700 ml-2 text-black">
                  Download App
                </Button>
              </Link>
            </BoxReveal>
          </div>

          <BlurFade delay={0.25 * 2} inView>
            <div id="main-image" className="md:px-8 py-16 md:py-0">
              <Image
                src={"/images/main-image.webp"}
                width={600}
                height={400}
                alt="main-image"
              ></Image>
            </div>
          </BlurFade>
        </div>

        {/* <World globeConfig={globeConfig} /> */}
        <Globe />
        {/* <Globe /> */}
        <BlurFade delay={0.25 * 4} inView>
          <div
            id="gps-tracking"
            className="flex flex-col justify-center items-center gap-4 md:mt-16 !mt-0 md:p-0 px-4 py-4 bg-black"
          >
            <p className="md:text-[3rem] text-[1.75rem] font-bold text-white">
             Real Time Attendance Tracking, No hassle! <span className="text-[#00f7d6]">.</span>
            </p>
            <h2 className="mt-[.5rem] text-[0.3] md:text-[1rem] text-center font-semibold text-white">
             Say goodbye to manual attendance with our automated GPS tracking functionality app GLBAT.{" "}
              <br />
              Its a user friendly app that aims at managing the workhours of your workforce seamlessly {" "}
              <br />
              ensuring accuracy and reliability with GPS enabled check-ins and time tracking.{" "}
              </h2>
            <div>
              <Image
                src={"/images/gps-time-tracking.webp"}
                height={700}
                width={700}
                alt="gps-time-tracking"
              ></Image>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView>
          <div
            id="retrieve-location"
            className="flex flex-col md:flex-row md:px-[16rem] px-2 md:mt-32 mb-32 mt-2 bg-black"
          >
            <div id="content" className="md:w-[36rem] px-4 gap-4 mb-8 text-white">
              <p className="md:text-[3rem] text-[1.75rem] font-bold">
                Geo Fenced Attendance Zones{" "}
                <span className="text-[#00f7d6]">.</span>
              </p>
              <h2 className="mt-[.5rem] text-[0.3] md:text-[1rem] font-semibold">
              Sets up specific areas where attendance is logged  to ensure GLBAT at right location <br />
              and generates detailed attendance report including the check-in and check-out times ,<br />
              the workhours associated with specified location and keeps a record of the leaves taken and remaining ones .
              </h2>
            </div>
            <div id="image" className="px-8 h-auto w-auto">
              <Image
                src={"/images/retrieve-location-and-time.webp"}
                height={400}
                width={400}
                alt="retrieve-location"
              ></Image>
            </div>
          </div>
        </BlurFade>
        <NewFooter />
      </main>
    </>
  );
}
