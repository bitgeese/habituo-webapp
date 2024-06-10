<script>
  import DailyRoutine from '$lib/components/lists/DailyRoutine.svelte'
  // import Wishlist from "$lib/components/lists/Wishlist.svelte"
  // import WipList from "$lib/components/lists/WipList.svelte";
  /** @type {import('./$types').PageData} */
  export let data;

  // let wishlist = data.wishlist ?? [];
  // let wipList = data.wipList ?? [];
  let dailyRoutine = data.dailyRoutine ?? [];
  let token = data.token ?? [];

  
</script>

<div role="tablist" class="mt-2 tabs md:tabs-lg tabs-bordered">
    <a href="/wip" class="tab"> Working</a>
    <a href="/" class="tab tab-active"> Daily Routine </a>
    <a href="/wishlist" class="tab">Wishlist</a>
</div>



<DailyRoutine {dailyRoutine}/>
