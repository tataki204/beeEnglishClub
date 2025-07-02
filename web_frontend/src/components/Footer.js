// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
      <footer id="footer" class="below-fold-element flex center one">

          <div id="footer-menu" class="flex center one two-600 three-800 five-1200 maxW1280">
              <div id="footer-logo" class="grid-col">
                  <div id="logo-bot">
                      <a href="https://test-english.com/">
                          <img width="180" height="30" alt="Test English" data-cfsrc="https://www.test-english.com/img/logo-test-english-web-home.png" src="./images/logo-test-english-web-home.png"/>
                      </a>
                  </div>

                  <div id="footer-copyright">
                      © Copyright 2016-2023 <a href="./html/about-us.html" target="_blank">test-english.com</a>
                      <span>All rights reserved. </span><br/>
                          Made at <a title="Web responsive development" href="./html/illadelsbous.com.html" target="_blank">illadelsbous.com</a>
                  </div>

              </div>

              <div id="footer-levels" class="grid-col">

                  <h5>Levels</h5>
                  <ul>
                      <li> <a href="./html/level-a1.html">A1 Elementary</a> </li>
                      <li> <a href="./html/level-a2.html">A2 Pre-intermediate</a> </li>
                      <li> <a href="./html/level-b1.html">B1 Intermediate</a> </li>
                      <li> <a href="./html/level-b1-b2.html">B1 Upper-intermediate</a> </li>
                      <li> <a href="./html/level-b2.html">B2 Pre-advanced</a> </li>
                  </ul>
              </div>
              {/* <!-- Grid column -->
              <!-- Grid column --> */}
              <div id="footer-info" class="grid-col">
                  {/* <!-- Links --> */}
                  <h5>Info</h5>
                  <ul>
                      <li> <a href="./html/about-us.html">About us</a> </li>
                      <li> <a href="./html/terms-of-use.html">Terms of Use</a> </li>
                      <li> <a href="./html/privacy-policy.html">Privacy Policy</a> </li>
                      <li> <a href="./html/cookie-policy.html">Cookie Policy</a> </li>
                      <li> <a href="./html/cookie-declaration.html">Cookie Declaration</a> </li>
                  </ul>
              </div>
              {/* <!-- Grid column -->
              <!-- Grid column --> */}
              <div id="footer-getin" class="grid-col">
                  {/* <!-- Links --> */}
                  <h5>Get in Touch</h5>
                  <ul>
                      <li> <a href="./html/contact-us.html">Contact us</a> </li>
                      <li> <a href="./html/contact-us.html">Request a topic for a lesson</a> </li>
                      <li> <a href="./html/javascript: Cookiebot.renew().html">Change your cookie consent</a> </li>
                  </ul>
                  {/* <!-- row Social icons --> */}
                  <div class="footer-cta flex social-icons">
                      <a href="./html/testenglishcom.html" target="_blank"><img width="20" heigth="20" src="./images/ico-instagram.svg" alt="Follow us at instagram"/></a>
                      <a href="./html/testenglishcom.html" target="_blank"><img width="20" heigth="20" src="./images/ico-facebook.svg" alt="Follow us at facebook"/></a>
                      <a href="./html/testenglishcom.html" target="_blank"><img width="20" heigth="20" src="./images/ico-twitter.svg" alt="Follow us at twitter"/></a>
                      <a href="./html/UCHUG1E9lZVUf4RDvyMP0UeQ.html" target="_blank"><img width="20" heigth="20" src="./images/ico-youtube.svg" alt="Follow us at youtube"/></a>
                  </div>
              </div>
              <div id="footer-cta" class="grid-col">
                  <div class="footer-cta flex center one">
                      <a class="footer-btn-cta" href="?p=6251" role="button"> Take a level test</a>
                      <a class="footer-btn-cta" href="./html/work-in-progress.html" target="_blank" role="button"> Upgrade to pro</a>

                  </div>
              </div>
          </div>

      </footer>
  );
};

export default Footer;  