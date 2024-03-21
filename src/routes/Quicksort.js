import React from 'react'
import image3 from '../asets/quick-sort.png'
import SortingComponent2 from '../components/Visualizer/sortingComponent2'
import Footer from '../components/Footer'
import '../components/Merge.css'
const Quicksort = () => {
  return (
    <div className='container' >
       <h1>How Quick Sort Work</h1>
       <div className='mergealgo'>
       <p className='merge-algo quick-algo1'>
       The key process in quickSort is a partition(). The target of partitions is to place the pivot (any element can be chosen to be a pivot) at its correct position in the sorted array and put all smaller elements to the left of the pivot, and all greater elements to the right of the pivot.
       Partition is done recursively on each side of the pivot after the pivot is placed in its correct position and this finally sorts the array.
      </p>
      <h1>Algorithm</h1>
    
     <p className='merge-algo quick-algo second-para' > The logic is simple, we start from the leftmost element and keep track of the index of smaller (or equal) elements as i. While traversing, if we find a smaller element, we swap the current element with arr[i]. Otherwise, we ignore the current element.

</p>
</div>
      <img src={image3} alt="img2"/>
      <h1>Visual of Quick Sort</h1>
      <SortingComponent2/>
      <Footer/>
    </div>
  )
}

export default Quicksort