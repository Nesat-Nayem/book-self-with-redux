import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Book from "../components/Book/Book";
import PageLayout from "../components/PageLayout/PageLayout";
import styles from './finishList.module.css'
const FinishedBooks = () => {
  const finishList = useSelector((state)=>state.books.finishList)
  return (
    <PageLayout>
 {
  finishList.length === 0 && (
    <p>
    Hey there! This is where books will go when you've finished reading
    them. Get started by heading over to the <Link to='/'>Discover</Link>{" "}
    page to add books to your list.
  </p>
  )
 }

 
  {
    // finishList.map((book)=>(<Book key={book.id} book={book}></Book>))
    finishList.map((book) => (    <div className='card d-flex mb-3 p-3' 
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
     
      {/* <HiMinusCircle onClick={()=>dispatch(removeFromReadingList(book.id))} title="Remove from list" className={styles.minus_icon} /> */}
      {/* <HiMinusCircle onClick={()=>console.log(props.book.id)} title="Remove from list" className={styles.minus_icon} /> */}
      
      {/* <HiPlusCircle onClick={()=>dispatch(addtoReadingList(book))} title="Add to Reading" className={styles.plus_icon} /> */}
      {/* <HiCheckCircle onClick={()=> dispatch(addToFinishList(book))} title="Mark as Finish" className={styles.check_icon} /> */}
    </div>
  </div>))
  }
 
    </PageLayout>
  );
};

export default FinishedBooks;
