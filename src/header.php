<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>치카치카 | 성수동 디저트샵</title>
    <?php
        $domain = 'http://localhost:10000/';
        $frontUrl = $domain . 'frontend/';
        $srcUrl = $frontUrl . 'src/';
        $compUrl = $srcUrl . 'components/';
    ?>
    <script>
        const URLs = {
            domain: '<? echo $domain; ?>',
            frontUrl: '<? echo $frontUrl; ?>',
            srcUrl: '<? echo $srcUrl; ?>',
            compUrl: '<? echo $compUrl; ?>'
        }
        // var domain = "<? echo $domain; ?>";
        // var frontUrl = "<? echo $frontUrl; ?>";
        // var srcUrl = "<? echo $srcUrl; ?>";
        // var compUrl = "<? echo $compUrl; ?>";
    </script>
    <script src="<?php echo $srcUrl; ?>js/graphql.js"></script>
    <script src="<?php echo $srcUrl; ?>js/script.js"></script>
    <script src="<?php echo $srcUrl; ?>js/load.js"></script>
    <link rel="stylesheet" href="<?php echo $srcUrl; ?>css/style.css">
</head>

<body class="">