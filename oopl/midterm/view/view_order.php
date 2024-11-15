<?php
session_start();
include_once ('classes/cart.php');
$cartController = new CartController();
$cart = $cartController->getCart();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Cart</title>
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h2>Your Cart</h2>
        <table class="table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <?php $total = 0; ?>
                <?php foreach ($cart as $item): ?>
                    <tr>
                        <td><?= $item['product']['name'] ?></td>
                        <td><?= $item['quantity'] ?></td>
                        <td>$<?= number_format($item['product']['price'], 2) ?></td>
                        <td>$<?= number_format($item['product']['price'] * $item['quantity'], 2) ?></td>
                    </tr>
                    <?php $total += $item['product']['price'] * $item['quantity']; ?>
                <?php endforeach; ?>
            </tbody>
        </table>
        <h3>Total: $<?= number_format($total, 2) ?></h3>
        <a href="checkout.php" class="btn btn-success">Proceed to Checkout</a>
    </div>

    <script src="assets/js/bootstrap.bundle.min.js"></script>
</body>
</html>
