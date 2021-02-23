import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

// needfinding deliverables
import needfindingSlidesPDF from "../../assets/assignments/needfindingslides.pdf";
import needfindingSlidesPPT from "../../assets/assignments/needfindingslides.pptx";

// experience prototype deliverables
import experienceprototypeSlidesPDF from "../../assets/assignments/experienceprototypeslides.pdf";
import experienceprototypeSlidesPPT from "../../assets/assignments/experienceprototypeslides.pptx";

// concept video deliverables
import conceptVideo from "../../assets/assignments/conceptvideo.mp4";

// low-fi prototype deliverables
import lowfiSlidesPDF from "../../assets/assignments/lowfislides.pdf";
import lowfiSlidesPPT from "../../assets/assignments/lowfislides.pptx";
import lowfiReport from "../../assets/assignments/lowfireport.pdf";

// med-fi prototype deliverables
import medfiSlidesPDF from "../../assets/assignments/medfiSlides.pdf";
import medfiSlidesPPT from "../../assets/assignments/medfiSlides.pptx";
import medfiREADME from "../../assets/assignments/medfiREADME.pdf";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "Our Process",
    paragraph:
      "Learn more about our journey to empower workers within the service industry towards more economically and environmentally sustainable lives",
  };

  return (
    <section id={"process"} {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-01.svg")}
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Needfinding</h4>
                  <p className="m-0 text-sm">
                    First round of needfinding. Involved conducting interviews
                    and discovering interesing insights.
                  </p>
                  <div style={{ marginTop: "20px" }}>
                    <Link
                      to={needfindingSlidesPDF}
                      target="_blank"
                      className="button button-primary button-wide-mobile button-sm"
                    >
                      Slides (PDF)
                    </Link>{" "}
                    <Link
                      to={needfindingSlidesPPT}
                      target={_blank}
                      className="button button-wide-mobile button-sm"
                    >
                      Slides (PPT)
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-02.svg")}
                      alt="Features tile icon 02"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Experience Prototypes</h4>
                  <p className="m-0 text-sm">
                    Crafted POVs and “How Might We”s to frame problem and ran
                    experience prototypes for top 3 solutions.
                  </p>
                  <div style={{ marginTop: "20px" }}>
                    <Link
                      target="_blank"
                      to={experienceprototypeSlidesPDF}
                      className="button button-primary button-wide-mobile button-sm"
                    >
                      Slides (PDF)
                    </Link>{" "}
                    <Link
                      className="button button-wide-mobile button-sm"
                      target={_blank}
                      to={experienceprototypeSlidesPPT}
                    >
                      Slides (PPT)
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-03.svg")}
                      alt="Features tile icon 03"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Website</h4>
                  <p className="m-0 text-sm">
                    We built a website to track our journey as we developed
                    WageBase. You're on it now!
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-04.svg")}
                      alt="Features tile icon 04"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Concept Video</h4>
                  <p className="m-0 text-sm">
                    Produced a concept video for our idea and the main tasks it
                    will help accomplish
                  </p>
                  <div style={{ marginTop: "20px" }}>
                    <Link
                      target={_blank}
                      download
                      to={conceptVideo}
                      className="button button-primary button-wide-mobile button-sm"
                    >
                      Download Video
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-05.svg")}
                      alt="Features tile icon 05"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Low-fi Prototype and Test</h4>
                  <p className="m-0 text-sm">
                    Selected an interface, made a low-fi prototype and tested
                    the prototype with participants to observe usability.
                  </p>
                  <div style={{ marginTop: "20px" }}>
                    <Link
                      target={_blank}
                      to={lowfiSlidesPDF}
                      className="button button-primary button-wide-mobile button-sm"
                    >
                      Slides (PDF)
                    </Link>{" "}
                    <Link
                      className="button button-wide-mobile button-sm"
                      target={_blank}
                      to={lowfiSlidesPPT}
                    >
                      Slides (PPT)
                    </Link>
                    <div style={{ marginTop: "5px" }}></div>
                    <Link
                      target={_blank}
                      to={lowfiReport}
                      className="button button-dark button-wide-mobile button-sm"
                    >
                      Report (PDF)
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-06.svg")}
                      alt="Features tile icon 06"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Med-fi Prototype</h4>
                  <p className="m-0 text-sm">
                    Revised low-fi prototype and built a medium-fidelity version
                    of the prototype on Figma. <br />
                  </p>
                  <div style={{ marginTop: "20px" }}>
                    <a
                      target={_blank}
                      href={
                        "https://www.figma.com/proto/eAv4HLpIQ71M41yw0tIEKb/WageBase?node-id=4%3A36&scaling=scale-down-width"
                      }
                      className="button button-secondary button-wide-mobile button-sm"
                    >
                      Figma Prototype
                    </a>{" "}
                    <Link
                      className="button button-dark button-wide-mobile button-sm"
                      target={_blank}
                      to={medfiREADME}
                    >
                      README
                    </Link>
                    <div style={{ marginTop: "5px" }}></div>
                    <Link
                      target={_blank}
                      to={medfiSlidesPDF}
                      className="button button-primary button-wide-mobile button-sm"
                    >
                      Slides (PDF)
                    </Link>{" "}
                    <Link
                      target={_blank}
                      to={medfiSlidesPPT}
                      className="button button-wide-mobile button-sm"
                    >
                      Slides (PPT)
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
