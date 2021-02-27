import { useState, LegacyRef } from 'react';
import { emoteElements } from "../../../public/static/icons";

interface P {
    register: (instance: HTMLInputElement, options: object) => LegacyRef<HTMLInputElement> | void;
}

const MoodRadioGroup: React.FC<P> = ({ register }) => {
    const [ clicked, setClicked ] = useState<number | null>(null);
    const iconElementsSelectable = emoteElements.map((ic, idx) => {
        return (
            <div className="flex" key={idx}>
                <input
                    type="radio"
                    ref={e => register(e, {
                        required: true,
                    })}
                    id={`mood-${idx}`}
                    name="mood"
                    value={idx}
                    className="w-0 h-0"
                    onClick={() => { setClicked(idx) }}
                ></input>
                <label className={`transition duration-400 border-2 rounded-full shadow-double-xs cursor-pointer hover:shadow-inner ${clicked === idx ? 'p-1 border-green-600' : '' }` } htmlFor={ `mood-${idx}` }>{ ic }</label>
            </div>
        );
    });
    return <ul className="flex justify-around">{iconElementsSelectable}</ul>;
};

export default MoodRadioGroup;
