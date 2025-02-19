<template>
  <div class="project-card">
    <img :src="project.image" :alt="project.title" />
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    <a :href="project.githubUrl" target="_blank">GitHub 仓库</a>
    <a :href="project.demoUrl" target="_blank">在线演示</a>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>