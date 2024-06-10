<script>
  import WipList from "$lib/components/lists/WipList.svelte";
  /** @type {import('./$types').PageData} */
  export let data;
  let wipList = data.wipList ?? [];
</script>

<div role="tablist" class="mt-2 tabs md:tabs-lg tabs-bordered">
    <a href="/wip" class="tab tab-active">Working</a>
    <a href="/" class="tab">Daily Routine </a>
    <a href="/wishlist" class="tab">Wishlist</a>
</div>

<WipList {wipList}/>