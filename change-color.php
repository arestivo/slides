<?php
  session_start();
  
  $_SESSION['style'] = $_SESSION['style'] + 1;

?>
<script>window.history.back();</script>
