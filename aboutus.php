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

    <title>M7 Technology</title>
</head>
<!-- header -->
<?php include_once './header.php' ?>
<!-- group of company -->
<?php include_once ('second_header.php') ?>
<section id="about" class="full-screen">
    <h1 class="border-bottom">ABOUT OUR COMPANY</h1>
    <div class="content">
        <p>M7 Technology Solutions Inc. started in 2012 at Alabang, Muntinlupa, Philippines. It is a company that
            focuses on the growth of its employees and its customers. We strive to provide opportunities to grow and
            focus all our actions within the context of seven Filipino values of being honorable, humane, faithful,
            trustworthy, steadfast, resourceful, and skillful.
            We provide solutions for businesses across various industries such as semiconductors, electronics,
            healthcare, and telecommunications. Today, M7 continues to carry out, set and maintain a lasting positive
            impact throughout our projects.</p>
    </div>
</section>
<!-- mission and vision -->
<section id="mission-vision" class="full-screen">
    <h1 class="border-bottom">MISSION AND VISION</h1>
    <div class="content">
        <h3>Mission</h3>
        <ul>
            <li>To continuously exceed our customers' ever- growing expectations, we will dedicate ourselves in the
                pursuit
                of
                incessant personal and systems improvement.
            </li>
            <li>
                To actively maintain a capable and dedicated pool of employees, employee well-being will be at the
                forefront
                of
                our key plans and programs.
            </li>

            <li>
                To generate sustainable growth and optimal returns, we will exercise prudence in all our resource
                management
                activities.
            </li>
            <li>
                To progressively care for the society and the environment, a vibrant and dynamic corporate social
                responsibility
                program will be collectively undertaken by all members of the company
            </li>
        </ul>
        <h3>VISION</h3>
        <ul>
            <li>Within the next five (5) years, we envision M7 Technology Solutions Inc. to be a first-rate industrial
                trading
                partner of key principals servicing the Philippine semiconductor, electronics and other market industry.
            </li>
            <li>We aspire that working together as a team, we will build a company where great results are achieved
                beyond
                our
                exceptional individual capabilities. This we will accomplish by focusing all our actions within the
                context
                of
                the seven (7) Filipino values of being: honourable(marangal), humane (makatao), faithful, (matapat),
                trustworthy
                (mapagkakatiwalaan), steadfast (matatag), resourceful (maparaan), and skillful (mahusay).</li>
        </ul>
    </div>
</section>
<!-- footer -->

<?php include_once './footer.php' ?>

<body>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            var urlParams = new URLSearchParams(window.location.search);
            var page = urlParams.get('page');
            if (page === 'company') {
                document.querySelector('.border-bottom').click();
            } else if (page === 'vision') {
                document.querySelector('#mission-vision .border-bottom').click();
            }
        });
    </script>
    <script src="./js/bootsrap.bundle.min.js"></script>
</body>

</html>