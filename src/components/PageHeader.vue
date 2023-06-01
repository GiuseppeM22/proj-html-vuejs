  <!-- in questo componente andrò ad inserire la parte dell'header comresa con la navbar, 
    genererò dinamicamente la navbar -->

<script>
export default {
    props: {
        navbar: Object
    },
}
</script>
<template>
    <header>

        <!-- prima section header -->

        <section class="bg_red">
            <div class="red_navbar d-flex boxed justify-content-between align-items-center">
                <div class="left_red_navbar">
                    <button>NEW UPDATE</button>
                    <small><span>05:35 THE _</span></small>
                </div>
                <div class="center_red_navbar">
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
                <div class="right_red_navbar d-flex">
                    <div class="arrow_header me-4">
                        <i class="fa-solid fa-chevron-up fa-rotate-270 me-3"></i>
                        <i class="fa-solid fa-chevron-up fa-rotate-90"></i>
                    </div>
                    <div class="social_icons">
                        <i class="fa-brands fa-facebook me-2"></i>
                        <i class="fa-brands fa-twitter me-2"></i>
                        <i class="fa-brands fa-instagram me-2"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </div>
                </div>
            </div>
        </section>

        <!-- section centrale header -->

        <section>
            <div class="center_navbar boxed d-flex justify-content-between">
                <img class="anime_logo" src="public/img/anime-logo-300x89.webp" alt="anime logo">
                <img class="banner" src="public/img/header-banner.webp" alt="banner">
            </div>
        </section>

        <!-- terza section header -->

        <section>
            <div class="navbar boxed d-flex">
                <div class="hamburger">
                    <i class="fa-solid fa-bars"></i>
                </div>
                <div class="menu d-flex">
                    <div v-for="link in navbar" class="link_navbar me-4">
                        <i :class="link.path"></i>
                        <a href="#">{{ link.name }}</a>
                        <i :class="link.arrow"></i>
                    </div>
                </div>
                <div class="search_lens">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </section>
    </header>
</template>

<style scoped>
/* prima section header */

.bg_red {
    background-color: #00cfc1;
    width: 100%;
    -webkit-box-shadow: -1px 4px 4px -1px #000000;
    box-shadow: -1px 4px 4px -1px #000000;
}

.left_red_navbar button {
    background-color: rgb(92, 92, 92);
    padding: 5px 20px;
    color: white;
    border: none;
    font-weight: 900;
}

.left_red_navbar span {
    color: rgba(255, 255, 255, 0.6);
    margin-left: 10px;
}

.center_red_navbar i {
    color: rgba(0, 0, 0, 0.2);
    font-size: 30px;
}

.arrow_header i {
    color: white;
    font-size: 15px;
}

.social_icons i {
    color: #00cfc1;
    padding: 5px;
    border-radius: 50%;
    background-color: white;
}

.social_icons i:hover {
    background-color: rgb(72, 72, 72);
    cursor: pointer;
}

/* section centrale header */

.center_navbar {
    padding: 15px 0px;
}

.anime_logo {
    max-width: 185px;
    height: 80px;
}

.banner {
    max-width: 600px;
}

/* terza section header */

.navbar {
    padding: 5px 0px;
}

.navbar i {
    font-size: 20px;
    cursor: pointer;
}

.menu a {
    text-decoration: none;
    color: black;
    font-size: 13px;
}

.menu .link_navbar:hover a {
    color: #00cfc1;
}

.menu .link_navbar:hover i {
    color: #00cfc1;
}

.menu i {
    font-size: 15px;
    margin-right: 5px;
    margin-left: 5px;

}
</style>