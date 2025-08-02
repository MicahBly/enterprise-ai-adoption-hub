import { c as create_ssr_component, b as each, e as escape } from "../../../../../chunks/ssr.js";
const css = {
  code: "@keyframes svelte-1hs642r-searchlight{0%,100%{opacity:0.3;transform:rotate(-15deg) scaleY(2)}50%{opacity:0.5;transform:rotate(15deg) scaleY(2)}}.animate-searchlight.svelte-1hs642r{animation:svelte-1hs642r-searchlight 8s ease-in-out infinite;transform-origin:bottom center}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  const recentFilms = [\\n    {\\n      title: 'Poor Things',\\n      year: 2023,\\n      director: 'Yorgos Lanthimos',\\n      awards: '4 Academy Awards',\\n      icon: '🧪'\\n    },\\n    {\\n      title: 'The Banshees of Inisherin',\\n      year: 2022,\\n      director: 'Martin McDonagh',\\n      awards: '9 Oscar Nominations',\\n      icon: '🍺'\\n    },\\n    {\\n      title: 'Nomadland',\\n      year: 2020,\\n      director: 'Chloé Zhao',\\n      awards: '3 Academy Awards',\\n      icon: '🚐'\\n    },\\n    {\\n      title: 'The Menu',\\n      year: 2022,\\n      director: 'Mark Mylod',\\n      awards: 'Critical Acclaim',\\n      icon: '🍽️'\\n    }\\n  ];\\n  \\n  const bestPictureWinners = [\\n    { title: 'Nomadland', year: 2020, icon: '🏆' },\\n    { title: 'The Shape of Water', year: 2017, icon: '💧' },\\n    { title: 'Birdman', year: 2014, icon: '🦅' },\\n    { title: '12 Years a Slave', year: 2013, icon: '⛓️' },\\n    { title: 'Slumdog Millionaire', year: 2008, icon: '💰' }\\n  ];\\n  \\n  const notableFilms = [\\n    'Little Miss Sunshine', 'Juno', 'Black Swan', 'The Grand Budapest Hotel',\\n    'Three Billboards Outside Ebbing, Missouri', 'The Favourite', 'JoJo Rabbit',\\n    'The French Dispatch', 'Nightmare Alley', 'See How They Run'\\n  ];\\n  \\n  const upcomingProjects = [\\n    { title: 'Kinds of Kindness', director: 'Yorgos Lanthimos', status: '2024' },\\n    { title: 'A Real Pain', director: 'Jesse Eisenberg', status: 'Post-Production' },\\n    { title: 'Nightbitch', director: 'Marielle Heller', status: 'Post-Production' }\\n  ];\\n  \\n  const awards = [\\n    { type: 'Academy Awards', count: '48', icon: '🏆' },\\n    { type: 'BAFTA Awards', count: '72', icon: '🎭' },\\n    { type: 'Golden Globes', count: '61', icon: '🌟' },\\n    { type: 'Cannes Awards', count: '23', icon: '🌴' }\\n  ];\\n<\/script>\\n\\n<svelte:head>\\n  <title>Searchlight Pictures - Illuminating Extraordinary Stories</title>\\n</svelte:head>\\n\\n<!-- Hero Section -->\\n<section class=\\"relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white\\">\\n  <div class=\\"absolute inset-0 opacity-30\\">\\n    <!-- Searchlight beam effect -->\\n    <div class=\\"absolute bottom-0 left-1/2 transform -translate-x-1/2\\">\\n      <div class=\\"w-96 h-96 bg-gradient-to-t from-yellow-400/30 to-transparent animate-searchlight\\"></div>\\n    </div>\\n  </div>\\n  \\n  <div class=\\"relative z-10 container mx-auto px-4 py-20\\">\\n    <div class=\\"text-center\\">\\n      <div class=\\"text-6xl mb-6\\">🔦</div>\\n      <h1 class=\\"text-5xl md:text-6xl font-bold mb-4\\">\\n        Searchlight Pictures\\n      </h1>\\n      <p class=\\"text-xl md:text-2xl mb-8 text-gray-300\\">\\n        Illuminating Extraordinary Stories Since 1994\\n      </p>\\n      <p class=\\"text-lg max-w-3xl mx-auto text-gray-400 mb-8\\">\\n        Home to bold, distinctive filmmaking that pushes boundaries and celebrates unique voices in cinema\\n      </p>\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- Recent Films -->\\n<section class=\\"container mx-auto px-4 py-16\\">\\n  <h2 class=\\"text-3xl font-bold mb-8\\">Recent Acclaimed Films</h2>\\n  \\n  <div class=\\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6\\">\\n    {#each recentFilms as film}\\n      <div class=\\"group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden\\">\\n        <div class=\\"bg-gradient-to-br from-gray-700 to-black p-8 text-white text-center\\">\\n          <div class=\\"text-5xl mb-4\\">{film.icon}</div>\\n        </div>\\n        <div class=\\"p-6\\">\\n          <h3 class=\\"text-xl font-bold mb-1\\">{film.title}</h3>\\n          <p class=\\"text-sm text-gray-600 mb-1\\">{film.director} • {film.year}</p>\\n          <p class=\\"text-sm text-yellow-600 font-semibold\\">{film.awards}</p>\\n        </div>\\n      </div>\\n    {/each}\\n  </div>\\n</section>\\n\\n<!-- Best Picture Winners -->\\n<section class=\\"bg-gradient-to-r from-yellow-50 to-amber-50 py-16\\">\\n  <div class=\\"container mx-auto px-4\\">\\n    <h2 class=\\"text-3xl font-bold mb-8 text-center\\">Academy Award Best Picture Winners</h2>\\n    \\n    <div class=\\"flex flex-wrap justify-center gap-4\\">\\n      {#each bestPictureWinners as winner}\\n        <div class=\\"bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow\\">\\n          <div class=\\"text-center\\">\\n            <div class=\\"text-4xl mb-2\\">{winner.icon}</div>\\n            <h3 class=\\"font-bold\\">{winner.title}</h3>\\n            <p class=\\"text-sm text-gray-600\\">{winner.year}</p>\\n          </div>\\n        </div>\\n      {/each}\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- Notable Films -->\\n<section class=\\"container mx-auto px-4 py-16\\">\\n  <div class=\\"bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 text-white\\">\\n    <h2 class=\\"text-3xl font-bold mb-8\\">Notable Films</h2>\\n    \\n    <div class=\\"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4\\">\\n      {#each notableFilms as film}\\n        <div class=\\"bg-white/10 backdrop-blur rounded-lg p-4 text-center hover:bg-white/20 transition-colors\\">\\n          <p class=\\"font-medium\\">{film}</p>\\n        </div>\\n      {/each}\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- Awards & Recognition -->\\n<section class=\\"bg-gray-50 py-16\\">\\n  <div class=\\"container mx-auto px-4\\">\\n    <h2 class=\\"text-3xl font-bold mb-12 text-center\\">Awards & Recognition</h2>\\n    \\n    <div class=\\"grid grid-cols-2 md:grid-cols-4 gap-6\\">\\n      {#each awards as award}\\n        <div class=\\"bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow\\">\\n          <div class=\\"text-4xl mb-3\\">{award.icon}</div>\\n          <div class=\\"text-3xl font-bold text-gray-800 mb-1\\">{award.count}</div>\\n          <p class=\\"text-gray-600\\">{award.type}</p>\\n        </div>\\n      {/each}\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- The Searchlight Difference -->\\n<section class=\\"container mx-auto px-4 py-16\\">\\n  <div class=\\"max-w-4xl mx-auto\\">\\n    <h2 class=\\"text-3xl font-bold mb-8 text-center\\">The Searchlight Difference</h2>\\n    \\n    <div class=\\"grid grid-cols-1 md:grid-cols-3 gap-6\\">\\n      <div class=\\"text-center\\">\\n        <div class=\\"text-5xl mb-4\\">🎨</div>\\n        <h3 class=\\"font-bold text-lg mb-2\\">Artistic Vision</h3>\\n        <p class=\\"text-gray-600\\">Supporting filmmakers with unique perspectives and bold storytelling</p>\\n      </div>\\n      <div class=\\"text-center\\">\\n        <div class=\\"text-5xl mb-4\\">🌍</div>\\n        <h3 class=\\"font-bold text-lg mb-2\\">Diverse Voices</h3>\\n        <p class=\\"text-gray-600\\">Championing stories from around the world and underrepresented communities</p>\\n      </div>\\n      <div class=\\"text-center\\">\\n        <div class=\\"text-5xl mb-4\\">🏅</div>\\n        <h3 class=\\"font-bold text-lg mb-2\\">Award Excellence</h3>\\n        <p class=\\"text-gray-600\\">Consistently recognized at the world's most prestigious film festivals</p>\\n      </div>\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- Upcoming Projects -->\\n<section class=\\"bg-gradient-to-b from-gray-100 to-white py-16\\">\\n  <div class=\\"container mx-auto px-4\\">\\n    <h2 class=\\"text-3xl font-bold mb-8\\">Coming Soon</h2>\\n    \\n    <div class=\\"grid grid-cols-1 md:grid-cols-3 gap-6\\">\\n      {#each upcomingProjects as project}\\n        <div class=\\"bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow\\">\\n          <h3 class=\\"font-bold text-lg mb-2\\">{project.title}</h3>\\n          <p class=\\"text-gray-600 mb-2\\">Director: {project.director}</p>\\n          <span class=\\"inline-block bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700\\">\\n            {project.status}\\n          </span>\\n        </div>\\n      {/each}\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- Call to Action -->\\n<section class=\\"container mx-auto px-4 py-16\\">\\n  <div class=\\"bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 md:p-12 text-white text-center\\">\\n    <h2 class=\\"text-3xl font-bold mb-6\\">Experience Searchlight Films</h2>\\n    <p class=\\"text-xl mb-8 text-gray-300 max-w-3xl mx-auto\\">\\n      Stream award-winning Searchlight Pictures films on Disney+ and Hulu, \\n      or catch our latest releases in theaters worldwide.\\n    </p>\\n    <div class=\\"flex flex-wrap gap-4 justify-center\\">\\n      <button class=\\"bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-colors text-lg\\">\\n        Browse Films\\n      </button>\\n      <button class=\\"border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-colors text-lg\\">\\n        In Theaters Now\\n      </button>\\n    </div>\\n  </div>\\n</section>\\n\\n<style>\\n  @keyframes searchlight {\\n    0%, 100% {\\n      opacity: 0.3;\\n      transform: rotate(-15deg) scaleY(2);\\n    }\\n    50% {\\n      opacity: 0.5;\\n      transform: rotate(15deg) scaleY(2);\\n    }\\n  }\\n  \\n  .animate-searchlight {\\n    animation: searchlight 8s ease-in-out infinite;\\n    transform-origin: bottom center;\\n  }\\n</style>"],"names":[],"mappings":"AAgOE,WAAW,0BAAY,CACrB,EAAE,CAAE,IAAK,CACP,OAAO,CAAE,GAAG,CACZ,SAAS,CAAE,OAAO,MAAM,CAAC,CAAC,OAAO,CAAC,CACpC,CACA,GAAI,CACF,OAAO,CAAE,GAAG,CACZ,SAAS,CAAE,OAAO,KAAK,CAAC,CAAC,OAAO,CAAC,CACnC,CACF,CAEA,mCAAqB,CACnB,SAAS,CAAE,0BAAW,CAAC,EAAE,CAAC,WAAW,CAAC,QAAQ,CAC9C,gBAAgB,CAAE,MAAM,CAAC,MAC3B"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const recentFilms = [
    {
      title: "Poor Things",
      year: 2023,
      director: "Yorgos Lanthimos",
      awards: "4 Academy Awards",
      icon: "🧪"
    },
    {
      title: "The Banshees of Inisherin",
      year: 2022,
      director: "Martin McDonagh",
      awards: "9 Oscar Nominations",
      icon: "🍺"
    },
    {
      title: "Nomadland",
      year: 2020,
      director: "Chloé Zhao",
      awards: "3 Academy Awards",
      icon: "🚐"
    },
    {
      title: "The Menu",
      year: 2022,
      director: "Mark Mylod",
      awards: "Critical Acclaim",
      icon: "🍽️"
    }
  ];
  const bestPictureWinners = [
    {
      title: "Nomadland",
      year: 2020,
      icon: "🏆"
    },
    {
      title: "The Shape of Water",
      year: 2017,
      icon: "💧"
    },
    { title: "Birdman", year: 2014, icon: "🦅" },
    {
      title: "12 Years a Slave",
      year: 2013,
      icon: "⛓️"
    },
    {
      title: "Slumdog Millionaire",
      year: 2008,
      icon: "💰"
    }
  ];
  const notableFilms = [
    "Little Miss Sunshine",
    "Juno",
    "Black Swan",
    "The Grand Budapest Hotel",
    "Three Billboards Outside Ebbing, Missouri",
    "The Favourite",
    "JoJo Rabbit",
    "The French Dispatch",
    "Nightmare Alley",
    "See How They Run"
  ];
  const upcomingProjects = [
    {
      title: "Kinds of Kindness",
      director: "Yorgos Lanthimos",
      status: "2024"
    },
    {
      title: "A Real Pain",
      director: "Jesse Eisenberg",
      status: "Post-Production"
    },
    {
      title: "Nightbitch",
      director: "Marielle Heller",
      status: "Post-Production"
    }
  ];
  const awards = [
    {
      type: "Academy Awards",
      count: "48",
      icon: "🏆"
    },
    {
      type: "BAFTA Awards",
      count: "72",
      icon: "🎭"
    },
    {
      type: "Golden Globes",
      count: "61",
      icon: "🌟"
    },
    {
      type: "Cannes Awards",
      count: "23",
      icon: "🌴"
    }
  ];
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-jxkvk1_START -->${$$result.title = `<title>Searchlight Pictures - Illuminating Extraordinary Stories</title>`, ""}<!-- HEAD_svelte-jxkvk1_END -->`, ""}  <section class="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white" data-svelte-h="svelte-3e9r2v"><div class="absolute inset-0 opacity-30"> <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2"><div class="w-96 h-96 bg-gradient-to-t from-yellow-400/30 to-transparent animate-searchlight svelte-1hs642r"></div></div></div> <div class="relative z-10 container mx-auto px-4 py-20"><div class="text-center"><div class="text-6xl mb-6">🔦</div> <h1 class="text-5xl md:text-6xl font-bold mb-4">Searchlight Pictures</h1> <p class="text-xl md:text-2xl mb-8 text-gray-300">Illuminating Extraordinary Stories Since 1994</p> <p class="text-lg max-w-3xl mx-auto text-gray-400 mb-8">Home to bold, distinctive filmmaking that pushes boundaries and celebrates unique voices in cinema</p></div></div></section>  <section class="container mx-auto px-4 py-16"><h2 class="text-3xl font-bold mb-8" data-svelte-h="svelte-1yxfi7m">Recent Acclaimed Films</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">${each(recentFilms, (film) => {
    return `<div class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"><div class="bg-gradient-to-br from-gray-700 to-black p-8 text-white text-center"><div class="text-5xl mb-4">${escape(film.icon)}</div></div> <div class="p-6"><h3 class="text-xl font-bold mb-1">${escape(film.title)}</h3> <p class="text-sm text-gray-600 mb-1">${escape(film.director)} • ${escape(film.year)}</p> <p class="text-sm text-yellow-600 font-semibold">${escape(film.awards)}</p></div> </div>`;
  })}</div></section>  <section class="bg-gradient-to-r from-yellow-50 to-amber-50 py-16"><div class="container mx-auto px-4"><h2 class="text-3xl font-bold mb-8 text-center" data-svelte-h="svelte-8a591h">Academy Award Best Picture Winners</h2> <div class="flex flex-wrap justify-center gap-4">${each(bestPictureWinners, (winner) => {
    return `<div class="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"><div class="text-center"><div class="text-4xl mb-2">${escape(winner.icon)}</div> <h3 class="font-bold">${escape(winner.title)}</h3> <p class="text-sm text-gray-600">${escape(winner.year)}</p></div> </div>`;
  })}</div></div></section>  <section class="container mx-auto px-4 py-16"><div class="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 text-white"><h2 class="text-3xl font-bold mb-8" data-svelte-h="svelte-40d11x">Notable Films</h2> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">${each(notableFilms, (film) => {
    return `<div class="bg-white/10 backdrop-blur rounded-lg p-4 text-center hover:bg-white/20 transition-colors"><p class="font-medium">${escape(film)}</p> </div>`;
  })}</div></div></section>  <section class="bg-gray-50 py-16"><div class="container mx-auto px-4"><h2 class="text-3xl font-bold mb-12 text-center" data-svelte-h="svelte-2gvxe2">Awards &amp; Recognition</h2> <div class="grid grid-cols-2 md:grid-cols-4 gap-6">${each(awards, (award) => {
    return `<div class="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow"><div class="text-4xl mb-3">${escape(award.icon)}</div> <div class="text-3xl font-bold text-gray-800 mb-1">${escape(award.count)}</div> <p class="text-gray-600">${escape(award.type)}</p> </div>`;
  })}</div></div></section>  <section class="container mx-auto px-4 py-16" data-svelte-h="svelte-nbccnd"><div class="max-w-4xl mx-auto"><h2 class="text-3xl font-bold mb-8 text-center">The Searchlight Difference</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="text-center"><div class="text-5xl mb-4">🎨</div> <h3 class="font-bold text-lg mb-2">Artistic Vision</h3> <p class="text-gray-600">Supporting filmmakers with unique perspectives and bold storytelling</p></div> <div class="text-center"><div class="text-5xl mb-4">🌍</div> <h3 class="font-bold text-lg mb-2">Diverse Voices</h3> <p class="text-gray-600">Championing stories from around the world and underrepresented communities</p></div> <div class="text-center"><div class="text-5xl mb-4">🏅</div> <h3 class="font-bold text-lg mb-2">Award Excellence</h3> <p class="text-gray-600">Consistently recognized at the world&#39;s most prestigious film festivals</p></div></div></div></section>  <section class="bg-gradient-to-b from-gray-100 to-white py-16"><div class="container mx-auto px-4"><h2 class="text-3xl font-bold mb-8" data-svelte-h="svelte-u2jo9h">Coming Soon</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-6">${each(upcomingProjects, (project) => {
    return `<div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"><h3 class="font-bold text-lg mb-2">${escape(project.title)}</h3> <p class="text-gray-600 mb-2">Director: ${escape(project.director)}</p> <span class="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">${escape(project.status)}</span> </div>`;
  })}</div></div></section>  <section class="container mx-auto px-4 py-16" data-svelte-h="svelte-1bonm5j"><div class="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 md:p-12 text-white text-center"><h2 class="text-3xl font-bold mb-6">Experience Searchlight Films</h2> <p class="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">Stream award-winning Searchlight Pictures films on Disney+ and Hulu, 
      or catch our latest releases in theaters worldwide.</p> <div class="flex flex-wrap gap-4 justify-center"><button class="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-colors text-lg">Browse Films</button> <button class="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-colors text-lg">In Theaters Now</button></div></div> </section>`;
});
export {
  Page as default
};
