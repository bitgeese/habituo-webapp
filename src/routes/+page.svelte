<script>
  import DailyRoutine from '$lib/components/lists/DailyRoutine.svelte'
  import Wishlist from "$lib/components/lists/Wishlist.svelte"
  import WipList from "$lib/components/lists/WipList.svelte";
  /** @type {import('./$types').PageData} */
  export let data;

  let wishlist = data.wishlist ?? [];
  let wipList = data.wipList ?? [];
  let dailyRoutine = data.dailyRoutine ?? [];
  let token = data.token ?? [];

  let activeTab = '1';

  async function handleSelect(event) {
      let currentHabit = event.detail;
      dailyRoutine.push(currentHabit);
      wipList.push(currentHabit);
  }
  
</script>

<!-- Tab Control -->
<div role="tablist" class="mt-2 tabs tabs-bordered">
  <input type="radio" value="0" bind:group={activeTab} checked={activeTab === '0'} name="my_tabs_1" role="tab" class="tab" aria-label="Working" />
  <input type="radio" value="1" bind:group={activeTab} checked={activeTab === '1'} name="my_tabs_1" role="tab" class="tab" aria-label="Daily Routine" />
  <input type="radio" value="2" bind:group={activeTab} checked={activeTab === '2'} name="my_tabs_1" role="tab" class="tab" aria-label="Wishlist" />
</div>

<div>
  {#if activeTab == '0'}
  <div>
    <WipList {wipList}/>
  </div>
  {/if}
  {#if activeTab == '1'}
  <div>
    <DailyRoutine {dailyRoutine}/>
  </div>
  {/if}
  {#if activeTab == '2'}
  <div>
    <Wishlist {wishlist} {token} on:select={handleSelect}/>
  </div>
  {/if}


</div>
