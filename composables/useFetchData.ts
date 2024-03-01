// const { getSession } = useAuth()

export const useGetData = async (path: string) => {
  const config = useRuntimeConfig()
  // const session = await getSession()
  return new Promise(async (resolve, reject) => {
    try {
      await useFetch(config.public.baseURLService.concat(`${path}`), {
        method: 'get',
        onResponse({ response }) {
          resolve(response._data)
        },
      })
    } catch (error) {
      reject(error)
    }
  })
}

export const useGetSession = async (path: string, token: string) => {
  const config = useRuntimeConfig()
  return new Promise(async (resolve, reject) => {
    try {
      await useFetch(config.public.baseURLService.concat(`${path}`), {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        onResponse({ response }) {
          resolve(response._data)
        },
      })
    } catch (error) {
      reject(error)
    }
  })
}

export const usePostData = async (path: string, body: object) => {
  const config = useRuntimeConfig()
  return new Promise(async (resolve, reject) => {
    try {
      await useFetch(config.public.baseURLService.concat(`${path}`), {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body,
        onResponse({ response }) {
          resolve(response)
        },
      })
    } catch (error) {
      reject(error)
    }
  })
}
