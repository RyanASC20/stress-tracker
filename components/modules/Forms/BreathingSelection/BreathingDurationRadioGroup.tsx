import { useState, LegacyRef, useEffect } from 'react';
import Radio from '../../../elements/RadioButton/Radio';


interface P {
    register: (instance: HTMLInputElement, options: object) => LegacyRef<HTMLInputElement> | void;
}

const BreathingDurationRadioGroup: React.FC<P> = ({ register }) => {
    const [clicked, setClicked] = useState<number | null>(null);

    const durationOptions = [
        1,
        3,
        10
    ];

    const optionsElements = durationOptions.map((option, idx) => {
        return (
            <div key={idx}>
                <Radio
                    register={register}
                    id={`duration-${idx}`}
                    name="duration"
                    value={option}
                    onClick={() => { setClicked(idx) }}
                    htmlFor={`duration-${idx}`} 
                    text={`${option} min`} 
                    clicked={clicked === idx}
                />
            </div>
        );
    });

    return (
        <>
            <p className="text-md text-highlight-secondary">Duration:</p>
            <div className="my-3 w-5/6">
                {optionsElements}
            </div>
        </>
    );
}

export default BreathingDurationRadioGroup;