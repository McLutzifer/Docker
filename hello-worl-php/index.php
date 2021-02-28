<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello world</title>
</head>
<body>
    <h1>Hello world: apache / php</h1>
    <?php
        $load = sys_getloadavg();
    ?>
    Serverzeit: <?php echo date("c"); ?> <br />
    Serverauslastung (load): <?php echo $load[0]; ?>
</body>
</html>