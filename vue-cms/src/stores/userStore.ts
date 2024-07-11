import {computed, ref} from 'vue'
import { defineStore } from 'pinia'


export const useStore = defineStore("data", () => {
    // ref()는 state 속성
    const sample = ref('');

    // getters
    const getFilters = computed(() => sample.value);

    // actions
    const updateFilters = (data:string) => {
        console.log(data);
    };

    const resetFilters = () => {};

    return {
        sample,
        getFilters,
        updateFilters,
        resetFilters
    };
});

