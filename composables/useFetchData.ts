const { getSession } = useAuth()

export const useGetData = async (path: string) => {
  const config = useRuntimeConfig()
  const session = await getSession()
  return new Promise(async (resolve, reject) => {
    try {
      await $fetch(config.public.baseURLService.concat(`${path}`), {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.accessToken}`,
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


export const useGetSession = async (path: string) => {
  const config = useRuntimeConfig()
  const session = await getSession()

  return new Promise(async (resolve, reject) => {
    try {
      await $fetch(config.public.baseURLService.concat(`${path}`), {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.accessToken}`,
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

export const usePostOTPVerification = async (path: string, body: object) => {
  const config = useRuntimeConfig()
  return new Promise(async (resolve, reject) => {
    try {
      await $fetch(config.public.baseURLService.concat(`${path}`), {
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
export const usePostSendResetLink = async (email: string) => {
  const config = useRuntimeConfig()
  return new Promise(async (resolve, reject) => {
    try {
      await $fetch(config.public.baseURLService.concat('/password-reset/send'), {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: { email }, // Body contains only the email
        onResponse({ response }) {
          resolve(response)
        },
      })
    } catch (error) {
      reject(error)
    }
  })
}

export const usePostResetPassword = async (body: object) => {
  console.log(body)
  const config = useRuntimeConfig()
  return new Promise(async (resolve, reject) => {
    try {
      await $fetch(config.public.baseURLService.concat('/password-reset/reset'), {
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

export const useResendOTP = async (path: string, body: object) => {
  const config = useRuntimeConfig()
  return new Promise(async (resolve, reject) => {
    try {
      await $fetch(config.public.baseURLService.concat(`${path}`), {
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

export const usePostRegis = async (path: string, body: object) => {
  const config = useRuntimeConfig()
  return new Promise(async (resolve, reject) => {
    try {
      await $fetch(config.public.baseURLService.concat(`${path}`), {
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

export const usePostData = async (path: string, body: object) => {
  const config = useRuntimeConfig()
  const session = await getSession()

  return new Promise(async (resolve, reject) => {
    try {
      await $fetch(config.public.baseURLService.concat(`${path}`), {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.accessToken}`,
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

export const useFormUpload = async (path: string, body: object) => {
  const config = useRuntimeConfig()
  const session = await getSession()

  return new Promise(async (resolve, reject) => {
    try {
      await $fetch(config.public.baseURLService.concat(`${path}`), {
        method: 'post',
        headers: {
          'Authorization': `Bearer ${session.accessToken}`,
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
