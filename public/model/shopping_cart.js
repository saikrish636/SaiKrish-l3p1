export class ShoppingCart {
    constructor(uid) {
        this.uid = uid;
        this.items = []; // array of Product class objects
    }

    addItem(product){
        const index = this.items.findIndex(e => product.docId == e.docId);
        if(index<0){
            //product.qty = 1;
            //this.items.push(product);
            const newItem = product.clone();
            newItem.qty = 1;
            this.items.push(newItem);
        } else {
            this.items[index].qty++;
        }
    }

    removeItem(product){
        //doc qty, or remove the product if qty == 0
        const index = this.items.findIndex(e => product.docId == e.docId);
        if(index >= 0){
            --this.items[index].qty;
            if(this.items[index].qty == 0){
                this.items.splice(index, 1);
            }
        }
    }

    getTotalQty(){
        let n = 0;
        this.items.forEach(p => n+= p.qty);
        return n;
    }

    getTotalPrice(){
        let total = 0;
        this.items.forEach(p=> total += p.price * p.qty);
        return total;
    }

    clear(){
        this.items.length = 0;
    }
}