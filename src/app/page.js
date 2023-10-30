import Missions from "./Missions"
import "@/styles/body.css"
import Image from "next/image"
import featured from '../assets/Featured.png'

export default function Home() {
  
  return (
    <div className="body">
      <Image src={featured} alt="featured" className="featured" />
      {/* <Missions /> */}
    </div>
  )
}
