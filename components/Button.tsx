import { useState } from 'react';


interface P {
    text: string;
    textColor?: string;
    textSize?: string;
    type?: any;
    onClick?: any;
}

const Button: React.FC<P> = ({ text, textColor, textSize, type, onClick }) => {

    return (
        <button 
            className={`transition duration-300 p-1.5 m-2 text-light text-${textSize ? textSize : 'xl'} text-${textColor}-500 rounded-lg border-2 border-gray-300 hover:border-gray-500 focus:outline-none`}
            type={type ? type : "submit"}
            onClick={onClick}
        >
        {text}</button>
    );
}

export default Button;