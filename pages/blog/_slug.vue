<template>
  <as-article :article="article" />
</template>
<script>
  import asArticle from '@/components/as-article'
  export default {
    components: {
      asArticle
    },
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()
      return { article }
    }
  }
</script>
