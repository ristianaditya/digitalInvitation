import { defineStore } from 'pinia'

export const useComplateRegis = defineStore('complate-regis', {
  state: () => {
    return { completion: true }
  },
})

export const useSessionData = defineStore('session-data', {
  state: () => {
    return {  id: '', name: '', email: '' , phone: '', subscribe: '' }
  },
})

export const useActivePage = defineStore('active-page', {
  state: () => {
    return { page: '', child: '' , create: true, formCreate: ''}
  },
})
