import { Header } from "@/components/Header";
import { Chip } from "@/components/Chip";
import { SocialIcon } from "@/components/Social";
import { LocationIcon } from "@/components/icons/Location";
import { GreenDot } from "@/components/icons/GreenDot";

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
          <div>
            <h2 className="text-4xl mb-2 text-gray-900">Hi, I’m Sagar 👋</h2>
            <p className="text-gray-600">
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </p>
          </div>
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
          <div className="md:w-full">
            <h2 className="text-2xl mb-2 text-gray-900 mb-6">
              Curious about me? Here you have it:
            </h2>
            <p className="text-gray-600 mb-4">
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic about
              bringing the technical and visual aspects of digital products to
              life. User experience, pixel perfect design, and writing clear,
              readable, highly performant code matters to me.
            </p>
            <p className="text-gray-600 mb-4">
              I began my journey as a web developer in 2015, and since then, I've
              continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way. Now,
              in my early thirties, 7 years after starting my web development
              journey, I'm building cutting-edge web applications using modern
              technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
              Supabase and much more.
            </p>
            <p className="text-gray-600 mb-4">
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>
            <p className="text-gray-600 mb-4">
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or you
              can follow me on GitHub.
            </p>
            <p className="text-gray-600 mb-4">
              Finally, some quick bits about me.
            </p>
            <p className="text-gray-600 mb-4">
              <ul className="list-disc ml-6">
                <li>B.E. in Computer Engineering</li>
                <li>Full time freelancer</li>
                <li>Avid learner</li>
                <li>Aspiring indie hacker</li>
              </ul>
            </p>
            <p className="text-gray-600 mb-4">
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
      <div className="border border-solid border-black sm:px-4 sm:py-16 md:px-20 md:py-24 bg-gray-50">
        <Chip label="Skills" />
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
