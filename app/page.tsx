import BodyImages from "@/components/BodyImages";
import BodyNavigation from "@/components/BodyNavigation";
import MainBody from "@/components/MainBody";
import Navbar from "@/components/Navbar";
import SubNavbar from "@/components/SubNavbar";
import Image from "next/image";


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <SubNavbar />
      <BodyImages/>
      <BodyNavigation />
      <MainBody />
      <div>Hello</div>
    </main>
    
  );
}
