import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({category, title}) => {
    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0});

    useLayoutEffect(() =>{
        const {width, height} = pRef.current.getBoundingClientRect();
        setBoxSize({width, height});
    }, [Quote]);

    return (
        <>
        <blockquote className="blockquote text-end" style={{display: 'flex'}}>
            <p className="mb-1" ref={pRef}>{category}</p>
            <footer className="blockquote-footer">{title}</footer>
        </blockquote>
        <code>{JSON.stringify(boxSize)}</code>
        </>
        
    )
}