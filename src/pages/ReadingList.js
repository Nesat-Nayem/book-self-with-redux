import React from 'react';
import { Link } from 'react-router-dom';
import Book from '../components/Book/Book';
import PageLayout from '../components/PageLayout/PageLayout';
import { useDispatch, useSelector } from 'react-redux';
import { 
    HiPlusCircle, 
    HiMinusCircle,
    HiCheckCircle 
  } from 'react-icons/hi';
import styles from './readingList.module.css'
import { addToFinishList, addtoReadingList, removeFromReadingList } from '../redux/actions/bookAction';
// const ReadingList = (props) => {
const ReadingList = () => {
//     console.log(props)
    
//   const { title, author, coverImageUrl, synopsis } = props.book;
    const readingList = useSelector((state)=>state.books.readingList)

    const dispatch = useDispatch()
    return (
        <PageLayout>
            {
                readingList.length === 0 &&(
                    <p>Looks like you've finished all your books! Check them out in your <Link to="finish">finished books</Link> or <Link to="/">discover more</Link>.</p>
                )
            }
     

             {
                // readingList.map((book) => (<Book key={book.id} book={book} />))
                readingList.map((book) => (    <div className='card d-flex mb-3 p-3' 
                style={{position: 'relative'}}
              >
                <div className='row'>
                  <div className='col-md-3'>
                    <img className="img-fluid" src={book.coverImageUrl} alt='' />
                  </div>
                  <div className='col-md-9'>
                    <div className='card-body'>
                      <h5 className='card-title'>{book.title}</h5>
                      <h6>{book.author}</h6>
                      <p className='card-text'>{book.synopsis.slice(0, 500)} ...</p>
                    </div>
                  </div>
                </div>
                <div className={styles.control_icons} >
                 
                  <HiMinusCircle onClick={()=>dispatch(removeFromReadingList(book.id))} title="Remove from list" className={styles.minus_icon} />
                  {/* <HiMinusCircle onClick={()=>console.log(props.book.id)} title="Remove from list" className={styles.minus_icon} /> */}
                  
                  {/* <HiPlusCircle onClick={()=>dispatch(addtoReadingList(book))} title="Add to Reading" className={styles.plus_icon} /> */}
                  <HiCheckCircle onClick={()=> dispatch(addToFinishList(book))} title="Mark as Finish" className={styles.check_icon} />
                </div>
              </div>))
            }

        </PageLayout>
    );
};

export default ReadingList;