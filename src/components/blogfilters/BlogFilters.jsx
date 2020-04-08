import React from 'react'
import styled from 'styled-components'

const FiltersWrapper = styled.div`
    width: 100%;
    padding: 0 4em;
`

const RangeSliderWrapper = styled.div`
    width: 50%;
`

// const TagsWrapper = styled.div`
//     width: 50%;
// `

// const RecentPostsWrapper = styled.div`
//     display: none;
// `

const BlogFilters = () => (
    <FiltersWrapper>
        <RangeSliderWrapper>
        </RangeSliderWrapper>

    </FiltersWrapper>
)

export default BlogFilters;