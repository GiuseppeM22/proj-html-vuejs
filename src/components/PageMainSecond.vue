<script>
import { store } from '../store'

export default {

    data() {
        return {
            store

        }
    },
    methods: {
        prev() {
            this.store.currentSlide--
            if (this.store.currentSlide < 0)
                this.store.currentSlide = 3
        },
        next() {
            this.store.currentSlide++
            if (this.store.currentSlide > 3)
                this.store.currentSlide = 0
        },
        visible(i) {
            if (i <= this.store.currentSlide + 2 && i >= this.store.currentSlide) {
                return true
            }
        }
    }
}
</script>
<template>
    <!-- this component first section -->
    <section class="bg_gray pt-3 pb-3">
        <div class="image_container boxed">
            <img src="public/img/page-banner-1-768x71.webp" alt="">
        </div>
    </section>

    <!-- this component second section -->
    <section>
        <div class="featured_titol d-flex justify-content-between boxed align-items-center">
            <h5>FEATURED POSTS</h5>
            <div class="featured_button">
                <button @click="prev()"><i class="fa-solid fa-chevron-left"></i></button>
                <button @click="next()"><i class="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>
    </section>

    <section class="boxed">
        <div class="first_slider d-flex">
            <template v-for="(card, i) in store.second_cards">
                <div v-show="visible(i)" class="carde">
                    <small class="name">{{ card.name }}</small>
                    <small class="name_2">{{ card.name }}</small>
                    <img :src="card.path" alt="">
                    <div class="card_paragraph p-2">
                        <strong>
                            <p class="mt-1 mb-0">{{ card.titol }}</p>
                        </strong>
                        <small>
                            <p class="mb-1">{{ card.date }}</p>
                        </small>
                        <small>
                            <p class="mb-1 text-secondary">{{ card.paragraph }}</p>
                        </small>
                        <button>Read More</button>
                    </div>
                </div>
            </template>

        </div>
    </section>

    <!-- this component third section -->

    <section class="mb-4">
        <!-- left -->
        <div class="third_section_images boxed d-flex mt-3 mb-4">
            <div class="third_section_left">
                <div class="square left_square_third ">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ZOEihZPz3aE"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>
            </div>
            <!-- right -->
            <div class="third_section_right">
                <div class="playlist_titol d-flex align-items-center">
                    <i class="fa-solid fa-play me-3"></i>
                    <div class="playlist_description">
                        <h6>Video Playlist</h6>
                        <span>1/7 Videos</span>
                    </div>
                </div>
                <div v-for="playlist in store.youtube" class="playlist_content d-flex align-items-center">
                    <div class="number_id">
                        <span>{{ playlist.id }}</span>
                    </div>
                    <div class="image_playlist">
                        <img :src="playlist.path" alt="">
                    </div>
                    <div class="titol_playlist ms-2">
                        <small>
                            <p class="mb-0 mt-2">{{ playlist.titol }}</p>
                        </small>
                        <small>
                            <p class="text-secondary">{{ playlist.subtitol }}</p>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- this component last sectio -->
    <section>
        <div class="last_cards d-flex">
            <div v-for="card in store.lastCard" class="singol_card square">
                <img :src="card.path" alt="">
                <span>{{ card.titol }}</span>
            </div>
        </div>
    </section>
</template>
<style scoped>
/* this component first section  */

.bg_gray {
    background-color: #f3f3f3;
    margin-top: 50px;
}

.image_container img {
    width: 100%;
}

/* this component second section */
.featured_titol {
    padding: 20px 0px;
}

.featured_titol h5 {
    font-weight: 700;
}

.featured_titol button {
    border: none;
    padding: 5px 10px;
    border-radius: 50%;
    background-color: black;
    color: white;
    margin-left: 20px;
    font-size: 12px;
}

.carde {
    width: calc(100% / 3);
    position: relative;
    margin: 5px;
}

.carde img {
    width: 100%;
}

.card_paragraph {
    text-align: center;
    background-color: #f3f3f3;
}

.card_paragraph button {
    background-color: #00cfc1;
    border: none;
    padding: 5px 25px;
    border-radius: 20px;
    color: white;
    font-size: 12px;
    margin-top: 5px
}

.card_paragraph button:hover {
    background-color: #333333;
}

.name {
    color: gray;
    position: absolute;
    padding: 1px 10px;
    background-color: white;
    border-radius: 5px;
    top: 10px;
    right: 25%;
    font-size: 12px;
    font-weight: 700;
}

.name_2 {
    color: gray;
    position: absolute;
    padding: 1px 10px;
    background-color: white;
    border-radius: 5px;
    top: 10px;
    left: 25%;
    font-size: 12px;
    font-weight: 700;
}

/* this component third section */
.third_section_images {
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
}

.third_section_left {
    width: 70%;
    height: 100%;
}

.third_section_left img {
    width: 100%;
}

.third_section_right {
    width: 30%;
    height: 107%;
    overflow-y: auto;
}

.left_square_third {
    width: 100%;
}

.card_info_third {
    position: absolute;
    bottom: 0;
    width: 100%;
    margin-left: 20px;
}

.badge_third {
    color: gray;
    position: absolute;
    background-color: white;
    border-radius: 5px;
    top: 10px;
    left: 10px;
    font-size: 11px;
    font-weight: 700;
    z-index: 2;
    padding: 1px 10px;

}

.third_right_card {
    padding: 0px 0px 10px 0px;
    margin-left: 10px;
}

.border_third {
    border-bottom: 1px solid gray;
}

.third_right_card img {
    width: 125px;
    border-radius: 5px;
    position: relative;
    background-color: black;
}

.third_right_card_description {
    margin-left: 10px;
}

.third_section_right i {
    color: white;
    font-size: 30px;
}

.playlist_description {
    color: white;
}

.playlist_titol {
    background-color: #333333;
    padding: 20px;
}

.playlist_description span {
    font-size: 12px;
}

.playlist_content {
    background-color: #f3f3f3;
    border-bottom: 1px solid gray;
    padding: 10px 0px;
}

.square iframe {
    width: 100%;
}

.image_playlist img {
    width: 80px;
    border-radius: 5px;
}

.number_id span {
    padding: 5px 10px;
    border-radius: 5px;
    color: white;
    background-color: #00cfc1;
    margin: 10px;
    font-size: 11px;
}

/* this component last section */

.last_cards {
    margin-top: 50px;
}

.singol_card {
    margin: 10px;
}

.square {
    background-color: black;
    border-radius: 5px;
    position: relative;
}

.square span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 16px;
    font-weight: 700;
}

.square img {
    width: 100%;
    opacity: 0.7;
    border-radius: 5px;
}
</style>