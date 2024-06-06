<script>
    export let habits = [];
    export let deleteHabit;
    export let patchHabit;


    // Modal
    function openDeleteModal(habit) {
      currentHabit = habit;
      deleteModal.showModal();
    }
    
    // Create Habit
    let createModal;

    // Delete Habit
    let deleteModal;
    let currentHabit = null;    

    function confirmDelete(habitId) {
        if (currentHabit) {
         deleteHabit(currentHabit.id);
         deleteModal.close();
      }
    }

    // Edit Habit
    let editingIndex = null;
    function editHabit(index) {
        if (editingIndex == index) {
            editingIndex = null;
        } else {
            editingIndex = index;
        }
        
    }

    function updateHabit(index, event) {
        habits[index].name = event.target.value;
        console.log(event.target.value);
        patchHabit(index, {name: event.target.value});
        editingIndex = null;
    }

</script>


<div class="mt-12 grid grid-cols-2 gap-6">
    <div class="col-span-2">
        <h2 class="text-lg font-semibold text-primary uppercase">Daily Routine</h2>
        <ul class="mt-4 space-y-2">
            <li class="card p-4 bg-neutral text-neutral-content shadow-xl">
                Wake up
            </li>
            <li class="card p-4 bg-success text-success-content shadow-xl">
                Turn off Sleep Tracking
            </li>
            <li class="card p-4 bg-base-100 text-base-content shadow-xl">
                Make your bed 
            </li>
            <li class="card p-4 bg-error text-error-content shadow-xl">
                Smoke a cigarette
            </li>
        </ul>
        
    </div>
    

    <div class="card p-4 bg-base-100 shadow-xl">
        <h2 class="text-lg font-semibold text-primary uppercase">Habits in Progress</h2>
        <ul class="mt-4 space-y-2">
            <li>
                Make your bed
            </li>
        </ul>
    </div>
    <div class="card p-4 bg-base-100 shadow-xl">
        <div class="flex justify-between">
            <h2 class="text-lg font-semibold text-primary uppercase">Wishlist</h2>
            <button on:click={() => createModal.showModal()} class="btn btn-primary px-9">Add Habit+</button>
        </div>
        <ul class="mt-2 space-y-2">
            {#each habits as habit, index (habit.id)}
            <li class="flex items-center justify-between">
                {#if editingIndex !== index}
                    <button type="button" on:click={() => editHabit(index)} >{habit.name}</button>
                {:else}
                    <input class="input w-full max-w-xs input-primary" type="text" value={habit.name} on:blur={(event) => updateHabit(index, event)} />
                {/if}
                
                
                <div class="flex justify-end items-center">
                    <button on:click={() => editHabit(index)} class="mr-1.5 btn btn-secondary">Edit</button>
                    <button on:click={() => openDeleteModal(habit)} class="btn btn-warning">Delete</button>
                </div>
                
            </li>
            {:else}
            <li>No habits found.</li>
            {/each}
        </ul>
    </div>
    
</div>



<dialog bind:this={deleteModal} id="habit-delete-modal" class="modal modal-bottom sm:modal-middle">
<div class="modal-box">
    <h3 class="font-bold text-lg">Delete Habit?</h3>
    
    <p class="py-4">Are you sure you want to delete <b>'{currentHabit ? currentHabit.name : ''}'</b> habit? <br>
        Press ESC key or click the button below to cancel
    </p>
    <div class="modal-action">
        <button on:click={confirmDelete} class="btn btn-primary">Confirm</button>
        <button on:click={() => deleteModal.close()} class="btn">Cancel</button>
    </div>
</div>
</dialog>

<dialog bind:this={createModal} id="habit-delete-modal" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
        <h3 class="font-bold text-lg">Create a Habit</h3>
        <!-- <p class="py-4">
        </p> -->
        <form method="POST" action="?/createHabit">
            <div>
                <label class="w-full max-w-xs">
                    <div class="label">
                        <span class="label-text">Name</span>
                    </div>
                    <input required type="text" name="name"  class="input input-bordered w-full max-w-lg">
                </label>
            </div>

            <div class="modal-action">
                <button class="btn btn-primary" type="submit">Create</button>
                <button type="button" on:click={() => createModal.close()} class="btn">Cancel</button>
            </div>

        </form>
    </div>
    </dialog>