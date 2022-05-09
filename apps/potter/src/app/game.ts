export class Game {
    private books: number[] = [0,0,0,0,0]; 

    buy(episode: number, num: number){
        this.books[episode] = num;
    }

    get price(){
        let score = 0;
        for(let epi = 0; epi < 5; epi++){
            score += this.books[epi] * 8
        }
        return score;
    }

}
