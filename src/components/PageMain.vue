  <!-- in questo componente andro a generare la parte che va dal primo slider
     all'ultima serie di card prima del footer -->

<script>
import { store } from '../store'


export default {
    data() {
        return {
            store
        }
    },
    mounted() {
        console.log(this.store.cards)
    }
}
</script>
<template>
    <main>

        <!-- prima section main -->
        <section class="bg_gray">
            <div class="first_slider d-flex">
                <div v-for="card in store.cards" class="carde">
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
    </main>
</template>
<style scoped>
/* prima section main */

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
}

.carde img {
    width: 100%;
}

.card_paragraph {
    text-align: center;
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
    padding: 30px;
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

.contenitore {
    padding: 10px;
    justify-content: space-between;
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
</style>