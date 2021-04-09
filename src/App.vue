<!-- https://my.api.mockaroo.com/cars.json?key=f3d1e2f0
https://my.api.mockaroo.com/customers.json?key=f3d1e2f0 -->

<template>
  <div id="nav">
    <nav>
      <router-link to="/"><img src="./assets/logo-small.png"/></router-link>
      <router-link to="/">Car rental</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/Users">Users</router-link>
    </nav>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #018850;
}

#nav a.router-link-exact-active {
  color: #05363f;
}
</style>
