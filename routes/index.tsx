import HomeLayout from '../layouts/HomeLayout.tsx'

export default function Home() {
  return (
    <HomeLayout>
      <div class="flex gap-2">
        <aside class="flex flex-col gap-2">
          <form method="GET">
            <div>
              <input type="text" name="page" />
            </div>
          </form>
          <ul class="uppercase">
            <li>
              <a href="/pages/home">Home</a>
            </li>
            <li>
              <a href="/pages/about-us">about us</a>
            </li>
            <li>
              <a href="/pages/team">Our Team</a>
            </li>
            <li>
              <a href="/pages/insight">Insight</a>
            </li>
          </ul>
        </aside>
        <main class="bg-gray-200 p-4">
          <header>
            <nav class="flex gap-2">
              <div class="">Pages</div>
              <div class="">User</div>
            </nav>
          </header>
          <form method="POST">
            <div>
              <input type="text" placeholder="search filter" />
            </div>
          </form>
          <div>
            <table></table>
          </div>
        </main>
      </div>
    </HomeLayout>
  )
}
