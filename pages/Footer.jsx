import React from 'react'
import Image from "next/image";
const Footer = () => {
  return (
<footer className="footer footer-center p-10 bg-gradient-to-b from-base-100 to-accent text-base-content rounded">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover" href="/projects">Projects</a>
    <a className="link link-hover" href="https://docs.kieranmcdonnell.com">Documents</a>
    <a className="link link-hover" href="/support">Support</a>
  </nav> 
  <nav>
    <div className="grid grid-flow-col gap-4">
    <a href="mailto:emails@mcdonnell.cc" className="btn-rounded btn btn-ghost"> <Image src="/email.png" width={35} height={35}></Image> </a>
    <a href="https://github.com/KDM121/" className="btn-circle btn btn-ghost"> <Image src="/github.png" width={35} height={35}></Image> </a>
    </div>
  </nav> 
</footer>
  )
}

export default Footer