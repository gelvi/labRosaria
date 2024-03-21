<template>
  <div class="intro-page">
    <h1>Welcome to Garnier Store</h1>
    <p>
      Explore our wide range of skincare and haircare products designed to enhance your beauty naturally.
    </p>
    <div class="product-grid">
      <div class="product-item">
        <img src="../assets/product1.png" alt="Garnier Serum" />
        <h3>Garnier Serum 30ml</h3>
        <p>Price: $599</p>
      </div>
      <div class="product-item">
        <img src="../assets/product2.jpg" alt="Garnier Facial Wash" />
        <h3>Garnier Facial Wash</h3>
        <p>Price: $190</p>
      </div>
      <div class="product-item">
        <img src="../assets/product3.jpg" alt="Garnier UV Sunscreen" />
        <h3>Garnier UV Sunscreen</h3>
        <p>Price: $150</p>
      </div>
    </div>
    <p>
      Visit our Product section now and discover products that suit your beauty needs.
    </p>
  </div>
</template>

<script>
export default {
  name: 'IntroPage'
}
</script>

<style scoped>
.intro-page {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.product-grid {
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
}

.product-item {
  text-align: center;
}

.product-item img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.product-item h3 {
  margin-bottom: 10px;
}

.product-item p {
  font-weight: bold;
  color: #555;
}
</style>
