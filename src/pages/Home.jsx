import styled from "styled-components";
import TunesTableLogo from "../assets/TunesTable-Logo.png";

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    width: 100%;
`

const StyledImage = styled.img`
    transform: scale(0.9);
    max-width: 100%;
    height: auto;
    border-radius: 8px;
`

function Home() {
    return (
        <>
        <ImageContainer>
            <StyledImage src={TunesTableLogo} alt="TunesTable Logo" />
        </ImageContainer>
        <h1>TunesTable - music game/quiz api</h1>
        <p>Vores ide er at lave en musik API med brug af Spotify's web API for developers. Vores API kan holde kunstnere og albummer med tilhørende numre. Intentionen med vores API er det ville kunne blive brugt af os selv eller andre til at kreere en hjemmeside eller blot et program, hvilket vil kunne bruge information om de kunstnere, album og sange til at skabe en form for musik-quiz spil eller lignende. </p>     
        <br />
        <h2>Link to the deployed api:</h2>
        <a href="https://tunestable.api.uhyggelig-hygge.dk/api/routes">API Link</a>  
        <br />
        <br />
        <h2>Link to the Github repository for the API:</h2>
        <a href="https://github.com/FartFace500/SP2TunesTable">Github Link</a> 
        </>
    );
}

export default Home;