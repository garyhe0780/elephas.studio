import { format } from '$std/datetime/mod.ts'

interface ContactUsInfo {
  name: string
  email: string
  message: string
  createdAt: string
}

export default function ContactUs() {
  const data: ContactUsInfo[] = []

  return (
    <div>
      <table>
        <section class="flex flex-col py-4">
          <table cellPadding="0" cellSpacing="0">
            <thead>
              <tr>
                {['Name', 'Email', 'Message', 'Created At'].map((e) => (
                  <th class="p-4 min-w-[150px]">
                    <div class="flex items-center gap-1">
                      <span class="text-sm font-medium">{e}</span>
                      <span class="flex items-center gap-1">
                        <button type="button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                            fill="currentColor"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z" />
                          </svg>
                        </button>
                        <button type="button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                          </svg>
                        </button>
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((e) => (
                <tr class="odd:bg-slate-100">
                  <td class="p-4 min-w-[150px]">
                    <span>
                      <div class="text-sm ml-4">{e.name}</div>
                    </span>
                  </td>
                  <td class="py-5 min-w-[150px]">
                    <span>
                      <div class="text-sm ml-4">{e.email}</div>
                    </span>
                  </td>
                  <td class="py-5 min-w-[150px]">
                    <span>
                      <div class="text-sm ml-4">{e.message}</div>
                    </span>
                  </td>
                  <td class="py-5 min-w-[150px]">
                    <span>
                      <span class="text-sm ml-4">
                        {format(new Date(e.createdAt), 'yyyy-MM-dd')}
                      </span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </table>
    </div>
  )
}
