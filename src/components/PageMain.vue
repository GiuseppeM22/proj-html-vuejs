  <!-- in questo componente andro a generare la prima parte del main-->

<script>
import { store } from '../store'
import PageMainSecond from './PageMainSecond.vue'

export default {
    components: {
        PageMainSecond
    },
    data() {
        return {
            store

        }
    },
    methods: {
        prevImage() {
            this.store.currentCards--
            if (this.store.currentCards < 0)
                this.store.currentCards = 2
            console.log(this.store.cards[this.store.currentCards].path);
        },
        nextImage() {
            this.store.currentCards++
            if (this.store.currentCards > 2)
                this.store.currentCards = 0
            console.log(this.store.cards[this.store.currentCards].path);
        },
        visible(i) {
            if (i <= this.store.currentCards + 3 && i >= this.store.currentCards) {
                return true
            }
        }

    },
    mounted() {
        console.log(this.store.cards)
    }
}
</script>

<!-- this.store.cards[this.store.currentCards].path -->

<template>
    <main>

        <!-- first section main -->
        <section class="bg_gray">
            <div class="first_slider d-flex align-items-center">
                <button class="left_button" @keyup.up="prevImage" @keyup.down="prevImage" @click="prevImage()"><i
                        class="fa-solid fa-chevron-left"></i></button>
                <button class="right_button" @click="nextImage()"><i class="fa-solid fa-chevron-right"></i></button>
                <template v-for="(card, i) in store.cards">
                    <div v-show="visible(i)" class="carde">
                        <small class="name">{{ card.name }}</small>
                        <img :src="card.path" alt="">
                        <div class="card_paragraph">
                            <strong>
                                <p class="mt-1 mb-0">{{ card.titol }}</p>
                            </strong>
                            <small>
                                <p class="mb-1">{{ card.date }}</p>
                            </small>
                        </div>
                    </div>
                </template>

            </div>
        </section>

        <!-- second section main -->
        <section>
            <div class="card_square d-flex boxed">
                <!-- right box -->
                <div class="right_box">
                    <div class="square right_square">
                        <small class="badge me-2">fashion</small>
                        <small class="badge_2">lifestyle</small>
                        <img src="public/img/anime-fashion.webp" alt="">
                        <div class="card_info">
                            <small>
                                <span class="mb-1 text-light me-3 mb-0"><i class="fa-solid fa-user"
                                        style="color: #ffffff;"></i>
                                    demo</span>
                                <span class="mb-1 text-light mb-0"><i class="fa-solid fa-calendar-days"
                                        style="color: #ffffff;"></i> december 25, 2022</span>
                            </small>
                            <strong>
                                <p class="mt-1 mb-0 text-light mt-0 mb-2">Fashion Trend Now A Days</p>
                            </strong>
                        </div>
                    </div>
                    <div class="square right_square mt-2">
                        <small class="badge me-2">fashion</small>
                        <small class="badge_2">lifestyle</small>
                        <img src="public/img/travel-alone.webp" alt="">
                        <div class="card_info">
                            <small>
                                <span class="mb-1 text-light me-3 mb-0"><i class="fa-solid fa-user"
                                        style="color: #ffffff;"></i>
                                    demo</span>
                                <span class="mb-1 text-light mb-0"><i class="fa-solid fa-calendar-days"
                                        style="color: #ffffff;"></i> december 25, 2022</span>
                            </small>
                            <strong>
                                <p class="mt-1 mb-0 text-light mt-0 mb-2">Fashion Trend Now A Days</p>
                            </strong>
                        </div>
                    </div>
                </div>

                <!-- central box -->
                <div class="central_box">
                    <div class="square central_square">
                        <small class="badge me-2">fashion</small>
                        <small class="badge_2">lifestyle</small>
                        <img src="public/img/best-places.webp" alt="">
                        <div class="card_info">
                            <small>
                                <span class="mb-1 text-light me-3 mb-0"><i class="fa-solid fa-user"
                                        style="color: #ffffff;"></i>
                                    demo</span>
                                <span class="mb-1 text-light mb-0"><i class="fa-solid fa-calendar-days"
                                        style="color: #ffffff;"></i> december 25, 2022</span>
                            </small>
                            <strong>
                                <p class="mt-1 mb-0 text-light mt-0 mb-2">Fashion Trend Now A Days</p>
                            </strong>
                        </div>
                    </div>
                </div>

                <!-- left box -->
                <div class="left_box">
                    <div class="square left_square">
                        <small class="badge me-2">fashion</small>
                        <small class="badge_2">lifestyle</small>
                        <img src="public/img/music-love.webp" alt="">
                        <div class="card_info">
                            <small>
                                <span class="mb-1 text-light me-3 mb-0"><i class="fa-solid fa-user"
                                        style="color: #ffffff;"></i>
                                    demo</span>
                                <span class="mb-1 text-light mb-0"><i class="fa-solid fa-calendar-days"
                                        style="color: #ffffff;"></i> december 25, 2022</span>
                            </small>
                            <strong>
                                <p class="mt-1 mb-0 text-light mt-0 mb-2">Fashion Trend Now A Days</p>
                            </strong>
                        </div>
                    </div>
                    <div class="square left_square mt-2">
                        <small class="badge me-2">fashion</small>
                        <small class="badge_2">lifestyle</small>
                        <img src="public/img/visit-france.webp" alt="">
                        <div class="card_info">
                            <small>
                                <span class="mb-1 text-light me-3 mb-0"><i class="fa-solid fa-user"
                                        style="color: #ffffff;"></i>
                                    demo</span>
                                <span class="mb-1 text-light mb-0"><i class="fa-solid fa-calendar-days"
                                        style="color: #ffffff;"></i> december 25, 2022</span>
                            </small>
                            <strong>
                                <p class="mt-1 mb-0 text-light mt-0 mb-2">Fashion Trend Now A Days</p>
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- main third section -->
        <section>
            <!-- titol with button -->
            <div class="third_section_titole d-flex justify-content-between boxed aline-items-center">
                <h6>LIFESTYLE & STORIES</h6>
                <div class="third_section_button">
                    <button class="me-3">All</button>
                    <button class="me-3">LIFESTYLE</button>
                    <button>STORIES</button>
                </div>
            </div>

            <!-- images left -->
            <div class="third_section_images boxed d-flex mt-3 justify-content-between mb-4">
                <div class="third_section_left">
                    <div class="square left_square_third ">
                        <small class="badge_third me-2">Culture</small>
                        <img src="public/img/success-story.webp" alt="">
                        <div class="card_info_third">
                            <small>
                                <span class="mb-1 me-3 mb-0 text-light"><i class="fa-solid fa-user"
                                        style="color: #ffffff;"></i>
                                    demo</span>
                                <span class="mb-1 text-light mb-0"><i class="fa-solid fa-calendar-days"></i> december 25,
                                    2022</span>
                            </small>
                            <strong>
                                <p class="mt-1 mb-0 text-light mt-0 mb-2">Fashion Trend Now A Days</p>
                            </strong>
                        </div>
                    </div>
                </div>
                <!-- right -->
                <div class="third_section_right">
                    <div class="third_right_card border_third d-flex align-items-center">
                        <div class="square">
                            <img src="public/img/travel-alone-300x200.webp" alt="">
                            <small class="badge_third me-2">Stories</small>
                        </div>
                        <div class="third_right_card_description">
                            <small>
                                <span class="mb-1 me-3 mb-0"><i class="fa-solid fa-user"></i>
                                    demo</span>
                                <span class="mb-1 mb-0"><i class="fa-solid fa-calendar-days"></i>
                                    december 25, 2022</span>
                            </small>
                            <strong>
                                <p class="mt-1 mb-0 mt-0 mb-2">Fashion Trend Now A Days</p>
                            </strong>
                        </div>
                    </div>
                    <div class="third_right_card border_third mt-3 d-flex align-items-center">
                        <div class="square">
                            <img src="public/img/best-places-300x200.webp" alt="">
                            <small class="badge_third me-2">Lifestyle</small>
                        </div>
                        <div class="third_right_card_description">
                            <small>
                                <span class="mb-1 me-3 mb-0"><i class="fa-solid fa-user"></i>
                                    demo</span>
                                <span class="mb-1 mb-0"><i class="fa-solid fa-calendar-days"></i>
                                    december 25, 2022</span>
                            </small>
                            <strong>
                                <p class="mt-1 mb-0 mt-0 mb-2">Fashion Trend Now A Days</p>
                            </strong>
                        </div>
                    </div>
                    <div class="third_right_card mt-3 d-flex align-items-center">
                        <div class="square">
                            <img src="public/img/music-love.webp" alt="">
                            <small class="badge_third me-2">Culture</small>
                        </div>
                        <div class="third_right_card_description">
                            <small>
                                <span class="mb-1 me-3 mb-0"><i class="fa-solid fa-user"></i>
                                    demo</span>
                                <span class="mb-1 mb-0"><i class="fa-solid fa-calendar-days"></i>
                                    december 25, 2022</span>
                            </small>
                            <strong>
                                <p class="mt-1 mb-0 mt-0 mb-2">Fashion Trend Now A Days</p>
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <PageMainSecond />
        <!-- in questo componente si troverà la seconda parte del main -->
    </main>
