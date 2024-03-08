import TypingEffect from "./TypingEffect";

function Note() {
    return(
        <div className="App-header">
        <TypingEffect 
            text={"Pęędząc przez życie\n z milionem myśli przechodzących\n bez przerwy przez moją głowę jest jedna,\n  która daje mi codziennie spokój i\n maluje uśmiech na twarzy.\n \0\n To myśl o tym, że spotkałem w swoim życiu\n osobę o tak pięknym, ciepłym sercu.\n \0\n Osobę, która swoim uśmiechem, będącym jak\n promień słońca w deszczowy dzień, rozświetla\n każdą ciemną uliczkę, smutek zamienia w radość,\n koszmar w błogi sen, sztorm w łagodne fale.\n \0\n Osobę, dla której chcę być aniołem stróżem,\n otaczającym ją miłością, opieką i dbającym o jej\n spokój oraz szczęście każdego pojedynczego dnia. \n \0\n Sandra, pragnę topić się \nw Twoim nieskończonym spojrzeniu,\n które jest jak gwiazdy na nocnym niebie \ndo końca świata i czasu.\n \0\n Kocham Cię, Twój Max❤️"} 
            typingSpeed={50}/>
        </div>
    );
}

export default Note;