<template>
  <section class="page">
    <as-article v-for="article of articles" :key="article.img"  :article="article" />
  </section>
</template>
<script>
  import asArticle from '@/components/as-article'
  export default {
    components: {
      asArticle
    },
    async asyncData({ $content, params }) {
      await $content('articles').fetch()
      const articles = await $content('articles')
        .sortBy('createdAt', 'asc')
        .fetch()
      return {
        articles
      }
    }
  }
</script>
