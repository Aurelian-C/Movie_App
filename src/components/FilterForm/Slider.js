import { useRef, useState } from 'react';
import classes from './Slider.module.css';

export default function Slider() {
  const [rendervaluesBox, setRendervaluesBox] = useState(false);
  const [sliderOneNumber, setSliderOneNumber] = useState(0);
  const [sliderTwoNumber, setSliderTwoNumber] = useState(100);
  const sliderOneRef = useRef();
  const sliderTwoRef = useRef();

  // Handle slides
  const handleSliderOne = () => {
    const sliderOneElement = sliderOneRef.current;
    const sliderOneValue = +sliderOneElement.value;
    const sliderTwoElement = sliderTwoRef.current;
    const sliderTwoValue = +sliderTwoElement.value;
    setSliderOneNumber(sliderOneValue);

    if (sliderOneValue >= sliderTwoValue) {
      sliderTwoElement.value = sliderOneValue;
      sliderOneElement.style = 'z-index: 1';
      sliderTwoElement.style = 'z-index: 0';
      setSliderOneNumber(sliderTwoValue);
      setSliderTwoNumber(sliderTwoValue);
    }
  };
  const handleSliderTwo = () => {
    const sliderOneElement = sliderOneRef.current;
    const sliderOneValue = +sliderOneElement.value;
    const sliderTwoElement = sliderTwoRef.current;
    const sliderTwoValue = +sliderTwoElement.value;
    setSliderTwoNumber(sliderTwoValue);

    if (sliderTwoValue <= sliderOneValue) {
      sliderOneElement.value = sliderTwoValue;
      sliderOneElement.style = 'z-index: 0';
      sliderTwoElement.style = 'z-index: 1';
      setSliderOneNumber(sliderOneValue);
      setSliderTwoNumber(sliderOneValue);
    }
  };

  // Handle values box visibility
  const handleShowValuesBox = () => {
    setRendervaluesBox(true);
  };
  const handleHideValuesBox = () => {
    setRendervaluesBox(false);
  };

  const valuesBox = (
    <div className={classes.values}>
      <span id="range1">{sliderOneNumber}</span>
      <span> ‐ </span>
      <span id="range2">{sliderTwoNumber}</span>
    </div>
  );

  return (
    <div className={classes.wrapper}>
      {rendervaluesBox && valuesBox}
      <div className={classes.container}>
        <div className={classes['slider-track']} />
        <input
          ref={sliderOneRef}
          type="range"
          min={0}
          max={100}
          step={20}
          defaultValue={0}
          id="slider-1"
          onInput={handleSliderOne}
          onMouseDown={handleShowValuesBox}
          onMouseUp={handleHideValuesBox}
        />
        <input
          ref={sliderTwoRef}
          type="range"
          min={0}
          max={100}
          step={20}
          defaultValue={100}
          id="slider-2"
          onInput={handleSliderTwo}
          onMouseDown={handleShowValuesBox}
          onMouseUp={handleHideValuesBox}
        />
      </div>
    </div>
  );
}
