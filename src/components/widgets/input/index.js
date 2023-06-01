import React from "react";
import Styles from "./styles";

const Input = React.forwardRef(
  (
    { inputStyle, type, placeholder, iconStyle, rightIcon, iconHandler },
    ref
  ) => {
    return (
      <div style={{ ...Styles.inputBox, ...inputStyle }}>
        <input
          style={{ ...Styles.input, width: rightIcon ? "calc(100% - 30px)" : "100%" }}
          type={type}
          ref={ref}
          placeholder={placeholder}
        />
        {rightIcon && (
          <span
            style={{ ...Styles.iconBox, ...iconStyle }}
            onClick={iconHandler}
          >
            <img style={Styles.icon} src={rightIcon} alt="Icon" />
          </span>
        )}
      </div>
    );
  }
);

export default Input;
