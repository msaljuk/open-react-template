import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";

import invertedLogo from "../../assets/images/invertedlogo.svg";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <div
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              {/* Wage<span className="text-color-primary">Base</span> */}
              <img src={invertedLogo} style={{ width: "50%" }}></img>
            </div>
            <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
              >
                Democratizing service worker wage information
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Link to="#platform" smooth className="button button-primary">
                    Our Platform
                  </Link>
                  <Link
                    to="#process"
                    smooth
                    className="button button-secondary"
                  >
                    Our Process
                  </Link>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          >
            <a
              data-video="https://youtu.be/zSrhYK_9txg"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require("./../../assets/images/video-placeholder.jpg")}
                alt="Hero"
                width={896}
                height={504}
              />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://www.youtube.com/embed/zSrhYK_9txg"
            videoTag="iframe"
          />
        </div>
        <div
          className="hero-figure reveal-from-bottom illustration-element-01"
          data-reveal-value="20px"
          data-reveal-delay="800"
        >
          <a
            data-video="https://drive.google.com/file/d/1G1i6m4S38LVAZfJO6KS9PKsNEyeObQv3/preview"
            href="#0"
            aria-controls="video-modal"
            onClick={openModal}
          >
            <Image
              className="has-shadow"
              src={require("./../../assets/images/demoVideoPlaceholder.png")}
              alt="Hero"
              width={896}
              height={504}
            />
          </a>
        </div>
        <Modal
          id="video-modal"
          show={videoModalActive}
          handleClose={closeModal}
          video="https://drive.google.com/file/d/1G1i6m4S38LVAZfJO6KS9PKsNEyeObQv3/preview"
          videoTag="iframe"
        />
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
