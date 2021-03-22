import React from 'react';
import classNames from 'classnames';
import './style.scss';

const SGButton = ({
  text,
  type,
  height = 50,
  width,
  background,
  icon,
  alt,
  className,
  blur = false,
  onClick = () => { },
  style
}) => {
  if (type === 'gradient') {
    return (
      <div className="sg-gradient-button-container">
        <button
          className={classNames('sg-gradient-button', className)}
          onClick={() => onClick()}
          style={{
            borderRadius: 18,
            borderWidth: 0,
            width,
            height,
            ...style
          }}>
          <div className="content">
            <p>{text}</p>
          </div>
          {blur && <div className="sg-gradient-button-bg" style={{ width: '100%', marginTop: 20 - height }} />}
        </button>
      </div>
    )
  }
  if (type === 'icon') {
    return (
      <div
        className={classNames("sg-icon-button", className)}
        style={{
          background,
          borderRadius: 18,
          padding: '0 16px',
          width,
          height,
          ...style,
        }}>
        <img src={icon} alt={alt} />
        <span>{text}</span>
      </div>
    )
  }
  return (
    <div
      className={classNames("sg-button", className)}
      style={{
        background,
        borderRadius: 18,
        padding: '0 16px',
        width,
        height,
        ...style,
      }}>
      <span className="sg-button-text">{text}</span>
    </div>
  )
}

export default SGButton;