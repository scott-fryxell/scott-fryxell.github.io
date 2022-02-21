<template>
  <article class="post">
    <header>
      <img v-if="article.img" :src="article.img" :alt="article.alt" />
      <h2>
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">{{ format_title(article.slug) }}</NuxtLink>
      </h2>
    </header>
    <h5>{{ format_date(article.date) }}</h5>
    <nuxt-content :document="article" />
    <footer><!--<pre> {{ article }} </pre>--></footer>
  </article>
</template>
<script>
  export default {
    props: {
      article: {
        type: Object,
        required: true
      }
    },
    methods: {
      format_date(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
      },
      format_title(slug) {
        return slug.replace(/-/g, ' ')
      }
    }
  }
</script>
<style lang="stylus">
  article.post
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center;
    & > header
      & > img
        width: 75vw
        max-height: 100vh
      & > h2
        padding: 0 1rem
        text-transform: capitalize
        & > a
          // color: inherit
    & > details
      display: inline-block
      margin-left: 1rem
      summary
        font-size: small
        opacity:0.4
      & > nav > a
        text-decoration: none
        line-height: 2
        margin-left: 1rem
        display: block
    & > footer
      padding: 1em
    .nuxt-content,
    .nuxt-content-editor
      // margin: auto
      max-width: 33rem
</style>
