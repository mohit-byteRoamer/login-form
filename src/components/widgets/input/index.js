import React from "react";
import Styles from "./styles";
const Input = ({
  inputStyle,
  type,
  ref,
  placeholder,
  rightIcon,
  iconHandler,
}) => {
  return (
    <div style={{ ...Styles.inputBox, ...inputStyle }}>
      <input
        style={{ ...Styles.input, width: rightIcon ? "90%" : "100%" }}
        type={type}
        ref={ref}
        placeholder={placeholder}
        rightIcon={rightIcon}
      />
      {rightIcon && (
        <span style={Styles.iconBox} onClick={iconHandler}>
          <img style={Styles.icon} src={rightIcon} />
        </span>
      )}
    </div>
  );
};

export default Input;
