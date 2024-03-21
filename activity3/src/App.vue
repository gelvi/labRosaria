<template>
  <nav class="navbar">
    <div class="navbar-container">
      <router-link to="/login" class="nav-item" >Login</router-link>
      <router-link to="/" class="nav-item">Home</router-link>
      <router-link to="/productList" class="nav-item">Product</router-link>
      <router-link to="/cartList" class="nav-item" >Cart</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style>
.navbar {
  background-color: #64A749; /* Garnier green color */
  padding: 10px 0;
}

.navbar-container {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.nav-item {
  font-weight: bold;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  transition: background-color 0.3s ease;
}

.nav-item:hover {
  background-color: #4c8738; /* Darker shade of Garnier green */
}

.router-link-exact-active {
  background-color: #4c8738; /* Darker shade of Garnier green for active link */
}
</style>
