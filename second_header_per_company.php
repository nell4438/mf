<?php $current_page = basename($_SERVER['SCRIPT_NAME']);
switch ($current_page) {
    case 'm7movers.php':
        $title = 'M7 MOVERS WAREHOUSE AND GENERAL SERVICES, INC.';
        $path = './images/m7 group of companies logo/M7 MOVERS/M7 MOVERS-02.png';
        break;
    case 'm7orion.php':
        $title = 'M7 ORION ENERGY TRADING AND GENERAL SERVICES, INC.';
        $path = './images/m7 group of companies logo/M7 ORION/M7 ORION-02.png';
        break;
}
?>
<h1 class="border-bottom"><?= $title ?></h1>
<div class="container px-4 py-5" id="featured-3">
    <div class="row g-4 py-5 justify-content-center">
        <div class="col-lg-auto">
            <img src="<?= $path ?>" height="250px" width="250px" style="object-fit: cover;">
        </div>

    </div>
</div>