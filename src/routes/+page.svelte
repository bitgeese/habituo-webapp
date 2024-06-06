<script>
    import HabitDashboard from '$lib/components/HabitDashboard.svelte'
    /** @type {import('./$types').PageData} */
    export let data;
  
    let wishlist = data.wishlist ?? [];
    let inProgressList = data.inProgressList ?? [];
    let dailyRoutine = data.dailyRoutine ?? [];

    // Delete Habit
    async function deleteHabit(habitId) {
      const response = await fetch(`http://localhost:8000/api/habits/${habitId}/`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Token ${data.token}`,
        },
      });
  
      if (response.ok) {
        wishlist = wishlist.filter(habit => habit.id !== habitId);
      } else {
        alert('Failed to delete the habit');
      }
    }

    // Delete Habit
    async function patchHabit(index, payload) {
      const response = await fetch(`http://localhost:8000/api/habits/${wishlist[index].id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${data.token}`,
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        let data = await response.json();
        return data;
      } else {
        alert('Failed to patch the habit');
      }
    }

</script>


<!-- Hello, {data.user ? data.user.email : 'Guest'} -->

<HabitDashboard
  wishlist={wishlist}
  inProgressList={inProgressList}
  dailyRoutine={dailyRoutine}
  deleteHabit={deleteHabit}
  patchHabit={patchHabit}
/>