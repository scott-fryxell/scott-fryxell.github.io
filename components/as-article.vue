<template>
  <article class="post">
    <header>
      <img
        v-if="article.img"
        :src="`/posters/${article.img}`"
        :alt="article.alt"
        loading="lazy" />
      <h2>
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">{{
          format_title(article.slug)
        }}</NuxtLink>
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
        const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
        // First ensure we have a valid date string in YYYY-MM-DD format
        const date_str = date.toString().split('T')[0]
        const utc_date = new Date(`${date_str}T12:00:00Z`)
        return utc_date.toLocaleDateString('en', options)
      },
      format_title(slug) {
        return slug.replace(/-/g, ' ')
      }
    }
  }
</script>
<style lang="stylus">
  article.post
    overflow:hidden
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    @media print
      min-height: 100vh
    & > header
      @media (max-width: 33rem)
        display: block
      & > img
        width: 100vw
        max-height: 100vh
        @media (min-width: 33rem)
          width: 70vw
      & > h2
        min-width: 30vw
        padding: 0 1rem
        text-transform: capitalize
    blockquote
      font-style: italic
      margin-left: 1rem
    & div.nuxt-content img
      max-width: 29rem
    & > h5
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
      page-break-after: always

    .nuxt-content,
    .nuxt-content-editor
      // margin: auto
      max-width: 33rem
      padding: 0 1rem


</style>
