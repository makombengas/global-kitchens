import Image from "next/image";
import BannerVideo from './../../components/bannerVideo/BannerVideo';
import ZielBanner from './../../components/zielBanner/ZielBanner';
import AboutBanner from './../../components/aboutBanner/AboutBanner';
import PubBanner from './../../components/pubBanner/PubBanner';
import TeamBanner from './../../components/teamBanner/TeamBanner';


export default function Home() {
  return (
    <>
      <BannerVideo/>
      <ZielBanner/>
      <AboutBanner/>
      <PubBanner/>
      <TeamBanner/>
   
    </>
  );
}
