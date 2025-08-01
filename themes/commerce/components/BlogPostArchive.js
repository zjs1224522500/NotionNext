import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'

/**
 * 博客归档列表
 * @param posts 所有文章
 * @param archiveTitle 归档标题
 * @returns {JSX.Element}
 * @constructor
 */
const BlogPostArchive = ({ posts = [], archiveTitle }) => {
  if (!posts || posts.length === 0) {
    return <></>
  } else {
    return (
      <div>
        <div
          className="pt-16 pb-4 text-3xl dark:text-gray-300"
          id={archiveTitle}
        >
          {archiveTitle}
        </div>
        <ul>
          {posts?.map(post => (
            <li
              key={post.id}
              className="border-l-2 p-1 text-xs md:text-base items-center  hover:scale-x-105 hover:border-red-500 dark:hover:border-red-300 dark:border-red-400 transform duration-500"
            >
              <div id={post?.publishDay}>
                <span className="text-gray-400">{post.date?.start_date}</span>{' '}
                &nbsp;
                <SmartLink
                  href={`${siteConfig('SUB_PATH', '')}/${post.slug}`}
                  passHref
                  className="dark:text-gray-400  dark:hover:text-red-300 overflow-x-hidden hover:underline cursor-pointer text-gray-600">

                  {post.title}

                </SmartLink>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default BlogPostArchive
