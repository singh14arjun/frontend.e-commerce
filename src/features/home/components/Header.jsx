import { BiHome, BiMobile } from "react-icons/bi";
import { FcElectroDevices } from "react-icons/fc";
import { PiCarThin } from "react-icons/pi";
import { TbShirt } from "react-icons/tb";
import Container from "../../../components/common/Container";

export default function Header() {
    const categoryList = [
        {
            name: "Grocery",
            link: "/",
            icon: PiCarThin,
        },
        {
            name: "Mobiles",
            link: "/",
            icon: BiMobile,
        },
        {
            name: "Fashion",
            link: "/",
            icon: TbShirt,
        },
        {
            name: "Electronics",
            link: "/",
            icon: FcElectroDevices,
        },
        {
            name: "Home & Living",
            link: "/",
            icon: BiHome,
        },
        {
            name: "Appliance",
            link: "/",
            icon: PiCarThin,
        },
    ];

    return (
        <div className="border-b border-primary text-text-primary">
            <Container>
                <div className="flex flex-nowrap overflow-x-auto scrollbar-hide md:justify-between">
                    {categoryList.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.name}
                                className="
                        flex shrink-0 flex-col
                        items-center gap-1
                        px-5 py-3
                        cursor-pointer
                        hover:text-primary
                        transition duration-300
                    "
                            >
                                <Icon size={20} className="text-primary" />

                                <span className="text-sm whitespace-nowrap">
                                    {item.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </div>
    );
}