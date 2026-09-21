import { BiCard, BiNotification } from "react-icons/bi";
import { BsBank, BsCardList } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";
import { FaGift } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { RiAdvertisementFill } from "react-icons/ri";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import Container from "../common/Container";


export default function Footer() {

    const footerData = [
        {
            title: "ABOUT",
            links: [
                { label: "Contact Us", path: "/contact" },
                { label: "About Us", path: "/about" },
                { label: "Careers", path: "/careers" },
                { label: "Apex Stories", path: "/stories" },
                { label: "Press Releases", path: "/press-releases" },
                { label: "Corporate Information", path: "/corporate-information" },
            ],
        },

        {
            title: "GROUP COMPANIES",
            links: [
                { label: "Myntra", path: "#" },
                { label: "Cleartrip", path: "#" },
                { label: "Shopsy", path: "#" },
            ],
        },

        {
            title: "HELP",
            links: [
                { label: "Payments", path: "/payments" },
                { label: "Shipping", path: "/shipping" },
                { label: "Cancellation & Returns", path: "/returns" },
                { label: "FAQ", path: "/faq" },
                { label: "Report Infringement", path: "/report-infringement" },
            ],
        },

        {
            title: "CONSUMER POLICY",
            links: [
                { label: "Cancellation & Returns", path: "/" },
                { label: "Terms Of Use", path: "/" },
                { label: "Security", path: "/" },
                { label: "Privacy", path: "/" },
                { label: "Sitemap", path: "/" },
                { label: "Grievance Redressal", path: "/" },
            ],
        },
        {
            title: "MAIL US",
            links: [
                { label: "ApexStore Internet Private Limited,Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,Bengaluru, 560103, Karnataka, India" },

            ],
        },
        {
            title: "REGISTERED OFFICE",
            links: [
                {
                    label: "ApexStore Internet Private Limited, Buildings Alyssa, Begonia & Clove Embassy Tech Village, CIN: U51109KA2012PTC066107 Telephone: 044-45614700",
                }
            ],
        },
    ];

    const footerList = [
        {
            icons: FaShop,
            name: "Become a Seller",
            link: ""
        },
        {
            icons: FaGift,
            name: "Gift Cards",
            link: ""
        },
        {
            icons: TfiHeadphoneAlt,
            name: "Help Center",
            link: ""

        },
        {
            icons: RiAdvertisementFill,
            name: "Advertise ",
            link: ""

        }
    ]

    return (
        <div className="bg-primary-light">
            <Container >


                <div className="py-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

                        {footerData.map((section) => (
                            <div key={section.title}>
                                <h3 className="text-sm font-semibold text-text-muted-300 mb-2">
                                    {section.title}
                                </h3>
                                <ul className="space-y-2 text-text-secondary text-sm ">
                                    {section.links.map((link) => (
                                        <li key={link.label} className="hover:text-primary transition duration-300">
                                            <a href={link.path}>
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                    </div>
                </div>
                <div className=" md:flex justify-between items-center text-text-primary border-t border-primary">
                    <div className="md:flex gap-4">
                        {footerList.map((item) => {
                            const Icon = item.icons;

                            return (
                                <div
                                    key={item.name}
                                    className="flex cursor-pointer items-center gap-1  py-3 hover:text-primary transition duration-300"
                                >
                                    <Icon size={18} />

                                    <span>{item.name}</span>
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex">
                        <div>
                            {new Date().getFullYear()}
                        </div>
                        <div> Apex Store.com . All Rights Reserved .</div>
                        <div className="flex gap-2 font-bold items-center">
                            <CiCreditCard1 />
                            <BsBank />
                            <BsCardList />
                        </div>
                    </div>
                </div>

            </Container>

        </div>
    )
}