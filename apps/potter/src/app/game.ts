export class Game {
    private basket: number[] = []; 
    private per_book_price = 8;
    
    buy(episode: number[]){
        for(let i = 0; i < 5; i++){
            this.basket[i] = episode[i];
        }
    }

    get price(){
        let price = 0;
        let split_basket = [];
        let sub_basket_price = 0;
        split_basket = this.SplitBasket(this.basket);
        for(let which_basket = 0; which_basket < split_basket.length; which_basket++){
            sub_basket_price = this.HowManyBooksinBasket(split_basket[which_basket]);
            price += sub_basket_price * this.ChooseWhichDiscount(sub_basket_price);
        }
        
        return price * this.per_book_price;
    }

    private HowManyBooksinBasket(basket: number[]){
        let sum = 0
        for(let i = 0; i < 5; i++){
            if(basket[i] > 0){
                sum++;
            }
        }
        return sum;
    }

    private SplitBasket(basket : number[]){
        let total_sub_basket = [];
        while(this.HowManyBooksinBasket(basket) != 0){
            let sub_basket = [0,0,0,0,0];
            for(let i = 0; i < 5; i++){
                if(basket[i] > 0){
                    sub_basket[i] = 1;
                    basket[i]-=1;
                }
            }
            if (this.IsSpecialcase(sub_basket, basket)){
                for(let i = 0; i < 5; i++){
                    if(basket[i] === 0 && sub_basket[i] != 0){
                        sub_basket[i] = 0;
                        basket[i] = 1;
                        break;
                    }
                }
                total_sub_basket.push(sub_basket);
                total_sub_basket.push(basket);
                break;
            }else{
                total_sub_basket.push(sub_basket);
            }
        }
        return total_sub_basket;
    }

    private IsSpecialcase(first_basket: number[], second_basket: number[]){
        return (this.HowManyBooksinBasket(first_basket) === 5 && this.HowManyBooksinBasket(second_basket) === 3);
    }

    private ChooseWhichDiscount(bookcount: number){
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
