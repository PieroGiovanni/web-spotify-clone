<script lang="ts">
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greetings = "";

  if (currentHour < 12) {
    greetings = "Buenos días";
  } else if (currentHour < 18) {
    greetings = "Buenas tardes";
  } else {
    greetings = "Buenas noches";
  }
</script>

<h1 class="text-3xl font-bold">{greetings}</h1>
