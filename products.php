<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="./css/bootstrap.min.css" rel="stylesheet">
    <!-- <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" rel="stylesheet"> -->
    <link href="./plugins/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="./css/styles.css" rel="stylesheet">
    <style>
        .d-flex {
            display: flex;
        }

        .flex-item {
            flex: 1;
            display: flex;
            align-items: center;
        }

        .flex-item img {
            max-width: 100%;
            height: auto;
        }

        .image-container {
            width: 100%;
            /* height: ; */
            padding-top: 75%;
            position: relative;
            overflow: hidden;
            border: 2px solid #ccc;
            /* Add border here */
        }

        .image-container img {
            position: absolute;
            top: 50%;
            /* Center vertically */
            left: 50%;
            /* Center horizontally */
            transform: translate(-50%, -50%);
            /* Adjust positioning */
            width: 100%;
            /* Ensure full width */
            height: 100%;
            /* Ensure full height */
            object-fit: contain;
            /* Change to contain for better responsiveness */
            display: block;
        }
    </style>
    <title>M7 Technology</title>
</head>
<!-- header -->
<?php include_once ('header.php') ?>
<!-- group of company -->
<?php include_once ('second_header.php') ?>
<!-- our principals -->
<!-- dicing -->
<h1 class="border-bottom">DICING CONSUMABLES</h1>
<div id="dicing_product" class="container my-5"></div>
<!-- footer -->
<?php include_once ('footer.php') ?>

<body>
    <script src="./js/product_dicing.js"></script>
    <script src="./js/bootsrap.bundle.min.js"></script>
</body>

</html>