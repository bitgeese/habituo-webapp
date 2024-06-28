<script>
    import SortableList from './SortableList.svelte';
    import WipHabitCard from "$lib/components/habits/WipHabitCard.svelte"
    import CreateHabitModal from "$lib/components/modals/CreateHabitModal.svelte"
    import DeleteHabitModal from "$lib/components/modals/DeleteHabitModal.svelte"
    import {deleteHabit} from "$lib/utils/habitActions.js"

    export let wipList = [];
    export let token;

    
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
      wipList = wipList.filter(habit => habit.id !== currentHabit.id);
      currentHabit = null;
    }
  
    const sortList = ev => {wipList = ev.detail};

</script>

<div class="mt-6 mx-2 flex items-center justify-between">
  <h2 class="text-2xl font-bold">🏗️ Habits In Progress</h2>
  <div class="join">
    <button on:click={() => createModal.showModal()} class="btn btn-ghost join-item">Add</button>
  </div>
</div>



<SortableList 
    list={wipList} 
    key="order" 
    on:sort={sortList}
    {token}
    let:item
		let:index
>
    <WipHabitCard habit={item} token={token} on:delete={handleDelete}/>
</SortableList>

<CreateHabitModal bind:createModal statusAdd={'wip'}/>
<DeleteHabitModal bind:deleteModal {currentHabit} on:confirm={confirmDelete}/>
