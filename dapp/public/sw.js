if (!self.define) {
  let e,
    s = {};
  const a = (a, i) => (
    (a = new URL(a + '.js', i).href),
    s[a] ||
      new Promise(s => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, c) => {
    const n = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (s[n]) return;
    let r = {};
    const o = e => a(e, n),
      d = { module: { uri: n }, exports: r, require: o };
    s[n] = Promise.all(i.map(e => d[e] || o(e))).then(e => (c(...e), r));
  };
}
define(['./workbox-588899ac'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/_next/static/chunks/100-356b1ee431d62eda.js', revision: '356b1ee431d62eda' },
        { url: '/_next/static/chunks/101.2952a83d96f73d37.js', revision: '2952a83d96f73d37' },
        { url: '/_next/static/chunks/134.0fe30acdb069b24c.js', revision: '0fe30acdb069b24c' },
        { url: '/_next/static/chunks/16829283-b817cf43b9de354b.js', revision: 'b817cf43b9de354b' },
        { url: '/_next/static/chunks/189.3101ed14142e79ed.js', revision: '3101ed14142e79ed' },
        { url: '/_next/static/chunks/209.e668d0ac43847a54.js', revision: 'e668d0ac43847a54' },
        { url: '/_next/static/chunks/341-42e5b1483ed121a0.js', revision: '42e5b1483ed121a0' },
        { url: '/_next/static/chunks/343.50d6f256bbc4c549.js', revision: '50d6f256bbc4c549' },
        { url: '/_next/static/chunks/400-3ae1b06203c94106.js', revision: '3ae1b06203c94106' },
        { url: '/_next/static/chunks/411-a1cda2b4d961a314.js', revision: 'a1cda2b4d961a314' },
        { url: '/_next/static/chunks/416.f2df1d2854800efb.js', revision: 'f2df1d2854800efb' },
        { url: '/_next/static/chunks/422.8de6e8696d8471aa.js', revision: '8de6e8696d8471aa' },
        { url: '/_next/static/chunks/66-9da1ad7a26a9e63f.js', revision: '9da1ad7a26a9e63f' },
        { url: '/_next/static/chunks/730-55de434410d6bb4d.js', revision: '55de434410d6bb4d' },
        { url: '/_next/static/chunks/764.e72ed715a6addc57.js', revision: 'e72ed715a6addc57' },
        { url: '/_next/static/chunks/893-5d9cf275ea0af324.js', revision: '5d9cf275ea0af324' },
        { url: '/_next/static/chunks/897.a662f7e505bcee3d.js', revision: 'a662f7e505bcee3d' },
        { url: '/_next/static/chunks/909.49dfd03721c6c868.js', revision: '49dfd03721c6c868' },
        { url: '/_next/static/chunks/95b64a6e-aabc50edb6aa9d4c.js', revision: 'aabc50edb6aa9d4c' },
        { url: '/_next/static/chunks/framework-467b11a89995b152.js', revision: '467b11a89995b152' },
        { url: '/_next/static/chunks/main-1863fa28c081cf57.js', revision: '1863fa28c081cf57' },
        {
          url: '/_next/static/chunks/pages/Layout-f249e45342b25cbb.js',
          revision: 'f249e45342b25cbb',
        },
        {
          url: '/_next/static/chunks/pages/_app-2ff02712fb4d1195.js',
          revision: '2ff02712fb4d1195',
        },
        {
          url: '/_next/static/chunks/pages/_error-a59e2db023c5e431.js',
          revision: 'a59e2db023c5e431',
        },
        {
          url: '/_next/static/chunks/pages/dapp-7aa4e9f07c24e805.js',
          revision: '7aa4e9f07c24e805',
        },
        {
          url: '/_next/static/chunks/pages/dapp/dev/create-b641a49e2c147d02.js',
          revision: 'b641a49e2c147d02',
        },
        {
          url: '/_next/static/chunks/pages/dapp/genie/%5Bid%5D-3109c6c7534c4438.js',
          revision: '3109c6c7534c4438',
        },
        {
          url: '/_next/static/chunks/pages/dapp/profile-958c1abe844e05d8.js',
          revision: '958c1abe844e05d8',
        },
        {
          url: '/_next/static/chunks/pages/dapp/profile/%5Bid%5D-ec6ea2aeeea31227.js',
          revision: 'ec6ea2aeeea31227',
        },
        {
          url: '/_next/static/chunks/pages/dapp/profile/edit-6b2a68724bc42b24.js',
          revision: '6b2a68724bc42b24',
        },
        {
          url: '/_next/static/chunks/pages/index-d51b2f4b5680ce3f.js',
          revision: 'd51b2f4b5680ce3f',
        },
        {
          url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
          revision: '837c0df77fd5009c9e46d446188ecfd0',
        },
        { url: '/_next/static/chunks/webpack-fba690ba63a3ecab.js', revision: 'fba690ba63a3ecab' },
        { url: '/_next/static/css/2e1e6dcce8a006a1.css', revision: '2e1e6dcce8a006a1' },
        {
          url: '/_next/static/eTM1xZH5zfyitz8kPfY5L/_buildManifest.js',
          revision: '5edd455930e2fda1ab52084e2af8c029',
        },
        {
          url: '/_next/static/eTM1xZH5zfyitz8kPfY5L/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        { url: '/android-chrome-192x192.png', revision: 'f346d7c185eddd8f5352c151689ec924' },
        { url: '/android-chrome-384x384.png', revision: '8e40a5e2c3ae1e2163b40f5a7afeaa71' },
        { url: '/apple-touch-icon.png', revision: 'fb3441223739822fdc24335603859b24' },
        { url: '/browserconfig.xml', revision: 'a493ba0aa0b8ec8068d786d7248bb92c' },
        { url: '/favicon-16x16.png', revision: '8fd52148096e4c5171d5336bc8358f2f' },
        { url: '/favicon-32x32.png', revision: '3357e21ce14168ad8e1e758f1ccc2860' },
        { url: '/favicon.ico', revision: '89fb810d0a60831fce764d10824d46ad' },
        { url: '/fonts/Inter-Black.woff', revision: '1ede379289f9fdbf1611dfc4912f2fe0' },
        { url: '/fonts/Inter-Black.woff2', revision: 'edf1baa02cd941c61d54610f955f49c6' },
        { url: '/fonts/Inter-Bold.woff', revision: 'a0e8358d58e034584e0df3a2e85df70d' },
        { url: '/fonts/Inter-Bold.woff2', revision: '231f444dc08212ed0133d8ea5c95c670' },
        { url: '/fonts/Inter-ExtraBold.woff', revision: '5bcb79898181c4bb98fcfb51396ae5bc' },
        { url: '/fonts/Inter-ExtraBold.woff2', revision: '27153fbca673d878c6c2d5f66d1c79e3' },
        { url: '/fonts/Inter-ExtraLight.woff', revision: '89a33fa26bd5081092b3242a139a82c6' },
        { url: '/fonts/Inter-ExtraLight.woff2', revision: '096d2525ccd66102732d46ea8ace2a03' },
        { url: '/fonts/Inter-Light.woff', revision: '4217570ca501e21a22fa7626e894f0c4' },
        { url: '/fonts/Inter-Light.woff2', revision: '46884d02ecfedca5fc5787381e9d1963' },
        { url: '/fonts/Inter-Medium.woff', revision: '6b5a42f0603ea013e7099c2160e007e7' },
        { url: '/fonts/Inter-Medium.woff2', revision: '943a67750859470af9d9989ae91aef35' },
        { url: '/fonts/Inter-Regular.woff', revision: 'ea2c76b525641c2051cdf7d930e465ba' },
        { url: '/fonts/Inter-Regular.woff2', revision: 'a90c493e75dbd61aec1195dbb9bb6b06' },
        { url: '/fonts/Inter-SemiBold.woff', revision: '0b0032825214b711197bfcd54966edbb' },
        { url: '/fonts/Inter-SemiBold.woff2', revision: '920533ddd1d6ea543f7fc3e89b4556bb' },
        { url: '/fonts/Inter-Thin.woff', revision: 'b9326ea96d9a02d16a42ef63432dc0a5' },
        { url: '/fonts/Inter-Thin.woff2', revision: '273c722a93e65e139f45f82635196f68' },
        { url: '/fonts/stylesheet.css', revision: 'b6035a16df2d89f674555c3560fd72b8' },
        { url: '/images/android-chrome-192x192.png', revision: '6ffceedb1544001d998ef209c14af73d' },
        { url: '/images/android-chrome-512x512.png', revision: 'de3ca3888ae02f042f1b57acad6da697' },
        { url: '/images/apple-touch-icon.png', revision: 'bc0477e5ca2c50322467ab2fd03fcb02' },
        { url: '/images/blockchain/134.png', revision: '8c80c89d60da0bbb16e0f7e2f479a7c4' },
        { url: '/images/blockchain/80001.png', revision: '17c35f38d7fbe13881e55a236690dfad' },
        { url: '/images/browserconfig.xml', revision: 'c22c8bde647ceabec6cd286966715ee6' },
        { url: '/images/check_green_circle.svg', revision: '46570f0809131134c01dc096e50739fc' },
        { url: '/images/default-avatar-0.jpeg', revision: '042235ac5d2a7184a8fdd623878962ae' },
        { url: '/images/default-avatar-1.jpg', revision: '0eaafef2f42b9f680dad75bffdb2f7e5' },
        { url: '/images/default-avatar-10.jpeg', revision: '0110da3e24fb6492681985e53eb3da25' },
        { url: '/images/default-avatar-11.jpeg', revision: 'af89d9900be44fa4e2cd1dd8e632fca1' },
        { url: '/images/default-avatar-2.jpeg', revision: 'bdf82c2f057689f84e5cbf78f59eb0ff' },
        { url: '/images/default-avatar-3.jpeg', revision: '042235ac5d2a7184a8fdd623878962ae' },
        { url: '/images/default-avatar-4.jpeg', revision: '72d0368559a01c877acc44802be1b335' },
        { url: '/images/default-avatar-5.jpeg', revision: 'c423dd3135d226ae8f738beba8b21780' },
        { url: '/images/default-avatar-6.jpeg', revision: '0eda28e66fa8473e454c2af80252142c' },
        { url: '/images/default-avatar-7.jpeg', revision: '7e3a9183e6396b4c413a97a06bf4270b' },
        { url: '/images/default-avatar-8.jpeg', revision: '26b6d37ee78de72e64777c1684c21c29' },
        { url: '/images/default-avatar-9.jpeg', revision: '306c085fbc1fa100d9a6e4349ad38562' },
        { url: '/images/favicon-16x16.png', revision: 'b87c9e69f006de4b3b647dd52b457dce' },
        { url: '/images/favicon-32x32.png', revision: '2b044e9a4674db5c387604fad2a36b99' },
        { url: '/images/favicon.ico', revision: 'fbb656c7d61a07fa75d8efee32e550cb' },
        { url: '/images/favicon.svg', revision: '1b9e36d4008f41654fdfc873766417b2' },
        {
          url: '/images/home/about/about-1-light.png',
          revision: 'e94dd2d3e7c1f0ab2fb557c83e6f0cc9',
        },
        { url: '/images/home/about/genie.png', revision: '7714a11c0098af75b446e84c8276543e' },
        { url: '/images/home/features/anony.png', revision: '356b498cd30becb63a3806b4033d6a6e' },
        { url: '/images/home/features/encrypt.png', revision: '5eba3118b46dd8553cc0c21db5d400d7' },
        { url: '/images/home/features/pay.png', revision: '4c57015ac8fb430e6e33d35f37912ebd' },
        {
          url: '/images/home/features/reputation.png',
          revision: 'e88c1aa2c2908ee50e6e6e577492692a',
        },
        { url: '/images/home/features/ring.png', revision: 'f2aaf98511f6873479427bc0fcf2eeeb' },
        { url: '/images/home/features/spectrum.png', revision: '92fec40a533e85a76beca760e1fffded' },
        { url: '/images/home/graphics/texture.svg', revision: 'e971f922440126082abc41a68456ce46' },
        { url: '/images/home/hero/hero-doctor.png', revision: '97d3fe3951ed66dc00bcfa52c77977c1' },
        {
          url: '/images/home/screens/mobile-frame.png',
          revision: 'eefb795b8e1e465eeb286dca65b50da3',
        },
        {
          url: '/images/home/testimonials/doctor.png',
          revision: '6ca59d999162deb309fea460d4109b3a',
        },
        {
          url: '/images/home/testimonials/legal.png',
          revision: 'eb4827355840fab7d3ae2f5cc5805e95',
        },
        { url: '/images/home/works/choose.png', revision: '790329d6a459fdd86056af2982a5fbe9' },
        { url: '/images/home/works/magic.png', revision: '9ebeea71a436570a1e7a62cf460c7e4e' },
        { url: '/images/home/works/wallet.png', revision: 'ca9dd71bb547ef429171c634974ca08a' },
        { url: '/images/matic.png', revision: '17c35f38d7fbe13881e55a236690dfad' },
        { url: '/images/mstile-150x150.png', revision: '01259b75b321d01e87b21fcfa139abfe' },
        { url: '/images/purple_checkmark.svg', revision: '05f847858a79095e73d59daf212fbf53' },
        { url: '/images/safari-pinned-tab.svg', revision: '5f56489f72cf0b08bf16217a54b64008' },
        { url: '/images/shapes/shape1.png', revision: 'c0e46854ebdfdae4ee10a40c1d396a01' },
        { url: '/images/shapes/shape33.png', revision: '122851f3469493218ffd1eed54fbf05b' },
        {
          url: '/images/sismo-badges/sismo_10jobs.svg',
          revision: 'f7fe732c8767bc3da1ab6defd75dc94a',
        },
        {
          url: '/images/sismo-badges/sismo_10jobs4stars.svg',
          revision: 'b099994c38d7f51db24b2e8dc07d3ced',
        },
        {
          url: '/images/sismo-badges/sismo_10jobs5stars.svg',
          revision: 'e160198b6ded024e62360bf13e8f8829',
        },
        {
          url: '/images/sismo-badges/sismo_10jobs_graphic.svg',
          revision: 'f24cdae48a46401521cc9322222afcf1',
        },
        {
          url: '/images/sismo-badges/sismo_10jobs_php.svg',
          revision: '8684ed141cd1f3d992b6ecc6f5811c58',
        },
        {
          url: '/images/sismo-badges/sismo_10jobs_sol.svg',
          revision: '0b335767d5e30f876790f6ddde886f95',
        },
        {
          url: '/images/sismo-badges/sismo_1earned.svg',
          revision: 'e1a80c02718506b081d9e41e4e9b771d',
        },
        {
          url: '/images/sismo-badges/sismo_1jobs.svg',
          revision: 'b1b9c42b7b7e088c8212070cd0f29309',
        },
        {
          url: '/images/sismo-badges/sismo_1jobs_graphic.svg',
          revision: '36db9eb5df7afeee36ade205c6c15d11',
        },
        {
          url: '/images/sismo-badges/sismo_1jobs_php.svg',
          revision: 'dbed272027a84f18305b18d106b6e091',
        },
        {
          url: '/images/sismo-badges/sismo_1jobs_sol.svg',
          revision: 'afbbcdfd5432f27eaf16ac1b6aaeb7d9',
        },
        {
          url: '/images/sismo-badges/sismo_200earned.svg',
          revision: 'e814f64d2b3e6a4db9f40d88a9966dee',
        },
        {
          url: '/images/sismo-badges/sismo_20jobs.svg',
          revision: 'ca3bcf8c1b1434ac391bff9aa77179b3',
        },
        {
          url: '/images/sismo-badges/sismo_20jobs4stars.svg',
          revision: '633a7feaffc11f921727a9cbdde9102b',
        },
        {
          url: '/images/sismo-badges/sismo_20jobs5stars.svg',
          revision: 'd9b7f4e1aa77822d673d72045d0d0a2f',
        },
        {
          url: '/images/sismo-badges/sismo_20jobs_graphic.svg',
          revision: '967ed14c709f35d86f7afb3a07365175',
        },
        {
          url: '/images/sismo-badges/sismo_20jobs_php.svg',
          revision: '1a81d7a646ae2b905438d1f30d994db8',
        },
        {
          url: '/images/sismo-badges/sismo_20jobs_sol.svg',
          revision: '01d1b98a06f538edb49bc5f59c272749',
        },
        {
          url: '/images/sismo-badges/sismo_500earned.svg',
          revision: '15ad23686c1f3360ac708217e3fd62d3',
        },
        {
          url: '/images/sismo-badges/sismo_5jobs4stars.svg',
          revision: 'c855f5b52c70972677ba5ad4113ec212',
        },
        {
          url: '/images/sismo-badges/sismo_5jobs5stars.svg',
          revision: 'd25080b18e0528eefded546c6773e1b2',
        },
        {
          url: '/images/sismo-badges/sismo_talentofmonth_graphic.svg',
          revision: '524ec5732c59f3e11f6f10e5670c1fcb',
        },
        {
          url: '/images/sismo-badges/sismo_talentofmonth_php.svg',
          revision: 'e0a1a78185062f550bd16fb105389b7e',
        },
        {
          url: '/images/sismo-badges/sismo_talentofmonth_sol.svg',
          revision: 'ed8e24cc4474bd29bc09e77edb8fa395',
        },
        {
          url: '/images/sismo-badges/sismo_workedforaave.svg',
          revision: '38c71064b7113314dd9707eab4b6e08c',
        },
        {
          url: '/images/sismo-badges/sismo_workedfordoge.svg',
          revision: '836b6aadf4514fe747e5a6b94b2f0dac',
        },
        {
          url: '/images/sismo-badges/sismo_workedforgitcoin.svg',
          revision: 'c2c0182599a3e8e86f3eab22878eb266',
        },
        { url: '/images/site.webmanifest', revision: '16ce9348ed8042c80163269502e90f4f' },
        { url: '/logo.png', revision: 'da179aa5a24a9e833e6f6a2057ca6256' },
        { url: '/mstile-150x150.png', revision: 'e90d18ff8cf9465b3bc785ea7f4cb976' },
        { url: '/safari-pinned-tab.svg', revision: '6fef0aeb306c995a6627a1a0f6281b78' },
        { url: '/site.webmanifest', revision: '43c0e65ddba1e6458f65084b9379d90b' },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: s, event: a, state: i }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, { status: 200, statusText: 'OK', headers: s.headers })
                : s,
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
      }),
      'GET',
    );
});
