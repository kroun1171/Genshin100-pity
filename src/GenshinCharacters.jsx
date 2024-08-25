import React, { useState } from 'react';

const GenshinCharacters = () => {
    const genshinImpactCharacters = [
        "Aether", "Lumine", "Albedo", "Alhaitham", "Aloy", "Amber", "Arataki Itto", 
        "Baizhu", "Barbara", "Beidou", "Bennett", "Candace", "Chongyun", 
        "Collei", "Cyno", "Dehya", "Diluc", "Diona", "Dori", "Eula", 
        "Faruzan", "Fischl", "Freminet", "Ganyu", "Gorou", "Heizou", 
        "Hu Tao", "Jean", "Kaedehara Kazuha", "Kaeya", "Kamisato Ayaka", 
        "Kamisato Ayato", "Kaveh", "Keqing", "Klee", "Kujou Sara", "Kuki Shinobu", 
        "Layla", "Lisa", "Lynette", "Lyney", "Mika", "Mona", "Nahida", 
        "Nilou", "Ningguang", "Noelle", "Qiqi", "Raiden Shogun", "Razor", 
        "Rosaria", "Sangonomiya Kokomi", "Sayu", "Shenhe", "Shikanoin Heizou", 
        "Sucrose", "Tartaglia", "Thoma", "Tighnari", "Venti", "Wanderer", 
        "Xiangling", "Xiao", "Xingqiu", "Xinyan", "Yaoyao", "Yelan", 
        "Yoimiya", "Yun Jin", "Zhongli"
    ];

    const getRandomCharacters = (arr, num) => {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    };

    const [randomCharacters, setRandomCharacters] = useState(getRandomCharacters(genshinImpactCharacters, 10));

    const handleClick = () => {
        setRandomCharacters(getRandomCharacters(genshinImpactCharacters, 10));
    };

    return (
        <div>
            <h1>Random Genshin Impact Characters</h1>
            <ul>
                {randomCharacters.map((character, index) => (
                    <li key={index}>{character}</li>
                ))}
            </ul>
            <button onClick={handleClick}>Get New Characters</button>
        </div>
    );
};

export default GenshinCharacters;
