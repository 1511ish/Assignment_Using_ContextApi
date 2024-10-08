// import React from "react";
// import "./Button.css";

// const Button = (props) => {
//   return (
//     <button
//       className="button"
//       type={props.type || "button"}
//       onClick={props.onClick}
//     >
//       {props.children}
//     </button>
//   );
// };

// export default Button;













import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