</template>

                                     <!-- CSS -->

<style scoped>
/* first section main */
.left_button {
    position: absolute;
    z-index: 2;
    left: 35px;
    color: #00cfc1;
    background-color: white;
    border-radius: 50%;
    border: none;
    padding: 5px 10px;
}

.right_button {
    position: absolute;
    z-index: 2;
    right: 35px;
    color: #00cfc1;
    background-color: white;
    border-radius: 50%;
    border: none;
    padding: 5px 10px;
}

.first_slider {
    overflow-x: hidden;
}

.bg_gray {
    background-color: #f3f3f3;
    padding: 20px;
}

.carde {
    width: calc(100% / 4 - 20px);
    position: relative;
    margin: 10px;
}

.carde img {
    width: 100%;
}

.card_paragraph {
    text-align: center;
    background-color: white;
}

.name {
    color: gray;
    position: absolute;
    padding: 1px 10px;
    background-color: white;
    border-radius: 5px;
    top: 10px;
    right: 40%;
    font-size: 12px;
    font-weight: 700;

}

/* second section main */

.square {
    position: relative;
    background-color: black;
    border-radius: 5px;
}

.square img {
    width: 100%;
    opacity: 0.5;
    height: 100%;
    border-radius: 5px;

}

.card_info {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
}

