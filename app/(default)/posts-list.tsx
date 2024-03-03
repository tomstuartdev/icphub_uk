{/*
Note: This code includes an example of how to fetch data from an external JSON file that is hosted at https://raw.githubusercontent.com/cruip/cruip-dummy/main/community-posts.json. To facilitate this, we've included a lib directory in the root which contains a function that can fetch the JSON content. Additionally, we've defined the Post types in the types.d.ts file located in the root.
*/}

import Link from 'next/link'
import Image from 'next/image'
import Sponsor from '@/public/images/funded.png'
import getAllPosts from '@/lib/getAllPosts'

export default async function PostsList() {
  const postsData: Promise<Post[]> = getAllPosts()
  const posts = await postsData

  return (
    <div>
      {/* Content header */}
      <div className="border-b border-slate-800 pb-6 mb-10">
        <div className="text-center md:text-left md:flex justify-between items-center">
          {/* Right: Button */}
          {/* <div className="mb-4 md:mb-0 md:order-1 md:ml-6">
            <button className="btn-sm py-1.5 text-white bg-indigo-500 hover:bg-indigo-600">Create Post</button>
          </div> */}

          {/* Left: Links */}
          <ul className="grow inline-flex flex-wrap text-sm font-medium -mx-3 -my-1">
            <li className="px-3 py-1">
              <a className="text-sky-300 relative transition duration-150 ease-in-out" href="#0">
                <svg className="fill-sky-300 absolute top-full" width="40" height="6" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillOpacity=".64"
                    d="M50.363.872c2.487.543 2.08.136 2.014.404l.623.318-.47.455.113.18c-.03.031-.066.098-.097.095-.77-.08-1.515.287-2.292.213-.779-.074-1.573-.116-2.345.015-.628.106-1.25.138-1.878.17-.194.01-.352-.217-.587-.036-.176.136-.45.027-.68.027h-1.45c-.23.001-.46.004-.689.011-.016 0-.032.042-.09.124l.58.103-.002.122c-.24.008-.48.02-.72.023-.254.005-.507.003-.76 0-.043 0-.107.003-.126-.032-.255-.476-.542-.417-.882-.174-.127.092-.317.015-.478.015-2.164 0-4.328-.005-6.491.007-.236.002-.508-.16-.705.184-.009.015-.056.015-.065 0-.195-.318-.416.156-.57-.012-.2-.217-.335-.18-.523-.001-.057.054-.207-.043-.3-.11-.13-.093-.123-.221-.001-.334-.024-.04-.044-.1-.073-.113-.04-.016-.112-.016-.127.017-.045.098-.051.24-.107.317-.073.103-.18.222-.272.224-.16.002-.356-.182-.472-.103-.185.127-.302.111-.486.007-.125-.071-.31.1-.47.103-.643.015-1.286.006-1.914.006l-.17-.384-.333.395c-.269.094-.735-.262-1.016.387l-.227-.348c-.546.213-1.075.243-1.602-.008-.546.35-1.111.045-1.663.165.012-.177.04-.377.024-.385-.215-.1-.18.172-.241.355h-.732l-.097.369c-.032-.022-.077-.033-.093-.069-.132-.278-.356-.392-.533-.268-.415.292-.841.137-1.261.17-.361.028-.725.006-1.095.145l.665.093c-.507.062-1.045.459-1.423-.179-.266.053-.478.128-.691.133-.663.016-1.326.006-1.975.006l-.11.441-.294-.615c-.046.264-.155.537-.353.348-.209-.2-.329-.062-.52-.01-.35.098-.723.028-1.097.153l.523.114c-.028.063-.047.14-.066.14-.507.007-1.015.038-1.52-.005-.372-.032-.732-.264-1.117-.18-.062.013-.124.038-.186.147l.554.08c-.578.083-1.143.302-1.726.002-.257-.133-.58-.022-.89.08l.385.132c-.023.05-.04.128-.06.128-.23.007-.459.002-.688 0-.124-.405-.308.196-.496-.07-.122-.173-.376.234-.623-.082-.134-.171-.474-.03-.731.094l.543.119c-.04.061-.064.132-.09.133-.345.007-.69-.017-1.035.009-.672.049-1.354.045-2.01.219-.355.094-.702.113-1.052.172-.3.05-.593.198-.71.75-.12 0-.387.067-.41-.01-.103-.338-.415-.373-.485-.664C.78 5.025.67 4.94.507 4.813c-.33-.258-.4-.75-.234-1.23C.183 3.447.09 3.312 0 3.18c.004-.07-.01-.153.013-.19.258-.407.56-.616.973-.687.676-.117 1.336-.405 2.029-.36.397-.337.836-.132 1.255-.195.327-.049.65-.15.979-.182.32-.032.677.114.958-.036.405-.215.8-.188 1.193-.146.504.053.969-.23 1.463-.213.506.016 1.034.13 1.515-.024.928-.298 1.863-.001 2.777-.184C14.289.736 15.433.957 16.55.758 18.056.488 19.555.693 21.055.6c.183-.011.368.001.552-.002.155-.003.325.057.429-.183.082.303.26-.03.404.116.087.09.306-.096.47-.119.182-.025.367-.005.552-.005h2.071c.184 0 .37-.02.553.004.215.028.429-.073.653.14.107.102.358-.13.545-.137.575-.021 1.15.006 1.726-.015.214-.007.455.14.637-.18.12-.21.21.367.39.052.057-.1.344-.116.375-.044.174.403.37-.21.503.039.188.352.305-.062.457-.049.085.008.17.045.255.068.149.04.386.182.432.104.189-.318.41-.006.617-.128.215-.127.495-.046.746-.046 4.512 0 9.024.009 13.536-.012.601-.003 1.223.207 1.807-.18.307.366.61-.041.922-.022.965.058 1.932.021 2.964.021-.034.15-.055.365-.09.37-.488.062-.96.248-1.462.222-1.011-.051-2.025-.016-3.038-.011-.037 0-.073.06-.11.091.046.033.09.078.139.095.121.041.233.254.377.012.037-.064.175-.01.267-.01 1.334 0 2.667 0 1.629.08-2.406.048-2.403.014-2.4-.02-.214-.08-.425-.185-.643-.23-.116-.024-.847.01-.952-.01-.089-.017-.227-.064-.265-.003-.188.302-.426.177-.641.178-3.27.007-6.54.008-9.811-.003-.192 0-.41.141-.585-.124-.033-.051-.154-.076-.178-.04-.21.315-.475.133-.712.167-.487.072-.985-.115-1.468.18-.137.082-.345-.038-.516-.09-.328-.103-.655-.177-.975.033-.112.073-.25-.201-.343.059-.176-.31-.473-.26-.627-.148-.256.188-.44-.167-.657-.03-.038.024-.096.017-.12.055-.114.18-.195.14-.344.027-.144-.108-.369-.14-.521-.062-.198.101-.436.179-.588.136-.236-.067-.436.023-.651.035-1.685.086-3.37-.117-5.058.171-1.259.215-2.536-.077-3.813.182-1.161.235-2.352-.06-3.535.198-.932.204-1.896-.086-2.845.198-.44.131-.92-.018-1.378.034-.42.048-.83-.087-1.27.125-.411.198-.908.048-1.368.058-.07.002-.141.038-.212.058.094.131.18.135.265.13.81-.038 1.617.014 2.433-.16.98-.21 1.983.057 2.984-.192.928-.232 1.904.174 2.84-.227.13-.056.243.369.373.016.15.316.29-.02.434-.024 1.133-.033 2.273.158 3.399-.173.151-.044.377-.08.463.033.196.258.292-.145.462-.056.141.074.318.016.48.016.92 0 1.842.01 2.763-.008.237-.004.5.146.713-.164.024-.035.149.077.23.102.106.033.28.115.312.056.129-.233.205-.03.315-.006.109.024.236-.16.355-.16.192 0 .417-.134.57.16.134-.22.317-.173.49-.17.175.001.37-.08.494.186.125-.272.322-.185.497-.186 1.151-.005 2.303.034 3.454-.013 1.132-.047 2.275.219 3.398-.182.138.185.318.085.473.103.2.023.406-.094.61-.095.236 0 .495-.113.698.168.226-.344.52-.165.777-.166 3.04-.015 6.08-.01 9.12-.011.222 0 .444-.019 3.074-.11"
                  />
                </svg>
                <span>Latest</span>
              </a>
            </li>
            <li className="px-3 py-1">
              <a className="text-slate-500 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">
                <span>ICP UK</span>
              </a>
            </li>
            <li className="px-3 py-1">
              <a className="text-slate-500 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">
                <span>Upcoming Events</span>
              </a>
            </li>
            <li className="px-3 py-1">
              <a className="text-slate-500 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">
                <span>Policy UK</span>
              </a>
            </li>
            
          </ul>
        </div>
      </div>

      {/* Posts */}
      <div className="mb-12">
        {/* List container */}
        <div className="flex flex-col space-y-3 mb-8">
          {posts.map(post => {
            return (
              <div key={post.id} className="[&:nth-child(-n+4)]:-order-1 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20">
                <div className="relative p-5">
                  <div
                    className="absolute inset-0 -m-px pointer-events-none -z-10 before:absolute before:inset-0 before:bg-gradient-to-t before:from-slate-700 before:to-slate-800 after:absolute after:inset-0 after:bg-slate-900 after:m-px"
                    aria-hidden="true"
                  />
                  <div className="sm:flex items-center space-y-3 sm:space-y-0 sm:space-x-5">
                    {/* <div className="shrink-0">
                      <button className="flex items-center text-left w-16 px-2.5 py-1 rounded border border-slate-700 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20 hover:bg-slate-800 transition duration-150 ease-in-out">
                        <svg className="shrink-0 fill-indigo-400 mr-1.5" width="11" height="7" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.664 6.747.336 5.253 5.5.662l5.164 4.591-1.328 1.494L5.5 3.338z" />
                        </svg>
                        <span className="grow text-center text-xs font-medium text-indigo-500">{post.votes}</span>
                      </button>
                    </div> */}
                    <div className="grow lg:flex items-center justify-between space-y-5 lg:space-x-6 lg:space-y-0">
                      <div>
                        <div className="mb-2">
                          <h2>
                            <Link className="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out" href={`/posts/${post.id}`}>
                              {post.title}
                            </Link>
                          </h2>
                        </div>
                        <div className="flex items-center">
                          <img className="rounded-full mr-2" src={post.authorImage} width="16" height="16" alt={post.author} />
                          <div className="text-xs text-slate-600">
                            <a className="font-medium text-indigo-500 hover:text-indigo-400 transition duration-150 ease-in-out" href="#0">
                              {post.author}
                            </a>{' '}
                            · <span className="text-slate-500">{post.date}</span> ·{' '}
                            <span className="text-slate-500">
                              {post.comments} Comment{post.comments === 1 ? '' : 's'}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0 flex -space-x-3 -ml-0.5">
                        {post.commenters.map((commenter, index) => (
                          <img
                            className="rounded-full border-2 border-slate-900 box-content"
                            src={commenter}
                            key={index}
                            width="24"
                            height="24"
                            alt="User 02"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          {/* Sponsored item */}
          <div className="px-5 py-3 -order-1">
            <div className="flex items-center space-x-4">
              <Image className="shrink-0 w-14 h-14 rounded-full" src={Sponsor} width={56} height={56} alt="Sponsor" />
              <div>
                <div className="mb-1">
                  <a className="text-slate-200 font-semibold hover:text-white transition duration-150 ease-in-out" href="https://funded.app">
                    Funded - Crowdfund your new Internet Computer venture 🚀
                  </a>
                </div>
                <div className="text-xs text-slate-500 italic">Promoted</div>
              </div>
            </div>
          </div>
        </div>

        {/* Show more */}
        <div className="text-right">
          <button className="btn-sm py-1.5 h-8 text-indigo-500 border border-slate-700 bg-gradient-to-tr from-slate-800/20 via-slate-800/50 to-slate-800/20 hover:bg-slate-800">
            Show More <span className="tracking-normal ml-1">-&gt;</span>
          </button>
        </div>
      </div>
    </div>
  )
}
