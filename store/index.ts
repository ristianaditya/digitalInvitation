import { defineStore } from 'pinia'

export const useComplateRegis = defineStore('complate-regis', {
  state: () => {
    return { completion: true }
  },
})
