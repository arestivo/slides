<?
$styles = array('arta', 'ascetic', 'dark', 'default', 'far', 'github', 'googlecode', 'idea', 'ir_black', 'magula', 'monokai', 'rainbow', 'solarized_dark', 'solarized_light', 'sunburst', 'tomorrow', 'tomorrow-night-blue', 'tomorrow-night-bright', 'tomorrow-night', 'tomorrow-night-eighties', 'vs', 'zenburn');

$style = $styles[$_GET['style']];
?>

<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>André Restivo : <?=$_GET['p']?></title>
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <script src="http://gnab.github.com/remark/downloads/remark-0.6.5.min.js" type="text/javascript"></script>
    <script type="text/javascript">
      var hljs = remark.highlighter.engine;
    </script>
    <script src="remark.language.js" type="text/javascript"></script>
    <script type="text/javascript">
      var slideshow = remark.create({
          highlightStyle: '<?=$style?$style:"monokai"?>',
          sourceUrl: '../markdown/<?=$_GET['p']?>.md'
        }) ;
    </script>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-108721-9', 'auto');
      ga('send', 'pageview');

    </script>
  </body>
</html>

