import {
  BanknotesIcon,
  BriefcaseIcon,
  ChatBubbleBottomCenterTextIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState } from 'react';

function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='bg-white text-black'>
      <header className='navbar fixed top-0 left-0 z-50 w-full border-stroke bg-white duration-300'>
        <div className='container relative lg:max-w-[1305px] lg:px-10'>
          <div className='flex items-center justify-between'>
            <div className='block py-4 lg:py-0'>
              <a href='index.html' className='block max-w-[145px] sm:max-w-[180px]'>
                <Image src='/logo.png' alt='logo' width={125} height={15} />
              </a>
            </div>
            <button
              onClick={() => setIsOpen(true)}
              className='navbarOpen absolute right-4 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 flex-col items-center justify-center space-y-[6px] font-bold lg:hidden'
              aria-label='navbarOpen'
              name='navbarOpen'>
              <span className='block h-[2px] w-7 bg-black '></span>
              <span className='block h-[2px] w-7 bg-black '></span>
              <span className='block h-[2px] w-7 bg-black '></span>
            </button>

            <div
              className={`menu-wrapper relative ${isOpen ? '' : 'hidden'} justify-between lg:flex`}>
              <button
                onClick={() => setIsOpen(false)}
                className='navbarClose fixed top-10 right-10 z-[9999] flex h-10 w-10 flex-col items-center justify-center font-bold lg:hidden'
                name='navbarClose'
                aria-label='navbarClose'>
                <span className='block h-[2px] w-7 rotate-45 bg-black '></span>
                <span className='-mt-[2px] block h-[2px] w-7 -rotate-45 bg-black '></span>
              </button>

              <nav className='fixed top-0 left-0 z-[999] flex h-screen w-full items-center justify-center bg-white bg-opacity-95 text-center backdrop-blur-sm lg:static lg:h-auto lg:w-max lg:bg-transparent lg:backdrop-blur-none '>
                <ul className='items-center space-y-3 lg:flex lg:space-x-8 lg:space-y-0 xl:space-x-10'>
                  <li className='menu-item'>
                    <a
                      onClick={() => setIsOpen(false)}
                      href='#features'
                      className='menu-scroll inline-flex items-center text-base font-medium text-black hover:text-redpraha   lg:py-7'>
                      Features
                    </a>
                  </li>
                  <li className='menu-item'>
                    <a
                      onClick={() => setIsOpen(false)}
                      href='#about'
                      className='menu-scroll inline-flex items-center text-base font-medium text-black hover:text-redpraha   lg:py-7'>
                      About
                    </a>
                  </li>
                  <li className='menu-item'>
                    <a
                      onClick={() => setIsOpen(false)}
                      href='#work-process'
                      className='menu-scroll inline-flex items-center text-base font-medium text-black hover:text-redpraha   lg:py-7'>
                      How It Works
                    </a>
                  </li>
                  <li className='menu-item'>
                    <a
                      onClick={() => setIsOpen(false)}
                      href='#faq'
                      className='menu-scroll inline-flex items-center text-base font-medium text-black hover:text-redpraha   lg:py-7'>
                      Support
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className='mr-[60px] flex items-center justify-end lg:mr-0'>
              <a
                href='/dapp'
                className='rounded-md bg-electricblue py-[6px] px-[12px] xl:py-[10px] xl:px-[30px] text-base font-medium text-white hover:bg-opacity-90'>
                Dapp
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id='home' className='pt-[165px] '>
          <div className='container lg:max-w-[1305px] lg:px-10'>
            <div className='-mx-4 flex flex-wrap items-center'>
              <div className='w-full px-4 lg:w-7/12'>
                <div className='wow fadeInUp mb-12 lg:mb-0 lg:max-w-[570px]' data-wow-delay='.2s'>
                  <span className='mb-5 block text-lg font-medium leading-tight text-black  sm:text-[22px] xl:text-[22px]'>
                    Your Private Data, Entrusted to Genies
                  </span>
                  <h1 className='mb-6 text-3xl font-bold leading-tight text-black  sm:text-[40px] md:text-[50px] lg:text-[42px] xl:text-[50px]'>
                    <span className='inline bg-yellow-gradient-color bg-clip-text text-transparent mx-2'>
                      Ask
                    </span>{' '}
                    everything to{' '}
                    <span className='inline bg-yellow-gradient-color bg-clip-text text-transparent mx-2'>
                      your
                    </span>{' '}
                    personnal
                    <span className='inline bg-yellow-gradient-color bg-clip-text text-transparent mx-2'>
                      Genie
                    </span>
                  </h1>
                  <p className='mb-10 max-w-[475px] text-base leading-relaxed text-body'>
                    Summon Your Domain-Specific AI Genie for Expert Assistance Where Your Secrets
                    Remain Enchanted
                  </p>

                  <div className='flex flex-wrap items-center'>
                    <a
                      target='_blank'
                      href='https://github.com/TalentLayer-Labs/starter-kit'
                      className='mr-6 mb-6 inline-flex h-[60px] items-center rounded-lg bg-black py-[14px] px-[30px] text-white hover:bg-opacity-90'>
                      <span className='mr-[18px] border-r border-stroke border-opacity-40 pr-[18px] leading-relaxed '>
                        Github
                      </span>
                      <span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'>
                          <path
                            fill='#FFF'
                            d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className='w-full px-4 lg:w-5/12'>
                <div className='hidden lg:block absolute left-[50%] top-[25%] -z-1'>
                  <Image
                    src='/images/shapes/shape33.png'
                    alt='shape'
                    width={50}
                    height={50}
                    className='shape'
                  />
                </div>
                <div
                  className='wow fadeInUp relative z-10 mx-auto w-full max-w-[530px] pt-8 lg:mr-0'
                  data-wow-delay='.3s'>
                  <img
                    src='/images/home/hero/hero-doctor.png'
                    alt='hero image'
                    className='mx-auto max-w-full'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='features' className=' relative z-10 pt-[110px]'>
          <div className='container'>
            <div
              className='wow fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]'
              data-wow-delay='.2s'>
              <h2 className='mb-4 text-3xl font-bold text-black  sm:text-4xl md:text-[44px] md:leading-tight'>
                Personalized AI with a Privacy-First Approach
              </h2>
              <p className='text-base text-body'>
                GenieAi redefines confidentiality in AI interaction. As you engage with our Genies,
                specialized in diverse fields, your data’s privacy is the priority. Each file you
                entrust to us is anonymized and encrypted, disappearing into a private enclave where
                only your Genie can access it. This is the GenieAi promise: unparalleled
                personalized assistance with an unwavering commitment to your data’s privacy.
              </p>
            </div>
          </div>

          <div className='container max-w-[1390px]'>
            <div className='rounded-2xl bg-white px-5 pt-14 pb-14 shadow-md md:pb-1 lg:pt-20 lg:pb-5 xl:px-10'>
              <div className='-mx-4 flex flex-wrap'>
                <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center'
                    data-wow-delay='.2s'>
                    <div className='mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-yellow-gradient-color text-redpraha duration-300 group-hover:bg-redpraha group-hover:text-white   '>
                      <Image
                        src='/images/home/features/anony.png'
                        alt='feature image'
                        width={80}
                        height={80}
                      />
                    </div>
                    <h3 className='mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]'>
                      Anonymized Interaction
                    </h3>
                    <p className='text-base text-body'>
                      Speak freely; your identity cloaked in anonymity, your queries a secret
                      between you and your Genie.
                    </p>
                  </div>
                </div>

                <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center'
                    data-wow-delay='.3s'>
                    <div className='mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-yellow-gradient-color text-redpraha duration-300 group-hover:bg-redpraha group-hover:text-white   '>
                      <Image
                        src='/images/home/features/encrypt.png'
                        alt='feature image'
                        width={80}
                        height={80}
                      />
                    </div>
                    <h3 className='mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]'>
                      Encrypted Data Sharing
                    </h3>
                    <p className='text-base text-body'>
                      Upload your data with confidence; iExec's DataProtector weaves a spell of
                      encryption around your documents.
                    </p>
                  </div>
                </div>

                <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center'
                    data-wow-delay='.4s'>
                    <div className='mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-yellow-gradient-color text-redpraha duration-300 group-hover:bg-redpraha group-hover:text-white   '>
                      <Image
                        src='/images/home/features/pay.png'
                        alt='feature image'
                        width={80}
                        height={80}
                      />
                    </div>
                    <h3 className='mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]'>
                      Pay-per-Wish Pricing
                    </h3>
                    <p className='text-base text-body'>
                      Unlock expert knowledge with a simple, small fee. Affordable wisdom at your
                      command
                    </p>
                  </div>
                </div>

                <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center'
                    data-wow-delay='.2s'>
                    <div className='mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-yellow-gradient-color text-redpraha duration-300 group-hover:bg-redpraha group-hover:text-white '>
                      <Image
                        src='/images/home/features/spectrum.png'
                        alt='feature image'
                        width={90}
                        height={90}
                      />
                    </div>
                    <h3 className='mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]'>
                      Spectrum of Expertise
                    </h3>
                    <p className='text-base text-body'>
                      Choose from a diverse ensemble of Genies, from a Legal Luminary, a Health
                      Herald, or a Fiscal Sage, your specialized Genie is at your service.
                    </p>
                  </div>
                </div>

                <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center'
                    data-wow-delay='.3s'>
                    <div className='mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-yellow-gradient-color text-redpraha duration-300 group-hover:bg-redpraha group-hover:text-white   '>
                      <Image
                        src='/images/home/features/ring.png'
                        alt='feature image'
                        width={90}
                        height={90}
                      />
                    </div>
                    <h3 className='mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]'>
                      Be notify
                    </h3>
                    <p className='text-base text-body'>
                      As soon as our Genies have completed their analysis, you will be notified
                    </p>
                  </div>
                </div>

                <div className='w-full px-4 md:w-1/2 lg:w-1/3 relative'>
                  <div
                    className='wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center'
                    data-wow-delay='.4s'>
                    <div className='mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-yellow-gradient-color text-redpraha duration-300 group-hover:bg-redpraha group-hover:text-white   '>
                      <Image
                        src='/images/home/features/reputation.png'
                        alt='feature image'
                        width={90}
                        height={90}
                      />
                    </div>
                    <h3 className='mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]'>
                      Reputation
                    </h3>
                    {/* <div className='absolute top-[-5px] right-[40px] md:right-[100px] p-2 bg-redpraha text-black text-xs rounded-md'>
                      Coming Soon
                    </div> */}
                    <p className='text-base text-body'>
                      Each Genie’s reputation is based on the quality of their analysis, ensuring
                      the highest standards of service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='absolute top-0 right-0 -z-10'>
            <svg
              width='602'
              height='1154'
              viewBox='0 0 602 1154'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <g opacity='0.25' filter='url(#filter0_f_26_84)'>
                <circle cx='577' cy='577' r='317' fill='url(#paint0_linear_26_84)' />
              </g>
              <defs>
                <filter
                  id='filter0_f_26_84'
                  x='0'
                  y='0'
                  width='1154'
                  height='1154'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'>
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='130' result='effect1_foregroundBlur_26_84' />
                </filter>
                <linearGradient
                  id='paint0_linear_26_84'
                  x1='183.787'
                  y1='894'
                  x2='970.173'
                  y2='346.491'
                  gradientUnits='userSpaceOnUse'>
                  <stop stopColor='#8EA5FE' />
                  <stop offset='0.541667' stopColor='#BEB3FD' />
                  <stop offset='1' stopColor='#90D1FF' />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className='absolute left-0 -bottom-1/2 -z-10 hidden md:block'>
            <svg
              width='622'
              height='1236'
              viewBox='0 0 622 1236'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <g opacity='0.2' filter='url(#filter0_f_26_85)'>
                <circle cx='4' cy='618' r='368' fill='url(#paint0_linear_26_85)' />
              </g>
              <defs>
                <filter
                  id='filter0_f_26_85'
                  x='-614'
                  y='0'
                  width='1236'
                  height='1236'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'>
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='125' result='effect1_foregroundBlur_26_85' />
                </filter>
                <linearGradient
                  id='paint0_linear_26_85'
                  x1='-364'
                  y1='250'
                  x2='506.12'
                  y2='754.835'
                  gradientUnits='userSpaceOnUse'>
                  <stop stopColor='#FF8FE8' />
                  <stop offset='1' stopColor='#FFC960' />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </section>

        <section id='about' className='relative pt-[150px]'>
          <div className='container lg:max-w-[1120px]'>
            <div>
              <div className='-mx-4 flex flex-wrap items-center justify-between'>
                <div className='w-full px-4 lg:w-1/2'>
                  <div
                    className='wow fadeInUp relative z-10 mx-auto mb-14 w-full max-w-[470px] pb-6 lg:mx-0 lg:mb-0'
                    data-wow-delay='.2s'>
                    <img
                      src='/images/home/about/genie.png'
                      alt='about image'
                      className='mx-auto max-w-full'
                    />

                    <div className='absolute top-0 right-5 -z-10'>
                      <svg
                        width='72'
                        height='50'
                        viewBox='0 0 72 50'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <g clipPath='url(#clip0_33_10)'>
                          <path
                            d='M21.8126 0.216481C21.8159 0.143661 21.8196 0.071493 21.8237 0C21.8203 0.0723874 21.8165 0.144547 21.8126 0.216481C21.4747 7.63863 25.1425 21.8522 42.5976 21.0032C35.4678 21.503 21.3391 26.5685 21.822 42.8298C21.6005 35.7375 17.0094 21.7229 0.441399 21.645C0.291298 21.6473 0.144104 21.6477 0 21.6462C0.148069 21.6447 0.2952 21.6443 0.441399 21.645C7.47462 21.5363 20.8883 17.1617 21.8126 0.216481Z'
                            fill='#ff0050'
                          />
                          <path
                            d='M58.7832 24.2896C58.7851 24.2459 58.7874 24.2025 58.7898 24.1597C58.7878 24.2031 58.7855 24.2464 58.7832 24.2896C58.5804 28.7428 60.7811 37.271 71.2541 36.7616C66.9763 37.0614 58.499 40.1008 58.7888 49.8576C58.6559 45.6022 55.9013 37.1934 45.9605 37.1467C45.8704 37.1481 45.782 37.1482 45.6956 37.1474C45.7844 37.1465 45.8727 37.1462 45.9605 37.1467C50.1803 37.0815 58.2286 34.4567 58.7832 24.2896Z'
                            fill='#1e293b'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_33_10'>
                            <rect width='71.2541' height='49.8779' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className='w-full px-4 lg:w-1/2'>
                  <div className='wow fadeInUp lg:ml-auto lg:max-w-[510px]' data-wow-delay='.3s'>
                    <span className='mb-4 block text-lg font-medium text-redpraha md:text-[22px]'>
                      in Every Interaction
                    </span>
                    <h2 className='mb-4 text-3xl font-bold text-black  sm:text-4xl md:text-[44px] md:leading-tight'>
                      Crafting Satisfaction
                    </h2>
                    <p className='mb-[30px] text-base leading-relaxed text-body'>
                      At GenieAi, we pledge to deliver an exceptional service experience that meets
                      your specific needs.
                      <br />
                      Our commitment is not only to provide powerful tools but also to ensure your
                      complete satisfaction with every Genie interaction.
                    </p>

                    <div className='mb-[30px] flex items-center'>
                      <div className='shrink-0 mr-3 flex h-[60px] w-[60px] items-center justify-center rounded-full border border-stroke text-xl font-semibold text-black text-center '>
                        01
                      </div>
                      <div>
                        <h5 className='text-xl font-medium text-black '>Dynamic Review System</h5>
                        <p className='text-base text-body'>
                          We believe that the true value of our service is reflected in your
                          feedback. That's why we've implemented a dynamic review system that
                          captures your insights after each engagement. This transparent feedback
                          loop allows us to continually refine our Genies to offer personalized,
                          top-tier support
                        </p>
                      </div>
                    </div>

                    <div className='flex items-center'>
                      <div className='shrink-0 mr-3 flex h-[60px] w-[60px] items-center justify-center rounded-full border border-stroke text-xl font-semibold text-black  '>
                        02
                      </div>
                      <div>
                        <h5 className='text-xl font-medium text-black '>Measured Excellence</h5>
                        <p className='text-base text-body'>
                          Every wish you entrust to our Genies comes with an assurance of quality.
                          Our meticulous satisfaction metrics are designed to gauge success and
                          ensure that your expectations are not just met, but exceeded.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='absolute right-0 top-36 -z-10'>
            <svg
              width='95'
              height='190'
              viewBox='0 0 95 190'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <circle cx='95' cy='95' r='77' stroke='url(#paint0_linear_47_27)' strokeWidth='36' />
              <defs>
                <linearGradient
                  id='paint0_linear_47_27'
                  x1='0'
                  y1='0'
                  x2='224.623'
                  y2='130.324'
                  gradientUnits='userSpaceOnUse'>
                  <stop stopColor='#FF8FE8' />
                  <stop offset='1' stopColor='#FFC960' />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </section>

        <section id='work-process' className='relative z-10 pt-[110px]'>
          <div className='container'>
            <div
              className='wow fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]'
              data-wow-delay='.2s'>
              <h2 className='mb-4 text-3xl font-bold text-black  sm:text-4xl md:text-[44px] md:leading-tight'>
                Summon Your Genie
              </h2>
              <p className='text-base text-body'>
                Embark on a seamless journey to digital assistance with just a few simple steps.
              </p>
            </div>
          </div>

          <div className='container max-w-[1390px]'>
            <div className='rounded-2xl bg-white px-5 pt-14 pb-14 shadow-md md:pb-1 lg:pt-20 lg:pb-5 xl:px-10'>
              <div className='-mx-4 flex flex-wrap justify-center'>
                <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center'
                    data-wow-delay='.2s'>
                    <div className='mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-yellow-gradient-color text-redpraha duration-300 group-hover:bg-redpraha group-hover:text-white   '>
                      <Image
                        src='/images/home/works/wallet.png'
                        alt='feature image'
                        width={80}
                        height={80}
                      />
                    </div>
                    <h3 className='mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]'>
                      Connect your wallet
                    </h3>
                    <p className='text-base text-body'>
                      Begin by connecting your digital wallet. It's the key to unlocking a world of
                      possibilities. Don't worry, all our code is open source and available for your
                      perusal,{' '}
                      <a
                        className='underline'
                        target='_blank'
                        href='https://docs.talentlayer.org/get-a-platform-id'>
                        here
                      </a>
                    </p>
                  </div>
                </div>

                <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center'
                    data-wow-delay='.3s'>
                    <div className='mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-yellow-gradient-color text-redpraha duration-300 group-hover:bg-redpraha group-hover:text-white   '>
                      <Image
                        src='/images/home/works/choose.png'
                        alt='feature image'
                        width={80}
                        height={80}
                      />
                    </div>
                    <h3 className='mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]'>
                      Choose Your Genie
                    </h3>
                    <p className='text-base text-body'>
                      Browse through our array of specialized Genies. Whether you need guidance in
                      finance, legal advice, or creative brainstorming, pick the perfect Genie that
                      suits your query's domain
                    </p>
                  </div>
                </div>

                <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center'
                    data-wow-delay='.4s'>
                    <div className='mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-yellow-gradient-color text-redpraha duration-300 group-hover:bg-redpraha group-hover:text-white   '>
                      <Image
                        src='/images/home/works/magic.png'
                        alt='feature image'
                        width={80}
                        height={80}
                      />
                    </div>
                    <h3 className='mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]'>
                      Enjoy the Magic
                    </h3>
                    <p className='text-base text-body'>
                      Watch as your Genie provides tailored responses, solutions, and insights. With
                      GenieAi, you're not just asking questions; you're uncovering answers that can
                      propel you forward.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='absolute -top-28 left-0 -z-10 hidden md:block'>
            <svg
              width='632'
              height='1179'
              viewBox='0 0 632 1179'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <g opacity='0.25' filter='url(#filter0_f_38_24)'>
                <circle cx='42.5' cy='589.5' r='329.5' fill='url(#paint0_linear_38_24)' />
              </g>
              <defs>
                <filter
                  id='filter0_f_38_24'
                  x='-547'
                  y='0'
                  width='1179'
                  height='1179'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'>
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='130' result='effect1_foregroundBlur_38_24' />
                </filter>
                <linearGradient
                  id='paint0_linear_38_24'
                  x1='-366.218'
                  y1='919'
                  x2='451.176'
                  y2='349.901'
                  gradientUnits='userSpaceOnUse'>
                  <stop stopColor='#8EA5FE' />
                  <stop offset='0.541667' stopColor='#BEB3FD' />
                  <stop offset='1' stopColor='#90D1FF' />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className='absolute right-0 top-20 -z-10'>
            <svg
              width='637'
              height='1277'
              viewBox='0 0 637 1277'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <g opacity='0.2' filter='url(#filter0_f_38_23)'>
                <circle cx='638.5' cy='638.5' r='388.5' fill='url(#paint0_linear_38_23)' />
              </g>
              <defs>
                <filter
                  id='filter0_f_38_23'
                  x='0'
                  y='0'
                  width='1277'
                  height='1277'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'>
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='125' result='effect1_foregroundBlur_38_23' />
                </filter>
                <linearGradient
                  id='paint0_linear_38_23'
                  x1='250'
                  y1='250'
                  x2='1168.59'
                  y2='782.957'
                  gradientUnits='userSpaceOnUse'>
                  <stop stopColor='#FF8FE8' />
                  <stop offset='1' stopColor='#FFC960' />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </section>

        <section id='testimonials' className='relative z-10 pt-[110px] pb-[60px]'>
          <div className='container'>
            <div
              className='wow fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]'
              data-wow-delay='.2s'>
              <h2 className='mb-4 text-3xl font-bold text-black  sm:text-4xl md:text-[44px] md:leading-tight'>
                Discover Our Specialized Genie
              </h2>
              <p className='text-base text-body'>
                Unlock the power of personalized assistance with our Genie lineup. Each Genie is
                crafted to offer expert guidance in their realm of specialty. Dive into a world
                where your needs are understood and met with precision and care.
              </p>
            </div>
          </div>

          <div className='container overflow-hidden lg:max-w-[1160px]'>
            <div className='-mx-6 flex flex-wrap'>
              <div className='w-full px-6 lg:w-1/2'>
                <div
                  className='wow fadeInUp mb-[50px] rounded-lg bg-white py-9 px-7 shadow-md sm:px-9 lg:px-7 xl:px-9'
                  data-wow-delay='.2s'>
                  <div className='mb-5 border-b border-stroke'>
                    <p className='font-bold mb-4'>Legal Genie: Your Personal Counsel</p>
                    <p className='pb-9 text-base text-body'>
                      Experience the power of legal expertise at your fingertips. Our Legal Genie is
                      programmed to understand the nuances of law and provide you with advice that's
                      both accessible and reliable. From contract reviews to compliance queries,
                      your Legal Genie is at the ready to dispel uncertainties and illuminate the
                      best course of action.
                    </p>
                  </div>

                  <div className='items-center justify-between sm:flex lg:block xl:flex'>
                    <div className='mb-4 flex items-center sm:mb-0 lg:mb-4 xl:mb-0'>
                      <div className='mr-4 h-[56px] w-full max-w-[56px] rounded-full'>
                        <img
                          src='/images/home/testimonials/legal.png'
                          alt='author'
                          className='h-full w-full object-cover object-center'
                        />
                      </div>
                      <div>
                        <h5 className='text-bold font-medium text-black '>Expertise: </h5>
                        <p>Wide-ranging knowledge from property law to corporate regulations</p>
                      </div>
                    </div>

                    <div className='flex items-center space-x-3 sm:justify-end lg:justify-start xl:justify-end'>
                      <p className='text-base font-medium text-black '>5.0</p>
                      <div className='flex items-center space-x-[6px]'>
                        <span>
                          <svg
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <g clipPath='url(#clip0_49_480)'>
                              <path
                                d='M10 15.2171L4.1225 18.5071L5.435 11.9004L0.489166 7.32712L7.17833 6.53378L10 0.417114L12.8217 6.53378L19.5108 7.32712L14.565 11.9004L15.8775 18.5071L10 15.2171Z'
                                fill='#EABF23'
                              />
                            </g>
                            <defs>
                              <clipPath id='clip0_49_480'>
                                <rect
                                  width='20'
                                  height='20'
                                  fill='white'
                                  transform='translate(0 0.000488281)'
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span>
                          <svg
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <g clipPath='url(#clip0_49_480)'>
                              <path
                                d='M10 15.2171L4.1225 18.5071L5.435 11.9004L0.489166 7.32712L7.17833 6.53378L10 0.417114L12.8217 6.53378L19.5108 7.32712L14.565 11.9004L15.8775 18.5071L10 15.2171Z'
                                fill='#EABF23'
                              />
                            </g>
                            <defs>
                              <clipPath id='clip0_49_480'>
                                <rect
                                  width='20'
                                  height='20'
                                  fill='white'
                                  transform='translate(0 0.000488281)'
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span>
                          <svg
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <g clipPath='url(#clip0_49_480)'>
                              <path
                                d='M10 15.2171L4.1225 18.5071L5.435 11.9004L0.489166 7.32712L7.17833 6.53378L10 0.417114L12.8217 6.53378L19.5108 7.32712L14.565 11.9004L15.8775 18.5071L10 15.2171Z'
                                fill='#EABF23'
                              />
                            </g>
                            <defs>
                              <clipPath id='clip0_49_480'>
                                <rect
                                  width='20'
                                  height='20'
                                  fill='white'
                                  transform='translate(0 0.000488281)'
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span>
                          <svg
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <g clipPath='url(#clip0_49_480)'>
                              <path
                                d='M10 15.2171L4.1225 18.5071L5.435 11.9004L0.489166 7.32712L7.17833 6.53378L10 0.417114L12.8217 6.53378L19.5108 7.32712L14.565 11.9004L15.8775 18.5071L10 15.2171Z'
                                fill='#EABF23'
                              />
                            </g>
                            <defs>
                              <clipPath id='clip0_49_480'>
                                <rect
                                  width='20'
                                  height='20'
                                  fill='white'
                                  transform='translate(0 0.000488281)'
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span>
                          <svg
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <g clipPath='url(#clip0_49_480)'>
                              <path
                                d='M10 15.2171L4.1225 18.5071L5.435 11.9004L0.489166 7.32712L7.17833 6.53378L10 0.417114L12.8217 6.53378L19.5108 7.32712L14.565 11.9004L15.8775 18.5071L10 15.2171Z'
                                fill='#EABF23'
                              />
                            </g>
                            <defs>
                              <clipPath id='clip0_49_480'>
                                <rect
                                  width='20'
                                  height='20'
                                  fill='white'
                                  transform='translate(0 0.000488281)'
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-full px-6 lg:w-1/2'>
                <div
                  className='wow fadeInUp mb-[50px] rounded-lg bg-white py-9 px-7 shadow-md sm:px-9 lg:px-7 xl:px-9'
                  data-wow-delay='.3s'>
                  <div className='mb-5 border-b border-stroke'>
                    <p className='font-bold mb-4'>Health Advisor Genie: Your Wellness Guide</p>
                    <p className='pb-9 text-base text-body'>
                      Navigate the complexities of health and wellness with ease. Our Health Advisor
                      Genie brings forth a wealth of medical knowledge to assist you in making
                      informed decisions about your well-being. Whether it's understanding symptoms
                      or seeking health tips, your wellness is in good hands.
                    </p>
                  </div>

                  <div className='items-center justify-between sm:flex lg:block xl:flex'>
                    <div className='mb-4 flex items-center sm:mb-0 lg:mb-4 xl:mb-0'>
                      <div className='mr-4 h-[56px] w-full max-w-[56px] rounded-full'>
                        <img
                          src='/images/home/testimonials/doctor.png'
                          alt='author'
                          className='h-full w-full object-cover object-center'
                        />
                      </div>
                      <div>
                        <h5 className='text-bold font-medium text-black '>Expertise: </h5>
                        <p>
                          Provides compassionate guidance tailored to your personal health journey.
                        </p>
                      </div>
                    </div>

                    <div className='flex items-center space-x-3 sm:justify-end lg:justify-start xl:justify-end'>
                      <p className='text-base font-medium text-black '>5.0</p>
                      <div className='flex items-center space-x-[6px]'>
                        <span>
                          <svg
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <g clipPath='url(#clip0_49_480)'>
                              <path
                                d='M10 15.2171L4.1225 18.5071L5.435 11.9004L0.489166 7.32712L7.17833 6.53378L10 0.417114L12.8217 6.53378L19.5108 7.32712L14.565 11.9004L15.8775 18.5071L10 15.2171Z'
                                fill='#EABF23'
                              />
                            </g>
                            <defs>
                              <clipPath id='clip0_49_480'>
                                <rect
                                  width='20'
                                  height='20'
                                  fill='white'
                                  transform='translate(0 0.000488281)'
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span>
                          <svg
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <g clipPath='url(#clip0_49_480)'>
                              <path
                                d='M10 15.2171L4.1225 18.5071L5.435 11.9004L0.489166 7.32712L7.17833 6.53378L10 0.417114L12.8217 6.53378L19.5108 7.32712L14.565 11.9004L15.8775 18.5071L10 15.2171Z'
                                fill='#EABF23'
                              />
                            </g>
                            <defs>
                              <clipPath id='clip0_49_480'>
                                <rect
                                  width='20'
                                  height='20'
                                  fill='white'
                                  transform='translate(0 0.000488281)'
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span>
                          <svg
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <g clipPath='url(#clip0_49_480)'>
                              <path
                                d='M10 15.2171L4.1225 18.5071L5.435 11.9004L0.489166 7.32712L7.17833 6.53378L10 0.417114L12.8217 6.53378L19.5108 7.32712L14.565 11.9004L15.8775 18.5071L10 15.2171Z'
                                fill='#EABF23'
                              />
                            </g>
                            <defs>
                              <clipPath id='clip0_49_480'>
                                <rect
                                  width='20'
                                  height='20'
                                  fill='white'
                                  transform='translate(0 0.000488281)'
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span>
                          <svg
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <g clipPath='url(#clip0_49_480)'>
                              <path
                                d='M10 15.2171L4.1225 18.5071L5.435 11.9004L0.489166 7.32712L7.17833 6.53378L10 0.417114L12.8217 6.53378L19.5108 7.32712L14.565 11.9004L15.8775 18.5071L10 15.2171Z'
                                fill='#EABF23'
                              />
                            </g>
                            <defs>
                              <clipPath id='clip0_49_480'>
                                <rect
                                  width='20'
                                  height='20'
                                  fill='white'
                                  transform='translate(0 0.000488281)'
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span>
                          <svg
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <g clipPath='url(#clip0_49_480)'>
                              <path
                                d='M10 15.2171L4.1225 18.5071L5.435 11.9004L0.489166 7.32712L7.17833 6.53378L10 0.417114L12.8217 6.53378L19.5108 7.32712L14.565 11.9004L15.8775 18.5071L10 15.2171Z'
                                fill='#EABF23'
                              />
                            </g>
                            <defs>
                              <clipPath id='clip0_49_480'>
                                <rect
                                  width='20'
                                  height='20'
                                  fill='white'
                                  transform='translate(0 0.000488281)'
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='partners' className='relative z-10 pt-[110px]'>
          <div className='container'>
            <div
              className='wow fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]'
              data-wow-delay='.2s'>
              <h2 className='mb-4 text-3xl font-bold text-black  sm:text-4xl md:text-[44px] md:leading-tight'>
                GenieAi to the moon 🚀 with our partners
              </h2>
            </div>
          </div>

          <div className='container max-w-[1390px]'>
            <div className='rounded-2xl bg-white px-5 pt-14 pb-14 shadow-md md:pb-1 lg:pt-20 lg:pb-5 xl:px-10'>
              <div className='-mx-4 flex flex-wrap justify-center'>
                <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp group space-y-8 mx-auto mb-[60px] max-w-[310px] text-center'
                    data-wow-delay='.2s'>
                    <figure className='mx-auto flex items-center justify-center w-20 h-20 rounded-full p-4 bg-yellow-gradient-color text-black'>
                      <svg
                        className='h-12 w-auto'
                        width='28'
                        height='28'
                        viewBox='0 0 28 28'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M27.2045 12.7649C27.1629 12.9066 27.0477 13.0407 26.924 13.1026C26.8779 13.1256 26.8194 13.1435 26.74 13.1593C26.7298 13.1614 26.7193 13.1623 26.7088 13.1622C24.8863 13.133 23.0632 12.9743 21.2682 12.6717C20.7404 13.1083 20.2251 13.5567 19.7219 14.0278C20.2237 14.4861 20.7273 14.9223 21.2541 15.358C23.0621 15.0694 24.8857 14.8963 26.7247 14.8817H26.7259C26.7942 14.8817 26.8712 14.9025 26.9194 14.9186C27.2927 15.043 27.2805 15.6008 27.0413 15.8471C26.9501 15.9562 26.8055 16.0129 26.6686 16.0133C25.2334 16.0404 23.8111 16.1425 22.3901 16.3312C23.5217 17.1885 24.7031 17.9948 25.9344 18.7386C25.9362 18.7397 25.9381 18.7409 25.9399 18.7421L25.9459 18.7461C25.9839 18.7713 26.0443 18.8114 26.0897 18.8734C26.151 18.939 26.1734 19.0062 26.1878 19.0495L26.189 19.053C26.194 19.068 26.1965 19.0837 26.1965 19.0995C26.1965 19.1079 26.1971 19.1132 26.1981 19.1222C26.199 19.1306 26.2002 19.1422 26.2017 19.1625C26.2036 19.19 26.2059 19.2375 26.191 19.2865C26.1752 19.3492 26.1555 19.4113 26.113 19.475C26.1076 19.483 26.1015 19.4905 26.0946 19.4973C26.086 19.5059 26.0771 19.5156 26.0653 19.5283C26.0544 19.5402 26.0408 19.5548 26.0266 19.569C25.9985 19.5971 25.9597 19.632 25.9094 19.6571C25.83 19.6968 25.7487 19.7168 25.6525 19.7168C25.5639 19.7168 25.4576 19.6998 25.3653 19.6336C23.8074 18.702 22.3211 17.6697 20.9207 16.5366C20.2897 16.6433 19.6581 16.7734 19.0255 16.9164C19.2137 17.6218 19.4144 18.3254 19.6388 19.0166C21.2837 19.6459 22.8708 20.3897 24.4143 21.2338C24.4181 21.2359 24.4218 21.2381 24.4253 21.2405C24.4273 21.2418 24.4293 21.2431 24.4314 21.2445C24.4697 21.2699 24.5309 21.3105 24.5764 21.3735C24.6068 21.4085 24.6239 21.4483 24.6336 21.4735C24.6415 21.494 24.6497 21.52 24.6552 21.5373C24.6571 21.5432 24.6586 21.5481 24.6597 21.5514C24.6647 21.5664 24.6673 21.5821 24.6673 21.5979C24.6673 21.6063 24.6678 21.6116 24.6688 21.6206C24.6697 21.629 24.671 21.6406 24.6724 21.6609C24.6744 21.6884 24.6766 21.7358 24.6618 21.7848C24.6465 21.8451 24.6278 21.9048 24.5887 21.9658C24.5194 22.0971 24.3924 22.1735 24.2665 22.2095C24.2601 22.2113 24.2535 22.2127 24.2469 22.2136C24.1173 22.2322 23.9837 22.2142 23.8663 22.1555C23.8646 22.1547 23.8629 22.1538 23.8612 22.1529C22.6261 21.4746 21.3656 20.8716 20.0796 20.3323C20.5818 21.7202 21.1592 23.0927 21.7999 24.4143C21.8009 24.4163 21.8018 24.4184 21.8027 24.4206C21.8032 24.4216 21.8036 24.4227 21.8041 24.4238C21.8382 24.509 21.8587 24.5867 21.8587 24.6841C21.8587 24.7803 21.8144 24.8809 21.7844 24.9409C21.7804 24.9488 21.7758 24.9563 21.7705 24.9633C21.7684 24.9661 21.7663 24.969 21.764 24.972C21.725 25.0242 21.6623 25.1082 21.5716 25.1536C21.4922 25.1932 21.4108 25.2132 21.3146 25.2132C21.2353 25.2132 21.1273 25.194 21.0353 25.125C20.955 25.0648 20.8973 24.9868 20.8596 24.9115C20.0434 23.2655 19.3422 21.5472 18.7705 19.8001C18.0618 19.5346 17.3404 19.2929 16.606 19.0639C16.4557 19.5929 16.3269 20.1323 16.2095 20.6627C17.4453 22.1504 18.5659 23.7243 19.5714 25.3844C19.6535 25.5092 19.6732 25.6557 19.6327 25.7973C19.6321 25.7994 19.6315 25.8014 19.6308 25.8034C19.5926 25.9178 19.5157 26.0348 19.3964 26.1144C19.3406 26.1516 19.2674 26.1739 19.2303 26.1853C19.2237 26.1873 19.2183 26.1889 19.2143 26.1903C19.14 26.215 19.0485 26.215 18.9742 26.1903C18.911 26.1692 18.8525 26.1301 18.8128 26.1036L18.8068 26.0997C18.7377 26.0536 18.694 25.9877 18.6671 25.9474L18.6631 25.9413C18.6625 25.9404 18.6619 25.9394 18.6613 25.9385C18.6606 25.9375 18.66 25.9364 18.6594 25.9354C17.8353 24.5628 16.9343 23.2549 15.9441 22.0115C15.6544 23.5628 15.4564 25.1261 15.374 26.7017C15.3728 26.8492 15.3077 26.9716 15.2133 27.066C15.118 27.1612 14.9941 27.2266 14.8447 27.2266C14.7763 27.2266 14.6993 27.2057 14.6511 27.1896C14.5808 27.1662 14.5078 27.1187 14.4576 27.0436L14.4537 27.0376C14.4272 26.9979 14.3881 26.9395 14.367 26.8762C14.3445 26.8088 14.3446 26.729 14.3447 26.6892V26.6828C14.3447 26.6818 14.3447 26.6809 14.3448 26.6799C14.3448 26.6786 14.3448 26.6774 14.3449 26.6761C14.4324 24.7515 14.6928 22.8277 15.0831 20.9475C14.721 20.5211 14.3608 20.0987 13.9806 19.6977C13.5045 20.2284 13.0409 20.7594 12.5895 21.3017C12.8924 23.0803 13.0659 24.8868 13.1242 26.6928C13.1242 26.6943 13.1243 26.6959 13.1243 26.6975C13.1243 26.7634 13.1048 26.8375 13.089 26.8858C13.0684 26.964 13.0298 27.0257 12.9882 27.0704C12.9385 27.1386 12.8696 27.1822 12.8031 27.2043C12.755 27.2204 12.6779 27.2413 12.6096 27.2413C12.5268 27.2413 12.4636 27.2202 12.4196 27.2055L12.416 27.2043C12.4037 27.2002 12.3919 27.1944 12.381 27.1872L12.3752 27.1833C12.3389 27.1592 12.2899 27.1266 12.2512 27.0906C12.183 27.0409 12.1394 26.9721 12.1172 26.9056C12.1013 26.858 12.0807 26.7823 12.0802 26.7146C12.0395 25.2781 11.9108 23.8412 11.7058 22.4156C10.8346 23.5485 10.0272 24.7314 9.29522 25.9642C9.29252 25.9687 9.28962 25.9731 9.28642 25.9774C9.28432 25.9801 9.28222 25.983 9.27992 25.986C9.24272 26.0358 9.18392 26.1146 9.09982 26.1611C9.01322 26.2226 8.92452 26.2419 8.83052 26.2419C8.75232 26.2419 8.64612 26.2232 8.55492 26.1565C8.55392 26.1558 8.55282 26.1551 8.55182 26.1544C8.51352 26.129 8.45232 26.0884 8.40682 26.0254C8.37632 25.9904 8.35932 25.9506 8.34962 25.9254C8.34172 25.9049 8.33342 25.8789 8.32802 25.8616C8.32612 25.8557 8.32452 25.8508 8.32342 25.8475C8.31842 25.8325 8.31592 25.8168 8.31592 25.801V25.6541C8.31592 25.5669 8.33892 25.4955 8.38242 25.429C9.30072 23.8852 10.334 22.3989 11.4684 20.9984C11.3617 20.3684 11.2314 19.7383 11.0775 19.1082C10.4601 19.2939 9.84352 19.4921 9.22742 19.7131C8.64182 21.503 7.94072 23.2645 7.10982 24.9547C7.10872 24.9569 7.10752 24.9591 7.10632 24.9612C7.10552 24.9626 7.10472 24.9641 7.10392 24.9655C7.04852 25.0576 6.99062 25.1154 6.91902 25.1691C6.91492 25.1721 6.91072 25.1749 6.90642 25.1775C6.81012 25.2353 6.72522 25.2573 6.62492 25.2573C6.54072 25.2573 6.45952 25.236 6.38272 25.1977C6.37722 25.1949 6.37192 25.1919 6.36692 25.1885C6.36492 25.1872 6.36292 25.1859 6.36082 25.1845C6.32272 25.1592 6.26182 25.1188 6.21632 25.0562C6.16882 25.0032 6.13422 24.9269 6.11782 24.8775C6.11662 24.874 6.11552 24.8704 6.11462 24.8667C6.09552 24.7903 6.09552 24.7308 6.09552 24.6734V24.6694C6.09552 24.6027 6.11522 24.5195 6.15822 24.4505C6.82822 23.0694 7.42152 21.6503 7.92612 20.205C6.59502 20.7336 5.29132 21.338 4.03862 22.0182C3.9689 22.0626 3.88412 22.0829 3.81634 22.0829C3.81435 22.0829 3.81223 22.0829 3.80998 22.0829C3.77007 22.0829 3.6903 22.0831 3.6228 22.0606C3.56985 22.043 3.48595 22.0046 3.43298 21.9516C3.39302 21.9117 3.35662 21.8571 3.33027 21.8175L3.32638 21.8117C3.27913 21.7408 3.25757 21.653 3.25757 21.5832C3.25757 21.5812 3.25757 21.5791 3.25756 21.5768C3.25748 21.5369 3.25732 21.4572 3.27982 21.3897C3.3009 21.3265 3.33999 21.2681 3.36651 21.2284C3.36787 21.2264 3.3692 21.2244 3.37049 21.2224C3.41658 21.1533 3.48249 21.1096 3.52288 21.0828C3.52496 21.0814 3.52697 21.0801 3.52891 21.0788C3.53234 21.0765 3.53587 21.0744 3.53947 21.0724C5.09882 20.2131 6.71522 19.4833 8.37452 18.8688C8.58402 18.2219 8.77022 17.5628 8.94402 16.9018C8.31122 16.7588 7.67942 16.6287 7.04832 16.5219C5.64782 17.655 4.16152 18.6873 2.60368 19.6189C2.51136 19.6851 2.40502 19.7021 2.31648 19.7021C2.23756 19.7021 2.14111 19.6832 2.05956 19.6424C1.99002 19.6077 1.90158 19.5476 1.85088 19.4524C1.81666 19.3978 1.7958 19.3296 1.78496 19.2942C1.78296 19.2877 1.7813 19.2823 1.77996 19.2782C1.7552 19.204 1.7552 19.1126 1.77996 19.0383C1.80104 18.9751 1.84014 18.9166 1.86666 18.877L1.87064 18.871C1.91672 18.8019 1.98262 18.7582 2.02301 18.7314C2.0251 18.73 2.02711 18.7287 2.02905 18.7274C2.03086 18.7262 2.0327 18.725 2.03456 18.7239C3.26781 17.9789 4.46302 17.1716 5.59702 16.302C4.17202 16.1112 2.73622 15.9974 1.30111 15.9839C1.23531 15.9837 1.16163 15.9644 1.11342 15.9486C1.03185 15.9271 0.960172 15.8834 0.909092 15.8137C0.858412 15.761 0.817343 15.7012 0.794763 15.6336L0.793602 15.6301C0.778902 15.586 0.757812 15.5229 0.757812 15.4401C0.757812 15.2848 0.816552 15.1442 0.918512 15.0423C1.01847 14.9424 1.15836 14.8817 1.30187 14.8817H1.30304C3.14116 14.8962 4.97932 15.0549 6.78912 15.3576C7.30482 14.9338 7.81812 14.4993 8.30852 14.0425C7.81712 13.5715 7.30212 13.123 6.77362 12.6859C4.96572 12.9745 3.14205 13.1476 1.30304 13.1622H1.30187C1.23353 13.1622 1.15652 13.1413 1.10833 13.1253C1.04204 13.1032 0.973442 13.0598 0.923782 12.992C0.873112 12.9393 0.832043 12.8795 0.809473 12.8119C0.808283 12.8083 0.807233 12.8047 0.806313 12.801C0.804503 12.7938 0.802442 12.786 0.800272 12.7778C0.788252 12.7325 0.772512 12.6732 0.772512 12.6037C0.772512 12.4607 0.832803 12.3292 0.900143 12.2283C0.905513 12.2202 0.911672 12.2127 0.918512 12.2059C1.01365 12.1108 1.13734 12.0455 1.28646 12.0453C2.73674 12.0317 4.17442 11.9304 5.61132 11.7412C4.47692 10.8695 3.28178 10.0498 2.04926 9.30534C2.04376 9.30194 2.03849 9.29834 2.03347 9.29434C1.93617 9.21654 1.86176 9.10384 1.82408 8.99084C1.779 8.85574 1.80376 8.70594 1.88534 8.58364C1.96107 8.47014 2.06208 8.38764 2.20256 8.34754C2.34442 8.30704 2.48514 8.32793 2.60281 8.38673C2.60642 8.38853 2.60995 8.39054 2.61339 8.39264C4.17302 9.33954 5.66082 10.3872 7.07652 11.5356C7.71002 11.4168 8.34032 11.2978 8.95892 11.1572C8.77042 10.4387 8.56922 9.73223 8.34422 9.02643C6.70052 8.38363 5.10032 7.64064 3.57169 6.81134C3.43674 6.74284 3.35853 6.61403 3.32205 6.48643C3.32021 6.47993 3.31881 6.47344 3.31787 6.46684C3.30186 6.35484 3.29518 6.20553 3.3852 6.07053C3.38649 6.06863 3.38783 6.06664 3.38922 6.06454C3.41449 6.02644 3.4548 5.96583 3.51721 5.92043C3.58228 5.86113 3.66301 5.83644 3.6994 5.82524C3.70403 5.82384 3.70795 5.82264 3.71102 5.82164C3.71459 5.82044 3.71821 5.81933 3.72186 5.81843C3.79832 5.79933 3.85787 5.79934 3.91527 5.79934H3.91927C4.00562 5.79934 4.07652 5.82194 4.14242 5.86454C5.36402 6.54264 6.62302 7.15774 7.91942 7.69814C7.41862 6.30914 6.85382 4.93634 6.21322 3.61493C6.21222 3.61289 6.21122 3.61082 6.21032 3.60874C6.15672 3.48361 6.13372 3.34537 6.17472 3.20185C6.21422 3.06374 6.31092 2.94387 6.43362 2.87963C6.50312 2.836 6.58702 2.81602 6.65432 2.81602C6.65632 2.81602 6.65842 2.81603 6.66062 2.81602C6.70052 2.81594 6.78032 2.81578 6.84782 2.83827C6.91112 2.85934 6.96962 2.89842 7.00932 2.92492C7.01132 2.92628 7.01332 2.9276 7.01522 2.92889C7.02332 2.93426 7.03082 2.94041 7.03762 2.94725C7.07762 2.98719 7.11402 3.04184 7.14042 3.0814C7.14172 3.08338 7.14302 3.08532 7.14422 3.08722C7.14792 3.09273 7.15122 3.09846 7.15412 3.10441C7.95552 4.75003 8.65632 6.46774 9.22802 8.21504C9.92112 8.47964 10.6269 8.72064 11.3457 8.94894C11.4877 8.41704 11.6274 7.87683 11.745 7.33683C10.5237 5.84953 9.40312 4.27553 8.41182 2.61475C8.37592 2.55942 8.35432 2.48861 8.34312 2.45228C8.34112 2.44574 8.33952 2.44032 8.33812 2.43631C8.31572 2.36893 8.31362 2.28744 8.33192 2.21745C8.33632 2.1744 8.35102 2.13793 8.36452 2.11102C8.37972 2.08063 8.39882 2.05197 8.41232 2.03172L8.41412 2.02909C8.46022 1.96 8.52612 1.91627 8.56652 1.88947C8.56862 1.88808 8.57062 1.88675 8.57252 1.88545C8.62842 1.84824 8.70152 1.82587 8.73872 1.81452C8.74522 1.81252 8.75062 1.81086 8.75462 1.80953C8.82712 1.7854 8.91582 1.78478 8.98902 1.80769C9.02982 1.81839 9.06382 1.83335 9.08882 1.8449C9.09592 1.84818 9.10202 1.85099 9.10722 1.85342C9.12422 1.86134 9.13262 1.86527 9.14172 1.86831C9.15412 1.87244 9.16592 1.87821 9.17682 1.88545C9.24592 1.93151 9.28972 1.99736 9.31652 2.03773C9.31792 2.03982 9.31922 2.04184 9.32052 2.04378C9.32202 2.04602 9.32342 2.0483 9.32482 2.05062C10.1341 3.42154 11.0334 4.72844 12.0109 5.97134C12.2985 4.43334 12.4834 2.87049 12.5657 1.29465C12.5659 1.29026 12.5663 1.28588 12.567 1.28153C12.5862 1.14717 12.6449 1.02982 12.7409 0.933855C12.8503 0.824535 12.9958 0.787935 13.1243 0.787935C13.2637 0.787935 13.397 0.845395 13.4772 0.905505C13.4871 0.912935 13.496 0.921595 13.5038 0.931265C13.5794 1.02578 13.6389 1.16014 13.6389 1.30231C13.6389 1.30489 13.6388 1.30746 13.6387 1.31003C13.5367 3.24767 13.2906 5.15704 12.8863 7.03804C13.2474 7.46124 13.6195 7.87383 13.994 8.28703C14.4799 7.76973 14.943 7.24014 15.3941 6.69804C15.0912 4.91954 14.9179 3.11266 14.8741 1.30586V1.30231C14.8741 1.17397 14.9107 1.02848 15.0201 0.919155C15.1154 0.823915 15.2393 0.758545 15.3887 0.758545C15.4571 0.758545 15.5341 0.779425 15.5823 0.795475C15.5947 0.799605 15.6065 0.805375 15.6174 0.812615L15.6232 0.816495C15.6595 0.840635 15.7084 0.873215 15.7471 0.909235C15.8153 0.958895 15.859 1.0277 15.8811 1.09418C15.897 1.14177 15.9176 1.21751 15.9181 1.28521C15.9588 2.72158 16.0875 4.14584 16.2925 5.56954C17.1638 4.43664 17.9713 3.25458 18.7035 2.03499C18.7047 2.033 18.7059 2.03103 18.7072 2.02909C18.7085 2.02715 18.7099 2.02513 18.7113 2.02305C18.7365 1.98512 18.7766 1.92469 18.8387 1.87932C18.9043 1.81804 18.9715 1.79573 19.0148 1.78132L19.0184 1.78013C19.0334 1.77514 19.0491 1.77258 19.0649 1.77258C19.0733 1.77258 19.0786 1.77202 19.0876 1.77105C19.096 1.77015 19.1076 1.76891 19.1279 1.76745C19.1554 1.76549 19.2029 1.76324 19.2519 1.77807C19.3122 1.79331 19.3719 1.81208 19.433 1.85113C19.5643 1.92035 19.6408 2.04734 19.6768 2.17311C19.6783 2.17844 19.6795 2.18384 19.6804 2.18931C19.7 2.30661 19.6815 2.45582 19.6228 2.57312C19.6211 2.57661 19.6192 2.58003 19.6172 2.58337C18.6844 4.12734 17.6508 5.59974 16.5162 6.98614C16.6355 7.63084 16.7666 8.27504 16.9095 8.90804C17.5233 8.73294 18.1379 8.52504 18.7563 8.31474C19.3424 6.49554 20.0582 4.71964 20.9035 3.01529C20.9752 2.87198 21.1134 2.81145 21.2093 2.77948C21.3446 2.73441 21.4739 2.76071 21.5863 2.81684C21.5955 2.82147 21.6043 2.82707 21.6124 2.83354C21.6903 2.89586 21.7929 2.9917 21.8365 3.12226C21.8371 3.12428 21.8378 3.12632 21.8383 3.12837C21.8746 3.25528 21.8766 3.38879 21.8365 3.50914C21.8344 3.51519 21.832 3.5211 21.8292 3.52684C21.1427 4.94024 20.5337 6.37884 20.0139 7.85474C21.3602 7.32674 22.6686 6.73363 23.9512 6.05173C23.9559 6.04923 23.9607 6.04704 23.9657 6.04504C24.0769 6.00054 24.2163 6.00374 24.3314 6.04204C24.4521 6.08224 24.5566 6.16414 24.6198 6.28714C24.6822 6.39434 24.6989 6.53054 24.6802 6.64484C24.658 6.79694 24.5698 6.90023 24.4797 6.97223C24.4728 6.97783 24.4653 6.98274 24.4575 6.98694C22.8843 7.83134 21.2538 8.56074 19.5802 9.17514C19.3848 9.79234 19.2121 10.4104 19.0405 11.0415C19.6871 11.1962 20.3349 11.3281 20.9951 11.4478C22.3825 10.3283 23.8552 9.30984 25.3848 8.37804C25.3883 8.37584 25.3919 8.37394 25.3955 8.37204C25.5132 8.31324 25.6539 8.29234 25.7958 8.33284C25.9363 8.37294 26.0373 8.45544 26.113 8.56894C26.1164 8.57404 26.1195 8.57933 26.1222 8.58473C26.1706 8.68143 26.2189 8.80813 26.1788 8.96033C26.1542 9.11073 26.0642 9.21404 25.9546 9.28714C25.9527 9.28844 25.9507 9.28964 25.9487 9.29084C24.7314 10.0208 23.5636 10.826 22.4453 11.6835C23.8557 11.8741 25.2768 11.9876 26.6973 12.0012C26.7631 12.0013 26.8367 12.0207 26.8849 12.0364C26.9665 12.058 27.0382 12.1017 27.0893 12.1714C27.1399 12.2241 27.181 12.2838 27.2036 12.3515C27.2048 12.3551 27.2058 12.3587 27.2067 12.3623C27.2086 12.3696 27.2106 12.3773 27.2128 12.3855C27.2248 12.4309 27.2405 12.4902 27.2405 12.5596C27.2405 12.6392 27.2215 12.7136 27.2045 12.7649ZM18.2684 15.962C18.2728 15.9606 18.2772 15.9593 18.2816 15.9583C18.401 15.9306 18.5199 15.9028 18.6385 15.8751C19.0486 15.7794 19.4545 15.6846 19.8596 15.5951C19.4071 15.2082 18.9659 14.8016 18.536 14.3846L18.5345 14.383C18.4392 14.2878 18.3737 14.1639 18.3737 14.0146C18.3737 13.8652 18.4392 13.7414 18.5345 13.6461C18.5355 13.6451 18.5365 13.6441 18.5376 13.6431C18.9811 13.2252 19.425 12.8178 19.8879 12.4117C19.3506 12.3043 18.8141 12.1776 18.2785 12.0407C18.2751 12.0398 18.2717 12.0388 18.2684 12.0377C18.2052 12.0167 18.1467 11.9776 18.107 11.9511L18.101 11.9471C18.0319 11.9011 17.9881 11.8352 17.9613 11.7948C17.9599 11.7927 17.9586 11.7907 17.9573 11.7888C17.9501 11.7779 17.9443 11.7661 17.9402 11.7537C17.9386 11.749 17.9361 11.7429 17.9314 11.7319C17.9273 11.7224 17.9207 11.7073 17.9148 11.692C17.9039 11.6636 17.8918 11.6255 17.8891 11.5796C17.8736 11.5083 17.8721 11.4296 17.8938 11.3592C18.0336 10.7753 18.1846 10.1903 18.3563 9.61404C17.7862 9.80124 17.2225 9.97644 16.6471 10.1298C16.6347 10.1331 16.622 10.1348 16.6092 10.1348H16.521C16.4246 10.1348 16.2842 10.1206 16.1817 10.0182C16.1794 10.0159 16.177 10.0135 16.1745 10.011C16.1208 9.95764 16.0338 9.87103 16.0095 9.73923C15.872 9.18953 15.7453 8.62954 15.6291 8.07734C15.2142 8.55554 14.7809 9.01414 14.3501 9.47004L14.3487 9.47153C14.3477 9.47253 14.3468 9.47353 14.3458 9.47453C14.2505 9.56973 14.1266 9.63513 13.9771 9.63513C13.8454 9.63513 13.7062 9.57223 13.6085 9.47453C13.6073 9.47333 13.6061 9.47213 13.6049 9.47083C13.2567 9.09803 12.919 8.72514 12.583 8.34354C12.4679 8.81224 12.3425 9.28084 12.2068 9.74944C12.2054 9.75414 12.2039 9.75873 12.2021 9.76313C12.1676 9.84933 12.1077 9.95753 11.9941 10.0256C11.9076 10.0775 11.8076 10.1201 11.6832 10.1201H11.5803C11.566 10.1201 11.5517 10.118 11.538 10.1139C10.8924 9.92034 10.246 9.71524 9.59912 9.48864C9.78592 10.1194 9.95152 10.7513 10.1058 11.3937C10.1085 11.405 10.1098 11.4165 10.1098 11.428C10.1098 11.4417 10.1107 11.4502 10.1119 11.4631C10.1128 11.4718 10.1138 11.4826 10.115 11.4984C10.1171 11.5277 10.1179 11.5644 10.1095 11.607C10.1066 11.6879 10.0831 11.7552 10.041 11.8182C10.0397 11.8201 10.0384 11.8221 10.037 11.8242C10.0102 11.8646 9.96642 11.9304 9.89732 11.9765C9.83662 12.0169 9.77662 12.0369 9.73402 12.0511L9.72992 12.0524C9.72582 12.0538 9.72172 12.055 9.71752 12.056C9.19632 12.18 8.66262 12.3045 8.12652 12.4115C8.58022 12.8061 9.03192 13.2123 9.46232 13.6299L9.46392 13.6314C9.55922 13.7267 9.62462 13.8505 9.62462 13.9999C9.62462 14.1492 9.55922 14.2731 9.46392 14.3683L9.46232 14.3699C9.03062 14.7887 8.58842 15.1853 8.13652 15.5778C8.66422 15.6895 9.18512 15.8048 9.70642 15.9409C9.75052 15.9449 9.78792 15.96 9.81532 15.9737C9.84572 15.9889 9.87442 16.008 9.89472 16.0215L9.89732 16.0233C9.96642 16.0693 10.0102 16.1352 10.037 16.1756C10.0384 16.1776 10.0397 16.1797 10.041 16.1816C10.0483 16.1925 10.054 16.2043 10.0582 16.2166L10.0585 16.2176C10.0732 16.2617 10.0894 16.3102 10.1054 16.3744C10.1243 16.4498 10.1279 16.5351 10.1047 16.6108C9.96362 17.2126 9.80052 17.8139 9.62512 18.4142C10.185 18.2273 10.7476 18.0524 11.3218 17.8994C11.3263 17.8982 11.3309 17.8972 11.3355 17.8964C11.4551 17.8765 11.5895 17.8963 11.7049 17.954C11.7103 17.9567 11.7156 17.9598 11.7207 17.9632C11.8343 18.0389 11.9168 18.1398 11.9569 18.2802C11.9573 18.2815 11.9577 18.2829 11.958 18.2842C12.096 18.8232 12.2232 19.3831 12.3396 19.9365C12.7512 19.4587 13.1733 19.0004 13.6055 18.543C13.6059 18.5426 13.6063 18.5422 13.6067 18.5418C13.6073 18.5412 13.6079 18.5406 13.6085 18.54C13.7037 18.4448 13.8277 18.3794 13.9771 18.3794C14.1266 18.3794 14.2505 18.4448 14.3458 18.54L14.3476 18.5418C14.6968 18.9033 15.0352 19.275 15.3714 19.6565C15.4865 19.1911 15.6119 18.7329 15.7474 18.265C15.748 18.2632 15.7486 18.2613 15.7492 18.2594C15.7703 18.1962 15.8094 18.1377 15.8359 18.0981L15.8399 18.0921C15.886 18.023 15.9518 17.9793 15.9922 17.9525C15.9943 17.9511 15.9963 17.9498 15.9983 17.9485C16.0692 17.9013 16.1571 17.8797 16.2269 17.8797C16.2289 17.8797 16.231 17.8797 16.2332 17.8797C16.2726 17.8796 16.3507 17.8795 16.4175 17.901C17.0805 18.0959 17.743 18.3136 18.4046 18.5437C18.2249 17.9105 18.0475 17.2659 17.8926 16.6207C17.8899 16.6095 17.8885 16.598 17.8885 16.5864C17.8885 16.5727 17.8877 16.5642 17.8864 16.5514C17.8855 16.5426 17.8845 16.5319 17.8834 16.5161C17.8813 16.4867 17.8805 16.4501 17.8888 16.4074C17.8917 16.3265 17.9153 16.2593 17.9573 16.1963C17.9586 16.1944 17.9599 16.1923 17.9613 16.1903C17.9881 16.1499 18.0319 16.084 18.101 16.038C18.1617 15.9975 18.2218 15.9776 18.2643 15.9634L18.2684 15.962Z'
                          fill='black'
                        />
                      </svg>
                    </figure>

                    {/*</div>*/}
                    <h3 className='mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]'>
                      WAKU
                    </h3>
                    <p className='text-base text-body'>
                      A family of robust, censorship-resistant communication protocols designed to
                      enable privacy-focused messaging for web3 apps.
                    </p>
                  </div>
                </div>

                <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp space-y-8 group mx-auto mb-[60px] max-w-[310px] text-center'
                    data-wow-delay='.3s'>
                    {/*<div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-yellow-gradient-color bg-opacity-20 text-yellow-400 duration-300 group-hover:bg-yellow-gradient-color group-hover:text-white   ">*/}
                    {/*<Image*/}
                    {/*    src="/bounties/sismo.png"*/}
                    {/*    alt="author"*/}
                    {/*    className="h-full w-full object-contain"*/}
                    {/*    width={90}*/}
                    {/*    height={90}*/}
                    {/*/>*/}
                    <figure className='mx-auto flex items-center justify-center w-20 h-20 rounded-full p-4 bg-yellow-gradient-color text-black'>
                      <svg
                        className='h-12 w-auto'
                        width='39'
                        height='50'
                        viewBox='0 0 39 50'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M31.5098 2.87116L26.248 11.9652L29.5526 13.9139L34.8143 4.81982L31.5098 2.87116Z'
                          fill='currentColor'></path>
                        <path d='M21.1685 0H17.3415V10.6139H21.1685V0Z' fill='currentColor'></path>
                        <path
                          d='M7.00496 2.87238L3.67579 4.77778L8.83415 13.9635L12.1633 12.0581L7.00496 2.87238Z'
                          fill='currentColor'></path>
                        <path
                          d='M17.3465 39.4183L17.3318 49.9946L21.1588 50L21.1734 39.4237L17.3465 39.4183Z'
                          fill='currentColor'></path>
                        <path
                          d='M38.5135 28.1246H34.6866C34.6866 19.5356 27.7645 12.5475 19.2568 12.5475C10.749 12.5475 3.82696 19.5356 3.82696 28.1246H0C0 17.4046 8.63818 8.68399 19.2568 8.68399C29.8753 8.68399 38.5135 17.4046 38.5135 28.1246Z'
                          fill='currentColor'></path>
                        <path
                          d='M19.2567 41.3505C12.0127 41.3505 6.12068 35.4022 6.12068 28.0891C6.12068 20.776 12.0127 14.8277 19.2567 14.8277C26.5006 14.8277 32.3927 20.776 32.3927 28.0891C32.3927 35.4022 26.5006 41.3505 19.2567 41.3505ZM19.2567 18.6912C14.1236 18.6912 9.94763 22.907 9.94763 28.0891C9.94763 33.2712 14.1236 37.487 19.2567 37.487C24.3898 37.487 28.5657 33.2712 28.5657 28.0891C28.5657 22.907 24.3898 18.6912 19.2567 18.6912Z'
                          fill='currentColor'></path>
                      </svg>
                    </figure>

                    {/*</div>*/}
                    <h3 className='mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]'>
                      SISMO
                    </h3>
                    <p className='text-base text-body'>
                      Sismo Connect is a single sign-on (SSO) enabling applications to request any
                      data aggregated in a user’s Data Vault
                    </p>
                  </div>
                </div>

                <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp group space-y-8 mx-auto mb-[60px] max-w-[310px] text-center'
                    data-wow-delay='.4s'>
                    {/*<div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-yellow-gradient-color bg-opacity-20 text-yellow-400 duration-300 group-hover:bg-yellow-gradient-color group-hover:text-white   ">*/}
                    {/*<Image*/}
                    {/*    src="/bounties/railgun.png"*/}
                    {/*    alt="author"*/}
                    {/*    className="h-full w-full object-contain"*/}
                    {/*    width={90}*/}
                    {/*    height={90}*/}
                    {/*/>*/}

                    <figure className='mx-auto flex items-center justify-center w-20 h-20 rounded-full p-4 bg-yellow-gradient-color text-black'>
                      <svg
                        className='w-auto h-10'
                        width='39'
                        height='40'
                        viewBox='0 0 39 40'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M36.8008 11.1999C36.8008 7.89985 35.3008 4.79985 32.8008 2.69985C30.7008 0.899853 28.1008 0.0998535 24.7008 0.0998535H9.10078V4.99985H0.300781V11.3999H24.9008V5.49985C26.4008 5.39985 27.8008 5.89985 29.0008 6.69985C30.4008 7.79985 31.1008 9.49985 31.0008 11.1999C31.0008 14.5999 28.8008 17.4999 24.2008 17.4999H9.10078V39.9999H15.1008V22.9999H22.8008L31.0008 39.9999H38.2008L29.0008 22.1999C33.8008 20.6999 36.9008 16.1999 36.8008 11.1999Z'
                          fill='#070100'
                        />
                      </svg>
                    </figure>

                    {/*</div>*/}
                    <h3 className='mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]'>
                      Railgun
                    </h3>
                    <p className='text-base text-body'>
                      A community project for peer-to-peer privacy in DeFi.
                    </p>
                  </div>
                </div>
                <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp space-y-8 group mx-auto mb-[60px] max-w-[310px] text-center'
                    data-wow-delay='.4s'>
                    <figure className='mx-auto flex items-center justify-center w-20 h-20 rounded-full p-4 bg-yellow-gradient-color text-black'>
                      <svg
                        className='w-auto h-10'
                        width='22'
                        height='28'
                        viewBox='0 0 22 28'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M9.33331 15.5555C5.89695 15.5555 3.1111 12.7698 3.1111 9.3333C3.1111 5.89676 5.89695 3.1111 9.33331 3.1111C12.7698 3.1111 15.5555 5.89676 15.5555 9.3333C15.5555 12.7698 12.7698 15.5555 9.33331 15.5555ZM9.33331 0C14.4879 0 18.6666 4.17868 18.6666 9.3333C18.6666 14.4879 14.4879 18.6666 9.33331 18.6666C4.17868 18.6666 0 14.4879 0 9.3333C0 4.17868 4.17868 0 9.33331 0ZM18.2111 19.1221C18.8186 19.7297 18.8186 20.7145 18.2111 21.322L11.9887 27.5444C11.3812 28.1519 10.3964 28.1519 9.78884 27.5444C9.18133 26.9369 9.18133 25.952 9.78884 25.3445L16.0112 19.1221C16.6187 18.5146 17.6035 18.5146 18.2111 19.1221ZM21.7777 1.55555C21.7777 2.41478 21.0814 3.1111 20.2223 3.1111C19.3631 3.1111 18.6668 2.41478 18.6668 1.55555C18.6668 0.69632 19.3631 0 20.2223 0C21.0814 0 21.7777 0.69632 21.7777 1.55555Z'
                          fill='currentColor'
                        />
                      </svg>
                    </figure>

                    <h3 className='mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]'>
                      The Graph
                    </h3>
                    <p className='text-base text-body'>
                      The Graph is an indexing protocol for organizing blockchain data and making it
                      easily accessible with GraphQL
                    </p>
                  </div>
                </div>
                <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp space-y-8 group mx-auto mb-[60px] max-w-[310px] text-center'
                    data-wow-delay='.4s'>
                    {/*<div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-yellow-gradient-color bg-opacity-20 text-yellow-400 duration-300 group-hover:bg-yellow-gradient-color group-hover:text-white   ">*/}
                    {/*    <Image*/}
                    {/*        src="/bounties/peanuts.ico"*/}
                    {/*        alt="author"*/}
                    {/*        className="h-full w-full object-contain"*/}
                    {/*        width={90}*/}
                    {/*        height={90}*/}
                    {/*    />*/}
                    {/*</div>*/}

                    <figure className='mx-auto flex items-center justify-center w-20 h-20 rounded-full p-4 bg-yellow-gradient-color text-black'>
                      <svg
                        className='w-auto h-10'
                        width='400'
                        height='400'
                        viewBox='0 0 400 400'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <g clip-path='url(#clip0_206_3718)'>
                          <path
                            d='M265.57 170.591C245.78 166.939 223.026 139.869 220.983 117.561C218.569 90.7662 211.392 62.6624 192.202 39.8434C151.858 -8.20281 103.764 8.71717 61.8995 45.6957C23.2445 79.7227 19.7249 127.553 60.178 175.688C79.3683 198.507 103.36 212.476 127.044 216.824C146.834 220.475 169.588 247.545 171.632 269.854C174.046 296.648 184.991 324.255 204.281 347.064C244.624 395.11 306.162 403.725 341.556 366.421C376.951 329.117 372.979 259.752 332.536 211.716C313.246 188.907 289.255 174.939 265.57 170.591Z'
                            fill='#F1F333'
                            stroke='black'
                            stroke-width='12'
                            stroke-miterlimit='10'
                          />
                          <path
                            d='M346.625 350.549L345.002 352.328C341.144 356.756 334.37 357.367 329.943 353.509L305.518 332.547C301.101 328.788 300.578 321.905 304.337 317.488L305.85 315.62C309.709 311.192 316.482 310.581 320.909 314.439L345.334 335.401C349.961 339.238 350.483 346.121 346.625 350.549Z'
                            fill='#FFC900'
                          />
                          <path
                            d='M347.996 301.436L346.462 303.106C342.792 307.413 336.108 307.914 331.811 304.344L308.155 284.005C303.848 280.335 303.357 273.751 307.027 269.443L308.551 267.674C312.22 263.367 318.905 262.866 323.201 266.436L346.857 286.775C351.175 290.544 351.676 297.228 347.996 301.436Z'
                            fill='#FFC900'
                          />
                          <path
                            d='M339.5 250.244L337.966 251.914C334.296 256.221 327.612 256.722 323.315 253.152L299.659 232.813C295.352 229.143 294.861 222.558 298.531 218.251L300.054 216.482C303.724 212.175 310.409 211.674 314.705 215.244L338.361 235.583C342.679 239.352 343.169 245.937 339.5 250.244Z'
                            fill='#FFC900'
                          />
                          <path
                            d='M293.222 349.525L291.6 351.304C287.741 355.732 280.968 356.343 276.54 352.485L252.116 331.523C247.698 327.764 247.176 320.881 250.935 316.464L252.448 314.596C256.306 310.168 263.08 309.557 267.507 313.415L291.932 334.377C296.558 338.214 297.081 345.097 293.222 349.525Z'
                            fill='#FFC900'
                          />
                          <path
                            d='M293.765 301.103L292.143 302.882C288.284 307.31 281.511 307.921 277.083 304.063L252.659 283.101C248.241 279.342 247.719 272.459 251.478 268.042L252.991 266.174C256.849 261.746 263.622 261.135 268.05 264.993L292.475 285.955C297.002 289.803 297.514 296.587 293.765 301.103Z'
                            fill='#FFC900'
                          />
                          <path
                            d='M284.98 248.131L283.357 249.911C279.499 254.338 272.726 254.949 268.298 251.091L243.873 230.129C239.456 226.37 238.934 219.487 242.693 215.07L244.206 213.202C248.064 208.774 254.837 208.163 259.265 212.021L283.69 232.983C288.316 236.82 288.839 243.704 284.98 248.131Z'
                            fill='#FFC900'
                          />
                          <path
                            d='M147.948 162.18C157.888 163.951 167.996 161.582 175.424 154.768C182.852 147.954 186.047 138.166 185.19 128.101'
                            stroke='black'
                            stroke-width='12'
                            strokeLinecap='round'
                            stroke-linejoin='round'
                          />
                          <path
                            d='M121.049 156.666C124.451 160.33 124.151 166.093 120.477 169.395C116.812 172.797 111.049 172.498 107.648 168.833C104.246 165.169 104.545 159.406 108.22 156.104C111.984 152.692 117.747 152.991 121.049 156.666Z'
                            fill='black'
                          />
                          <path
                            d='M191.607 93.2429C195.009 96.9074 194.709 102.67 191.035 105.973C187.37 109.374 181.607 109.075 178.205 105.41C174.804 101.746 175.103 95.9831 178.778 92.6809C182.453 89.3786 188.205 89.5784 191.607 93.2429Z'
                            fill='black'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_206_3718'>
                            <rect width='400' height='400' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    </figure>

                    <h3 className='mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]'>
                      Peanuts Protocol
                    </h3>
                    <p className='text-base text-body'>Send tokens with a trustless payment link</p>
                  </div>
                </div>
                <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp space-y-8 group mx-auto mb-[60px] max-w-[310px] text-center'
                    data-wow-delay='.4s'>
                    {/*<div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-yellow-gradient-color bg-opacity-20 text-yellow-400 duration-300 group-hover:bg-yellow-gradient-color group-hover:text-white   ">*/}
                    {/*    <Image*/}
                    {/*        src="/bounties/peanuts.ico"*/}
                    {/*        alt="author"*/}
                    {/*        className="h-full w-full object-contain"*/}
                    {/*        width={90}*/}
                    {/*        height={90}*/}
                    {/*    />*/}
                    {/*</div>*/}

                    <figure className='mx-auto flex items-center justify-center w-20 h-20 rounded-full p-4 bg-yellow-gradient-color text-black'>
                      <Image
                        src='/bounties/brian_logo.png'
                        alt='author'
                        className='h-full w-full object-contain'
                        width={90}
                        height={90}
                      />
                    </figure>

                    <h3 className='mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]'>
                      Brian - IA
                    </h3>
                    <p className='text-base text-body'>Use AI to provide info in the Dao Chat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='absolute -top-28 left-0 -z-10 hidden md:block'>
            <svg
              width='632'
              height='1179'
              viewBox='0 0 632 1179'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <g opacity='0.25' filter='url(#filter0_f_38_24)'>
                <circle cx='42.5' cy='589.5' r='329.5' fill='url(#paint0_linear_38_24)' />
              </g>
              <defs>
                <filter
                  id='filter0_f_38_24'
                  x='-547'
                  y='0'
                  width='1179'
                  height='1179'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'>
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='130' result='effect1_foregroundBlur_38_24' />
                </filter>
                <linearGradient
                  id='paint0_linear_38_24'
                  x1='-366.218'
                  y1='919'
                  x2='451.176'
                  y2='349.901'
                  gradientUnits='userSpaceOnUse'>
                  <stop stopColor='#8EA5FE' />
                  <stop offset='0.541667' stopColor='#BEB3FD' />
                  <stop offset='1' stopColor='#90D1FF' />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className='absolute right-0 top-20 -z-10'>
            <svg
              width='637'
              height='1277'
              viewBox='0 0 637 1277'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <g opacity='0.2' filter='url(#filter0_f_38_23)'>
                <circle cx='638.5' cy='638.5' r='388.5' fill='url(#paint0_linear_38_23)' />
              </g>
              <defs>
                <filter
                  id='filter0_f_38_23'
                  x='0'
                  y='0'
                  width='1277'
                  height='1277'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'>
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='BackgroundImageFix'
                    result='shape'
                  />
                  <feGaussianBlur stdDeviation='125' result='effect1_foregroundBlur_38_23' />
                </filter>
                <linearGradient
                  id='paint0_linear_38_23'
                  x1='250'
                  y1='250'
                  x2='1168.59'
                  y2='782.957'
                  gradientUnits='userSpaceOnUse'>
                  <stop stopColor='#FF8FE8' />
                  <stop offset='1' stopColor='#FFC960' />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </section>

        <section id='faq' className='relative z-10 bg-[#F8FAFB] py-[110px] '>
          <div className='container'>
            <div
              className='wow fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]'
              data-wow-delay='.2s'>
              <h2 className='mb-4 text-3xl font-bold text-black  sm:text-4xl md:text-[44px] md:leading-tight'>
                Frequently Asked Questions
              </h2>
              <p className='text-base text-body'>
                Find answers to commonly asked questions about our Genie.
              </p>
            </div>

            <div
              className='faqs wow fadeInUp mx-auto w-full max-w-[785px] rounded-lg bg-white px-6 py-[6px] shadow-car'
              data-wow-delay='.3s'>
              <div className='faq border-b border-stroke last-of-type:border-none'>
                <button className='faq-btn relative flex w-full justify-between pt-6 pb-1 px-[18px] text-left text-base font-medium text-black  sm:px-[26px] sm:text-lg'>
                  How does GenieAi protect my private data?
                </button>
                <div className='pb-4 h-auto overflow-hidden px-[18px] sm:px-[26px]'>
                  <p className='text-base text-body'>
                    Each piece of your data is shrouded in iExec's encryption the moment it's
                    shared, ensuring a secure passage from your hands to your Genie's wisdom.
                  </p>
                </div>
              </div>

              <div className='faq border-b border-stroke last-of-type:border-none'>
                <button className='faq-btn relative flex w-full justify-between pt-6 pb-1 px-[18px] text-left text-base font-medium text-black  sm:px-[26px] sm:text-lg'>
                  Can I trust that my interactions are anonymous?
                </button>
                <div className='pb-4 h-auto overflow-hidden px-[18px] sm:px-[26px]'>
                  <p className='text-base text-body'>
                    Yes, the spells of anonymity ensure that your secrets are kept, and your
                    identity remains an enigma.
                  </p>
                </div>
              </div>

              <div className='faq border-b border-stroke last-of-type:border-none'>
                <button className='faq-btn relative flex w-full justify-between pt-6 pb-1 px-[18px] text-left text-base font-medium text-black  sm:px-[26px] sm:text-lg'>
                  What kind of data can I safely share with my Genie?
                </button>
                <div className='pb-4 h-auto overflow-hidden px-[18px] sm:px-[26px]'>
                  <p className='text-base text-body'>
                    From the mundane to the most private—resumes, photos, contracts—entrust them to
                    your Genie without hesitation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='absolute right-0 -top-24 -z-10'>
            <svg
              width='95'
              height='190'
              viewBox='0 0 95 190'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <circle cx='95' cy='95' r='77' stroke='url(#paint0_linear_49_603)' strokeWidth='36' />
              <defs>
                <linearGradient
                  id='paint0_linear_49_603'
                  x1='0'
                  y1='0'
                  x2='224.623'
                  y2='130.324'
                  gradientUnits='userSpaceOnUse'>
                  <stop stopColor='#FF8FE8' />
                  <stop offset='1' stopColor='#FFC960' />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className='absolute left-0 -bottom-24 -z-10'>
            <svg
              width='95'
              height='190'
              viewBox='0 0 95 190'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <circle cy='95' r='77' stroke='url(#paint0_linear_52_83)' strokeWidth='36' />
              <defs>
                <linearGradient
                  id='paint0_linear_52_83'
                  x1='-117.84'
                  y1='190'
                  x2='117.828'
                  y2='25.9199'
                  gradientUnits='userSpaceOnUse'>
                  <stop stopColor='#0f172a' />
                  <stop stopColor='#FF8FE8' />
                  <stop offset='1' stopColor='#FFC960' />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </section>

        <section id='support' className='pt-[100px] pb-[110px]'>
          <div className='container'>
            <div
              className='wow fadeInUp mx-auto mb-10 max-w-[690px] text-center'
              data-wow-delay='.2s'>
              <h2 className='mb-4 text-3xl font-bold text-black  sm:text-4xl md:text-[44px] md:leading-tight'>
                Need any help?
              </h2>
              <p className='text-base font text-body'>
                Please contact us by rubbing the Lamp or sending us an email at{' '}
                hello@iwantacontactyourgenie.genie
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className='wow fadeInUp bg-redpraha py-7' data-wow-delay='.2s'>
          <div className='container max-w-[1390px]'>
            <div className='-mx-3 flex flex-wrap'>
              <div className='order-last w-full px-3 lg:order-first lg:w-1/3'>
                <p className='mt-4 text-center text-base text-white lg:mt-0 lg:text-left'>
                  &copy; 2023 GenieAi - ETH Istanbul Hackathon
                </p>
              </div>

              <div className='w-full px-3 md:w-1/2 lg:w-1/3'>
                <div className='mb-4 flex items-center justify-center space-x-5 md:mb-0 md:justify-start lg:justify-center'>
                  <a
                    href='https://twitter.com/TalentLayer'
                    className='text-white opacity-70 hover:opacity-100'
                    target='_blank'
                    aria-label='social icon'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <g clipPath='url(#clip0_53_166)'>
                        <path
                          d='M22.162 5.65593C21.3986 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4804 3.89489 16.571 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52833 8.31345 7.04329 7.56059C5.55824 6.80773 4.24813 5.75098 3.198 4.45893C2.82629 5.09738 2.63095 5.82315 2.632 6.56193C2.632 8.01193 3.37 9.29293 4.492 10.0429C3.82801 10.022 3.17863 9.84271 2.598 9.51993V9.57193C2.5982 10.5376 2.93237 11.4735 3.54385 12.221C4.15533 12.9684 5.00648 13.4814 5.953 13.6729C5.33661 13.84 4.69031 13.8646 4.063 13.7449C4.32987 14.5762 4.85001 15.3031 5.55059 15.824C6.25118 16.345 7.09713 16.6337 7.97 16.6499C7.10248 17.3313 6.10918 17.8349 5.04688 18.1321C3.98458 18.4293 2.87413 18.5142 1.779 18.3819C3.6907 19.6114 5.9161 20.2641 8.189 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.2301 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z'
                          fill='white'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_53_166'>
                          <rect width='24' height='24' fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>

                  <a
                    href='https://twitter.com/xmtp_'
                    className='text-white opacity-70 hover:opacity-100'
                    target='_blank'
                    aria-label='social icon'
                    style={{ transform: `rotateY(180deg)` }}>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <g clipPath='url(#clip0_53_166)'>
                        <path
                          d='M22.162 5.65593C21.3986 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4804 3.89489 16.571 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52833 8.31345 7.04329 7.56059C5.55824 6.80773 4.24813 5.75098 3.198 4.45893C2.82629 5.09738 2.63095 5.82315 2.632 6.56193C2.632 8.01193 3.37 9.29293 4.492 10.0429C3.82801 10.022 3.17863 9.84271 2.598 9.51993V9.57193C2.5982 10.5376 2.93237 11.4735 3.54385 12.221C4.15533 12.9684 5.00648 13.4814 5.953 13.6729C5.33661 13.84 4.69031 13.8646 4.063 13.7449C4.32987 14.5762 4.85001 15.3031 5.55059 15.824C6.25118 16.345 7.09713 16.6337 7.97 16.6499C7.10248 17.3313 6.10918 17.8349 5.04688 18.1321C3.98458 18.4293 2.87413 18.5142 1.779 18.3819C3.6907 19.6114 5.9161 20.2641 8.189 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.2301 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z'
                          fill='white'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_53_166'>
                          <rect width='24' height='24' fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
