<?php
   $file = $_GET['file'];
   
   if(isset($file))
   {
       include("pages/$file");
   }
   else
   {
       //include("index.php");
       echo "<h1>Hello, this is my blog page</h1><br>";
     echo "<h2>Checkout the following blogs</h2><br>";
     echo "<a href='./?file=githappens.html'>gitHappens</a>";
   }
?>
