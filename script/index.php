<!DOCTYPE html>
<html>

  <head>
    <title>Ultra Shop</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Cherry+Swash" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" >
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>

  <body>

    <header>
      <div id="info">
        <img src="images/site/logo.svg">
        <h1><a href="index.php">Ultra Shop</a></h1>
        <a href="list_cart.php"><i class="fa fa-shopping-cart"></i>(0)</a>
      </div>
      <div id="user">
        <form action="action_login.php" method="post">
          <input type="text" placeholder="username" name="username">
          <input type="password" placeholder="password" name="password">
          <div>
            <input type="submit" value="Login">
            <a href="register.php">Register</a>
          </div>
        </form>
      </div>
    </header>

    <nav id="menu">
      <ul>
        <li><a href="index.php">Products</a></li>
        <li><a href="services.php">Services</a></li>
        <li><a href="about.php">About Us</a></li>
        <li><a href="contacts.php">Contacts</a></li>
      </ul>
    </nav>

    <section id="categories">
      <h2>Categories</h2>
      <ul>
        <li><a href="?cat_id=1">Books</a></li>
        <li><a href="?cat_id=2">Clothing</a></li>
        <li><a href="?cat_id=3">Electronics</a></li>
        <li><a href="?cat_id=4">Fruits</a></li>
        <li><a href="?cat_id=5">Home Care</a></li>
        <li><a href="?cat_id=6">Sports</a></li>
        <li><a href="?cat_id=7">Vegetables</a></li>
      </ul>
    </section>

    <section id="products">
      <article>
        <h2>Apple</h2>
        <p class="description">Especially high in vitamin C, apples also provide vitamin A as a powerful antioxidant to help resist infection and scavenge free radicals that cause inflammation. They also contain a significant amount of fiber, which can help prevent absorption of LDL (bad) cholesterol.</p>
        <img src="images/products/1.png">
        <p class="price">2.89€/kg</p>
        <a href="action_add_to_cart.php?id=1">Buy</a>
      </article>
      <article>
        <h2>Apple</h2>
        <p class="description">Especially high in vitamin C, apples also provide vitamin A as a powerful antioxidant to help resist infection and scavenge free radicals that cause inflammation. They also contain a significant amount of fiber, which can help prevent absorption of LDL (bad) cholesterol.</p>
        <img src="images/products/1.png">
        <p class="price">2.89€/kg</p>
        <a href="action_add_to_cart.php?id=1">Buy</a>
      </article>
      <article>
        <h2>Apple</h2>
        <p class="description">Especially high in vitamin C, apples also provide vitamin A as a powerful antioxidant to help resist infection and scavenge free radicals that cause inflammation. They also contain a significant amount of fiber, which can help prevent absorption of LDL (bad) cholesterol.</p>
        <img src="images/products/1.png">
        <p class="price">2.89€/kg</p>
        <a href="action_add_to_cart.php?id=1">Buy</a>
      </article>
      <article>
        <h2>Apple</h2>
        <p class="description">Especially high in vitamin C, apples also provide vitamin A as a powerful antioxidant to help resist infection and scavenge free radicals that cause inflammation. They also contain a significant amount of fiber, which can help prevent absorption of LDL (bad) cholesterol.</p>
        <img src="images/products/1.png">
        <p class="price">2.89€/kg</p>
        <a href="action_add_to_cart.php?id=1">Buy</a>
      </article>
      <article>
        <h2>Apple</h2>
        <p class="description">Especially high in vitamin C, apples also provide vitamin A as a powerful antioxidant to help resist infection and scavenge free radicals that cause inflammation. They also contain a significant amount of fiber, which can help prevent absorption of LDL (bad) cholesterol.</p>
        <img src="images/products/1.png">
        <p class="price">2.89€/kg</p>
        <a href="action_add_to_cart.php?id=1">Buy</a>
      </article>
      <article>
        <h2>Apple</h2>
        <p class="description">Especially high in vitamin C, apples also provide vitamin A as a powerful antioxidant to help resist infection and scavenge free radicals that cause inflammation. They also contain a significant amount of fiber, which can help prevent absorption of LDL (bad) cholesterol.</p>
        <img src="images/products/1.png">
        <p class="price">2.89€/kg</p>
        <a href="action_add_to_cart.php?id=1">Buy</a>
      </article>
    </section>

    <footer>
      &copy; 2017 Ultra Shop
    </footer>

  </body>
</html>
