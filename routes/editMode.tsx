export default function EditMode() {
  return (
    <div class="flex">
      <div class="flex flex-col flex-1 min-h-screen">
        <header class="h-header bg-blue-500 py-4 px-4 flex items-center gap-16 text-white">
          <a class="flex items-center gap-2" href="/">
            <img src="http://site.asia.trinity.s3-website.ap-northeast-2.amazonaws.com/images/logo.svg" alt="logo" />
            <span>ASIA TRINITY</span>
          </a>
          <nav>
            <ul class="flex items-center gap-6 text-slate-400 py-5">
              <li class="hover:text-white hover:border-b-2">
                <a href="/">Home</a>
              </li>
              <li class="hover:text-white">
                <a href="/about-us">About us</a>
              </li>
              <li class="hover:text-white">
                <a href="/team">Our Team</a>
              </li>
              <li class="hover:text-white">
                <a href="/insight">Insight</a>
              </li>
            </ul>
          </nav>
        </header>
        <main class="flex-1">
          <section class="bg-blue-500 m-12 flex text-white h-96">
            <div class="h-full w-5/12 p-8 flex items-center">
              Lorem ipsum dolor sit amet consectetur. In mauris pulvinar lorem
              lacus malesuada pellentesque. Sit commodo urna dolor id amet.
              Tortor in diam adipiscing bibendum diam vitae adipiscing leo. A
              nibh iaculis ut non.
            </div>
            <picture class="w-7/12">
              <img
                class="w-full h-full object-cover"
                src="http://site.asia.trinity.s3-website.ap-northeast-2.amazonaws.com/images/background.svg"
                alt="Background Image"
              />
            </picture>
          </section>
          <section class="flex flex-col m-20 items-center">
            <div class="flex flex-col gap-4 items-center mb-12">
              <h4 class="uppercase">what we belive in</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Diam viverra nec sit
                aliquet vivamus est gravida faucibus.
              </p>
            </div>
            <hr class="text-slate-400 w-full h-1" />
            <div></div>
          </section>
        </main>
        <footer class="bg-white flex flex-col gap-6 items-center py-12 px-6">
          <div class="flex flex-col gap-2 items-center">
            <p>
              In Taiwan, distribution and fund management services provided
              through Asia Trinity Investment Group, which issued by the
              Financial Supervisory Commission .
            </p>
            <p class="max-w-72">
              Asia Trinity Investment Group owns and operates this website. The
              information provided on our website is for informational purposes
              only. If you choose to access our website then you do so on your
              own initiative and at your own risk. It is your sole
              responsibility to ascertain and abide by the Terms of Use that
              govern your use of our website and to comply with any local law or
              regulation to which you are subjected to. If you are accessing
              this website from a jurisdiction outside of Taiwan you are
              responsible for ensuring compliance with the applicable laws and
              regulations of your jurisdiction. Please do not access this
              website if the information on this website or its availability is
              prohibited in your jurisdiction in any way.
            </p>
          </div>
          <span class="text-slate-400">All Rights Reserved</span>
        </footer>
      </div>
      <aside class="w-1/4 flex flex-col gap-2 bg-gray-200">
        <h4 class="p-4">Edit Page</h4>
        <div class="flex gap-2 justify-end p-4">
          <button class="bg-black text-white px-4 py-2">Save</button>
          <button class="bg-black text-white px-4 py-2">Publish</button>
        </div>
        <section>
          <div class="bg-gray-600 h-12 w-full text-white flex items-center px-4">
            Section 1
          </div>
          <div class="flex flex-col gap-2 p-2">
            <label for="slogan">Slogan</label>
            <textarea
              class="h-40 p-2"
              maxLength={4}
              id="slogan"
              name="slogan"
              value="Lorem ipsum dolor sit amet consectetur. In mauris pulvinar lorem lacus malesuada pellentesque. Sit commodo urna dolor id amet. Tortor in diam adipiscing bibendum diam vitae adipiscing leo. A nibh iaculis ut non."
            />
          </div>
          <div class="flex flex-col gap-2 p-2">
            <label for="slogan">Image</label>
            <textarea
              class="h-40 p-2"
              maxLength={4}
              id="slogan"
              name="slogan"
              value="Lorem ipsum dolor sit amet consectetur. In mauris pulvinar lorem lacus malesuada pellentesque. Sit commodo urna dolor id amet. Tortor in diam adipiscing bibendum diam vitae adipiscing leo. A nibh iaculis ut non."
            />
          </div>
        </section>
        <section>
          <div class="bg-gray-600 h-12 w-full text-white flex items-center px-4">
            Section 2
          </div>
          <div class="flex flex-col gap-2 p-2">
            <label for="believe">Title</label>
            <input
              class="h-12 p-2"
              maxLength={4}
              id="believe"
              name="believe"
              value="What we believe in"
            />
          </div>
          <div class="flex flex-col gap-2 p-2">
            <label for="believe_detail">Detail</label>
            <textarea
              class="h-20 p-2"
              maxLength={4}
              id="believe_detail"
              name="believe_detail"
              value="Lorem ipsum dolor sit amet consectetur. Diam viverra nec sit aliquet vivamus est gravida faucibus."
            />
          </div>
        </section>
      </aside>
    </div>
  )
}
