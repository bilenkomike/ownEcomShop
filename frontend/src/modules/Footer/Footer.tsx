import React from "react";
import classes from "./Footer.module.scss";
import DownloadAppButtons from "components/DownloadAppButtons/DownloadAppButtons";
import Button from "UI/Button/Button";

import { BsHeart } from "react-icons/bs";

const Footer: React.FC = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={classes.footer}>
      <div className={classes.footer__content}>
        <div className={classes.footer__list}>
          <h3 className={classes.footer__list__title}>HELP</h3>
          <div className={classes.footer__list__item}>Delivery & returns</div>
          <div className={classes.footer__list__item}>FAQ</div>
          <div className={classes.footer__list__item}>Track order</div>
          <div className={classes.footer__list__item}>Contacts</div>
          <div className={classes.footer__list__item}>Blog</div>
        </div>

        <div className={classes.footer__list}>
          <h3 className={classes.footer__list__title}> Shop</h3>
          <div className={classes.footer__list__item}>New arrivals</div>
          <div className={classes.footer__list__item}>Trending now</div>
          <div className={classes.footer__list__item}>Sales</div>
          <div className={classes.footer__list__item}>Brands</div>
        </div>
        <div className={classes.footer__list}>
          <h3 className={classes.footer__list__title}>Get in touch</h3>
          <div className={classes.footer__list__item}>
            <strong>Call:</strong>(405) 555-0128
          </div>
          <div className={classes.footer__list__item}>
            <strong>Email:</strong>hello@createx.com
          </div>
          <div className={classes.footer__list__item}>
            <Button
              iconPosition="before"
              icon="facebook"
              styleType="light"
              size="social"
              variant="solid"
            />
            <Button
              iconPosition="before"
              icon="instagram"
              styleType="light"
              size="social"
              variant="solid"
            />
            <Button
              iconPosition="before"
              icon="twitter"
              styleType="light"
              size="social"
              variant="solid"
            />
            <Button
              iconPosition="before"
              icon="youtube"
              styleType="light"
              size="social"
              variant="solid"
            />
            <Button
              iconPosition="before"
              icon="pinterest"
              styleType="light"
              size="social"
              variant="solid"
            />
          </div>
        </div>
        <div className={classes.footer__list}>
          <h3 className={classes.footer__list__title}>Download our app</h3>
          <DownloadAppButtons />
        </div>
      </div>
      <div className={classes.footer__content} onClick={handleScrollTop}>
        <span className={classes.footer__copyright}>
          © All rights reserved. Made with
          <BsHeart /> by Createx Studio
        </span>
        Go to top
      </div>
    </footer>
  );
};

export default Footer;

// Shop
// Get in touch
// Download our app
// Delivery & returns
// New arrivals
// Call:
// (405) 555-0128
// FAQ
// Trending now
// Email:
// hello@createx.com
// Track order
// Sales
// Contacts
// Brands
// Blog
