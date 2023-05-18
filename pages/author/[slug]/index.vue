<script setup lang="ts">
const route = useRoute();

await navigateTo(`/author/${route.params.slug as string}/1`);
</script>
