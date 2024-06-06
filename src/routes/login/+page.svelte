<script>
    /** @type {import('./$types').ActionData} */
    export let form;
  </script>
  
<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <h1 class="mt-10 text-center text-5xl md:text-7xl font-black uppercase font-serif bg-gradient-to-r from-primary via-accent to-secondary text-transparent bg-clip-text">Habituo</h1>
    <h2 class="mt-6 text-center text-xl md:text-2xl font-bold leading-9 tracking-tight">Sign in to your account</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" method="POST" action="?/login">
      
      <div>
        <label class="w-full max-w-xs">
          <div class="label">
            <span class="label-text">Email</span>
          </div>
          <input required type="email" name="email" autocomplete="email" class="input input-bordered w-full max-w-lg">
        </label>
      </div>
      
      <div>
        <label class="w-full max-w-xs">
          <div class="label">
            <span class="label-text">Password</span>
            <span class="label-text-alt">
              <a class="link link-primary" href="/forgot">Forgot Password?</a>
            </span>
          </div>
          <input name="password" type="password" autocomplete="current-password" required class="input input-bordered w-full max-w-lg">
        </label>
      </div>

      <div>
        <button class="btn btn-block btn-primary">Sign in</button>
      </div>

      <div class="h-6 text-center text-error">
        {#if form?.missing}
          <p class="error">Email and password are required</p>
        {/if}
        {#if form?.incorrect}
          <p class="error">Invalid credentials!</p>
        {/if}
        {#if form?.success}
          <p class="text-success">Successfully logged in!</p>
        {/if}
      </div>
      
    </form>

    <p class="mt-4 text-center text-sm">
      Not a member?
      <a href="/register" class="link link-primary">Sign up and start for free</a>
    </p>
  </div>
</div>
