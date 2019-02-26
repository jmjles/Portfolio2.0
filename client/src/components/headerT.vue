<template>
    <div class="container">
        <nav class="nav nav-tabs sticky-top row">
            <span class="navbar-brand text-secondary col-sm">
                Jesus M. |
                Full Stack Web Dev
            </span>
                <router-link to="/" class="nav-item nav-link text-white col-sm text-center">Home</router-link>
                <router-link to="/About" class="nav-item nav-link text-white col-sm text-center">About Me</router-link>
                <router-link to="/Projects" class="nav-item nav-link text-white col-sm text-center">Projects</router-link>
        </nav>
        <noscript><lead>This site uses Javascript. Please enable it..</lead></noscript>
        <video autoplay loop muted id="vid">
            <source src="../assets/etc/stars.mp4"/>
        </video>
    </div>
</template>
<style scoped>
#vid{
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    min-width: 100%;
    min-height: 100%;
}
nav {
  background-color: rgba(0, 0, 0, 0.78);
}
</style>

