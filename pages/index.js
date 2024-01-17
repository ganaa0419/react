import { Header } from "@/components/Header"
import { Chip } from "@/components/Chip"
import { SocialIcon } from "@/components/Social";
import { LocationIcon } from "@/components/icons/Location";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="border border-solid border-black sm:mx-4 sm:my-16 md:mx-20 md:my-24">

        <div className="relative mb-12 mx-auto w-72">
            <img className="w-72" src="/image/BackgroundMobile.png" alt="profile" />
            <img className="w-60 absolute -top-4 left-6" src="/image/profile.png" alt="profile" />
        </div>  

        <div className="flex flex-col gap-12">
          <div>
            <h2 className="text-4xl mb-2 text-gray-900">
              Hi, I’m Sagar 👋
            </h2>

            <p className="text-gray-600">
              I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.
            </p>

            <div>
              <LocationIcon />
              <p>Ahmedabad, India</p> 
            </div>

            <div>
              <SocialIcon />
            </div>
            
          </div>
        </div>


        </div>
        <div>
          <Chip label="about me" />
        </div>
    </div>

  );
}