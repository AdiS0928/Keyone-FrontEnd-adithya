import Hero from "./components/1_Hero/Hero";
import FormSection from './components/2_FormSection/FormSection';
import KnowMore from "./components/3_KnowMore/KnowMore";
import WeManageFor from "./components/4_WeManageFor/WeManageFor";
import OurPartners from "./components/5_OurPartners/OurPartners";
import ProfessionalsManage from "./components/6_ProfessionalsManage/ProfessionalsManage";
import AwardsandRecognition from "./components/7_AwardsandRecognition/AwardsandRecognition";
import OurServices from "./components/8_OurServices/OurServices";
import LessStress from "./components/9_LessStress/LessStress";
import ManageHome from "./components/10_ManageHome/ManageHome";
import DownloadPortal from "./components/11_DownloadPortal/DownloadPortal";
import { Metadata } from "next";

const META_TITLE = "Key One Holiday Homes - Innovative Software Solutions";
const META_DESCRIPTION = "Empowering businesses with cutting-edge software solutions. Discover our expertise in custom development, AI, and web technologies.";
const OG_IMAGE_URL = "/theme/brand/og-image.jpg";
const OG_IMAGE_ALT = "Key One Holiday Homes - Your Trusted Software Partner"; 

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE_URL,
        alt: OG_IMAGE_ALT,
      },
    ],
    type: "website",
  },
};

export default function Home() {
  return (
    <div>
      <Hero />
      <FormSection />
      <KnowMore />
      <WeManageFor />
      <OurPartners />
      <ProfessionalsManage />
      <AwardsandRecognition />
      <OurServices />
      <LessStress />
      <ManageHome />
      <DownloadPortal />
    </div>
  );
}
