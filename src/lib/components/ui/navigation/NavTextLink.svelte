<script lang="ts">
  export let to: string;
  export let title: string;
</script>

<li class="text-center px-2 hover:text-blue-500">
  <a href={to}>{title}</a>
</li>
