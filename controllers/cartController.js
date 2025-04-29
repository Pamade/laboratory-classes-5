const Product = require("../models/Product.js")
const Cart = require("../models/Cart.js")
const {STATUS_CODE} = require("../constants/statusCode.js")

exports.addProductToCart = (request, response) => {
    const productData = request.body
    Product.add(new Product(productData.name, productData.description, productData.price));

    Cart.add(productData.name);
    response.status(STATUS_CODE.FOUND).redirect("/products/new");

}

exports.getProductsCount = (request, response) => {
    const count = Cart.getProductsQuantity();

    response.status(STATUS_CODE.OK).json({ count });
}