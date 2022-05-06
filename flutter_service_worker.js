'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "54e0887f2dd7a4e2cfa2594e198b09e0",
".git/config": "83a1e0c220995a25918ea8cf49ab2b59",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b14ba16b3211a52780a1676bf4ac149f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "406f41a229cae69d70508fe971c76a10",
".git/logs/refs/heads/master": "406f41a229cae69d70508fe971c76a10",
".git/logs/refs/remotes/origin/master": "679f8a4d767750237684040ae3409b14",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/83ee52a639c6ccd6b95bcc3ff6a467344be228": "9e887c25ae2ab3e5e42e8b111f44e184",
".git/objects/05/55b75f5f639c23d74b0e8cdc4e14766be6765f": "dba606e569071c67319a26ffdd0b0de7",
".git/objects/09/09ba0a6cf1d7ee1e41014a4240730f4d1baca1": "fece74882d529d0c1d3683a02a66f830",
".git/objects/0b/7af782cb5f4b164ef38fefa53256e73d71aa66": "654b869eaf21ea94ef86b880146f3fdb",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/0cce21591a81e8bbc96a978d6b9c55049cf0fe": "a32750b1578cec283fd2f1b460f1c933",
".git/objects/0e/cabe1f70a1b23b2089541343cbe1c92e84a087": "ffd0074f13970ee4c2a00852f09552bf",
".git/objects/1a/abe1fcecc25b27de5a2e1224455f5277f07f8a": "c3af48fca451ad1354de887fdec647d5",
".git/objects/1a/b5eb1471d081da6add62e0b8ccb41b7b72964b": "ca758b066ce4ba9580f96d08628577e6",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/24/decdf282b519dae5858988d8ef83afe7021ec2": "0d409a707b3a5c96f9fc710e4d5bff62",
".git/objects/28/b37a5eabe841d0cca85790d0a714d3250a23d1": "04e0e5f3411af7d0c3178a3423ba8e1e",
".git/objects/29/aedab621d76c7505356a555b4649e2abbaf91e": "eeecc47ac23591511da446210db70232",
".git/objects/2b/075e5f76befc7f83d8f61796ead766a923402a": "5c21d3b93b59d248286811c3ea97e31c",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/8b74812f3a144acf45e91fd2258a44c80cd6a9": "257e8784da9b254b790f0aece11c2c72",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/3d/b6a60caffa051379adde39a6f93e3bdf397613": "cccbd30945ed519019fb48b79ea8a73b",
".git/objects/40/7251194beb72bf55c7543f64ab75d135a6144c": "aefa9d043c3fd7cea878f72943ab7b26",
".git/objects/43/9e660c8db35e1a53d59bf3fa63e92649d4fb55": "66bd364bc1d466665d42df97423f7a01",
".git/objects/44/1964ed65facc012de12caa52ad2df04f9a6df2": "4e2c402bd8b06fc44f421c27df3c0529",
".git/objects/45/5a72638cd6142e140d8f4ba9d2a197f47987d3": "0178e171ea559de18afc5808b9ea5daa",
".git/objects/45/9cbf0cbf9708b0eb62c9b5627a480369b33479": "769f418a34feccd7dc9f312f0d9b52b3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/dff0fc4e48dc2b24c069211a1e084a0b769594": "325920cb69ecc9302ff8a1c6aa363002",
".git/objects/4b/7e5abaa586a65b364a932a003d8cf1e2a34571": "766f66c51b188ef665cd0acdfdf0281d",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/99d634241399424460dadc8cea671b31ae9d3c": "2eebf075cff1612741bc2c6427cb6b6b",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/52/ab68bbc8f28297b09975610253f4b722f1d466": "b2c8d904d4acb3dedb3200018ff18a1c",
".git/objects/59/08c2e9b93b1e09b4570c1ae2511494e09b3bbe": "6a9910ac1377304a3e67cac1858af31c",
".git/objects/5a/0c547fcb91043dadea2b3cd60a6d6753dc85cb": "aec6e84902ced52c8c222b06b98b432d",
".git/objects/61/458efa708131de0825529d7e640c294c988bc1": "4cbfa71cd44d586a82c244731b505a7a",
".git/objects/65/45c346d7fd062a1b72e88fbad2750b118cbfcd": "8b2607c3ac409f2cb9f17d40a6728c3c",
".git/objects/69/2bbc91807827c45832acbebcfeef3291f7de64": "38bb2f5fe257550bc3073a93164920eb",
".git/objects/6c/56278be04735683eeb40ad8d366f1f98c98d78": "287a15b355fd40d6ada993826e85e1a5",
".git/objects/6f/f82ad2798c150fca4d9a556232b18353ce4820": "34c6a754b177c928e7ca99a3ac3d070b",
".git/objects/73/d7431c12d2ed246a202b75306fe949fe68f8c6": "b543186b85b4fc89fd897a7f81eb703d",
".git/objects/76/0a5fdb07ea84660e28f26e837a442464296184": "a00c68b22f43a9825c1872665065cee1",
".git/objects/76/12200c42f7ea093fa18bdafdecdc8320ce50ba": "b4aba9cdb8032a30d672ad54291539fe",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/ed0fe233c4aedb62131755ca23f2a1306b8727": "3c69e4951ad837c5fe3ac96309e50bf6",
".git/objects/7c/4c0b935f0b8267bd588fc566a694db37f56e1d": "e015b528f076f8952f57e570ed959e14",
".git/objects/7d/4bfbf226ff5db54d64172297cfbaa45c0f77e8": "e93668aa45a9bc11c6b78175fe06c301",
".git/objects/7e/17afac748503ece7f9619bddf0400167a8484e": "80da0b75adeeef885790d7896f558140",
".git/objects/7f/d1b1b68f749526099f05e27fd0be2f3d6a55de": "a005b4e62426a541684f09b3a15d197c",
".git/objects/80/8b625aaaa8a3d7614926e7299c5d9f8b9be444": "9e28e7098b2dab1711f7f8c91a610470",
".git/objects/88/9e12e10205f7f7d8372ad2338f6b9d149eb03f": "5e9ed8fa3c38d91afcff89c35214f16f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/dae4ff870a6d7d4bb0ccf5fc5d1f7e56d0614e": "f185acf8a51e643c402b81e1b7cf5aae",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/58a5d9edef40d4b5e49b8b4533788cd3f24645": "428fcb9397dcc51c3dcaad108a046762",
".git/objects/8f/c6587d4861e98f91b14e4d0a7e152510ab20e3": "c73b6e249c92b948366719931a8004a8",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/94/a0b0bb64cdea9b6835b408326cd6a969ecea32": "adfcd97e6d79e1ab9969713fffe8d032",
".git/objects/96/22f280066c5c9be7c92a882fd69c7cddf2da35": "e5d9e42445f128890ab4ba5b99a60d0e",
".git/objects/96/b4af4e49e927de402a1b4184474e8e16ca4e15": "da3ec7eb6d77a72d75a626fcc1ab5fef",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/264c413cd3476eff5e744dbf1adbf6d18050ff": "45ee9ded82861ce5b265a067ef941330",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/e56379c840460496264c5f023c7afcbe6099a3": "498894c3ae88b50e1007846b187dfbe3",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b6/958c80c794b7655824b7c2ff57d7053c782ad6": "e5a987d39a48339638b33e07452cd3d1",
".git/objects/b6/d09558a6d1882358f899f15558503982cb0c39": "ffda50ae7d521bbd91d1fd9dae271338",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/f930f47414e2d7cd0a0d3ef79b0999371db22f": "2e868aa9c3fd02300553a189f9d4a032",
".git/objects/c1/2442ef34531cf9a0a9be87f3878c05cfb8d0be": "dfcf354831d974aa8f3470e6da5b8a74",
".git/objects/c3/48497bf3d5eb1d8996148402be393a642bf163": "2c350d181e9330160a9c1f7db185066f",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c3/eb30595b193ad434f237c0c51addf48ca81da3": "8f1acbc9fbde09e880a06c5e57123327",
".git/objects/c7/6247bfbc076f0ff5e2d7497d4ecc7c789c1193": "27f2b7f8e9a682bf699fad9ed49d85ac",
".git/objects/c7/e7bf53093155453f0d04b4a43dd9386624eeb9": "638a9d22b57946e832f9960972e494c8",
".git/objects/c8/49b5cc72b73ad06a0f13f0e99fbdac7dae2f00": "950e46bc702c5e579cb7d40635402b26",
".git/objects/d5/456867898d31e9c5917736b6a589c090151f72": "2fc40b3bb611a848d1985cfe30cbe2d5",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/0cd5f58dd23d03391b7d91f0c4926d2b0c003c": "22a0ddedfa6f53448e1d5b0cc057b464",
".git/objects/d7/a02f3a878e2060588e8fb6aa94edfd1e4ee318": "63be6af978aaa62a67f72923a0b5de29",
".git/objects/d9/0188788fed7d210e2dc233c04041da71bfc3f4": "17a78b85c383b9265f9514effaa3bf8d",
".git/objects/e1/ca00dc75c8d2dd7b857131a179340e213a4071": "6ec17696a6ec216971514d8db91c512b",
".git/objects/e2/ccc3d466b1dbde4e120cbe9ed4ec7ae137b8a9": "1a58b5fd1f807615c03d5f03b42fd807",
".git/objects/e3/20d2933332b1d602f58b38e754fef9d6ed792b": "4e90f11be4d9f0709b10a3f9a590bc1a",
".git/objects/e4/cd456b0063632f2e76a5cecc3cd627ba20b1d7": "73dde499ace4990495d1bb2adaedab1f",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/b2a07393f4da16692486666efa8b650b69e1e4": "50f5091f1efbd600291e8bd985b9d777",
".git/objects/e8/543da1188dcc5cbc2151b31d0ede34b7191d08": "3aa587b88193bb710c76fbdafcb7798b",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/11800e58ea763066924c49a5170942e6b727db": "6ed28762fb3671ac3f8bb6ce8038e11e",
".git/objects/f5/a725dc9ba14b57afd5c77ffb8bc91a0badf3cc": "6c358a64ddc882a5d94c0de0f9a3d0f6",
".git/objects/f8/215a0cc0fd804a80d3c4770fe77a12e90f8a43": "1503c9ba3f5187e3be7637836cf1e0b5",
".git/objects/f8/9db2229be98d73c87a704b61749ac4e6e8fb90": "978d1739f02e45476b3e480ed755fa5c",
".git/refs/heads/master": "6522a1ed251e8712235a6e63ecd5f348",
".git/refs/remotes/origin/master": "6522a1ed251e8712235a6e63ecd5f348",
"assets/AssetManifest.json": "ae03301b5814068f25bf6f8d69034804",
"assets/assets/gifs/bare_bear_confuse.webp": "5e431ea749d256f5a7f1f91b45e2bca0",
"assets/assets/gifs/bare_bear_shake_head.webp": "fe4a4d2191c4fba3aaf85cd19ad0ac79",
"assets/assets/gifs/bare_bear_yay.webp": "74045cc7df417efde207af757083368a",
"assets/assets/gifs/dumbell_ice_bear.webp": "8126b538eb73647b31d40a4be5604060",
"assets/assets/gifs/hello_bare_bear.webp": "6a1e9740276e34b2d32df0150f0417a5",
"assets/assets/gifs/ice_bear_thinking.webp": "23e33dbe7d69945e6a66b3199a577d33",
"assets/assets/gifs/thank_you_bear.webp": "2c30a7516747e2c20c70c657eef830a1",
"assets/assets/jsons/dino_dance.json": "01094bdf859f1852a8693198b1c1a52d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "657ca5a5fecd9728bbef8523ce3d108e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "53a74c2963279364d1af134e763ac874",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f519a4057bf590b79a82055d604aecde",
"/": "f519a4057bf590b79a82055d604aecde",
"main.dart.js": "4b1a785c8517beaba98d9ad68414cf4d",
"manifest.json": "b3e3f217d6f62512cf59b32e114d7e1a",
"version.json": "ef15dffda846e4ea48e0f913abb59330"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
