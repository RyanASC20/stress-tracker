import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


import DataEntryForm from '../modules/Forms/CreateMoodEntry/DataEntryForm';
import { emoteElements, deleteIconElement, penIconElement } from "../../icons";

interface MoodEntryProps {
    currentData: any;
    description: string;
    idx: number;
    mood: number;
    handleRemove: (idx: number) => void;
    setCreationMode: (b: boolean) => void;
}

const Entry: React.FC<MoodEntryProps> = ({ currentData, description, idx, mood, handleRemove }) => {
    const [editMode, setEditMode] = useState<boolean>(false);

    if (!editMode) {
        return (
            <Zoom duration={500}>
                <div
                    className="mb-6 p-3 flex justify-between w-full bg-white rounded-xl shadow-sm"
                >
                    <div>
                        {emoteElements[mood]}
                        <p className="text-sm leading-relaxed tracking-wide text-gray-700">{description}</p>
                    </div>
                    <div className="flex content-center text-gray-400">
                        <button
                            type="button"
                            className="transition duration-250 focus:outline-none hover:text-red-500"
                            onClick={() => {
                                handleRemove(idx);
                            }}
                        >
                            {deleteIconElement}
                        </button>
                        <button
                            type="button"
                            className="transition duration-250 focus:outline-none hover:text-green-500"
                            onClick={() => {
                                setEditMode(true);
                            }}
                        >
                            {penIconElement}
                        </button>
                    </div>
                </div>
            </Zoom>
        );
    }
    return (
        <Zoom duration={500}>
            <div className="w-full mb-5">
                <DataEntryForm setEditMode={setEditMode} entryIndex={idx} currentData={currentData} defaultVal={ description }/>
            </div>
        </Zoom>
    )

};

export default Entry;
