import React , {useState} from 'react'
import { Button , Modal, Box} from '@mui/material';
import "./FilterBox.css";
import { facilities } from '../common/data/facilitiesTags';

const FilterBox = (props) => {
  const { posts, setSelectedPosts } = props;
  const [open, setOpen] = useState(false);
  const [filteredPosts, setfilteredPosts] = useState([]);
  const [selectedTags, setTags] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const addFilteredPosts = () => { 
    if (selectedTags.length === 0) {
      return;
    }

    console.log(posts);
  
  }

  const handleClose = () => {
    // when user close tabs then filter 
    // 
    addFilteredPosts();
    setOpen(false);
  };

  console.log(selectedTags);

  const addFilteredFacilites = (tagNum) => {
    if (selectedTags.includes(tagNum)) {
      setTags(selectedTags.filter((selectedTag) => selectedTag !== tagNum));
    } else {
      setTags([...selectedTags, tagNum]);
    }
  };

  return (
    <div className='filter_container'>
      <Button onClick={handleOpen}>Filter</Button>
      <Modal open={open}
        onClose={handleClose}>
        <Box className="filter-modal-box">
          <h4>What kind of toilet are you looiking for? Please choose from the following </h4>
          <div className='filter-tags_container'>
          {facilities.map((tag, index) => { 
            return <div className='filter-tag' key={index} style={ {backgroundColor: selectedTags.includes(index) ? "#E8FFCE": ""} }>
              <p>{tag}</p>
                <button type='button' className='filter_btn' onClick={()=>addFilteredFacilites(index)}>
                <img src={"../"+tag+".png"} alt={tag} />
              </button>
            </div>
          })}
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default FilterBox