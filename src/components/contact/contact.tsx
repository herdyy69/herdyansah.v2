import s from "./contact.module.scss";
import React from "react";
import { Icons } from "@/assets/icons";
import Link from "next/link";

export const Contact = () => {
  return (
    <div className={s.main}>
      <div className={s.content}>
        <div className={s.description}>
          <h3 data-split-reveal>Get in touch with me</h3>
          <p data-reveal>
            If you have any questions or would like to work together, please
            feel free to contact me.
          </p>
          <div className={s.socialmedia}>
            <Link
              href="https://www.instagram.com/herdyy69/"
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
            >
              <Icons.Instagram />
            </Link>
            <Link
              href="https://www.linkedin.com/in/herdyy69/"
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
            >
              <Icons.Linkedin />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
