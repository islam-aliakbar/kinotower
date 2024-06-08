import {defineStore} from "pinia";
import axios from "axios";
import {api} from "~/api";

export const useFilmsStore = defineStore('films', ()=> {
    const films = ref([]);
    const total = ref(0);
    const params = ref({
       page: 1,
       size: 5,
       sortBy: 'name',
       sortDir: 'desc',
       category: null,
       country: null
    });

    const  totalPages = computed(() => {
        return Math.ceil( total.value / params.value.size );
    })
    const isLoading = ref(true);

    async function fetchFilms() {
        isLoading.value = true;
        const res = await api.get('/films', {
            params: params.value
        });

        isLoading.value = false;
        films.value = res.data.films;
        total.value = res.data.total;
    }

    function addCategoryToParams(category:any) {
        params.value.category = category;

        params.value.page = 1

        fetchFilms();
    }

    function addCountryToParams(country:any) {
        params.value.country = country;

        params.value.page = 1;

        fetchFilms();
    }

    function addSortToParams (sortBy:any) {
        params.value.sortBy = sortBy;

        params.value.page = 1;

        fetchFilms();
    }

    function resetParams () {
        params.value = {
            page: 1,
            size: 5,
            sortBy: 'name',
            sortDir: 'desc',
            category: null,
            country: null
        };

        fetchFilms();
    }

    return {
        films,
        fetchFilms,
        addCategoryToParams,
        addCountryToParams,
        addSortToParams,
        resetParams,
        isLoading,
        totalPages,
        params,
    }
});