// import the hooks we need to accomplish our logic!
import axios from "axios";
import { useState, useEffect } from "react";
import Gallery from "./Gallery";

const ArtWall = () => {

    console.log('Artwall has rendered!')

    // initialize a state to keep track of whether the Gallery is visible or not
    const [ isGalleryVisible, setIsGalleryVisible ] = useState(false)

    // initialize a state for the APO from Rijksmuseum (AKA our beautiful art to be displayed!)
    const [ art, setArt ] = useState([]);



    // call the Rijksmuseum API once the component has been mounted to the DOM
        // AKA run a side effect
    useEffect( () => {

        // THIS IS WHERE YOU DEFINE WHAT THE SIDE EFFECT IS AND HOW IT WILL RUN
        console.log('side effect is running');

        // using axios let's make a request to our API
        axios({
            url: 'https://www.rijksmuseum.nl/api/en/collection',
            // add our URL parameters through this object
            params: {
                imgonly: true,
                key: 'Vrisv7yy',
                toppieces: true
                // Vrisv7yy
            }
        }).then( (art) => {
            
            // once the data is returned from the API, let's save it within state! 
                // use dot notation to ONLY save the array of art objects within state
            setArt(art.data.artObjects);

        } )
    
    // if you only wish to run a side effect ONCE upon the component's intial mount to the DOM, use an EMPTY dependency array

    }, [] )

    // define an event handler which updates the isGalleryVisible state to be the opposite boolean value
    const handleClick = () => {
        setIsGalleryVisible(!isGalleryVisible);
    }

    return (
        <section>
            <h2>
                {
                    isGalleryVisible
                        ? ``
                        : `Want to see some art?`
                }
            </h2>

            <button onClick={handleClick}>
                {
                    isGalleryVisible
                        ? `I've seen enough of this art! Pls hide it`
                        : `Click here for art!`
                }
            </button>

            {/* Only show the Gallery component if the isGalleryVisible state is true */}

            {
                // pass the array of art that lives within the art state variable from this component down to the Gallery component
                isGalleryVisible
                ? <Gallery arrayOfArt={art} />
                : null
            }
        </section>
    )
}

export default ArtWall;