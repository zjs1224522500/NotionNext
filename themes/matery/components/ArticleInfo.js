import SmartLink from '@/components/SmartLink'
import { useGlobal } from '@/lib/global'
import TagItemMiddle from './TagItemMiddle'
import { formatDateFmt } from '@/lib/utils/formatDate'
import WordCount from '@/components/WordCount'

export const ArticleInfo = props => {
  const { post } = props

  const { locale } = useGlobal()

  return (
    <section className='mb-3 dark:text-gray-200'>
      <div className='my-3'>
        {post.tagItems && (
          <div className='flex flex-nowrap overflow-x-auto'>
            {post.tagItems.map(tag => (
              <TagItemMiddle key={tag.name} tag={tag} />
            ))}
          </div>
        )}
      </div>

      <div className='flex flex-wrap gap-3 mt-5 text-sm'>
        {post?.type !== 'Page' && (
          <>
            <SmartLink
              href={`/archive#${formatDateFmt(post?.publishDate, 'yyyy-MM')}`}
              passHref
              className='cursor-pointer whitespace-nowrap'>
              <i className='far fa-calendar-minus fa-fw' />{' '}
              {locale.COMMON.POST_TIME}: {post?.publishDay}
            </SmartLink>
            <span className='whitespace-nowrap'>
              <i className='far fa-calendar-check fa-fw' />
              {locale.COMMON.LAST_EDITED_TIME}: {post.lastEditedDay}
            </span>
            <span className='hidden busuanzi_container_page_pv font-light mr-2'>
              <i className='mr-1 fas fa-eye' />
              <span className='busuanzi_value_page_pv' />
            </span>
            <WordCount wordCount={post.wordCount} readTime={post.readTime} />
          </>
        )}
      </div>
    </section>
  )
}
