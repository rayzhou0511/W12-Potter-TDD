export class Game {
    private basket: number[] = []; 

    buy(episode: number[]){
        for(let i = 0; i < 5; i++){
            this.basket[i] = episode[i];
        }
    }

    get price(){
        let score = 0;
        for(let epi = 0; epi < 5; epi++){
            score += this.basket[epi] * 8
        }
        return score;
    }

}
