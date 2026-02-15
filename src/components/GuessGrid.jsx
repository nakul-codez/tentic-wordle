import React from 'react'
import {useState, useEffect} from 'react'
import Keyboard from './Keyboard';

const words = ['ALONE', 'ARISE', 'ALTER', 'AGENT', 'ANGER', 'ANGLE', 'ARGUE', 'ASIDE', 'ALONG', 'ABOUT', 'ABUSE', 'ACTOR', 'ALIVE', 'AFTER', 'AMONG', 'ADOPT', 'ADMIT', 'AVOID', 'ANGRY', 'ALBUM', 'ABOVE', 'AWFUL',
        'BRAIN', 'BOARD', 'BRAND', 'BRING', 'BLIND', 'BLADE', 'BROAD', 'BEING', 'BEGIN', 'BUILD', 'BREAD', 'BLAME', 'BASIC', 'BROWN', 'BRUSH', 'BRIEF', 'BUYER', 'BIRTH', 'BELOW', 'BREAK', 'BADLY', 'BENCH', 'BEACH', 'BUNCH', 'BLOCK',
        'COURT', 'CAUSE', 'COAST', 'CLEAR', 'CLEAN', 'CLOSE', 'COUNT', 'CLOUD', 'COULD', 'CABIN', 'CLAIM', 'CREAM', 'CABLE', 'CRIME', 'CRAFT', 'CHAIN', 'CHAIR', 'CRASH', 'CHART', 'CHASE', 'COVER', 'CHEST', 'CROWD', 'CHILD', 'CLIMB', 'CHEAP', 'CHIEF', 'CRAZY',
        'DOUBT', 'DANCE', 'DREAM', 'DRAFT', 'DAILY', 'DIRTY', 'DELAY', 'DEATH', 'DRIVE', 'DRINK', 'DEPTH', 'DOZEN',
        'EARLY', 'ENTRY', 'EARTH', 'EIGHT', 'EMPTY', 'EXIST', 'EXTRA', 'EQUAL', 'EXACT', 'ENJOY',
        'FRUIT', 'FLOAT', 'FIRST', 'FINAL', 'FRONT', 'FAULT', 'FALSE', 'FOUND', 'FIELD', 'FORCE', 'FOCUS', 'FRAME', 'FLAME', 'FIBER', 'FRESH', 'FORTH', 'FLESH', 'FAVOR', 'FAITH', 'FIGHT',
        'GRANT', 'GIANT', 'GUEST', 'GREAT', 'GRAIN', 'GUARD', 'GUIDE', 'GRAND', 'GRADE', 'GROUP', 'GRAVE', 'GLOVE', 'GIVEN', 'GHOST',
        'HEART', 'HORSE', 'HOTEL', 'HOUSE', 'HABIT', 'HUMAN', 'HUMOR', 'HONEY', 'HEAVY',
        'IDEAL', 'IMAGE', 'IMPLY', 'INDEX',
        'JOINT', 'JUDGE', 'JUICE',
        'KNIFE', 
        'LEAST', 'LATER', 'LEARN', 'LARGE', 'LEMON', 'LABOR', 'LAYER', 'LOVER', 'LOWER', 'LAUGH', 'LIGHT', 'LUNCH', 'LUCKY',
        'MOUSE', 'MOUNT', 'MORAL', 'METAL', 'MINOR', 'MODEL', 'MEDIA', 'MUSIC', 'MAYOR', 'MONEY', 'MONTH', 'MOVIE', 'MOUTH', 'MIGHT', 'MAKER', 'MATCH', 'MAYBE', 'MAJOR',
        'NOISE', 'NURSE', 'NORTH', 'NOVEL', 'NIGHT', 'NAKED', 'NEWLY',
        'OCEAN', 'OFTEN', 'OTHER', 'OWNER', 'OUGHT',
        'PRINT', 'PAINT', 'PIANO', 'PAUSE', 'PLATE', 'PANEL', 'PLANE', 'PILOT', 'POINT', 'PLANT', 'PROUD', 'POUND', 'PRIDE', 'PLACE', 'PRIME', 'PRICE', 'PHONE', 'PROVE', 'POWER', 'PHASE', 'PARTY', 'PITCH', 'PORCH', 'PATCH',
        'QUIET', 'QUITE', 'QUOTE', 'QUICK',
        'ROUTE', 'RAISE', 'RATIO', 'ROUND', 'RADIO', 'RANGE', 'REACT', 'RAPID', 'RIGHT', 'ROUGH', 'READY', 'REACH', 'REPLY', 'RELAX',
        'STORE', 'STARE', 'STAIR', 'STEAL', 'SOLAR', 'STONE', 'SLIDE', 'STAND', 'SOUND', 'SOLID', 'SUGAR', 'STAGE', 'SMART', 'SMILE', 'SLICE', 'SAUCE', 'SPORT', 'STORM', 'STRIP', 'SPLIT', 'SINCE', 'SCALE', 'SUPER', 'SCORE', 'SLAVE', 'SHARE', 'SWEAR', 'SHINE', 'SHIRT', 'SHORT', 'STYLE', 'SOLVE', 'SHOUT', 'SHORE', 'STORY', 'SPEND', 'SOUTH', 'STAKE', 'SHRUG', 'SIGHT', 'SPACE', 'STUDY', 'SWING', 'SCOPE', 'SHADE', 'SHAPE', 'SHARP', 'STOCK', 'SPEAK', 'SHIFT', 'SMOKE', 'SHELF', 'STICK', 'SHAKE', 'SHOCK',
        'TRAIL', 'TRAIN', 'TRIAL', 'TRADE', 'TIRED', 'TREND', 'TRACE', 'TABLE', 'TRIBE', 'TERMS', 'THOSE', 'TRULY', 'THEIR', 'TOWER', 'TOUGH', 'TOPIC', 'TODAY', 'THING', 'THIRD', 'TWICE', 'TOUCH', 'TEACH', 'TRUCK', 'TRICK', 'TRACK', 'THROW', 'THINK', 'THANK', 'THICK',
        'UNTIL', 'UNDER', 'UNCLE', 'URBAN',
        'VALUE', 'VIRUS', 'VITAL', 'VOTER', 'VIDEO', 'VOICE',
        'WASTE', 'WRITE', 'WATER', 'WOUND', 'WOULD', 'WORLD', 'WRONG', 'WOMAN', 'WHOSE', 'WHOLE', 'WHITE', 'WORTH', 'WHILE', 'WORKS', 'WEIGH', 'WATCH',
        'YOURS', 'YIELD', 'YOUNG', 'YOUTH'
    ];

