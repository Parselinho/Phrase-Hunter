class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            {phrase: 'Chuku Luku'}, {phrase: 'JavaScript'}, {phrase: 'Front-Backend'}, {phrase: 'Israel'}, {phrase: 'Jerusalem'}
        ];
        this.activePhrase = null;
    }
    
    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

}
