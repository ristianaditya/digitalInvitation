import { defineStore } from 'pinia'

export const useComplateRegis = defineStore('complate-regis', {
  state: () => {
    return { completion: true }
  },
})

export const useSessionData = defineStore('session-data', {
  state: () => {
    return {
      id: '',
      name: '',
      email: '',
      phone: '',
      subscribe: '',
      enabled: '',
      role: 'user',
    }
  },
})

export const usePlanLists = defineStore('plan-lists', {
  state: () => {
    return {
      DigitalDazzle: {
        price: 0,
        fee: 0,
        days: 7,
      },
      SparkleSend: {
        price: 5000,
        fee: 0,
        days: 30,
      },
      DigitalDreamscape: {
        price: 5000,
        fee: 4000,
        days: 90,
      },
    }
  },
})

export const useActivePage = defineStore('active-page', {
  state: () => {
    return { page: '', child: '', create: true, formCreate: '', export: false }
  },
})
