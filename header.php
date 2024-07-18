<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .dropdown:hover .dropdown-menu {
            display: block;
        }

        .headerimageset {
            font-family: Arial, sans-serif;
            font-size: 36px;
            /* Larger base size for the main text */
            font-weight: bold;
            color: #000;
            text-align: center;
            /* Center the text */
        }

        .headerimageset span {
            display: block;
            font-size: 20px;
            /* Larger base size for the subtext */
            font-weight: normal;
            color: #7b7b7b;
            /* Blue color as in the image for the subtext */
        }

        /* Responsive design for smaller screens */
        @media (max-width: 768px) {
            .headerimageset {
                font-size: 24px;
            }

            .headerimageset span {
                font-size: 16px;
            }
        }

        @media (max-width: 480px) {
            .headerimageset {
                font-size: 20px;
            }

            .headerimageset span {
                font-size: 14px;
            }
        }
    </style>
</head>

<body>
    <div class="header clear">
        <header class="header clear" role="banner">
            <div class="header-wrapper">
                <div class="headerheader">
                    <div class="header-logo">
                        <a href="./" style="">
                            <img src="./images/m7 group of companies logo/M7 TECHNOLOGY/M7 TECH LOGO-02.png"
                                alt="logo-blue-ribbon.png">
                        </a>
                    </div>
                    <div class="header-banner">
                        <a href="./" style="text-decoration: none;">
                            <div class="headerimageset">
                                M7 Technology Solutions, Inc.
                                <span>Innovative Solutions, Excellence in Service</span>
                            </div>
                        </a>

                        <!-- Old image code commented out -->
                        <!-- <a href="./"> <img src="images/school-name-1.png" alt="school-name-1.png" style="max-width:150%" class="headerimageset"> </a> -->
                    </div>
                </div>
                <div class="headerheadersocial">
                    <div class="header-social">
                        <div class="media-links">
                            <a href="contact-us.php"><span class="circle-icon"><i class="fa fa-phone"></i></span></a>
                            <a href="https://maps.app.goo.gl/B12GhSqrg9T8xtew7" target="_blank"><span
                                    class="circle-icon"><i class="fa fa-map-marker"></i></span></a>
                            <span class="circle-icon"><i class="fa fa-instagram"></i></span>
                            <a href="https://www.facebook.com/cambridgepcis" target="_blank"><span
                                    class="circle-icon"><i class="fa fa-facebook"></i></span></a>
                        </div>
                        <div class="contact-info">
                            <form id="subscribeForm" class="subscribe-form" style="position: relative;">
                                <div class="custom-search">
                                    <input type="email" id="emailInput" name="emailInput" class="custom-search-input"
                                        placeholder="Send us your inquiry" required="">
                                    <button class="custom-search-botton" type="submit"><i class="fa fa-paper-plane"
                                            style="color:#000"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>

    <!-- 2nd header banner -->
    <header style="background-color:#051094">
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="navbar-nav w-100 d-flex justify-content-around">
                    <?php $current_page = basename($_SERVER['SCRIPT_NAME']); ?>
                    <a class="nav-item nav-link <?php echo $current_page == 'index.php' ? 'active' : ''; ?>"
                        href="index.php">HOME</a>
                    <!-- <a class="nav-item nav-link <?php echo $current_page == 'aboutus.php' ? 'active' : ''; ?>"
                        href="./aboutus.php">ABOUT US</a> -->
                    <div class="dropdown">
                        <a class="dropdown-toggle nav-item nav-link <?php echo $current_page == 'aboutus.php' ? 'active' : ''; ?>"
                            href="aboutus.php" id="dropdownMenuButton" role="button" 
                            aria-expanded="false">
                            ABOUT US
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a class="dropdown-item" href="aboutus.php#about">ABOUT OUR COMPANY</a></li>
                            <li><a class="dropdown-item" href="aboutus.php#mission-vision">MISSION AND VISION</a></li>
                        </ul>
                    </div>

                    <div class="dropdown">
                        <a class="dropdown-toggle nav-item nav-link <?php echo $current_page == 'm7technology.php' ? 'active' : ''; ?>"
                            href="m7technology.php" id="dropdownMenuButton" role="button" 
                            aria-expanded="false">
                            M7 TECHNOLOGY
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a class="dropdown-item" href="m7technology.php#semicon">SEMICON & ELECTRONICS</a></li>
                            <li><a class="dropdown-item" href="m7technology.php#healthcare">HEALTHCARE</a></li>
                        </ul>
                    </div>
                    <!-- <a class="nav-item nav-link <?php echo $current_page == 'm7technology.php' ? 'active' : ''; ?>"
                        href="./m7technology.php">M7 TECHNOLOGY</a> -->
                    <a class="nav-item nav-link <?php echo $current_page == 'm7movers.php' ? 'active' : ''; ?>"
                        href="./m7movers.php">M7 MOVERS</a>
                    <a class="nav-item nav-link <?php echo $current_page == 'm7builders.php' ? 'active' : ''; ?>"
                        href="./m7builders.php">M7 BUILDERS</a>
                    <a class="nav-item nav-link <?php echo $current_page == 'm7orion.php' ? 'active' : ''; ?>"
                        href="./m7orion.php">M7 ORION</a>
                    <a class="nav-item nav-link <?php echo $current_page == 'm7pcis.php' ? 'active' : ''; ?>"
                        href="./m7pcis.php">M7 PCIS</a>
                    <a class="nav-item nav-link <?php echo $current_page == 'products.php' ? 'active' : ''; ?>"
                        href="./products.php">PRODUCTS</a>
                    <a class="nav-item nav-link <?php echo $current_page == 'contactus.php' ? 'active' : ''; ?>"
                        href="./contactus.php">CONTACT US</a>
                </div>
            </nav>
        </div>
    </header>
</body>

</html>