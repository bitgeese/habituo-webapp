<script>
  import { page } from '$app/stores';
  import { derived } from 'svelte/store';
  import { onDestroy } from 'svelte';

  let user = null;

  // Update user when the page data changes
  const unsubscribe = page.subscribe(($page) => {
    user = $page.data.user ?? null;
  });

  onDestroy(() => {
    unsubscribe();
  });

  const pathname = derived(page, $page => $page.url.pathname);
</script>

<style>
  @import '../app.css';
</style>

{#if user}
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a href="/" class="btn btn-ghost font-black uppercase tracking-wider text-primary text-xl">🌳 Habituo.io</a>
    </div>
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
        </svg>
      </button>
    </div>
  </div>
{/if}

<main class="min-h-screen">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div role="tablist" class="mt-2 tabs md:tabs-lg tabs-bordered">
      <a href="/wip" class="tab {$pathname === '/wip' ? 'tab-active' : ''}"> Working</a>
      <a href="/" class="tab {$pathname === '/' ? 'tab-active' : ''}"> Daily Routine </a>
      <a href="/wishlist" class="tab {$pathname === '/wishlist' ? 'tab-active' : ''}">Wishlist</a>
    </div>
    <slot />
  </div>
</main>
<footer class="mt-12 footer footer-center p-4 bg-base-200 text-base-content">
  <aside>
    <p>Copyright © 2024 - by <a class="link link-accent" href="https://bitgeese.io">BitGeese.io</a></p>
  </aside>
</footer>
