export class Game {
    private basket: number[] = []; 
    private per_book_price = 8;
    buy(episode: number[]){
        for(let i = 0; i < 5; i++){
            this.basket[i] = episode[i];
        }
    }

    get price(){
        let score = 0;
        let split_basket = [];
        let sub_basket_count = 0;
        split_basket = this.SplitBasket(this.basket);
        for(let which_basket = 0; which_basket < split_basket.length; which_basket++){
            sub_basket_count = this.SumBasket(split_basket[which_basket])
            score += sub_basket_count * this.WhichDiscount(sub_basket_count) * this.per_book_price;
        }
        
        return score;
    }

    private SumBasket(basket: number[]){
        let sum = 0
        for(let i = 0; i < 5; i++){
            if(basket[i] === 1){
                sum++;
            }
        }
        return sum;
    }

    private SplitBasket(basket : number[]){
        let total_sub_basket = [];
        let sub_basket = [];
        for(let i = 0; i < 5; i++){
            if(basket[i] > 1){
                sub_basket.push(1);
                basket[i]-=1;
            }
        }
        total_sub_basket.push(sub_basket);
        total_sub_basket.push(basket);
        return total_sub_basket;
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
