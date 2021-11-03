import React from 'react'
import {Pagination} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Paginate = ({pages, page, isAdmin=false, isSupervisor=false, keyword=''}) => {
  return pages > 1 && (
    <Pagination>
      {[...Array(pages).keys()].map(x => (
        <LinkContainer
          key={x + 1}
          to={!isSupervisor 
            ? keyword 
              ? !isAdmin 
                ? `/search/${keyword}/page/${x+1}`
                : `/admin/eventlist/${x+1}` 
              : `/page/${x+1}`
            :  `/supervisor/eventlist/${x+1}`
          }
        >
          <Pagination.Item active={x+1 === page}>{x+1}</Pagination.Item>
        </LinkContainer>
      ))}
    </Pagination>
  )
}

export default Paginate
