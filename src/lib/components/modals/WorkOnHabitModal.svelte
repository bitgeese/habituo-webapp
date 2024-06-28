
<script>
    export let workOnModal;
    export let currentHabit;

</script>

<dialog bind:this={workOnModal} id="habit-work-on-modal" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
        <h3 class="font-bold text-lg">Work on a Habit</h3>
        <form method="POST" action="?/createHabit">
            <div>
                {currentHabit.name}
            </div>
            <label class="form-control w-full max-w-lg">
                <div class="label">
                    <span class="label-text">Habit type</span>
                </div>
                <select name="status" class="select select-bordered w-full">
                    <option value="core">Test</option>
                </select>
            </label>
            <div class="modal-action">
                <button class="btn btn-primary" type="submit">Work On</button>
                <button type="button" on:click={() => workOnModal.close()} class="btn">Cancel</button>
            </div>
        </form>
    </div>
</dialog>
