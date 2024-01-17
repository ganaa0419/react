import { Logo } from "@/components/icons/Logo";
import { Menu } from "@/components/icons/Menu";
import { Light } from "@/components/icons/Light";
import { MenuItems } from "@/components/MenuItems"

export function Header() {
    const menuItems = [
        { label: "About" , link: "/about" },
        { label: "Work" , link: "/work" },
        { label: "Testimonials" , link: "/testimonials" },
        { label: "Contact" , link: "/contact" },
    ]

    return (
        <div>
            <div className="flex justify-between sm:p-4 md:px-20 md:py-4" >
                <Logo />
                <div className="p-1.5 sm:flex md:hidden">
                    <Menu />
                </div>
                <div className="md:flex sm:hidden gap-6 items-center text-gray-600">
                    
                    <MenuItems items = {menuItems}/>

                    <p className="text-gray-100">|</p>
                    <div className="flex gap-4 items-center">
                        <div className="p=1.5">
                            <Light />
                        </div>
                        <button className="bg-gray-900 rounded-xl text-gray-50 py-1.5 px-4">Download CV</button>
                    </div>
                </div>   
            </div>
        </div>

    )
}