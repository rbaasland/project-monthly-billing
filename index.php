<?php
    include "includes/application.php";
    
    $_smarty->assign('title', 'Home | Project Bill Pay');
    $_smarty->display('templates/header.tpl');

    if (!$_login->isUserLoggedIn()) {
        $_smarty->display('templates/login.tpl');
    } else {
        echo "Your Logged in!";
    }
    $_smarty->display('templates/footer.tpl');
?>