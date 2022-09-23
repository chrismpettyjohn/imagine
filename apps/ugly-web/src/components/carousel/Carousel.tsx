import React, {useState} from 'react';
import {CarouselProps} from './Carousel.types';
import {act} from 'react-dom/test-utils';

export function Carousel({ slides }: CarouselProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const CAN_GO_BACK = activeSlide > 0;

  const goBack = () => {
    if (!CAN_GO_BACK) {
      return;
    }
    setActiveSlide(_ => _ - 1);
  }

  const CAN_GO_FORWARD = activeSlide <= slides.length;

  const goForward = () => {
    if (!CAN_GO_FORWARD) {
      return;
    }

    setActiveSlide(_ => _ + 1);
  }

  const currentSlide = slides[activeSlide];

  if (!currentSlide) {
    return null;
  }

  return (
    <div id="news-content">
      <div className="news-article show" style={{backgroundImage: `url(${currentSlide.imageURL})`}}>
        <div className="shadow" />
        <div className="news-content">
          <div className="news-title">{currentSlide.label}</div>
          <div className="news-short-text">{currentSlide.description}</div>
        </div>
        <div className="details-box">
          {
            CAN_GO_BACK && <div className="back-news"><i className="fal fa-angle-left" onClick={goBack} /></div>
          }
          <div className="authors-details">
            {currentSlide.content}
          </div>
          <button className="btn green news-slider-btn" onClick={currentSlide.btnAction}>
            {currentSlide.btnLabel}
          </button>
          {
            CAN_GO_FORWARD && <div className="next-news"><i className="fal fa-angle-right" onClick={goForward} /></div>
          }
        </div>
      </div>
    </div>
  )
}
