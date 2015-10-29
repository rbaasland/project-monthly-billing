<?php

// put full path to Smarty.class.php
require_once('config.inc');
require_once('classes/smarty/libs/Smarty.class.php');
require_once('classes/users.class');
require_once('classes/login.class');
$_smarty = new Smarty();
$_login  = new Login();

$_smarty->setTemplateDir(TEMPLATES_DIR . 'smarty/templates');
$_smarty->setCompileDir(TEMPLATES_DIR . 'smarty/templates_c');
$_smarty->setCacheDir(TEMPLATES_DIR . 'smarty/cache');
$_smarty->setConfigDir(TEMPLATES_DIR . 'smarty/configs');

?>