
<script>
    export let workOnModal;
    export let currentHabit;
    export let dailyRoutine;

</script>

<dialog bind:this={workOnModal} id="habit-work-on-modal" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
        <h3 class="font-bold text-lg">Work on a Habit</h3>
        <form method="POST" action="?/workOn">
            <div>
                {currentHabit.name}
            </div>
            <input type="hidden" name="habit" value={currentHabit.id}>
            <label class="form-control w-full max-w-lg">
                <div class="label">
                    <span class="label-text">Stack After</span>
                </div>
                <select name="moveBelow" class="select select-bordered w-full">
                    {#each dailyRoutine as habit}
                    <option value={habit.id}>{habit.name}</option>
                    {/each}
                </select>
            </label>
            <div class="modal-action">
                <button class="btn btn-primary" type="submit">Work On</button>
                <button type="button" on:click={() => workOnModal.close()} class="btn">Cancel</button>
            </div>
        </form>
    </div>
</dialog>
