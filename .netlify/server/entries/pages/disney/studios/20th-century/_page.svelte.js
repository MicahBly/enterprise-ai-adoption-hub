import { c as create_ssr_component, b as each, e as escape, p as null_to_empty } from "../../../../../chunks/ssr.js";
const css = {
  code: ".text-gold-200.svelte-16hcjlp{color:#fde68a}.text-gold-300.svelte-16hcjlp{color:#fcd34d}.text-gold-400.svelte-16hcjlp{color:#fbbf24}.text-gold-500.svelte-16hcjlp{color:#f59e0b}.text-gold-600.svelte-16hcjlp{color:#d97706}.bg-gold-50.svelte-16hcjlp{background-color:#fffbeb}.bg-gold-100.svelte-16hcjlp{background-color:#fef3c7}.bg-gold-400.svelte-16hcjlp{background-color:#fbbf24}.bg-gold-500.svelte-16hcjlp{background-color:#f59e0b}.bg-gold-600.svelte-16hcjlp{background-color:#d97706}.from-gold-500.svelte-16hcjlp{--tw-gradient-from:#f59e0b}.from-gold-600.svelte-16hcjlp{--tw-gradient-from:#d97706}.to-gold-50.svelte-16hcjlp{--tw-gradient-to:#fffbeb}.to-gold-100.svelte-16hcjlp{--tw-gradient-to:#fef3c7}.to-gold-600.svelte-16hcjlp{--tw-gradient-to:#d97706}.border-gold-400.svelte-16hcjlp{border-color:#fbbf24}@keyframes svelte-16hcjlp-searchlight{0%,100%{opacity:0}50%{opacity:1}}.animate-searchlight.svelte-16hcjlp{animation:svelte-16hcjlp-searchlight 3s ease-in-out}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import { onMount } from 'svelte';\\n  \\n  // Major franchises data\\n  const majorFranchises = [\\n    {\\n      title: 'Avatar',\\n      films: ['Avatar (2009)', 'Avatar: The Way of Water (2022)', 'Avatar 3 (2025)', 'Avatar 4 (2027)', 'Avatar 5 (2029)'],\\n      description: 'James Cameron\\\\'s groundbreaking sci-fi epic exploring Pandora',\\n      icon: '🌍',\\n      boxOffice: '$5.2B+ combined'\\n    },\\n    {\\n      title: 'Alien',\\n      films: ['Alien (1979)', 'Aliens (1986)', 'Alien 3 (1992)', 'Alien: Resurrection (1997)', 'Prometheus (2012)', 'Alien: Covenant (2017)', 'Alien: Romulus (2024)'],\\n      description: 'The iconic sci-fi horror franchise that redefined the genre',\\n      icon: '👽',\\n      boxOffice: '$1.6B+ combined'\\n    },\\n    {\\n      title: 'Planet of the Apes',\\n      films: ['Planet of the Apes (1968)', 'Beneath (1970)', 'Escape (1971)', 'Conquest (1972)', 'Battle (1973)', 'Rise (2011)', 'Dawn (2014)', 'War (2017)', 'Kingdom (2024)'],\\n      description: 'Revolutionary franchise exploring humanity through the lens of evolution',\\n      icon: '🦍',\\n      boxOffice: '$2B+ combined'\\n    },\\n    {\\n      title: 'Die Hard',\\n      films: ['Die Hard (1988)', 'Die Hard 2 (1990)', 'Die Hard with a Vengeance (1995)', 'Live Free or Die Hard (2007)', 'A Good Day to Die Hard (2013)'],\\n      description: 'The action franchise that made Bruce Willis a household name',\\n      icon: '🏢',\\n      boxOffice: '$1.4B+ combined'\\n    },\\n    {\\n      title: 'Predator',\\n      films: ['Predator (1987)', 'Predator 2 (1990)', 'Predators (2010)', 'The Predator (2018)', 'Prey (2022)'],\\n      description: 'Sci-fi action franchise featuring the ultimate alien hunters',\\n      icon: '🎯',\\n      boxOffice: '$750M+ combined'\\n    },\\n    {\\n      title: 'Kingsman',\\n      films: ['Kingsman: The Secret Service (2014)', 'Kingsman: The Golden Circle (2017)', 'The King\\\\'s Man (2021)'],\\n      description: 'Stylish spy action franchise with a British twist',\\n      icon: '🕴️',\\n      boxOffice: '$825M+ combined'\\n    }\\n  ];\\n\\n  // Recent releases\\n  const recentReleases = [\\n    {\\n      title: 'Avatar: The Way of Water',\\n      year: 2022,\\n      director: 'James Cameron',\\n      boxOffice: '$2.3B',\\n      description: 'Return to Pandora in this visually stunning sequel',\\n      rating: 'PG-13'\\n    },\\n    {\\n      title: 'The Menu',\\n      year: 2022,\\n      director: 'Mark Mylod',\\n      boxOffice: '$79.6M',\\n      description: 'A dark comedy thriller set in an exclusive restaurant',\\n      rating: 'R'\\n    },\\n    {\\n      title: 'Amsterdam',\\n      year: 2022,\\n      director: 'David O. Russell',\\n      boxOffice: '$31.2M',\\n      description: 'A stylish period mystery with an all-star cast',\\n      rating: 'R'\\n    },\\n    {\\n      title: 'See How They Run',\\n      year: 2022,\\n      director: 'Tom George',\\n      boxOffice: '$22.6M',\\n      description: 'A witty murder mystery set in 1950s London',\\n      rating: 'PG-13'\\n    },\\n    {\\n      title: 'Barbarian',\\n      year: 2022,\\n      director: 'Zach Cregger',\\n      boxOffice: '$45M',\\n      description: 'A horror thriller with unexpected twists',\\n      rating: 'R'\\n    },\\n    {\\n      title: 'The Banshees of Inisherin',\\n      year: 2022,\\n      director: 'Martin McDonagh',\\n      boxOffice: '$20.1M',\\n      description: 'A darkly comic tale of a friendship gone sour',\\n      rating: 'R'\\n    }\\n  ];\\n\\n  // Classic films library\\n  const classicFilms = [\\n    { title: 'The Sound of Music', year: 1965, icon: '🎵' },\\n    { title: 'Star Wars', year: 1977, icon: '⭐' },\\n    { title: 'Alien', year: 1979, icon: '👽' },\\n    { title: 'The Empire Strikes Back', year: 1980, icon: '⚔️' },\\n    { title: 'E.T. the Extra-Terrestrial', year: 1982, icon: '🚲' },\\n    { title: 'Return of the Jedi', year: 1983, icon: '🌙' },\\n    { title: 'Die Hard', year: 1988, icon: '🏢' },\\n    { title: 'Home Alone', year: 1990, icon: '🏠' },\\n    { title: 'Edward Scissorhands', year: 1990, icon: '✂️' },\\n    { title: 'Terminator 2', year: 1991, icon: '🤖' },\\n    { title: 'Mrs. Doubtfire', year: 1993, icon: '👵' },\\n    { title: 'Speed', year: 1994, icon: '🚌' },\\n    { title: 'Independence Day', year: 1996, icon: '🛸' },\\n    { title: 'Titanic', year: 1997, icon: '🚢' },\\n    { title: 'The Thin Red Line', year: 1998, icon: '🎖️' },\\n    { title: 'Fight Club', year: 1999, icon: '🥊' },\\n    { title: 'Cast Away', year: 2000, icon: '🏝️' },\\n    { title: 'Moulin Rouge!', year: 2001, icon: '💃' },\\n    { title: 'Minority Report', year: 2002, icon: '👁️' },\\n    { title: 'Master and Commander', year: 2003, icon: '⛵' },\\n    { title: 'I, Robot', year: 2004, icon: '🤖' },\\n    { title: 'Walk the Line', year: 2005, icon: '🎸' },\\n    { title: 'The Devil Wears Prada', year: 2006, icon: '👠' },\\n    { title: 'Juno', year: 2007, icon: '🍔' },\\n    { title: 'Slumdog Millionaire', year: 2008, icon: '💰' },\\n    { title: 'Avatar', year: 2009, icon: '🌍' },\\n    { title: 'Black Swan', year: 2010, icon: '🦢' },\\n    { title: 'Rise of the Planet of the Apes', year: 2011, icon: '🦍' },\\n    { title: 'Life of Pi', year: 2012, icon: '🐅' },\\n    { title: 'The Grand Budapest Hotel', year: 2014, icon: '🏨' },\\n    { title: 'The Martian', year: 2015, icon: '🚀' },\\n    { title: 'Deadpool', year: 2016, icon: '💀' },\\n    { title: 'Logan', year: 2017, icon: '❌' },\\n    { title: 'The Greatest Showman', year: 2017, icon: '🎪' },\\n    { title: 'Bohemian Rhapsody', year: 2018, icon: '👑' },\\n    { title: 'Ford v Ferrari', year: 2019, icon: '🏎️' },\\n    { title: 'The Call of the Wild', year: 2020, icon: '🐺' },\\n    { title: 'West Side Story', year: 2021, icon: '💑' }\\n  ];\\n\\n  // Awards and achievements\\n  const awards = {\\n    academyAwards: {\\n      bestPicture: 4,\\n      total: 350\\n    },\\n    goldenGlobes: 198,\\n    baftas: 117,\\n    decades: 9\\n  };\\n\\n  // Upcoming projects\\n  const upcomingProjects = [\\n    {\\n      title: 'Avatar 3',\\n      year: 2025,\\n      director: 'James Cameron',\\n      description: 'The third chapter in the Avatar saga',\\n      status: 'Post-Production'\\n    },\\n    {\\n      title: 'Kingdom of the Planet of the Apes 2',\\n      year: 2026,\\n      director: 'TBA',\\n      description: 'Continuation of the new Apes saga',\\n      status: 'In Development'\\n    },\\n    {\\n      title: 'Alien: Earth',\\n      year: 2025,\\n      director: 'Noah Hawley',\\n      description: 'FX series bringing Alien to Earth',\\n      status: 'Production'\\n    },\\n    {\\n      title: 'The Amateur',\\n      year: 2025,\\n      director: 'James Hawes',\\n      description: 'CIA cryptographer seeks revenge',\\n      status: 'Post-Production'\\n    },\\n    {\\n      title: 'Predator: Badlands',\\n      year: 2025,\\n      director: 'Dan Trachtenberg',\\n      description: 'New chapter in the Predator franchise',\\n      status: 'Production'\\n    }\\n  ];\\n\\n  let searchlightAnimation = false;\\n  \\n  onMount(() => {\\n    // Animate searchlights\\n    const interval = setInterval(() => {\\n      searchlightAnimation = true;\\n      setTimeout(() => searchlightAnimation = false, 3000);\\n    }, 5000);\\n    \\n    return () => clearInterval(interval);\\n  });\\n<\/script>\\n\\n<svelte:head>\\n  <title>20th Century Studios - A Legacy of Cinematic Excellence</title>\\n</svelte:head>\\n\\n<!-- Hero Section with Searchlight Theme -->\\n<section class=\\"relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-gold-600 text-white\\">\\n  <div class=\\"absolute inset-0 opacity-20\\">\\n    <div class=\\"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cdefs%3E%3CradialGradient%20id%3D%22searchlight%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23ffffff%22%20stop-opacity%3D%220.3%22/%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23ffffff%22%20stop-opacity%3D%220%22/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2240%22%20fill%3D%22url%28%23searchlight%29%22/%3E%3C/svg%3E')] bg-no-repeat bg-center\\"></div>\\n  </div>\\n  \\n  <!-- Animated Searchlights -->\\n  <div class={\`absolute inset-0 \${searchlightAnimation ? 'animate-searchlight' : ''}\`}>\\n    <div class=\\"absolute bottom-0 left-1/4 w-32 h-96 bg-gradient-to-t from-yellow-300/30 to-transparent transform -rotate-12 origin-bottom\\"></div>\\n    <div class=\\"absolute bottom-0 right-1/4 w-32 h-96 bg-gradient-to-t from-yellow-300/30 to-transparent transform rotate-12 origin-bottom\\"></div>\\n  </div>\\n  \\n  <div class=\\"relative z-10 container mx-auto px-4 py-20\\">\\n    <div class=\\"text-center\\">\\n      <h1 class=\\"text-6xl md:text-8xl font-bold mb-4\\">\\n        <span class=\\"text-gold-400\\">20th</span>\\n      </h1>\\n      <h2 class=\\"text-4xl md:text-6xl font-bold mb-6\\">\\n        <span class=\\"text-white\\">CENTURY STUDIOS</span>\\n      </h2>\\n      <p class=\\"text-xl md:text-2xl mb-8 text-gold-200 max-w-3xl mx-auto\\">\\n        Nearly a century of groundbreaking cinema, from timeless classics to modern blockbusters\\n      </p>\\n      <div class=\\"flex flex-wrap gap-4 justify-center\\">\\n        <button class=\\"bg-gold-500 text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-gold-400 transition-colors\\">\\n          Explore Our Legacy\\n        </button>\\n        <button class=\\"border-2 border-gold-400 text-gold-400 px-8 py-3 rounded-full font-bold hover:bg-gold-400 hover:text-blue-900 transition-colors\\">\\n          Watch on Disney+\\n        </button>\\n      </div>\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- Major Franchises Section -->\\n<section class=\\"container mx-auto px-4 py-16\\">\\n  <h2 class=\\"text-4xl font-bold mb-2\\">Legendary Franchises</h2>\\n  <p class=\\"text-gray-600 mb-8\\">The blockbuster series that define modern cinema</p>\\n  \\n  <div class=\\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\\">\\n    {#each majorFranchises as franchise}\\n      <div class=\\"bg-gradient-to-br from-blue-50 to-gold-50 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300\\">\\n        <div class=\\"flex items-center mb-4\\">\\n          <span class=\\"text-5xl mr-4\\">{franchise.icon}</span>\\n          <div>\\n            <h3 class=\\"text-2xl font-bold text-blue-900\\">{franchise.title}</h3>\\n            <p class=\\"text-gold-600 font-semibold\\">{franchise.boxOffice}</p>\\n          </div>\\n        </div>\\n        <p class=\\"text-gray-700 mb-4\\">{franchise.description}</p>\\n        <div class=\\"border-t pt-4\\">\\n          <p class=\\"text-sm font-semibold text-blue-800 mb-2\\">Films in franchise:</p>\\n          <div class=\\"space-y-1 max-h-32 overflow-y-auto\\">\\n            {#each franchise.films as film}\\n              <p class=\\"text-xs text-gray-600\\">• {film}</p>\\n            {/each}\\n          </div>\\n        </div>\\n      </div>\\n    {/each}\\n  </div>\\n</section>\\n\\n<!-- Recent Releases -->\\n<section class=\\"bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16\\">\\n  <div class=\\"container mx-auto px-4\\">\\n    <h2 class=\\"text-4xl font-bold mb-8\\">Recent Releases</h2>\\n    \\n    <div class=\\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6\\">\\n      {#each recentReleases as film}\\n        <div class=\\"bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-all\\">\\n          <div class=\\"flex justify-between items-start mb-3\\">\\n            <h3 class=\\"text-xl font-bold\\">{film.title}</h3>\\n            <span class=\\"bg-gold-500 text-blue-900 px-2 py-1 rounded text-xs font-bold\\">{film.rating}</span>\\n          </div>\\n          <p class=\\"text-gold-300 text-sm mb-2\\">{film.year} • {film.director}</p>\\n          <p class=\\"text-blue-100 text-sm mb-3\\">{film.description}</p>\\n          <p class=\\"text-gold-400 font-bold\\">Box Office: {film.boxOffice}</p>\\n        </div>\\n      {/each}\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- Classic Films Library -->\\n<section class=\\"container mx-auto px-4 py-16\\">\\n  <h2 class=\\"text-4xl font-bold mb-2\\">Timeless Classics</h2>\\n  <p class=\\"text-gray-600 mb-8\\">The films that shaped cinema history</p>\\n  \\n  <div class=\\"grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4\\">\\n    {#each classicFilms as film}\\n      <div class=\\"group cursor-pointer\\">\\n        <div class=\\"bg-gradient-to-br from-blue-100 to-gold-100 rounded-lg p-3 text-center hover:shadow-lg transition-all transform hover:scale-110\\">\\n          <div class=\\"text-3xl mb-1\\">{film.icon}</div>\\n          <h4 class=\\"text-xs font-bold text-blue-900\\">{film.title}</h4>\\n          <p class=\\"text-xs text-gray-600\\">{film.year}</p>\\n        </div>\\n      </div>\\n    {/each}\\n  </div>\\n</section>\\n\\n<!-- Awards and Achievements -->\\n<section class=\\"bg-gradient-to-br from-gold-500 to-gold-600 py-16\\">\\n  <div class=\\"container mx-auto px-4\\">\\n    <h2 class=\\"text-4xl font-bold mb-8 text-center text-blue-900\\">Awards & Achievements</h2>\\n    \\n    <div class=\\"grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto\\">\\n      <div class=\\"bg-white rounded-2xl p-6 text-center shadow-lg\\">\\n        <div class=\\"text-5xl mb-2\\">🏆</div>\\n        <div class=\\"text-3xl font-bold text-blue-900\\">{awards.academyAwards.bestPicture}</div>\\n        <p class=\\"text-sm font-semibold\\">Best Picture Oscars</p>\\n      </div>\\n      \\n      <div class=\\"bg-white rounded-2xl p-6 text-center shadow-lg\\">\\n        <div class=\\"text-5xl mb-2\\">🎬</div>\\n        <div class=\\"text-3xl font-bold text-blue-900\\">{awards.academyAwards.total}+</div>\\n        <p class=\\"text-sm font-semibold\\">Total Academy Awards</p>\\n      </div>\\n      \\n      <div class=\\"bg-white rounded-2xl p-6 text-center shadow-lg\\">\\n        <div class=\\"text-5xl mb-2\\">🌟</div>\\n        <div class=\\"text-3xl font-bold text-blue-900\\">{awards.goldenGlobes}</div>\\n        <p class=\\"text-sm font-semibold\\">Golden Globe Awards</p>\\n      </div>\\n      \\n      <div class=\\"bg-white rounded-2xl p-6 text-center shadow-lg\\">\\n        <div class=\\"text-5xl mb-2\\">🎭</div>\\n        <div class=\\"text-3xl font-bold text-blue-900\\">{awards.decades}</div>\\n        <p class=\\"text-sm font-semibold\\">Decades of Excellence</p>\\n      </div>\\n    </div>\\n    \\n    <div class=\\"mt-12 text-center\\">\\n      <p class=\\"text-blue-900 text-xl font-semibold\\">Home to 4 Best Picture Winners</p>\\n      <p class=\\"text-blue-800 mt-2\\">The Sound of Music • Patton • The French Connection • Titanic</p>\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- Upcoming Projects -->\\n<section class=\\"container mx-auto px-4 py-16\\">\\n  <h2 class=\\"text-4xl font-bold mb-8\\">Coming Soon</h2>\\n  \\n  <div class=\\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6\\">\\n    {#each upcomingProjects as project}\\n      <div class=\\"bg-gradient-to-br from-blue-800 to-blue-900 text-white rounded-2xl p-6 hover:shadow-2xl transition-all\\">\\n        <div class=\\"flex justify-between items-start mb-4\\">\\n          <h3 class=\\"text-xl font-bold\\">{project.title}</h3>\\n          <span class=\\"bg-gold-500 text-blue-900 px-3 py-1 rounded-full text-xs font-bold\\">{project.status}</span>\\n        </div>\\n        <p class=\\"text-gold-300 mb-2\\">{project.year} • {project.director}</p>\\n        <p class=\\"text-blue-100\\">{project.description}</p>\\n      </div>\\n    {/each}\\n  </div>\\n</section>\\n\\n<!-- Studio Legacy -->\\n<section class=\\"bg-gradient-to-r from-blue-50 to-gold-50 py-16\\">\\n  <div class=\\"container mx-auto px-4\\">\\n    <div class=\\"max-w-4xl mx-auto\\">\\n      <h2 class=\\"text-4xl font-bold mb-8 text-center text-blue-900\\">Our Legacy</h2>\\n      \\n      <div class=\\"grid grid-cols-1 md:grid-cols-2 gap-8\\">\\n        <div class=\\"bg-white rounded-2xl p-8 shadow-lg\\">\\n          <h3 class=\\"text-2xl font-bold mb-4 text-blue-900\\">Innovation in Cinema</h3>\\n          <ul class=\\"space-y-3 text-gray-700\\">\\n            <li class=\\"flex items-start\\">\\n              <span class=\\"text-gold-500 mr-2\\">•</span>\\n              <span>Pioneered CinemaScope widescreen format</span>\\n            </li>\\n            <li class=\\"flex items-start\\">\\n              <span class=\\"text-gold-500 mr-2\\">•</span>\\n              <span>First studio to embrace television production</span>\\n            </li>\\n            <li class=\\"flex items-start\\">\\n              <span class=\\"text-gold-500 mr-2\\">•</span>\\n              <span>Revolutionary visual effects in Avatar franchise</span>\\n            </li>\\n            <li class=\\"flex items-start\\">\\n              <span class=\\"text-gold-500 mr-2\\">•</span>\\n              <span>Leader in 3D and high frame rate technology</span>\\n            </li>\\n          </ul>\\n        </div>\\n        \\n        <div class=\\"bg-white rounded-2xl p-8 shadow-lg\\">\\n          <h3 class=\\"text-2xl font-bold mb-4 text-blue-900\\">Iconic Filmmakers</h3>\\n          <ul class=\\"space-y-3 text-gray-700\\">\\n            <li class=\\"flex items-start\\">\\n              <span class=\\"text-gold-500 mr-2\\">•</span>\\n              <span>James Cameron - Avatar, Titanic, Aliens</span>\\n            </li>\\n            <li class=\\"flex items-start\\">\\n              <span class=\\"text-gold-500 mr-2\\">•</span>\\n              <span>Ridley Scott - Alien, The Martian</span>\\n            </li>\\n            <li class=\\"flex items-start\\">\\n              <span class=\\"text-gold-500 mr-2\\">•</span>\\n              <span>Steven Spielberg - Minority Report, War Horse</span>\\n            </li>\\n            <li class=\\"flex items-start\\">\\n              <span class=\\"text-gold-500 mr-2\\">•</span>\\n              <span>Wes Anderson - Grand Budapest Hotel, French Dispatch</span>\\n            </li>\\n          </ul>\\n        </div>\\n      </div>\\n    </div>\\n  </div>\\n</section>\\n\\n<!-- Call to Action -->\\n<section class=\\"container mx-auto px-4 py-16\\">\\n  <div class=\\"bg-gradient-to-r from-blue-900 to-gold-600 rounded-3xl p-8 md:p-12 text-white text-center\\">\\n    <h2 class=\\"text-3xl md:text-4xl font-bold mb-4\\">Experience 20th Century Studios</h2>\\n    <p class=\\"text-xl mb-8 text-gold-200 max-w-2xl mx-auto\\">\\n      Stream our complete collection of films, from beloved classics to the latest blockbusters\\n    </p>\\n    <div class=\\"flex flex-col sm:flex-row gap-4 justify-center\\">\\n      <button class=\\"bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-gold-100 transition-colors\\">\\n        Browse on Disney+\\n      </button>\\n      <button class=\\"border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-900 transition-colors\\">\\n        View Theatrical Releases\\n      </button>\\n    </div>\\n  </div>\\n</section>\\n\\n<style>\\n  /* Custom gold color */\\n  .text-gold-200 { color: #fde68a; }\\n  .text-gold-300 { color: #fcd34d; }\\n  .text-gold-400 { color: #fbbf24; }\\n  .text-gold-500 { color: #f59e0b; }\\n  .text-gold-600 { color: #d97706; }\\n  .bg-gold-50 { background-color: #fffbeb; }\\n  .bg-gold-100 { background-color: #fef3c7; }\\n  .bg-gold-400 { background-color: #fbbf24; }\\n  .bg-gold-500 { background-color: #f59e0b; }\\n  .bg-gold-600 { background-color: #d97706; }\\n  .from-gold-500 { --tw-gradient-from: #f59e0b; }\\n  .from-gold-600 { --tw-gradient-from: #d97706; }\\n  .to-gold-50 { --tw-gradient-to: #fffbeb; }\\n  .to-gold-100 { --tw-gradient-to: #fef3c7; }\\n  .to-gold-600 { --tw-gradient-to: #d97706; }\\n  .border-gold-400 { border-color: #fbbf24; }\\n  \\n  /* Searchlight animation */\\n  @keyframes searchlight {\\n    0%, 100% { \\n      opacity: 0;\\n    }\\n    50% { \\n      opacity: 1;\\n    }\\n  }\\n  \\n  .animate-searchlight {\\n    animation: searchlight 3s ease-in-out;\\n  }\\n</style>"],"names":[],"mappings":"AA4bE,6BAAe,CAAE,KAAK,CAAE,OAAS,CACjC,6BAAe,CAAE,KAAK,CAAE,OAAS,CACjC,6BAAe,CAAE,KAAK,CAAE,OAAS,CACjC,6BAAe,CAAE,KAAK,CAAE,OAAS,CACjC,6BAAe,CAAE,KAAK,CAAE,OAAS,CACjC,0BAAY,CAAE,gBAAgB,CAAE,OAAS,CACzC,2BAAa,CAAE,gBAAgB,CAAE,OAAS,CAC1C,2BAAa,CAAE,gBAAgB,CAAE,OAAS,CAC1C,2BAAa,CAAE,gBAAgB,CAAE,OAAS,CAC1C,2BAAa,CAAE,gBAAgB,CAAE,OAAS,CAC1C,6BAAe,CAAE,kBAAkB,CAAE,OAAS,CAC9C,6BAAe,CAAE,kBAAkB,CAAE,OAAS,CAC9C,0BAAY,CAAE,gBAAgB,CAAE,OAAS,CACzC,2BAAa,CAAE,gBAAgB,CAAE,OAAS,CAC1C,2BAAa,CAAE,gBAAgB,CAAE,OAAS,CAC1C,+BAAiB,CAAE,YAAY,CAAE,OAAS,CAG1C,WAAW,0BAAY,CACrB,EAAE,CAAE,IAAK,CACP,OAAO,CAAE,CACX,CACA,GAAI,CACF,OAAO,CAAE,CACX,CACF,CAEA,mCAAqB,CACnB,SAAS,CAAE,0BAAW,CAAC,EAAE,CAAC,WAC5B"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const majorFranchises = [
    {
      title: "Avatar",
      films: [
        "Avatar (2009)",
        "Avatar: The Way of Water (2022)",
        "Avatar 3 (2025)",
        "Avatar 4 (2027)",
        "Avatar 5 (2029)"
      ],
      description: "James Cameron's groundbreaking sci-fi epic exploring Pandora",
      icon: "🌍",
      boxOffice: "$5.2B+ combined"
    },
    {
      title: "Alien",
      films: [
        "Alien (1979)",
        "Aliens (1986)",
        "Alien 3 (1992)",
        "Alien: Resurrection (1997)",
        "Prometheus (2012)",
        "Alien: Covenant (2017)",
        "Alien: Romulus (2024)"
      ],
      description: "The iconic sci-fi horror franchise that redefined the genre",
      icon: "👽",
      boxOffice: "$1.6B+ combined"
    },
    {
      title: "Planet of the Apes",
      films: [
        "Planet of the Apes (1968)",
        "Beneath (1970)",
        "Escape (1971)",
        "Conquest (1972)",
        "Battle (1973)",
        "Rise (2011)",
        "Dawn (2014)",
        "War (2017)",
        "Kingdom (2024)"
      ],
      description: "Revolutionary franchise exploring humanity through the lens of evolution",
      icon: "🦍",
      boxOffice: "$2B+ combined"
    },
    {
      title: "Die Hard",
      films: [
        "Die Hard (1988)",
        "Die Hard 2 (1990)",
        "Die Hard with a Vengeance (1995)",
        "Live Free or Die Hard (2007)",
        "A Good Day to Die Hard (2013)"
      ],
      description: "The action franchise that made Bruce Willis a household name",
      icon: "🏢",
      boxOffice: "$1.4B+ combined"
    },
    {
      title: "Predator",
      films: [
        "Predator (1987)",
        "Predator 2 (1990)",
        "Predators (2010)",
        "The Predator (2018)",
        "Prey (2022)"
      ],
      description: "Sci-fi action franchise featuring the ultimate alien hunters",
      icon: "🎯",
      boxOffice: "$750M+ combined"
    },
    {
      title: "Kingsman",
      films: [
        "Kingsman: The Secret Service (2014)",
        "Kingsman: The Golden Circle (2017)",
        "The King's Man (2021)"
      ],
      description: "Stylish spy action franchise with a British twist",
      icon: "🕴️",
      boxOffice: "$825M+ combined"
    }
  ];
  const recentReleases = [
    {
      title: "Avatar: The Way of Water",
      year: 2022,
      director: "James Cameron",
      boxOffice: "$2.3B",
      description: "Return to Pandora in this visually stunning sequel",
      rating: "PG-13"
    },
    {
      title: "The Menu",
      year: 2022,
      director: "Mark Mylod",
      boxOffice: "$79.6M",
      description: "A dark comedy thriller set in an exclusive restaurant",
      rating: "R"
    },
    {
      title: "Amsterdam",
      year: 2022,
      director: "David O. Russell",
      boxOffice: "$31.2M",
      description: "A stylish period mystery with an all-star cast",
      rating: "R"
    },
    {
      title: "See How They Run",
      year: 2022,
      director: "Tom George",
      boxOffice: "$22.6M",
      description: "A witty murder mystery set in 1950s London",
      rating: "PG-13"
    },
    {
      title: "Barbarian",
      year: 2022,
      director: "Zach Cregger",
      boxOffice: "$45M",
      description: "A horror thriller with unexpected twists",
      rating: "R"
    },
    {
      title: "The Banshees of Inisherin",
      year: 2022,
      director: "Martin McDonagh",
      boxOffice: "$20.1M",
      description: "A darkly comic tale of a friendship gone sour",
      rating: "R"
    }
  ];
  const classicFilms = [
    {
      title: "The Sound of Music",
      year: 1965,
      icon: "🎵"
    },
    {
      title: "Star Wars",
      year: 1977,
      icon: "⭐"
    },
    { title: "Alien", year: 1979, icon: "👽" },
    {
      title: "The Empire Strikes Back",
      year: 1980,
      icon: "⚔️"
    },
    {
      title: "E.T. the Extra-Terrestrial",
      year: 1982,
      icon: "🚲"
    },
    {
      title: "Return of the Jedi",
      year: 1983,
      icon: "🌙"
    },
    {
      title: "Die Hard",
      year: 1988,
      icon: "🏢"
    },
    {
      title: "Home Alone",
      year: 1990,
      icon: "🏠"
    },
    {
      title: "Edward Scissorhands",
      year: 1990,
      icon: "✂️"
    },
    {
      title: "Terminator 2",
      year: 1991,
      icon: "🤖"
    },
    {
      title: "Mrs. Doubtfire",
      year: 1993,
      icon: "👵"
    },
    { title: "Speed", year: 1994, icon: "🚌" },
    {
      title: "Independence Day",
      year: 1996,
      icon: "🛸"
    },
    { title: "Titanic", year: 1997, icon: "🚢" },
    {
      title: "The Thin Red Line",
      year: 1998,
      icon: "🎖️"
    },
    {
      title: "Fight Club",
      year: 1999,
      icon: "🥊"
    },
    {
      title: "Cast Away",
      year: 2e3,
      icon: "🏝️"
    },
    {
      title: "Moulin Rouge!",
      year: 2001,
      icon: "💃"
    },
    {
      title: "Minority Report",
      year: 2002,
      icon: "👁️"
    },
    {
      title: "Master and Commander",
      year: 2003,
      icon: "⛵"
    },
    {
      title: "I, Robot",
      year: 2004,
      icon: "🤖"
    },
    {
      title: "Walk the Line",
      year: 2005,
      icon: "🎸"
    },
    {
      title: "The Devil Wears Prada",
      year: 2006,
      icon: "👠"
    },
    { title: "Juno", year: 2007, icon: "🍔" },
    {
      title: "Slumdog Millionaire",
      year: 2008,
      icon: "💰"
    },
    { title: "Avatar", year: 2009, icon: "🌍" },
    {
      title: "Black Swan",
      year: 2010,
      icon: "🦢"
    },
    {
      title: "Rise of the Planet of the Apes",
      year: 2011,
      icon: "🦍"
    },
    {
      title: "Life of Pi",
      year: 2012,
      icon: "🐅"
    },
    {
      title: "The Grand Budapest Hotel",
      year: 2014,
      icon: "🏨"
    },
    {
      title: "The Martian",
      year: 2015,
      icon: "🚀"
    },
    {
      title: "Deadpool",
      year: 2016,
      icon: "💀"
    },
    { title: "Logan", year: 2017, icon: "❌" },
    {
      title: "The Greatest Showman",
      year: 2017,
      icon: "🎪"
    },
    {
      title: "Bohemian Rhapsody",
      year: 2018,
      icon: "👑"
    },
    {
      title: "Ford v Ferrari",
      year: 2019,
      icon: "🏎️"
    },
    {
      title: "The Call of the Wild",
      year: 2020,
      icon: "🐺"
    },
    {
      title: "West Side Story",
      year: 2021,
      icon: "💑"
    }
  ];
  const awards = {
    academyAwards: { bestPicture: 4, total: 350 },
    goldenGlobes: 198,
    decades: 9
  };
  const upcomingProjects = [
    {
      title: "Avatar 3",
      year: 2025,
      director: "James Cameron",
      description: "The third chapter in the Avatar saga",
      status: "Post-Production"
    },
    {
      title: "Kingdom of the Planet of the Apes 2",
      year: 2026,
      director: "TBA",
      description: "Continuation of the new Apes saga",
      status: "In Development"
    },
    {
      title: "Alien: Earth",
      year: 2025,
      director: "Noah Hawley",
      description: "FX series bringing Alien to Earth",
      status: "Production"
    },
    {
      title: "The Amateur",
      year: 2025,
      director: "James Hawes",
      description: "CIA cryptographer seeks revenge",
      status: "Post-Production"
    },
    {
      title: "Predator: Badlands",
      year: 2025,
      director: "Dan Trachtenberg",
      description: "New chapter in the Predator franchise",
      status: "Production"
    }
  ];
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-19ng1yn_START -->${$$result.title = `<title>20th Century Studios - A Legacy of Cinematic Excellence</title>`, ""}<!-- HEAD_svelte-19ng1yn_END -->`, ""}  <section class="relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-gold-600 text-white svelte-16hcjlp"><div class="absolute inset-0 opacity-20" data-svelte-h="svelte-c2lm3b"><div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cdefs%3E%3CradialGradient%20id%3D%22searchlight%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23ffffff%22%20stop-opacity%3D%220.3%22/%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23ffffff%22%20stop-opacity%3D%220%22/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2240%22%20fill%3D%22url%28%23searchlight%29%22/%3E%3C/svg%3E')] bg-no-repeat bg-center"></div></div>  <div class="${escape(null_to_empty(`absolute inset-0 ${""}`), true) + " svelte-16hcjlp"}"><div class="absolute bottom-0 left-1/4 w-32 h-96 bg-gradient-to-t from-yellow-300/30 to-transparent transform -rotate-12 origin-bottom"></div> <div class="absolute bottom-0 right-1/4 w-32 h-96 bg-gradient-to-t from-yellow-300/30 to-transparent transform rotate-12 origin-bottom"></div></div> <div class="relative z-10 container mx-auto px-4 py-20" data-svelte-h="svelte-7pnhpm"><div class="text-center"><h1 class="text-6xl md:text-8xl font-bold mb-4"><span class="text-gold-400 svelte-16hcjlp">20th</span></h1> <h2 class="text-4xl md:text-6xl font-bold mb-6"><span class="text-white">CENTURY STUDIOS</span></h2> <p class="text-xl md:text-2xl mb-8 text-gold-200 max-w-3xl mx-auto svelte-16hcjlp">Nearly a century of groundbreaking cinema, from timeless classics to modern blockbusters</p> <div class="flex flex-wrap gap-4 justify-center"><button class="bg-gold-500 text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-gold-400 transition-colors svelte-16hcjlp">Explore Our Legacy</button> <button class="border-2 border-gold-400 text-gold-400 px-8 py-3 rounded-full font-bold hover:bg-gold-400 hover:text-blue-900 transition-colors svelte-16hcjlp">Watch on Disney+</button></div></div></div></section>  <section class="container mx-auto px-4 py-16"><h2 class="text-4xl font-bold mb-2" data-svelte-h="svelte-1va6j69">Legendary Franchises</h2> <p class="text-gray-600 mb-8" data-svelte-h="svelte-1knzxmb">The blockbuster series that define modern cinema</p> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">${each(majorFranchises, (franchise) => {
    return `<div class="bg-gradient-to-br from-blue-50 to-gold-50 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 svelte-16hcjlp"><div class="flex items-center mb-4"><span class="text-5xl mr-4">${escape(franchise.icon)}</span> <div><h3 class="text-2xl font-bold text-blue-900">${escape(franchise.title)}</h3> <p class="text-gold-600 font-semibold svelte-16hcjlp">${escape(franchise.boxOffice)}</p> </div></div> <p class="text-gray-700 mb-4">${escape(franchise.description)}</p> <div class="border-t pt-4"><p class="text-sm font-semibold text-blue-800 mb-2" data-svelte-h="svelte-1r8a6zi">Films in franchise:</p> <div class="space-y-1 max-h-32 overflow-y-auto">${each(franchise.films, (film) => {
      return `<p class="text-xs text-gray-600">• ${escape(film)}</p>`;
    })} </div></div> </div>`;
  })}</div></section>  <section class="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16"><div class="container mx-auto px-4"><h2 class="text-4xl font-bold mb-8" data-svelte-h="svelte-avr6qx">Recent Releases</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">${each(recentReleases, (film) => {
    return `<div class="bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-all"><div class="flex justify-between items-start mb-3"><h3 class="text-xl font-bold">${escape(film.title)}</h3> <span class="bg-gold-500 text-blue-900 px-2 py-1 rounded text-xs font-bold svelte-16hcjlp">${escape(film.rating)}</span></div> <p class="text-gold-300 text-sm mb-2 svelte-16hcjlp">${escape(film.year)} • ${escape(film.director)}</p> <p class="text-blue-100 text-sm mb-3">${escape(film.description)}</p> <p class="text-gold-400 font-bold svelte-16hcjlp">Box Office: ${escape(film.boxOffice)}</p> </div>`;
  })}</div></div></section>  <section class="container mx-auto px-4 py-16"><h2 class="text-4xl font-bold mb-2" data-svelte-h="svelte-11fjc41">Timeless Classics</h2> <p class="text-gray-600 mb-8" data-svelte-h="svelte-mpeu22">The films that shaped cinema history</p> <div class="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4">${each(classicFilms, (film) => {
    return `<div class="group cursor-pointer"><div class="bg-gradient-to-br from-blue-100 to-gold-100 rounded-lg p-3 text-center hover:shadow-lg transition-all transform hover:scale-110 svelte-16hcjlp"><div class="text-3xl mb-1">${escape(film.icon)}</div> <h4 class="text-xs font-bold text-blue-900">${escape(film.title)}</h4> <p class="text-xs text-gray-600">${escape(film.year)}</p></div> </div>`;
  })}</div></section>  <section class="bg-gradient-to-br from-gold-500 to-gold-600 py-16 svelte-16hcjlp"><div class="container mx-auto px-4"><h2 class="text-4xl font-bold mb-8 text-center text-blue-900" data-svelte-h="svelte-kdigzj">Awards &amp; Achievements</h2> <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"><div class="bg-white rounded-2xl p-6 text-center shadow-lg"><div class="text-5xl mb-2" data-svelte-h="svelte-6a7oe">🏆</div> <div class="text-3xl font-bold text-blue-900">${escape(awards.academyAwards.bestPicture)}</div> <p class="text-sm font-semibold" data-svelte-h="svelte-1mtrwm9">Best Picture Oscars</p></div> <div class="bg-white rounded-2xl p-6 text-center shadow-lg"><div class="text-5xl mb-2" data-svelte-h="svelte-1uszlwo">🎬</div> <div class="text-3xl font-bold text-blue-900">${escape(awards.academyAwards.total)}+</div> <p class="text-sm font-semibold" data-svelte-h="svelte-m4wnpe">Total Academy Awards</p></div> <div class="bg-white rounded-2xl p-6 text-center shadow-lg"><div class="text-5xl mb-2" data-svelte-h="svelte-yamjpz">🌟</div> <div class="text-3xl font-bold text-blue-900">${escape(awards.goldenGlobes)}</div> <p class="text-sm font-semibold" data-svelte-h="svelte-1ew56bi">Golden Globe Awards</p></div> <div class="bg-white rounded-2xl p-6 text-center shadow-lg"><div class="text-5xl mb-2" data-svelte-h="svelte-xmcqmx">🎭</div> <div class="text-3xl font-bold text-blue-900">${escape(awards.decades)}</div> <p class="text-sm font-semibold" data-svelte-h="svelte-1r5iuac">Decades of Excellence</p></div></div> <div class="mt-12 text-center" data-svelte-h="svelte-1j8zrzu"><p class="text-blue-900 text-xl font-semibold">Home to 4 Best Picture Winners</p> <p class="text-blue-800 mt-2">The Sound of Music • Patton • The French Connection • Titanic</p></div></div></section>  <section class="container mx-auto px-4 py-16"><h2 class="text-4xl font-bold mb-8" data-svelte-h="svelte-1s72x2">Coming Soon</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">${each(upcomingProjects, (project) => {
    return `<div class="bg-gradient-to-br from-blue-800 to-blue-900 text-white rounded-2xl p-6 hover:shadow-2xl transition-all"><div class="flex justify-between items-start mb-4"><h3 class="text-xl font-bold">${escape(project.title)}</h3> <span class="bg-gold-500 text-blue-900 px-3 py-1 rounded-full text-xs font-bold svelte-16hcjlp">${escape(project.status)}</span></div> <p class="text-gold-300 mb-2 svelte-16hcjlp">${escape(project.year)} • ${escape(project.director)}</p> <p class="text-blue-100">${escape(project.description)}</p> </div>`;
  })}</div></section>  <section class="bg-gradient-to-r from-blue-50 to-gold-50 py-16 svelte-16hcjlp" data-svelte-h="svelte-1m3wdf1"><div class="container mx-auto px-4"><div class="max-w-4xl mx-auto"><h2 class="text-4xl font-bold mb-8 text-center text-blue-900">Our Legacy</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div class="bg-white rounded-2xl p-8 shadow-lg"><h3 class="text-2xl font-bold mb-4 text-blue-900">Innovation in Cinema</h3> <ul class="space-y-3 text-gray-700"><li class="flex items-start"><span class="text-gold-500 mr-2 svelte-16hcjlp">•</span> <span>Pioneered CinemaScope widescreen format</span></li> <li class="flex items-start"><span class="text-gold-500 mr-2 svelte-16hcjlp">•</span> <span>First studio to embrace television production</span></li> <li class="flex items-start"><span class="text-gold-500 mr-2 svelte-16hcjlp">•</span> <span>Revolutionary visual effects in Avatar franchise</span></li> <li class="flex items-start"><span class="text-gold-500 mr-2 svelte-16hcjlp">•</span> <span>Leader in 3D and high frame rate technology</span></li></ul></div> <div class="bg-white rounded-2xl p-8 shadow-lg"><h3 class="text-2xl font-bold mb-4 text-blue-900">Iconic Filmmakers</h3> <ul class="space-y-3 text-gray-700"><li class="flex items-start"><span class="text-gold-500 mr-2 svelte-16hcjlp">•</span> <span>James Cameron - Avatar, Titanic, Aliens</span></li> <li class="flex items-start"><span class="text-gold-500 mr-2 svelte-16hcjlp">•</span> <span>Ridley Scott - Alien, The Martian</span></li> <li class="flex items-start"><span class="text-gold-500 mr-2 svelte-16hcjlp">•</span> <span>Steven Spielberg - Minority Report, War Horse</span></li> <li class="flex items-start"><span class="text-gold-500 mr-2 svelte-16hcjlp">•</span> <span>Wes Anderson - Grand Budapest Hotel, French Dispatch</span></li></ul></div></div></div></div></section>  <section class="container mx-auto px-4 py-16" data-svelte-h="svelte-rsvt3h"><div class="bg-gradient-to-r from-blue-900 to-gold-600 rounded-3xl p-8 md:p-12 text-white text-center svelte-16hcjlp"><h2 class="text-3xl md:text-4xl font-bold mb-4">Experience 20th Century Studios</h2> <p class="text-xl mb-8 text-gold-200 max-w-2xl mx-auto svelte-16hcjlp">Stream our complete collection of films, from beloved classics to the latest blockbusters</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"><button class="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-gold-100 transition-colors">Browse on Disney+</button> <button class="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-900 transition-colors">View Theatrical Releases</button></div></div> </section>`;
});
export {
  Page as default
};
