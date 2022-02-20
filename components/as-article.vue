<template>
  <article class="post">
    <header>
      <img v-if="article.img" :src="article.img" :alt="article.alt" />
      <h1>
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">{{ format_title(article.slug) }}</NuxtLink>
      </h1>
    </header>
    <details v-if="article.toc.length">
      <summary>Created: {{ format_date(article.date) }}</summary>
      <nav>
        <NuxtLink v-for="link of article.toc" :key="link.id" :to="`#${link.id}`">{{ link.text }}</NuxtLink>
      </nav>
    </details>
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
    & > header
      & > img
        width: 75vw
      & > h1
        padding: 0 1rem
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
      margin: auto
      max-width: 33rem
</style>
