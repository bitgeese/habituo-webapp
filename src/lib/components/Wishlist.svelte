<script>
    export let wishlist = [];
    export let editHabit;
    export let selectHabit;
    export let openDeleteModal;
    export let updateHabit;
    export let editingIndex;
</script>
  
<div class="col-span-2 sm:col-span-1 card p-4 bg-base-100 shadow-xl">
    <div class="flex justify-between">
        <h2 class="text-lg font-semibold text-primary uppercase">Wishlist</h2>
        <button on:click={() => addWishlist()} class="btn btn-primary w-24">Add Habit+</button>
    </div>
    <ul class="mt-2 space-y-2">
        {#each wishlist as habit, index (habit.id)}
        <li class="flex items-center justify-between">
            {#if editingIndex !== index}
            <span>{habit.name}</span>
            {:else}
            <input class="input w-full max-w-xs input-primary" type="text" value={habit.name} on:blur={(event) => updateHabit(index, event)} />
            {/if}

            <div class="flex justify-end items-center">
            <!-- <button on:click={() => editHabit(index)} class="mr-1.5 btn btn-secondary">Edit</button> -->
            <button on:click={() => selectHabit(index)} class="mr-1.5 btn btn-secondary w-24">Select</button>
            <button on:click={() => openDeleteModal(habit)} class="btn btn-warning w-24">Delete</button>
            </div>
        </li>
        {:else}
        <li>No habits found.</li>
        {/each}
    </ul>
</div>
  