const word = words[Math.floor(Math.random()*words.length)];

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

function GuessGrid() {
    const [inputCell, setInputCell] = useState([0,0]);
    const rows = 6;
    const columns = 5;

    const registerKey = (keypressed) => {
        if(!document.querySelector('.rules').classList.contains('hidden'))
            return;
        if(keypressed==='BACKSPACE') {
            if(inputCell[0]<rows && inputCell[1]>0 && inputCell[1]<=columns) {
                const element = document.getElementById(`${inputCell[0]}_${inputCell[1]-1}`);
                element.classList.toggle('typing');
                element.innerHTML = '';
                element.addEventListener('animationend',() => {
                    element.classList.toggle('typing');
                }, { once: true });
                setInputCell(prevInputCell => [prevInputCell[0],prevInputCell[1]-1]);
            }
        }
        else if(keypressed==='ENTER') {
            if(inputCell[0]<rows && inputCell[1]==columns) {
                let guess = '';
                for(let i=0;i<5;i++) {
                    guess+=(document.getElementById(`${inputCell[0]}_${i}`).innerHTML);
                }

                console.log('Word: '+word+' Guess: '+guess);
                checkValidWord(guess).then(response => {
                    if(response === null)
                        console.log('Error Occurred');
                    else if (response.ok) {
                        let count = 0;
                        for(let i=0;i<5;i++) {
                            let change = 0;
                            const element = document.getElementById(`${inputCell[0]}_${i}`);
                            element.style.animationDelay = `${i*700}ms`;
                            element.classList.toggle('submit');
                            if(word.includes(guess[i])) {
                                if(word.indexOf(guess[i])===i) {
                                    element.style.setProperty('--bgcolor','seagreen');
                                    count++;
                                }
                                else {
                                    element.style.setProperty('--bgcolor','orange');
                                }
                            }
                            else {
                                element.style.setProperty('--bgcolor','grey');
                                change = 1;
                            }
                            element.addEventListener('animationend', () => {
                                if(change)
                                    document.querySelector(`.keyboard-layout .${guess[i]}`).style.backgroundColor = 'grey';
                            }, {once: true});
                        }
                        if(count === 5) {
                            document.getElementById(`${inputCell[0]}_${4}`).addEventListener('animationend',() => {
                                document.querySelector('.final-popup').style.borderColor = 'yellowgreen';
                                document.querySelector('.final-popup').classList.toggle('hidden');
                                document.querySelector('.final-popup-heading').innerHTML = 'Congratulations';
                                document.querySelector('.final-popup-subheading').innerHTML = `The Correct Word is ${word} <br/> You have guessed it right in ${inputCell[0]+1} attempt(s) <br> Time Taken - ${document.querySelector('#timer-display').innerHTML}`;
                            }, { once: true });
                            setInputCell([6,5]);
                            return;
                        }
                        else if(inputCell[0] === 5) {
                            document.querySelector('.final-popup').style.borderColor = 'red';
                            document.querySelector('.final-popup-heading').innerHTML = 'Game Over';
                            document.querySelector('.final-popup-subheading').innerHTML = `The Correct Word was ${word} <br/> You don't have any more attempts left <br/> Better Luck Next Time`;
                            document.getElementById(`${inputCell[0]}_${4}`).addEventListener('animationend',() => {
                                document.querySelector('.final-popup').classList.toggle('hidden');
                            }, { once: true });
                            setInputCell([6,5]);
                            return;
                        }
                        setInputCell(prevInputCell => [prevInputCell[0]+1,0]);
                    }
                    else {
                        console.log('Invalid');
                        for(let i=0;i<5;i++) {
                            const element = document.getElementById(`${inputCell[0]}_${i}`);
                            element.classList.toggle('invalid');
                            element.addEventListener('animationend', () => {
                                element.classList.toggle('invalid');
                            }, {once: true});
                        }
                    }
                });
            }
        }
        else if(inputCell[0]<rows && inputCell[1]<columns && /^[A-Z]$/.test(keypressed)) {
                const element = document.getElementById(`${inputCell[0]}_${inputCell[1]}`);
                element.classList.toggle('typing');
                element.innerHTML = keypressed;
                element.addEventListener('animationend',() => {
                    element.classList.toggle('typing');
                }, { once: true });
                setInputCell(prevInputCell => [prevInputCell[0],prevInputCell[1]+1]);
        }
    }

    const handleKeyDown = (e) => {
        if(e.repeat)
            return;
        const keypressed = e.key.toUpperCase();
        registerKey(keypressed);
    }

    const timeup = () => {
        document.querySelector('.final-popup').style.borderColor = 'red';
        document.querySelector('.final-popup-heading').innerHTML = 'Time Up';
        document.querySelector('.final-popup-subheading').innerHTML = `The Correct Word was ${word} <br/> Time limit of 10 minutes exceeded <br/> Better Luck Next Time`;
        document.querySelector('.final-popup').classList.toggle('hidden');
    }

    const checkValidWord = async w => {
        try {
            const response = await fetch(url+w);
            return response;
        } catch (error) {
            console.log(error.message);
            return null;
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.querySelector('.timer').addEventListener('animationend',timeup, {once:true});

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    },[handleKeyDown]);

    return <>
    <div className='grid'>
        {
            Array.from({length: rows}, (_,i) => {
                return Array.from({length: columns}, (_,j) => {
                    return <div className='cell' key={`${i}_${j}`} id={`${i}_${j}`}></div>;
                })
            })
        }
    </div>
    <Keyboard registerKey={registerKey} />
    </>;
}

export default GuessGrid;