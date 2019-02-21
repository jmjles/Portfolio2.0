<template>
    <div>
        <nav class="nav nav-tabs sticky-top">
            <router-link to="/" class="nav-item nav-link">Home</router-link>
            <router-link to="/About" class="nav-item nav-link">About Me</router-link>
            <router-link to="/Projects" class="nav-item nav-link">Projects</router-link>
        </nav>
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

