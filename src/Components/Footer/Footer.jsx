import React from 'react';
import LOGO from '../../assets/logo@2x-free-img.png';
import Image from 'next/image';
const Footer = () => {
    return (
        <div>
             <div className='mt-11'>
          <footer className="footer bg-base-200 text-base-content p-10">
  <aside>
    <Image src={LOGO} width={100} alt="" />
    <p>
    DNK Ltd.
      <br />
      Providing reliable 2024
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
        </div>
    );
};

export default Footer;