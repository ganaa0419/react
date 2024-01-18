import { Header } from "@/components/Header";
import { Chip } from "@/components/Chip";
import { SocialIcon } from "@/components/Social";
import { LocationIcon } from "@/components/icons/Location";
import { GreenDot } from "@/components/icons/GreenDot";
import { Intro } from "@/components/Data/Intro";
import { AboutMe } from "@/components/Data/AboutMe";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="sm:px-4 sm:py-16 md:px-20 md:py-24 md:flex flex-row-reverse gap-12">
        <div className="md:hidden relative mb-12 mx-auto w-72">
          <img
            className="w-72"
            src="/image/BackgroundMobile.png"
            alt="profile"
          />
          <img
            className="w-60 absolute -top-4 left-6"
            src="/image/profile.png"
            alt="profile"
          />
        </div>

        <div className="sm:hidden md:flex relative w-full pr-8">
          <img
            className="h-80"
            src="/image/BackgroundDesktop.png"
            alt="profile"
          />
          <img
            className="h-80 absolute -top-6 -left-5"
            src="/image/profile.png"
            alt="profile"
          />
        </div>

        <div className="flex flex-col gap-12 md:pl-8">
          <Intro />
          <div>
            <div className="flex flex-row gap-2 text-gray-600">
              <LocationIcon />
              <p>Ahmedabad, India</p>
            </div>
            <div className="flex flex-row gap-2 text-gray-600">
              <div className="p-2">
                <GreenDot />
              </div>
              <p>Available for new projects</p>
            </div>
          </div>
          <div>
            <SocialIcon />
          </div>
        </div>
      </div>

      <div className="sm:px-4 sm:py-16 md:px-20 md:py-24 bg-gray-50">
        <Chip label="About me" />
        <div className="md:flex gap-12">
          <div className="relative mb-12 mx-auto w-72 mt-6">
            <img
              className="h-96"
              src="/image/BackgroundAbout.png"
              alt="aboutMe"
            />
            <img
              className="h-96 absolute -top-6 left-6"
              src="/image/About.png"
              alt="aboutMe"
            />
          </div>
          <AboutMe />
        </div>
      </div>
      <div className="border border-solid border-black sm:px-4 sm:py-16 md:px-20 md:py-24 bg-gray-50">
        <Chip label="Skills" />
        <Skills />
      </div>
      <div className="border border-solid border-black sm:px-4 sm:py-16 md:px-20 md:py-24 bg-gray-50">
        <Chip label="Experience" />
      </div>
      <div className="border border-solid border-black sm:px-4 sm:py-16 md:px-20 md:py-24 bg-gray-50">
        <Chip label="Work" />
      </div>
      <div className="border border-solid border-black sm:px-4 sm:py-16 md:px-20 md:py-24 bg-gray-50">
        <Chip label="Get in touch" />
      </div>
    </div>
  );
}
