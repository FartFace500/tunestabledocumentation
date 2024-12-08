function Vision() {
    return (
        <>
        <h1>Vision for the API</h1>
        <p>Vores vision for API'et, ud over at kunne holde data til eventuelt brug i en quiz, var at kunne benytte Spotify til at fylde en json-fil med albummer, artister og sange, som vi så kan benytte til at populerer vores egen database. </p>
        <br />
        <p>På sigt ville vi også gerne have inkluderet en form for search funktion med brug af sange, hvor vi ville benytte unikke IDs så en sang netop kunne bruges til identificere album og hvis artisten havde flere albummer, så også hvilket det var. Dette er også grunden til at songSearchId indgår i vores data når man fx henter alle albummer eller sange. Dog er dette ikke implementeret korrekt endnu.</p>
        <br />
        </>
    );
}

export default Vision;