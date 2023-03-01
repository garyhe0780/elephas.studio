import { Handlers } from '$fresh/server.ts'
import { setCookie, getCookies } from '$std/http/cookie.ts'
import { loginWithEmail } from '../models/user.ts'

interface Data {
  message?: string
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const maybeUser = getCookies(req.headers)['user']
    if (maybeUser) {
      ctx.state.user = JSON.parse(atob(maybeUser))
      const url = new URL(req.url)
      url.pathname = '/'

      return Response.redirect(url, 303)
    }

    return ctx.render()
  },

  async POST(req, ctx) {
    const formData = await req.formData()
    const email = formData.get('email')?.toString() ?? ''
    const password = formData.get('password')?.toString() ?? ''

    const user = await loginWithEmail(email, password)
    if (!user) {
      return ctx.render({ message: 'Login failed' })
    }

    const resp = new Response(null, {
      status: 303,
      headers: { Location: '/' },
    })

    setCookie(resp.headers, {
      name: 'user',
      value: btoa(JSON.stringify(user)),
      maxAge: 60 * 60 * 24 * 7,
      httpOnly: true,
    })

    return resp
  },
}

export default function Home() {
  return (
    <>
      <div class="flex flex-col items-center mt-40 gap-12">
        <div class="flex flex-col gap-4">
          <img src="/logo.svg" alt="logo" />
          <h1>Log in to Elephas</h1>
        </div>
        <form method="POST" class="flex flex-col items-center gap-4 min-w-40">
          <div class="border px-6 py-3 rounded">
            <input
              class="outline-none"
              placeholder="Enter your email address"
              name="email"
              required
              autoComplete="email"
            />
          </div>
          <div class="border px-6 py-3 rounded">
            <input
              class="outline-none"
              placeholder="Enter your password"
              name="password"
              required
              autoComplete="password"
            />
          </div>
          <button type="submit">Continue</button>
        </form>
      </div>
    </>
  )
}
