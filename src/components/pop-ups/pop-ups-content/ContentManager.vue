<template>
  <component :is="content" />
</template>

<script>
export default {
  name: "ContentManager",
  components: {
    ContentClasses: () => import('@/components/pop-ups/pop-ups-content/ContentClasses'),
    ContentRaces: () => import('@/components/pop-ups/pop-ups-content/ContentRaces'),
    ContentSpells: () => import('@/components/pop-ups/pop-ups-content/ContentSpells'),
    ContentBeasts: () => import('@/components/pop-ups/pop-ups-content/ContentBeasts'),
    ContentArtifacts: () => import('@/components/pop-ups/pop-ups-content/ContentArtifact'),
    ContentGuides: () => import('@/components/pop-ups/pop-ups-content/ContentGuides'),
  },
  props: {
    content: {
      type: String,
      default: 'ContentClasses',
    }
  }
}
</script>