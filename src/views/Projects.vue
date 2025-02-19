<template>
  <div class="projects">
    <h1>我的项目</h1>
    <div class="project-list">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";
import { projects } from "@/data/projects";

export default {
  name: "ProjectList",
  components: { ProjectCard },
  data() {
    return { projects };
  },
};
</script>