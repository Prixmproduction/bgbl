import { getPageProps } from 'util/api'
import { motion } from 'framer-motion'
import { pageVariants } from 'util/motionVariants'
import Panel from 'components/Panel/Panel'
import BlockQuote from 'components/blockQuote/blockQuote'
import CGTD from 'components/CGTD/CGTD'
import styles from './newsletter-archive.module.scss'

const NewsletterArchive = ({ data }) => (
  <motion.div
    className={styles.layout}
    initial='initial'
    animate='enter'
    exit='exit'
    variants={pageVariants}
  >
    <h1 className='header-1'>{data?.header}</h1>
    <section className={styles.section}>
      <h2 className='header-two'>{data?.reviews?.title}</h2>
      <Panel title={data?.list.label}>
        <div className={styles['drawer-container']}>
          {data?.list?.newsletters?.map((nl, x) => {
            return (
              <CGTD
                key={`nl${x}`}
                title={nl.title}
                link={nl.link}
                src={nl.img}
              />
            )
          })}
        </div>
      </Panel>
      <BlockQuote {...data?.list?.blockQuote} />
    </section>
  </motion.div>
)

export const getStaticProps = async () => getPageProps('newsletter-archive')

export default NewsletterArchive
