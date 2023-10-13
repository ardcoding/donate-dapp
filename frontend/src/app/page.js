import ButtonAtom from "@/components/atoms/ButtonAtom";

export default function Home() {
  return (
<div className="text-white text-center justify-center items-center h-screen flex flex-wrap">
  <div className="flex flex-wrap justify-center">
    <h1 className="w-screen text-6xl" style={{fontFamily:"Abhaya Libre"}}>Hello!</h1>
    <h5 className="w-screen text-lg mt-4" style={{fontFamily:"ABeeZee", fontStyle:"italic"}}>Good to see you here</h5>
    <h2 className="w-screen text-3xl mt-12" style={{fontFamily:"ABeeZee", fontStyle:"italic"}} >Let's Start</h2>
    <ul>
      <li className="mt-12 m-auto">
        <ButtonAtom className="w-full" variant="outlined" color="warning">
          Connect with Metamask
        </ButtonAtom>
      </li>
      <li className="mt-6">
        <ButtonAtom className="w-full" variant="outlined">
          Connect with Phantom
        </ButtonAtom>
      </li>
      <li className="mt-6">
        <ButtonAtom className="w-full" variant="outlined" color="secondary">
          Connect with Glow
        </ButtonAtom>
      </li>
    </ul>
  </div>
</div>

  )
}
