import React from 'react';
import PropTypes from 'prop-types';

Health.propTypes = {
  // The id of the Health element
  id: PropTypes.string.isRequired,

  // The title of the Health element
  title: PropTypes.string.isRequired,

  // The max value/health of the element
  maxValue: PropTypes.number.isRequired,

  // The current value/health of the element
  value: PropTypes.number.isRequired,

  // The name of the parent this health is attached to (ex: Player)
  name: PropTypes.string.isRequired,

  // Optional width of the Health element. (default: 100%)
  width: PropTypes.string,
};

const SVG_HEIGHT = 10;
const SVG_MARGIN_TOP = 5;
const SVG_FG_COLOR = "#ff0000";
const SVG_BG_COLOR = "#cccccc";

export default function Health({ id, title, maxValue, value, name, width = "100%" }) {
  return (
    <div className="health" 
      id={id}
      title={title}
      style={{
        width: width,
        boxSizing: 'border-box',
        padding: '6px',
        boxShadow: 'inset 0 0 0 2px #cccccc'}}>
      <HealthText {...{name, value, maxValue}} />
      <HealthBar {...{value, maxValue}} />
    </div>
  );
}

const HealthText = ({name, value, maxValue}) => {
  return (
  <span className="health-info" 
    style={{
      fontFamily: 'Roboto',
      fontSize: '22px',
      color: '#555555'}}>
    {`${name} (${value}/${maxValue})`}
  </span>);
}

const HealthBar = ({value, maxValue}) => {
 return (
  <div className="health-bar"
    style={{
      display: 'grid',
      marginTop: `${SVG_MARGIN_TOP}px`}}>
    <svg className="health-background-layer" 
      style={{backgroundColor: SVG_BG_COLOR}}
      width="100%" 
      height={`${SVG_HEIGHT}`}>
    </svg>
    <svg className="health-foreground-layer" 
      style={{
        backgroundColor: SVG_FG_COLOR, 
        position: 'relative',    
        top: `-${SVG_HEIGHT}px`}}
      width={`${value/maxValue*100}%`} 
      height={`${SVG_HEIGHT}px`}>
    </svg>
  </div>);
}