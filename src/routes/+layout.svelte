<script>
  import { page } from '$app/stores';

  const logout = () => {
    fetch('/?logout', { method: 'POST' });
  };

  let user = $page.data.user ?? null;
</script>

<style>
  @import '../app.css';
</style>

<main class="min-h-screen">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <slot />
  </div>





  {#if user}
    <nav class="bg-blue-500 p-4 flex justify-between">
      <a href="/" class="text-white">Dashboard</a>
      <form method="POST" action="?/logout">
        <button class="text-white">Logout</button>
      </form>
    </nav>
  {/if}
  
</main>
