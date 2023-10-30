"use client"

import "@/styles/body.css"
import Image from "next/image"
import featured from '../assets/Featured.png'
// import { usePathname } from 'next/navigation';
// import Missions from './Missions/index';
// import Leaderboard from'./Leaderboard/index';
// import Rewards from "./Rewards";

export default function Home() {
  // const router = usePathname();
  return (
    <div className="body">
      <Image src={featured} alt="featured" className="featured" />
      {/* {router} == '/Missions'? <Missions/> : {router}== '/Leaderboard'? <Leaderboard />
      
      : {router} == '/Rewards'? <Rewards/> : <Home/> */}
    </div>
  )
}
