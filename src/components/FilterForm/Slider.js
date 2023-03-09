import { useRef, useState } from 'react';
import classes from './Slider.module.css';

export default function Slider({ minValue, maxValue, stepValue }) {
  const min = +minValue;
  const max = +maxValue;
  const step = +stepValue;

  const [renderSliderValues, setRenderSliderValues] = useState(false);
  const [sliderOneValue, setSliderOneValue] = useState(min);
  const [sliderTwoValue, setSliderTwoValue] = useState(max);
  const sliderOneRef = useRef();
  const sliderTwoRef = useRef();

  // Handle slides
  const handleSliderOne = () => {
    const sliderOneElement = sliderOneRef.current;
    const sliderOneInputValue = +sliderOneElement.value;
    const sliderTwoElement = sliderTwoRef.current;
    const sliderTwoInputValue = +sliderTwoElement.value;
    setSliderOneValue(sliderOneInputValue);

    if (sliderOneInputValue >= sliderTwoInputValue) {
      sliderTwoElement.value = sliderOneInputValue;
      sliderOneElement.style = 'z-index: 1';
      sliderTwoElement.style = 'z-index: 0';
      setSliderOneValue(sliderTwoInputValue);
      setSliderTwoValue(sliderTwoInputValue);
    }
  };
  const handleSliderTwo = () => {
    const sliderOneElement = sliderOneRef.current;
    const sliderOneInputValue = +sliderOneElement.value;
    const sliderTwoElement = sliderTwoRef.current;
    const sliderTwoInputValue = +sliderTwoElement.value;
    setSliderTwoValue(sliderTwoInputValue);

    if (sliderTwoInputValue <= sliderOneInputValue) {
      sliderOneElement.value = sliderTwoInputValue;
      sliderOneElement.style = 'z-index: 0';
      sliderTwoElement.style = 'z-index: 1';
      setSliderOneValue(sliderOneInputValue);
      setSliderTwoValue(sliderOneInputValue);
    }
  };

  // Handle values box visibility
  const handleShowValuesBox = () => {
    setRenderSliderValues(true);
  };
  const handleHideValuesBox = () => {
    setRenderSliderValues(false);
  };

  // Slider values JSX markup
  const sliderValues = (
    <div className={classes.slider__values}>
      <span id="range1">{sliderOneValue}</span>
      <span> ‐ </span>
      <span id="range2">{sliderTwoValue}</span>
    </div>
  );

  return (
    <div className={classes.slider}>
      {renderSliderValues && sliderValues}
      <div className={classes.slider__container}>
        <div className={classes.slider__track} />
        <ul className={classes.slider__ticks}>
          <li className={classes.slider__tick} title="0">
            <span className={classes.slider__number} title="0">
              0
            </span>
          </li>
          <li className={classes.slider__tick} title="20">
            <span className={classes.slider__number} title="20">
              20
            </span>
          </li>
          <li className={classes.slider__tick} title="40">
            <span className={classes.slider__number} title="40">
              40
            </span>
          </li>
          <li className={classes.slider__tick} title="60">
            <span className={classes.slider__number} title="60">
              60
            </span>
          </li>
          <li className={classes.slider__tick} title="80">
            <span className={classes.slider__number} title="80">
              80
            </span>
          </li>
          <li className={classes.slider__tick} title="100">
            <span className={classes.slider__number} title="100">
              100
            </span>
          </li>
        </ul>
        <input
          className={classes.slider__input}
          ref={sliderOneRef}
          type="range"
          min={min}
          max={max}
          step={step}
          defaultValue={min}
          id="slider-1"
          onInput={handleSliderOne}
          onMouseDown={handleShowValuesBox}
          onMouseUp={handleHideValuesBox}
        />
        <input
          className={classes.slider__input}
          ref={sliderTwoRef}
          type="range"
          min={min}
          max={max}
          step={step}
          defaultValue={max}
          id="slider-2"
          onInput={handleSliderTwo}
          onMouseDown={handleShowValuesBox}
          onMouseUp={handleHideValuesBox}
        />
      </div>
    </div>
  );
}
