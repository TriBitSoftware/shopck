<?php

$manager = new MongoDB\Driver\Manager("mongodb+srv://tribit_proxy_user:uM3JLpGJr58GeVf@cluster0.j6oly.mongodb.net/test?authSource=admin&replicaSet=atlas-115czw-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true");

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="./style.css">
    </link>
</head>
<?php

if (isset($_POST['submission_id'])) {


    $bulk = new MongoDB\Driver\BulkWrite;

    $document = ['contactName' => $_POST['contactname'], 'contactEmail' => $_POST['contactemail'], 'contactPhone' => $_POST['contactphone'], 'businessName' => $_POST['businessname'], 'businessPhone' => $_POST['businessphone'], 'businessPhysicalAddress' => $_POST['businessphysical'], 'businessEmail' => $_POST['businessemail'], 'businessWebsite' => $_POST['businesswebsite'], 'facebook' => $_POST['facebook'], 'twitter' => $_POST['twitter'], 'instagram' => $_POST['instagram'], 'youtube' => $_POST['youtube'], 'linkedin' => $_POST['linkedin'], 'businessCategory' => $_POST['businesscategory'], 'businessDescription' => $_POST['businessdescription'], 'additionalComment' => $_POST['anyadditionalcomment'], 'businessImages' => $_POST['uploadany']];

    $bulk->insert($document);
    $result = $manager->executeBulkWrite('test.user', $bulk);

    echo "<h1>DATA INSERTED SUCCESSFULLY</h1>";
}
?>

<body>
    <div class="shopck-banner">
        <div class="banner-logo-container">
            <img alt="" src="./images/Logo.png">
        </div>
        <div>
            <h2 class="banner-title">ShopCK is coming soon!</h2>
            <h6 class="banner-description">Providing a directory to discover and support local businesses.</h6>
        </div>
        <a style="text-decoration: none;" href="#form-container">
            <div class="banner-btn-container">
                <button class="banner-btn">Register now</button>
            </div>
        </a>
        <div class="instagram-link"><a target="_blank" href="https://www.instagram.com/k_wicksy/"><i style="color: white; margin-right:6px" class="fa fa-camera"></i>@k_wicksy</a></div>
    </div>
    <div id="form-container">
        <script type=" text/javascript" src="https://form.jotform.com/jsform/211297864375264"></script>
    </div>
    <div class="shopck-footer">
        <a target="_blank" class="powerd-by-section" href="https://www.tribitsoftware.ca/">

            <h6>Powered by Tribit Software</h6>
            <div class="avatar">
                <img src="./images/Tribit.png">
            </div>

        </a>
        <p class="copyright">@Copyright 2021 ShopCK</p>
    </div>
    <?php

    ?>
</body>

</html>