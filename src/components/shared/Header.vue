<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark"
    style="background-color: #563f7a"
  >
    <router-link to="/" tag="a" class="nav-item">
      <a class="navbar-brand">Ürün Listesi</a>
    </router-link>
    <router-link to="/urunislemleri" tag="a" class="nav-item">
      <a class="navbar-brand">Ürün İşlemleri</a>
    </router-link>
    <router-link to="/uruncikislari" tag="a" class="nav-item">
      <a class="navbar-brand">Ürün Çıkışı</a>
    </router-link>
  </nav>
</template>