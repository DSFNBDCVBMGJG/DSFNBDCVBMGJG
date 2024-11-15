<?php


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/bootstrap.css">
</head>
<body>
    <div class="container-fluid p-5">
        <h1>This is my restaurant</h1>
        <button onclick="view_menu()" class="btn btn-primary">View menu</button>
        <button onclick="view_order()" class="btn btn-info">View order</button>
    </div>


    <script>
            function view_menu(){
            window.location = 'view/view_menu.php'; // Change this path to your actual menu page
        }
        function view_order(){
            window.location = 'view/view_order.php';
        }
    </script>
</body>
</html>