import React from "react";
import { useDispatch } from "react-redux";
import { 
  HiPlusCircle, 
  HiMinusCircle,
  HiCheckCircle 
} from 'react-icons/hi';
import styles from './book.module.css'
import { addToFinishList, addtoReadingList, removeFromReadingList } from "../../redux/actions/bookAction";
const SingleBook = (props) => {
  console.log(props)

  const { title, author, coverImageUrl, synopsis } = props.book;
  const dispatch = useDispatch()
  return (
    <div className='card d-flex mb-3 p-3' 
      style={{position: 'relative'}}
    >
      <div className='row'>
        <div className='col-md-3'>
          <img className="img-fluid" src={coverImageUrl} alt='' />
        </div>
        <div className='col-md-9'>
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <h6>{author}</h6>
            <p className='card-text'>{synopsis.slice(0, 500)} ...</p>
          </div>
        </div>
      </div>
      <div className={styles.control_icons} >
       
        {/* <HiMinusCircle onClick={()=>dispatch(removeFromReadingList(props.book.id))} title="Remove from list" className={styles.minus_icon} /> */}
        {/* <HiMinusCircle onClick={()=>console.log(props.book.id)} title="Remove from list" className={styles.minus_icon} /> */}

        <HiPlusCircle onClick={()=>dispatch(addtoReadingList(props.book))} title="Add to Reading" className={styles.plus_icon} />
        {/* <HiCheckCircle onClick={()=> dispatch(addToFinishList(props.book))} title="Mark as Finish" className={styles.check_icon} /> */}
      </div>
    </div>
  );
};

export default SingleBook;
