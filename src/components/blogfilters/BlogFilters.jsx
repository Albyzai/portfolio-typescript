import React, { useState } from 'react'
import styled from 'styled-components'
import { Slider } from "react-semantic-ui-range";

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

const BlogFilters = () => {
    const [value, setValue] = useState(0)

    const settings = {
        start: 0,
        min: 0,
        max: 10,
        onChange: value => setValue(value)
    }

    const handleValueChange = e => {
        let value = parseInt(e.target.value);
        if (!value) {
          value = 0;
        }
        setValue(e.target.value);
      };

    return (
        <FiltersWrapper>
        <RangeSliderWrapper>
            <Slider value={value} color="red" settings={settings} />
        </RangeSliderWrapper>

    </FiltersWrapper>
    )
} 


export default BlogFilters;