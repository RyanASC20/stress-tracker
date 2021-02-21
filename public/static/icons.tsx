import Icon from '@mdi/react';
import {
    mdiEmoticonCryOutline,
    mdiEmoticonFrownOutline,
    mdiEmoticonSadOutline,
    mdiEmoticonNeutralOutline,
    mdiEmoticonHappyOutline,
    mdiEmoticonOutline,
    mdiEmoticonExcitedOutline,
    mdiDelete,
    mdiPen,
    mdiWeatherSunsetUp,
    mdiWeatherSunsetDown,
    mdiWeatherSunny,
    mdiWeatherNight
} from "@mdi/js";

export const emotes = [
    mdiEmoticonCryOutline,
    mdiEmoticonFrownOutline,
    mdiEmoticonSadOutline,
    mdiEmoticonNeutralOutline,
    mdiEmoticonHappyOutline,
    mdiEmoticonOutline,
    mdiEmoticonExcitedOutline
];

export const timeIcons = [
    mdiWeatherSunsetUp,
    mdiWeatherSunny,
    mdiWeatherSunsetDown,
    mdiWeatherNight
]

const emoteColors = [
    'emote-0',
    'emote-1',
    'emote-2',
    'emote-3',
    'emote-4',
    'emote-5',
    'emote-6',
    'emote-7'
]

const timeIconColors = [
    'yellow-300',
    'yellow-300',
    'yellow-300',
    'yellow-200'
]

const timeIconBg = [
    'gradient-to-b from-red-300 to-purple-600',
    'blue-400',
    'gradient-to-t from-red-300 to-purple-600',
    'indigo-900'
]


export const emoteElements: JSX.Element[] = emotes.map((ic, idx) => {
    return <Icon className={ `fill-current inline text-${emoteColors[idx]} ` } key={ idx } path={ ic } size={ 1 }></Icon>
});

export const timeIconElements: JSX.Element[] = timeIcons.map((ic, idx) => {
    return <Icon className={ `fill-current inline text-${timeIconColors[idx]} }` } key={ idx } path={ ic } size={ 1 }></Icon>
});

export const deleteIconElement = <Icon path={ mdiDelete } title="delete" size={ 1 }></Icon>
export const penIconElement = <Icon path={ mdiPen } title="edit" size={ 1 }></Icon>

export { emoteColors, timeIconColors, timeIconBg }
export default Icon;


// const colors = [
//     'red', 'orange', 'yellow', 
// ]

// export default icons.map((ic, idx) => {
//     return <Icon key={ idx } path={ ic } title={ ic } size={ 1 }></Icon>
// });



