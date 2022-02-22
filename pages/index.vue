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
        .where({ draft: { $ne: true } })
        .sortBy('date', 'desc')
        .fetch()
      return {
        articles: articles.filter(article => !article.draft)
      }
    }
  }
</script>
