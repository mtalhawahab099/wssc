import Form from "@/app/complaint/[complaint]/page";
import HomeScreen from "@/components/HomeScreen/HomeScreen";
import Header from "@/components/Header";
import Timeline from "@/app/complaint/timeline/[status]/page";
import { Inter } from "next/font/google";
// import Authentication from "@/components/auth/Authentication";
import Complaints from "@/app/complaint/page";
import Loading from "./loading";
import ProfileCard from "@/components/ProfileCard";
// import Authentication from "@/components/auth/Authentication";

//  const session = JSON.parse(localStorage.getItem("user") || "");
//  console.log(session);
export default function Home() {
  
  return (
    <main>
      {/* <Authentication /> */}
      {/* <Signup /> */}
      {/* <Form /> */}
      {/* <Complaints /> */}
      {/* <Timeline /> */}
      {/* <HomeScreen /> */}
     <ProfileCard/>
      {/* <Loading/> */}
    </main>
  );
}
