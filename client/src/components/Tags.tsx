import React from 'react'
import Tag from './Tag'
import { TagsProps } from './types'
import { facilities } from '../common/data/facilitiesTags'

const Tags = ({ tags, setTags }:TagsProps) => {

  const handleTagToggle = (tagNum: number): void => {
    if (tags.includes(tagNum)) {
      setTags(tags.filter((selectedTag) => selectedTag !== tagNum));
    } else {
      setTags([...tags, tagNum]);
    }
  };

  return (
    <div>
      <fieldset>
        <legend>Facilities</legend>
      {(facilities).map((tag:string,index:number) => (
        <Tag
          key={tag}
          tagKey={index}
          label={tag}
          isSelected={tags.includes(index)}
          onToggle={handleTagToggle}
        />
        ))}
      </fieldset>
    </div>
  )
}

export default Tags