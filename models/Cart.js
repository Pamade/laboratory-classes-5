const Product = require("./Product.js")

class Cart{
    static #items = []

    static add(productName){
        const product = Product.findByName(productName)

        if (!product) return null
        const itemExists = this.getItems().find(item => item.product.name === product.name)

        if (!itemExists) {
            this.#items.push({product, quantity:1})
        } else itemExists.quantity += 1
                
        
    }

    static getTotalPrice(){
        return this.#items.reduce((acc, item) => {
            return acc + item.quantity * item.product.price
        }, 0)
    }

    static getProductsQuantity(){
        let allItems = 0;
        this.#items.forEach((item) => allItems += item.quantity)
        return allItems;
    }

    static getItems(){
        return this.#items;
    }

    static clearCart() {
        this.#items = [];
      }

}

module.exports = Cart;
