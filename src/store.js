
import { reactive } from 'vue'

export const store = reactive({
    currentCards: 0,
    cards: [
        {
            name: "Food",
            path: "public/img/healthy-foods.webp",
            titol: "The Best Healthy Foods in 2022",
            date: "December 26, 2022"
        },
        {
            name: "Fashion",
            path: "public/img/winter.webp",
            titol: "The Best Winter Outfits",
            date: "December 26, 2022"
        },
        {
            name: "Fashion",
            path: "public/img/photographers-mistakes.webp",
            titol: "Beginner Photographer's Mistakes",
            date: "December 26, 2022"
        },
        {
            name: "culture",
            second_name: "Stories",
            path: "public/img/ideas-anime.webp",
            titol: "Live Ideas You Might Be Anime",
            date: "December 26, 2022"
        },
        // {
        //     name: "Food",
        //     path: "public/img/rice-ball.webp",
        //     titol: "Live Ideas You Might Be Anime",
        //     date: "December 26, 2022"
        // },
        // {
        //     name: "culture",
        //     path: "public/img/success-story.webp",
        //     titol: "Live Ideas You Might Be Anime",
        //     date: "December 26, 2022"
        // },

    ],
    second_cards: [
        {
            name: "Food",
            path: "public/img/healthy-foods.webp",
            titol: "The Best Healthy Foods in 2022",
            date: "December 26, 2022",
            paragraph: 'lorem ipsum dolor sit amet, ipsum dolor sit amet ipsum dolor sit amet'

        },
        {
            name: "Fashion",
            path: "public/img/winter.webp",
            titol: "The Best Winter Outfits",
            date: "December 26, 2022",
            paragraph: 'lorem ipsum dolor sit amet, ipsum dolor sit amet ipsum dolor sit amet'

        },
        {
            name: "Fashion",
            path: "public/img/photographers-mistakes.webp",
            titol: "Beginner Photographer's Mistakes",
            date: "December 26, 2022",
            paragraph: 'lorem ipsum dolor sit amet, ipsum dolor sit amet ipsum dolor sit amet'
        },

    ],
    youtube: [
        {
            id: "1",
            path: "https://i.ytimg.com/vi_webp/ZOEihZPz3aE/maxresdefault.webp",
            titol: "Overlord season 4",
            subtitol: "Official Trailer | AniTV",
        },
        {
            id: "2",
            path: "https://i.ytimg.com/vi_webp/nIa0mUDj3I0/maxresdefault.webp",
            titol: "Rent a girlfriend",
            subtitol: "Official Trailer | AniTV",
        },
        {
            id: "3",
            path: "https://i.ytimg.com/vi_webp/O9ACqmuD05o/maxresdefault.webp",
            titol: "Uncle from Another World",
            subtitol: "Official Trailer | AniTV",
        },
        {
            id: "4",
            path: "https://i.ytimg.com/vi_webp/e1cAoCj6Je4/maxresdefault.webp",
            titol: "Prima Doli - official",
            subtitol: "Official Trailer | AniTV",
        },
        {
            id: "5",
            path: "https://i.ytimg.com/vi_webp/47bxPkh2czw/maxresdefault.webp",
            titol: "Shoot! Goal to the future",
            subtitol: "Official Trailer | AniTV",
        },
        {
            id: "6",
            path: "https://i.ytimg.com/vi/xoDsLbQiYFs/maxresdefault.jpg",
            titol: "One piece movie 4",
            subtitol: "Official Trailer | AniTV",
        },
    ]
})
