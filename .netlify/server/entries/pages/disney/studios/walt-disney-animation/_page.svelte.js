import { c as create_ssr_component, b as each, e as escape } from "../../../../../chunks/ssr.js";
const css = {
  code: "@keyframes svelte-1guv5c-twinkle{0%,100%{opacity:0;transform:scale(0.5)}50%{opacity:1;transform:scale(1)}}.animate-twinkle.svelte-1guv5c{animation:svelte-1guv5c-twinkle infinite ease-in-out}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  const recentFilms = [\\n    {\\n      title: 'Wish',\\n      year: 2023,\\n      icon: '⭐',\\n      description: 'A young girl wishes upon a star in the kingdom of Rosas'\\n    },\\n    {\\n      title: 'Encanto',\\n      year: 2021,\\n      icon: '🦋',\\n      description: 'A magical family in Colombia faces extraordinary challenges'\\n    },\\n    {\\n      title: 'Raya and the Last Dragon',\\n      year: 2021,\\n      icon: '🐉',\\n      description: 'A warrior seeks the last dragon to save Kumandra'\\n    },\\n    {\\n      title: 'Frozen II',\\n      year: 2019,\\n      icon: '❄️',\\n      description: 'Elsa journeys to discover the origin of her powers'\\n    }\\n  ];\\n  \\n  const eras = [\\n    {\\n      name: 'Golden Age',\\n      years: '1937-1942',\\n      films: ['Snow White', 'Pinocchio', 'Fantasia', 'Dumbo', 'Bambi'],\\n      color: 'from-yellow-400 to-yellow-600'\\n    },\\n    {\\n      name: 'Silver Age',\\n      years: '1950-1967',\\n      films: ['Cinderella', 'Alice in Wonderland', 'Peter Pan', 'Lady and the Tramp', 'Sleeping Beauty', '101 Dalmatians'],\\n      color: 'from-gray-400 to-gray-600'\\n    },\\n    {\\n      name: 'Bronze Age',\\n      years: '1970-1988',\\n      films: ['The Aristocats', 'Robin Hood', 'The Rescuers', 'The Fox and the Hound', 'Oliver & Company'],\\n      color: 'from-orange-600 to-orange-800'\\n    },\\n    {\\n      name: 'Renaissance',\\n      years: '1989-1999',\\n      films: ['The Little Mermaid', 'Beauty and the Beast', 'Aladdin', 'The Lion King', 'Pocahontas', 'Mulan', 'Tarzan'],\\n      color: 'from-purple-500 to-pink-500'\\n    },\\n    {\\n      name: 'Post-Renaissance',\\n      years: '2000-2009',\\n      films: ['The Emperor\\\\'s New Groove', 'Atlantis', 'Lilo & Stitch', 'Treasure Planet', 'Meet the Robinsons', 'Bolt'],\\n      color: 'from-blue-500 to-teal-500'\\n    },\\n    {\\n      name: 'Revival Era',\\n      years: '2010-Present',\\n      films: ['Tangled', 'Wreck-It Ralph', 'Frozen', 'Big Hero 6', 'Moana', 'Zootopia', 'Encanto', 'Wish'],\\n      color: 'from-blue-600 to-purple-600'\\n    }\\n  ];\\n  \\n  const shorts = [\\n    { title: 'Steamboat Willie', year: 1928, icon: '🚢' },\\n    { title: 'The Skeleton Dance', year: 1929, icon: '💀' },\\n    { title: 'Flowers and Trees', year: 1932, icon: '🌳' },\\n    { title: 'The Three Little Pigs', year: 1933, icon: '🐷' },\\n    { title: 'The Old Mill', year: 1937, icon: '🏚️' },\\n    { title: 'Paperman', year: 2012, icon: '✈️' },\\n    { title: 'Feast', year: 2014, icon: '🍔' },\\n    { title: 'Inner Workings', year: 2016, icon: '🧠' }\\n  ];\\n  \\n  const innovations = [\\n    { title: 'First Full-Length Animated Film', year: 1937, achievement: 'Snow White and the Seven Dwarfs' },\\n    { title: 'Multiplane Camera', year: 1937, achievement: 'Revolutionary depth in animation' },\\n    { title: 'Xerography Process', year: 1961, achievement: '101 Dalmatians - cost-effective animation' },\\n    { title: 'CAPS System', year: 1989, achievement: 'Computer Animation Production System' },\\n    { title: 'Deep Canvas', year: 1999, achievement: '3D backgrounds in Tarzan' },\\n    { title: 'Hyperion Renderer', year: 2014, achievement: 'Advanced lighting in Big Hero 6' }\\n  ];\\n<\/script>\\n\\n<svelte:head>\\n  <title>Walt Disney Animation Studios - Where Magic Begins</title>\\n</svelte:head>\\n\\n<!-- Hero Section -->\\n<section class=\\"relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white\\">\\n  <div class=\\"absolute inset-0\\">\\n    <!-- Magical sparkles animation -->\\n    <div class=\\"absolute inset-0\\">\\n      {#each Array(20) as _, i}\\n        <div \\n          class=\\"absolute text-2xl animate-twinkle\\"\\n          style=\\"\\n            top: {Math.random() * 100}%;\\n            left: {Math.random() * 100}%;\\n            animation-delay: {Math.random() * 5}s;\\n            animation-duration: {3 + Math.random() * 2}s;\\n          \\"\\n        >\\n          ✨\\n        </div>\\n      {/each}\\n    </div>\\n    \\n    <!-- Castle silhouette -->\\n    <div class=\\"absolute bottom-0 left-0 right-0 h-64 opacity-20\\">\\n      <svg viewBox=\\"0 0 1200 300\\" class=\\"w-full h-full\\">\\n        <path d=\\"M300 300 L300 150 L350 50 L400 150 L400 100 L450 30 L500 100 L500 150 L550 50 L600 150 L600 300 L700 300 L700 180 L750 100 L800 180 L800 300 Z\\" \\n              fill=\\"currentColor\\" class=\\"text-blue-800\\"/>\\n      </svg>\\n    </div>\\n  </div>\\n  \\n  <div class=\\"relative z-10 container mx-auto px-4 py-20\\">\\n    <div class=\\"text-center\\">\\n      <h1 class=\\"text-5xl md:text-7xl font-bold mb-4\\">\\n        Walt Disney Animation Studios\\n      </h1>\\n      <p class=\\"text-2xl md:text-3xl mb-8 text-blue-100\\">\\n        Where Dreams Come to Life Since 1923\\n      </p>\\n      <div class=\\"text-6xl mb-8\\">🏰</div>\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- Recent Films -->\\n<section class=\\"container mx-auto px-4 py-16\\">\\n  <h2 class=\\"text-3xl font-bold mb-8\\">Recent Masterpieces</h2>\\n  \\n  <div class=\\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6\\">\\n    {#each recentFilms as film}\\n      <div class=\\"group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden\\">\\n        <div class=\\"aspect-[3/4] bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform\\">\\n          {film.icon}\\n        </div>\\n        <div class=\\"p-6\\">\\n          <h3 class=\\"text-xl font-bold mb-1\\">{film.title}</h3>\\n          <p class=\\"text-sm text-gray-600 mb-2\\">{film.year}</p>\\n          <p class=\\"text-gray-700\\">{film.description}</p>\\n        </div>\\n      </div>\\n    {/each}\\n  </div>\\n</section>\\n\\n<!-- Animation Eras -->\\n<section class=\\"bg-gray-50 py-16\\">\\n  <div class=\\"container mx-auto px-4\\">\\n    <h2 class=\\"text-3xl font-bold mb-12 text-center\\">A Legacy of Animation Eras</h2>\\n    \\n    <div class=\\"space-y-6\\">\\n      {#each eras as era}\\n        <div class=\\"bg-white rounded-xl shadow-md p-6\\">\\n          <div class=\\"flex items-center mb-4\\">\\n            <div class=\\"w-4 h-4 rounded-full bg-gradient-to-r {era.color} mr-3\\"></div>\\n            <h3 class=\\"text-xl font-bold\\">{era.name}</h3>\\n            <span class=\\"ml-auto text-gray-600\\">{era.years}</span>\\n          </div>\\n          <div class=\\"flex flex-wrap gap-2\\">\\n            {#each era.films as film}\\n              <span class=\\"bg-gradient-to-r {era.color} text-white px-3 py-1 rounded-full text-sm\\">\\n                {film}\\n              </span>\\n            {/each}\\n          </div>\\n        </div>\\n      {/each}\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- Shorts Collection -->\\n<section class=\\"container mx-auto px-4 py-16\\">\\n  <div class=\\"bg-gradient-to-r from-yellow-100 to-orange-100 rounded-3xl p-8 md:p-12\\">\\n    <h2 class=\\"text-3xl font-bold mb-8\\">Animated Shorts Legacy</h2>\\n    \\n    <div class=\\"grid grid-cols-2 md:grid-cols-4 gap-4\\">\\n      {#each shorts as short}\\n        <div class=\\"bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow\\">\\n          <div class=\\"text-3xl mb-2\\">{short.icon}</div>\\n          <p class=\\"font-semibold text-sm\\">{short.title}</p>\\n          <p class=\\"text-xs text-gray-600\\">{short.year}</p>\\n        </div>\\n      {/each}\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- Innovation Timeline -->\\n<section class=\\"bg-gradient-to-b from-blue-50 to-white py-16\\">\\n  <div class=\\"container mx-auto px-4\\">\\n    <h2 class=\\"text-3xl font-bold mb-12 text-center\\">Pioneering Animation Innovation</h2>\\n    \\n    <div class=\\"max-w-4xl mx-auto\\">\\n      {#each innovations as innovation, i}\\n        <div class=\\"flex items-center mb-8\\">\\n          <div class=\\"w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg\\">\\n            {innovation.year}\\n          </div>\\n          <div class=\\"ml-6 flex-1\\">\\n            <h3 class=\\"font-bold text-lg\\">{innovation.title}</h3>\\n            <p class=\\"text-gray-600\\">{innovation.achievement}</p>\\n          </div>\\n        </div>\\n        {#if i < innovations.length - 1}\\n          <div class=\\"w-0.5 h-8 bg-gray-300 ml-8\\"></div>\\n        {/if}\\n      {/each}\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- Awards & Achievements -->\\n<section class=\\"bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16\\">\\n  <div class=\\"container mx-auto px-4\\">\\n    <h2 class=\\"text-3xl font-bold mb-12 text-center\\">Awards & Recognition</h2>\\n    \\n    <div class=\\"grid grid-cols-2 md:grid-cols-4 gap-8 text-center\\">\\n      <div>\\n        <div class=\\"text-5xl font-bold mb-2\\">14</div>\\n        <div>Academy Awards</div>\\n        <div class=\\"text-sm opacity-80\\">Best Animated Feature</div>\\n      </div>\\n      <div>\\n        <div class=\\"text-5xl font-bold mb-2\\">62</div>\\n        <div>Feature Films</div>\\n        <div class=\\"text-sm opacity-80\\">Since 1937</div>\\n      </div>\\n      <div>\\n        <div class=\\"text-5xl font-bold mb-2\\">100+</div>\\n        <div>Years of Magic</div>\\n        <div class=\\"text-sm opacity-80\\">Since 1923</div>\\n      </div>\\n      <div>\\n        <div class=\\"text-5xl font-bold mb-2\\">∞</div>\\n        <div>Dreams Inspired</div>\\n        <div class=\\"text-sm opacity-80\\">Worldwide</div>\\n      </div>\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- Future Projects -->\\n<section class=\\"container mx-auto px-4 py-16\\">\\n  <div class=\\"bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center\\">\\n    <h2 class=\\"text-3xl font-bold mb-6\\">The Magic Continues</h2>\\n    <p class=\\"text-xl mb-8 text-blue-100 max-w-3xl mx-auto\\">\\n      Walt Disney Animation Studios continues to push the boundaries of storytelling and animation technology, \\n      creating new worlds and characters that will inspire generations to come.\\n    </p>\\n    <button class=\\"bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors text-lg\\">\\n      Explore Upcoming Films\\n    </button>\\n  </div>\\n</section>\\n\\n<style>\\n  @keyframes twinkle {\\n    0%, 100% { \\n      opacity: 0;\\n      transform: scale(0.5);\\n    }\\n    50% { \\n      opacity: 1;\\n      transform: scale(1);\\n    }\\n  }\\n  \\n  .animate-twinkle {\\n    animation: twinkle infinite ease-in-out;\\n  }\\n</style>"],"names":[],"mappings":"AA0QE,WAAW,qBAAQ,CACjB,EAAE,CAAE,IAAK,CACP,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,MAAM,GAAG,CACtB,CACA,GAAI,CACF,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,MAAM,CAAC,CACpB,CACF,CAEA,8BAAiB,CACf,SAAS,CAAE,qBAAO,CAAC,QAAQ,CAAC,WAC9B"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const recentFilms = [
    {
      title: "Wish",
      year: 2023,
      icon: "⭐",
      description: "A young girl wishes upon a star in the kingdom of Rosas"
    },
    {
      title: "Encanto",
      year: 2021,
      icon: "🦋",
      description: "A magical family in Colombia faces extraordinary challenges"
    },
    {
      title: "Raya and the Last Dragon",
      year: 2021,
      icon: "🐉",
      description: "A warrior seeks the last dragon to save Kumandra"
    },
    {
      title: "Frozen II",
      year: 2019,
      icon: "❄️",
      description: "Elsa journeys to discover the origin of her powers"
    }
  ];
  const eras = [
    {
      name: "Golden Age",
      years: "1937-1942",
      films: ["Snow White", "Pinocchio", "Fantasia", "Dumbo", "Bambi"],
      color: "from-yellow-400 to-yellow-600"
    },
    {
      name: "Silver Age",
      years: "1950-1967",
      films: [
        "Cinderella",
        "Alice in Wonderland",
        "Peter Pan",
        "Lady and the Tramp",
        "Sleeping Beauty",
        "101 Dalmatians"
      ],
      color: "from-gray-400 to-gray-600"
    },
    {
      name: "Bronze Age",
      years: "1970-1988",
      films: [
        "The Aristocats",
        "Robin Hood",
        "The Rescuers",
        "The Fox and the Hound",
        "Oliver & Company"
      ],
      color: "from-orange-600 to-orange-800"
    },
    {
      name: "Renaissance",
      years: "1989-1999",
      films: [
        "The Little Mermaid",
        "Beauty and the Beast",
        "Aladdin",
        "The Lion King",
        "Pocahontas",
        "Mulan",
        "Tarzan"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Post-Renaissance",
      years: "2000-2009",
      films: [
        "The Emperor's New Groove",
        "Atlantis",
        "Lilo & Stitch",
        "Treasure Planet",
        "Meet the Robinsons",
        "Bolt"
      ],
      color: "from-blue-500 to-teal-500"
    },
    {
      name: "Revival Era",
      years: "2010-Present",
      films: [
        "Tangled",
        "Wreck-It Ralph",
        "Frozen",
        "Big Hero 6",
        "Moana",
        "Zootopia",
        "Encanto",
        "Wish"
      ],
      color: "from-blue-600 to-purple-600"
    }
  ];
  const shorts = [
    {
      title: "Steamboat Willie",
      year: 1928,
      icon: "🚢"
    },
    {
      title: "The Skeleton Dance",
      year: 1929,
      icon: "💀"
    },
    {
      title: "Flowers and Trees",
      year: 1932,
      icon: "🌳"
    },
    {
      title: "The Three Little Pigs",
      year: 1933,
      icon: "🐷"
    },
    {
      title: "The Old Mill",
      year: 1937,
      icon: "🏚️"
    },
    {
      title: "Paperman",
      year: 2012,
      icon: "✈️"
    },
    { title: "Feast", year: 2014, icon: "🍔" },
    {
      title: "Inner Workings",
      year: 2016,
      icon: "🧠"
    }
  ];
  const innovations = [
    {
      title: "First Full-Length Animated Film",
      year: 1937,
      achievement: "Snow White and the Seven Dwarfs"
    },
    {
      title: "Multiplane Camera",
      year: 1937,
      achievement: "Revolutionary depth in animation"
    },
    {
      title: "Xerography Process",
      year: 1961,
      achievement: "101 Dalmatians - cost-effective animation"
    },
    {
      title: "CAPS System",
      year: 1989,
      achievement: "Computer Animation Production System"
    },
    {
      title: "Deep Canvas",
      year: 1999,
      achievement: "3D backgrounds in Tarzan"
    },
    {
      title: "Hyperion Renderer",
      year: 2014,
      achievement: "Advanced lighting in Big Hero 6"
    }
  ];
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-753swd_START -->${$$result.title = `<title>Walt Disney Animation Studios - Where Magic Begins</title>`, ""}<!-- HEAD_svelte-753swd_END -->`, ""}  <section class="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white"><div class="absolute inset-0"> <div class="absolute inset-0">${each(Array(20), (_, i) => {
    return `<div class="absolute text-2xl animate-twinkle svelte-1guv5c" style="${"top: " + escape(Math.random() * 100, true) + "%; left: " + escape(Math.random() * 100, true) + "%; animation-delay: " + escape(Math.random() * 5, true) + "s; animation-duration: " + escape(3 + Math.random() * 2, true) + "s;"}">✨
        </div>`;
  })}</div>  <div class="absolute bottom-0 left-0 right-0 h-64 opacity-20" data-svelte-h="svelte-1o41rc7"><svg viewBox="0 0 1200 300" class="w-full h-full"><path d="M300 300 L300 150 L350 50 L400 150 L400 100 L450 30 L500 100 L500 150 L550 50 L600 150 L600 300 L700 300 L700 180 L750 100 L800 180 L800 300 Z" fill="currentColor" class="text-blue-800"></path></svg></div></div> <div class="relative z-10 container mx-auto px-4 py-20" data-svelte-h="svelte-1h9841z"><div class="text-center"><h1 class="text-5xl md:text-7xl font-bold mb-4">Walt Disney Animation Studios</h1> <p class="text-2xl md:text-3xl mb-8 text-blue-100">Where Dreams Come to Life Since 1923</p> <div class="text-6xl mb-8">🏰</div></div></div></section>  <section class="container mx-auto px-4 py-16"><h2 class="text-3xl font-bold mb-8" data-svelte-h="svelte-pze1ov">Recent Masterpieces</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">${each(recentFilms, (film) => {
    return `<div class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"><div class="aspect-[3/4] bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform">${escape(film.icon)}</div> <div class="p-6"><h3 class="text-xl font-bold mb-1">${escape(film.title)}</h3> <p class="text-sm text-gray-600 mb-2">${escape(film.year)}</p> <p class="text-gray-700">${escape(film.description)}</p></div> </div>`;
  })}</div></section>  <section class="bg-gray-50 py-16"><div class="container mx-auto px-4"><h2 class="text-3xl font-bold mb-12 text-center" data-svelte-h="svelte-1obsm0b">A Legacy of Animation Eras</h2> <div class="space-y-6">${each(eras, (era) => {
    return `<div class="bg-white rounded-xl shadow-md p-6"><div class="flex items-center mb-4"><div class="${"w-4 h-4 rounded-full bg-gradient-to-r " + escape(era.color, true) + " mr-3 svelte-1guv5c"}"></div> <h3 class="text-xl font-bold">${escape(era.name)}</h3> <span class="ml-auto text-gray-600">${escape(era.years)}</span></div> <div class="flex flex-wrap gap-2">${each(era.films, (film) => {
      return `<span class="${"bg-gradient-to-r " + escape(era.color, true) + " text-white px-3 py-1 rounded-full text-sm svelte-1guv5c"}">${escape(film)} </span>`;
    })}</div> </div>`;
  })}</div></div></section>  <section class="container mx-auto px-4 py-16"><div class="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-3xl p-8 md:p-12"><h2 class="text-3xl font-bold mb-8" data-svelte-h="svelte-13izem8">Animated Shorts Legacy</h2> <div class="grid grid-cols-2 md:grid-cols-4 gap-4">${each(shorts, (short) => {
    return `<div class="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow"><div class="text-3xl mb-2">${escape(short.icon)}</div> <p class="font-semibold text-sm">${escape(short.title)}</p> <p class="text-xs text-gray-600">${escape(short.year)}</p> </div>`;
  })}</div></div></section>  <section class="bg-gradient-to-b from-blue-50 to-white py-16"><div class="container mx-auto px-4"><h2 class="text-3xl font-bold mb-12 text-center" data-svelte-h="svelte-11c95ww">Pioneering Animation Innovation</h2> <div class="max-w-4xl mx-auto">${each(innovations, (innovation, i) => {
    return `<div class="flex items-center mb-8"><div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">${escape(innovation.year)}</div> <div class="ml-6 flex-1"><h3 class="font-bold text-lg">${escape(innovation.title)}</h3> <p class="text-gray-600">${escape(innovation.achievement)}</p> </div></div> ${i < innovations.length - 1 ? `<div class="w-0.5 h-8 bg-gray-300 ml-8"></div>` : ``}`;
  })}</div></div></section>  <section class="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16" data-svelte-h="svelte-19k2dyf"><div class="container mx-auto px-4"><h2 class="text-3xl font-bold mb-12 text-center">Awards &amp; Recognition</h2> <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"><div><div class="text-5xl font-bold mb-2">14</div> <div>Academy Awards</div> <div class="text-sm opacity-80">Best Animated Feature</div></div> <div><div class="text-5xl font-bold mb-2">62</div> <div>Feature Films</div> <div class="text-sm opacity-80">Since 1937</div></div> <div><div class="text-5xl font-bold mb-2">100+</div> <div>Years of Magic</div> <div class="text-sm opacity-80">Since 1923</div></div> <div><div class="text-5xl font-bold mb-2">∞</div> <div>Dreams Inspired</div> <div class="text-sm opacity-80">Worldwide</div></div></div></div></section>  <section class="container mx-auto px-4 py-16" data-svelte-h="svelte-12mtptw"><div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center"><h2 class="text-3xl font-bold mb-6">The Magic Continues</h2> <p class="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">Walt Disney Animation Studios continues to push the boundaries of storytelling and animation technology, 
      creating new worlds and characters that will inspire generations to come.</p> <button class="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors text-lg">Explore Upcoming Films</button></div> </section>`;
});
export {
  Page as default
};
