import React from 'react'
import Tag from './Tag'
import { TagProps, TagsProps } from './types'
import { facilities } from '../common/data/Facilities'
const Tags = ({ tags, setTags }:TagsProps) => {

  const handleTagToggle = (tag: string): void => {
    if (tags.includes(tag)) {
      // タグが既に選択されていれば、選択状態を解除
      setTags(tags.filter((selectedTag) => selectedTag !== tag));
    } else {
      // タグが選択されていなければ、選択状態に追加
      setTags([...tags, tag]);
    }
  };

  return (
    <div>
      <fieldset>
        <legend>Facilities</legend>
      {facilities.map((tag) => (
        <Tag
          key={tag}
          label={tag}
          isSelected={tags.includes(tag)}
          onToggle={handleTagToggle}
        />
        ))}
      </fieldset>
    </div>
  )
}

export default Tags