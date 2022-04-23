import Link from 'next/link'
import { Image } from "react-bootstrap";

export default function FourOhFour() {
  return <>
  
    <Link href="/">
    <Image
     src="/TJPSignal.png"
     alt="404"
     width={1500}
    />
    
    </Link>
    <h1 className="CenterText">404!!!! Click the signal to go home</h1>
  </>
}