.card_square {
    padding: 30px 0px;
    justify-content: space-between;
    height: 440px;
}

.badge {
    color: gray;
    position: absolute;
    background-color: white;
    border-radius: 5px;
    top: 10px;
    right: 50%;
    font-size: 12px;
    font-weight: 700;
    z-index: 2;

}

.badge_2 {
    color: gray;
    position: absolute;
    padding: 1px 10px;
    background-color: white;
    border-radius: 5px;
    top: 10px;
    right: 20%;
    font-size: 12px;
    font-weight: 700;
    z-index: 2;

}

.right_box {
    width: 26%;
    margin-right: 5px;
}

.right_square {
    width: 100%;
    height: 186px;
}

.central_box {
    width: 47%;
}

.central_square {
    height: 100%;
}

.left_box {
    width: 26%;
    margin-left: 5px;
}

.left_square {
    height: 186px;
    width: 100%;
}

/* main third section */

.third_section_button button {
    border: none;
    padding: 1px 15px;
    background-color: #333333;
    color: white;
    font-size: 13px;
    border-radius: 5px;
}

/* third section images */

.third_section_images {
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
}

.third_section_left {
    width: 60%;
    height: 100%;
}

.third_section_left img {
    width: 100%;
}

.third_section_right {
    width: 40%;
    height: 100%;
}

.left_square_third {
    height: 315px;
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
</style>