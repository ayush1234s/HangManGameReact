/* eslint-disable react/prop-types */

import getButtonStyling from "./getButtonStyling";

function Button({text,onClickHandler,styleType="primary",type}){
    return (
        <button
            onClick={onClickHandler}
            className={`px-4 py-2 ${getButtonStyling(styleType)} text-white`}
            type={type}
        >
            {text}
        </button>
    );
}

export default Button;