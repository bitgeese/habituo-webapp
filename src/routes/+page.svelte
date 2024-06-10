<script>
  // import HabitDashboard from '$lib/components/HabitDashboard.svelte';
  // import HabitList from '$lib/components/HabitList.svelte';
  // import { deleteHabit, patchHabit } from '$lib/utils/habitActions';
  import DailyRoutine from '$lib/components/lists/DailyRoutine.svelte'

  /** @type {import('./$types').PageData} */
  export let data;

  // let wishlist = data.wishlist ?? [];
  // let inProgressList = data.inProgressList ?? [];
  let dailyRoutine = data.dailyRoutine ?? [];

  let currentTab = '1';
</script>



<div>
  {#if currentTab == '0'}
  <div>
    In progress
  </div>
  {/if}
  {#if currentTab == '1'}
  <div>
    <DailyRoutine {dailyRoutine}/>
  </div>
  {/if}
  {#if currentTab == '2'}
  <div>
    Wishlist
  </div>
  {/if}

  <!-- Tab Control -->
  <div class="fixed bottom-0 left-0 w-full">
    <div role="tablist" class="tabs tabs-bordered">
      <input type="radio" value="0" bind:group={currentTab} checked={currentTab === '0'} name="my_tabs_1" role="tab" class="tab" aria-label="Working" />
      <input type="radio" value="1" bind:group={currentTab} checked={currentTab === '1'} name="my_tabs_1" role="tab" class="tab" aria-label="Daily Routine" />
      <input type="radio" value="2" bind:group={currentTab} checked={currentTab === '2'} name="my_tabs_1" role="tab" class="tab" aria-label="Wishlist" />
    </div>
  </div>

</div>







<!-- Hello, {data.user ? data.user.email : 'Guest'} -->
<!-- <HabitList {wishlist} {deleteHabit} {patchHabit} {inProgressList} {dailyRoutine}/> -->
    


<!-- <HabitDashboard/> -->
<!-- <HabitDashboard
  wishlist={wishlist}
  inProgressList={inProgressList}
  dailyRoutine={dailyRoutine}
  deleteHabit={deleteHabit}
  patchHabit={patchHabit}
/> -->