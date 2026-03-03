const Cart = require("../models/Cart");
const Product = require("../models/Product");

// Add to Cart
exports.addToCart = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }

    const cartItem = await Cart.create({
      user: req.user._id,
      product: productId,
      quantity
    });

    res.status(201).json(cartItem);
  } catch (error) {
    next(error);
  }
};

// Update Cart Item
exports.updateCartItem = async (req, res, next) => {
  try {
    const cartItem = await Cart.findById(req.params.id);

    if (!cartItem) {
      res.status(404);
      throw new Error("Cart item not found");
    }

    cartItem.quantity = req.body.quantity;
    await cartItem.save();

    res.status(200).json(cartItem);
  } catch (error) {
    next(error);
  }
};

// Delete Cart Item
exports.deleteCartItem = async (req, res, next) => {
  try {
    const cartItem = await Cart.findById(req.params.id);

    if (!cartItem) {
      res.status(404);
      throw new Error("Cart item not found");
    }

    await cartItem.deleteOne();

    res.status(200).json({ message: "Item removed from cart" });
  } catch (error) {
    next(error);
  }
};