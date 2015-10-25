<?php

// put full path to Smarty.class.php
require('includes/classes/smarty/libs/Smarty.class.php');
require('includes/classes/users.class');
$smarty = new Smarty();

$smarty->setTemplateDir('../templates/smarty/templates');
$smarty->setCompileDir('../templates/smarty/templates_c');
$smarty->setCacheDir('../templates/smarty/cache');
$smarty->setConfigDir('../templates/smarty/configs');

?>