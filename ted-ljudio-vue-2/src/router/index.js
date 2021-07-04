import {createRouter, createWebHistory} from 'vue-router'
import SongList from '../views/SongList'
import SearchResults from '../views/SearchResults'

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
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router