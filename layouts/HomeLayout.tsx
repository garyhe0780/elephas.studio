import { ComponentChildren } from 'preact'

export default function Layout({ children }: { children: ComponentChildren }) {
  return (
    <div class="h-screen flex">
      <aside class="w-20 h-screen flex flex-col items-center">
        <nav class="flex-1">
          <ul class="flex flex-col ">
            <li>
              <a href="/">logo</a>
            </li>
            <li>
              <a href="/">SEO</a>
            </li>
            <li>
              <a href="/">Pages</a>
            </li>
          </ul>
        </nav>
        <div>User</div>
      </aside>
      <div>{children}</div>
    </div>
  )
}
