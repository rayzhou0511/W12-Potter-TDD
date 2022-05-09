export class Game {
    private basket: number[] = []; 
    private book_price = 8;
    buy(episode: number[]){
        for(let i = 0; i < 5; i++){
            this.basket[i] = episode[i];
        }
    }

    get price(){
        let score = 0;
        let bookcount = 0;
        for(let epi = 0; epi < 5; epi++){
            bookcount += this.basket[epi];
        }
        score = bookcount * this.WhichDiscount(bookcount) * this.book_price;
        return score;
    }

    private WhichDiscount(bookcount: number){
        if(bookcount === 1){
            return 1;
        }
        else if(bookcount === 2){
            return 0.95;
        }
        else if(bookcount === 3){
            return 0.9;
        }
        else if(bookcount === 4){
            return 0.8;
        }
        else if(bookcount === 5){
            return 0.75;
        }
        else{
            return 0;
        }
    }

}
