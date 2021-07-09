import Vue from "vue";
import VueRouter from "vue-router";
import SongList from '../views/SongList'
import SearchResults from '../views/SearchResults'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'SongList',
        component: SongList
    },
    {
        path: '/searchresults',
        name: 'SearchResults',
        component: SearchResults
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router