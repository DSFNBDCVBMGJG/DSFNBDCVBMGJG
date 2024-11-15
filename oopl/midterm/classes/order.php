<?php

class CartController {
    private $cart;

    public function __construct() {
        if (!isset($_SESSION['cart'])) {
            $_SESSION['cart'] = [];
        }
        $this->cart = &$_SESSION['cart'];
    }

    public function addToCart($productId, $quantity) {
        if (isset($this->cart[$productId])) {
            $this->cart[$productId]['quantity'] += $quantity;
        } else {
            $this->cart[$productId] = [
                'quantity' => $quantity,
                'product' =>  $productId::getProductById($productId)
            ];
        }
    }

    public function getCart() {
        return $this->cart;
    }

    public function clearCart() {
        unset($this->cart);
        $_SESSION['cart'] = [];
    }
}
?>