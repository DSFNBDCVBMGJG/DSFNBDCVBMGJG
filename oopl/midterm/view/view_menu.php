<?php
session_start();
include('connection.php'); 

try {
    $stmt = $connection->prepare("SELECT * FROM menu_items");
    $stmt->execute();
    $menu_items = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    echo "Error fetching menu items: " . $e->getMessage();
    exit(); 
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .menu-item {
            border: 1px solid #ccc;
            border-radius: 5px;
            margin: 10px;
            padding: 10px;
            display: inline-block;
            width: 200px;
            vertical-align: top;
        }
        .menu-item img {
            max-width: 100%;
            border-radius: 5px;
        }
        .category-title {
            font-weight: bold;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h2>Menu</h2>
    <div class="menu">
        <?php
        // Group items by category
        $categories = [];
        foreach ($menu_items as $item) {
            $categories[$item['category']][] = $item;
        }

        // Display items by category
        foreach ($categories as $category => $items): ?>
            <div class="category-title"><?php echo htmlspecialchars($category); ?></div>
            <?php foreach ($items as $item): ?>
                <div class="menu-item">
                    <h3><?php echo htmlspecialchars($item['name']); ?></h3>
                    <p><?php echo htmlspecialchars($item['description']); ?></p>
                    <p>Price: $<?php echo number_format($item['price'], 2); ?></p>
                    <button>Add to Cart</button> <!-- You can implement the cart functionality later -->
                </div>
            <?php endforeach; ?>
        <?php endforeach; ?>
    </div>
</body>
</html>