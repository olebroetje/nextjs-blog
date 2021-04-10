import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import React from 'react'
import Head from 'next/head'


export default function Post({ postData }) {
    return (
      <main>
      <Head>
      <script src='/mathjax-config.js'></script>
      <script src="https://polyfill.io/v3/polyfill.min.js?features=es6" defer></script>
      <script id="MathJax-script" 
           src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js">
      </script>
      </Head>
      <Layout>
        <div dangerouslySetInnerHTML={{__html: postData.html}} />
      </Layout>
      </main>
    )
  }

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }

  export async function getStaticProps({ params }) {
    const postData = getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }
  