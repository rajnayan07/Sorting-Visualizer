import React from 'react'
import image2 from '../asets/img4.jpg'
import '../components/sortall.css'
import SortingComponent4 from '../components/Visualizer/sortingComponent4'
import Footer from '../components/Footer'
import '../components/Merge.css'
const Selectionsort= () => {
  return (
    <div className='container' >
      <h1>How Selectionsort Sort Work</h1>
      <div className='mergealgo'>
     <p className='merge-algo'>
     Merge sort is similar to the quick sort algorithm as it uses the divide and conquer approach to sort the elements. It is one of the most popular and efficient sorting algorithm. It divides the given list into two equal halves, calls itself for the two halves and then merges the two sorted halves. We have to define the merge() function to perform the merging.
      The sub-lists are divided again and again into halves until the list cannot be divided further. Then we combine the pair of one element lists into two-element lists, sorting them in the process. The sorted two-element pairs is merged into the four-element lists, and so on until we get the sorted list.
      </p>
      <h1>Algorithm</h1>
    
     <p className='merge-algo second-para' > In the following algorithm, arr is the given array, beg is the starting element, and end is the last element of the array</p>
     </div>
      <img src={image2} alt="img2"/>
      <h1>Visual of Selectionsort Sort</h1>
      <SortingComponent4/>
      <Footer/>
    </div>
  )
}

export default Selectionsort