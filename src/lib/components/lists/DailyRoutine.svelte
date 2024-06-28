<script>
    import SortableList from './SortableList.svelte';
    import WipHabitCard from "$lib/components/habits/WipHabitCard.svelte"
    import CoreHabitCard from "$lib/components/habits/CoreHabitCard.svelte"
    import CreateHabitModal from "$lib/components/modals/CreateHabitModal.svelte"
    import DeleteHabitModal from "$lib/components/modals/DeleteHabitModal.svelte"
    import {deleteHabit} from "$lib/utils/habitActions.js"

    
    export let dailyRoutine = [];
    export let token;
    
    // Create Habit Modal
    let createModal;
    let deleteModal;
    let currentHabit = {name: null};

    function handleDelete(event) {
      currentHabit = event.detail;
      if (deleteModal) {
        deleteModal.showModal();
      }
    }

    async function confirmDelete() {
      await deleteHabit(currentHabit.id, token);
      dailyRoutine = dailyRoutine.filter(habit => habit.id !== currentHabit.id);
      currentHabit = null;
    }

    let today = new Date();
    let options = { weekday: 'long', day: 'numeric', month: 'short' };
    let formattedDate = today.toLocaleDateString('en-US', options);

    const sortList = ev => {dailyRoutine = ev.detail};
</script>

<div class="mt-6 mx-2 flex items-center justify-between">
  <h2 class="text-2xl font-bold">🌅 {formattedDate}</h2>
  <button on:click={() => createModal.showModal()} class="btn btn-ghost">Add</button>
  
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
        <WipHabitCard habit={item} on:delete={handleDelete}/>
    {:else}
        <CoreHabitCard habit={item} on:delete={handleDelete}/>
    {/if}
</SortableList>



<CreateHabitModal bind:createModal statusAdd={'core'}/>
<DeleteHabitModal bind:deleteModal {currentHabit} on:confirm={confirmDelete}/>