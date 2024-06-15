<script>
    import SortableList from './SortableList.svelte';
    import WipHabitCard from "$lib/components/habits/WipHabitCard.svelte"
    import CoreHabitCard from "$lib/components/habits/CoreHabitCard.svelte"
    import CreateHabitModal from "$lib/components/modals/CreateHabitModal.svelte"
    
    export let dailyRoutine = [];
    export let token;
    
    // Create Habit Modal
    let createModal;

    let today = new Date();
    let options = { weekday: 'long', day: 'numeric', month: 'short' };
    let formattedDate = today.toLocaleDateString('en-US', options);

    const sortList = ev => {dailyRoutine = ev.detail};
</script>

<div class="mt-6 mx-2 flex items-center justify-between">
  <h2 class="text-2xl font-bold">🌅 {formattedDate}</h2>
  <div class="join">
    <button on:click={() => createModal.showModal()} class="btn btn-ghost join-item">Add</button>
    <button class="btn btn-ghost join-item">Edit</button>
  </div>
</div>




<SortableList 
    list={dailyRoutine} 
    key="order" 
    on:sort={sortList}
    {token}
    let:item
		let:index
>
    {#if item.status == "wip"}
        <WipHabitCard habit={item}/>
    {:else}
        <CoreHabitCard habit={item}/>
    {/if}
</SortableList>



<CreateHabitModal bind:createModal statusAdd={'core'}/>
