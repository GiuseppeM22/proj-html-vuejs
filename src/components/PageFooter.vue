  <!-- in questo componente andrò a generare il footer-->

<script></script>
<template>
    <footer>
        <section class="bg_red">
            <div class="red_footer d-flex boxed justify-content-between">
                <div class="footer_option d-flex flex-column">
                    <h6>GET STARTED</h6>
                    <a href="#">Resources</a>
                    <a href="#">Tutorial</a>
                    <a href="#">Example</a>
                    <a href="#">Docs</a>
                </div>
                <div class="footer_option d-flex flex-column">
                    <h6>ABOUT</h6>
                    <a href="#">Stories</a>
                    <a href="#">Commutity</a>
                    <a href="#">blog</a>
                    <a href="#">Brand Assets</a>
                </div>
                <div class="footer_option d-flex flex-column">
                    <h6>FEATURES</h6>
                    <a href="#">Resources</a>
                    <a href="#">Tutorial</a>
                    <a href="#">Example</a>
                    <a href="#">Docs</a>
                </div>
                <div class="footer_option d-flex flex-column">
                    <h6>ABOUT</h6>
                    <a href="#">Stories</a>
                    <a href="#">Commutity</a>
                    <a href="#">blog</a>
                    <a href="#">Brand Assets</a>
                </div>
                <div class="footer_option d-flex flex-column">
                    <h6>SUBSCRIVE TO NEWSLETTER</h6>
                    <input type="text" placeholder="Email">
                    <button>SUBSCRIBE</button>
                </div>
            </div>

            <div class="footer_image boxed d-flex justify-content-between align-items-center">
                <img src="public/img/anime-whitelogo-300x89.png" alt="">
                <small><span>© Anime Tech, Theme By HasnainDEV</span></small>
            </div>
        </section>
    </footer>
</template>
<style scoped>
.bg_red {
    background-color: #00cfc1;
    padding: 20px;
    -webkit-box-shadow: 0px -4px 2px 1px #585858;
    box-shadow: 0px -4px 2px 1px #585858;
    margin-top: 5px;
}

.red_footer {
    border-bottom: 1px solid white;
    padding-bottom: 30px;
}

.footer_option {
    margin-top: 25px;
}

.footer_option h6,
a {
    text-decoration: none;
    color: white;
    font-size: 13px;
}

.footer_option input {
    width: 230px;
    height: 35px;
    border-radius: 5px;
    border: none;
    padding: 10px;
}

.footer_option button {
    width: 230px;
    height: 35px;
    border-radius: 5px;
    border: none;
    margin-top: 10px;
    color: white;
    font-size: 12px;
    background-color: #333333;
}

.footer_image img {
    width: 190px;
    margin-top: 10px;
}

.footer_image span {
    color: white;
}
</style>