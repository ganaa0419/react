import { Header } from "@/components/Header";
import { Chip } from "@/components/Chip";
import { SocialIcon } from "@/components/Social";
import { LocationIcon } from "@/components/icons/Location";
import { GreenDot } from "@/components/icons/GreenDot";
import { Intro } from "@/components/Data/Intro";
import { AboutMe } from "@/components/Data/AboutMe";
import { SkillsSection } from "@/components/SkillsSection";
import { Footer } from "@/components/Footer";
import { Description } from "@/components/Description";
import { ExperienceSection } from "@/components/ExperienceSection";
import { WorkSection } from "@/components/WorkSection";
import { Contact } from "@/components/Contact";

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
                <GreenDot />\
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
        <Description label="The skills, tools and technologies I am really good at:" />
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
      <div className="sm:px-4 sm:py-16 md:px-20 md:py-24">
        <Chip label="Skills" />
        <Description label="The skills, tools and technologies I am really good at:" />
        <SkillsSection />
      </div>
      <div className="sm:px-4 sm:py-16 md:px-20 md:py-24 bg-gray-50">
        <Chip label="Experience" />
        <Description label="Here is a quick summary of my most recent experiences:" />
        <ExperienceSection />
      </div>
      <div className="sm:px-4 sm:py-16 md:px-20 md:py-24">
        <Chip label="Work" />
        <Description label="Some of the noteworthy projects I have built:" />
        <WorkSection />
      </div>
      <div className="sm:px-4 sm:py-16 md:px-20 md:py-24 bg-gray-50">
        <Chip label="Get in touch" />
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
