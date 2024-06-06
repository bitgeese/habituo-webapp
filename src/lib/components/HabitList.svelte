<script>
    //import Modal from '$lib/components/ConfirmDeleteModal.svelte';
    export let habits = [];
    export let deleteHabit;

    function confirmDelete(habitId) {
        if (currentHabit) {
         deleteHabit(currentHabit.id);
         myModal.close();
      }
    }

    let myModal;
    let currentHabit = null;

    function openModal(habit) {
      currentHabit = habit;
      myModal.showModal();
    }

</script>
  
<h1 class="text-lg font-semibold text-primary uppercase">Wishlist</h1>
<ul class="max-w-xl space-y-2">
    {#each habits as habit}
    <li class="flex items-center justify-between">
        <span class="">{habit.name}</span>
        <button on:click={() => openModal(habit)} class="btn btn-warning">Delete</button>
    </li>
    {:else}
    <li>No habits found.</li>
    {/each}
</ul>



<dialog bind:this={myModal} id="habit-delete-modal" class="modal modal-bottom sm:modal-middle">
<div class="modal-box">
    <h3 class="font-bold text-lg">Delete Habit?</h3>
    
    <p class="py-4">Are you sure you want to delete <b>'{currentHabit ? currentHabit.name : ''}'</b> habit? <br>
        Press ESC key or click the button below to cancel
    </p>
    <div class="modal-action">
        <button on:click={confirmDelete} class="btn btn-primary">Confirm</button>
        <button on:click={() => myModal.close()} class="btn">Cancel</button>
    </div>
</div>
</dialog>