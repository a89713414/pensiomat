
import React, { useEffect, useState } from 'react'
import "./Search.css"



const Search = ({ placeHolder }) => {

    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setInputValue(placeHolder[placeholderIndex].substring(0, i));
            i++;
            if (i > placeHolder[placeholderIndex].length) {
                clearInterval(interval);
                // Move to the next placeholder after a brief delay
                setTimeout(() => {
                    setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeHolder.length);
                }, 500);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [placeHolder, placeholderIndex]);


    return (
        <div className="bbbootstrap">
            <input
                type="text"
                id="Form_Search"
                role="searchbox"
                value={inputValue}
                readOnly
                className="InputBox"
            />
            {/* <button id="Form_Go" className="Button" disabled>
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path fillRule="evenodd" clipRule="evenodd" d="M11 5C7.68629 5 5 7.68629 5 11C5 14.3137 7.68629 17 11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5ZM3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 12.8487 18.3729 14.551 17.3199 15.9056L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L15.9056 17.3199C14.551 18.3729 12.8487 19 11 19C6.58172 19 3 15.4183 3 11Z" fill="#ffffff"></path>
                    </g>
                </svg>
            </button> */}
        </div>
    )
}

export default Search
