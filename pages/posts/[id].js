import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'


export default function Post({ postData }) {
    return (
      <Layout>
        <div>  
        <div dangerouslySetInnerHTML={{__html: postData.html}} />
        </div>
      </Layout>
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
  