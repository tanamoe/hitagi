<script setup lang="ts">
const route = useRoute();

await navigateTo(`/tags/${route.params.slug as string}/1`, { replace: true });
</script>
