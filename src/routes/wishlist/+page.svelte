<script>
  import Wishlist from "$lib/components/lists/Wishlist.svelte";
  /** @type {import('./$types').PageData} */
  export let data;

  let wishlist = data.wishlist ?? [];
  let token = data.token ?? [];
</script>

<div role="tablist" class="mt-2 tabs md:tabs-lg tabs-bordered">
    <a href="/wip" class="tab"> Working</a>
    <a href="/" class="tab"> Daily Routine </a>
    <a href="/wishlist" class="tab tab-active">Wishlist</a>
</div>

<Wishlist {wishlist} {token}/>