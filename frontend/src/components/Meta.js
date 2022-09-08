import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To BookChor',
  description: 'We are committed to bring to you all kinds of best books at the minimal prices ever seen anywhere. Robinhood of the world of books.',
  keywords: 'books, buy books, cheap books',
}

export default Meta
