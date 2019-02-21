<template>
    <div>
        <headerT/>
        <article class="container">
            <h1 class="text-center display-1">A Little Bit About Me</h1>
            <hr>
            <img src="./assets/pic/portrait.jpg" id="portrait"/>
            <br>
            <br>        
            <p>
                When I was a kid, I always loved building models and taking apart electronics. 
                I started learning about all the hardware of computers when I was in middle school.
                <br>
                <br>
                One day, I signed up for two classes; one was focused on Adobe Suites and the other on Java. 
                I was in love with the idea that could create virtually anything with a few lines of code.
                <br>
                <br>
                I came across Udacity as I was getting frustrated at the thought that the college I was attending didn't have any programming classes. 
                I've decided to drop college and proceed my dreams of becoming a Full-Stack Developer!
            </p>
            <object data="./assets/etc/Resume.pdf" type="application/pdf" width="100%" height="100%">
                <embed src="./assets/etc/Resume.pdf" type="application/pdf"/>
            </object>
        </article>
        <footerT/>
    </div>
</template>

<script>
import headerT from './components/headerT.vue'
import footerT from './components/footerT.vue'

export default {
  components: {
    headerT,
    footerT
  }
}
</script>
<style scoped>
article {
  margin-top:10%;
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 20px;
}
#portrait{
    border-radius: 50px;
    height: 300px;
    width: 200px;
    float: left;
    padding: 10px;
}
hr{
    border-color: white;
}
</style>