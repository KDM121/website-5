import React from 'react'
import Image from "next/image";
const Footer = () => {
  return (
<footer className="footer footer-center p-10 bg-gradient-to-b from-slate-800 to-slate-700 border-t-4 border-primary text-base-content rounded">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover" href="/Projects">Projects</a>
    <a className="link link-hover" href="/Links">Services</a>
    <a className="link link-hover" href="/Documents">Documents</a>
    <a className="link link-hover" href="/Support">Support</a>
  </nav> 
  <nav>
    <div className="grid grid-flow-col gap-4">
    <a href="mailto:kieran@mcdonnell.cc" className="btn-circle btn btn-ghost"> <Image src="/email.png" width={35} height={35}></Image> </a>
    <a href="https://github.com/KDM121/" className="btn-circle btn btn-ghost"> <Image src="/github.png" width={35} height={35}></Image> </a>
    </div>
  </nav> 
</footer>
  )
}

export default Footer