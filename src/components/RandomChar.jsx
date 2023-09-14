import React, { useState, useEffect } from 'react';
import { Pagination } from 'antd';
import './style.scss'
import BubbleSort from './sort/BubbleSort';
import SelectionSort from './sort/SelectionSort';
import InsertionSort from './sort/InsertionSort';
import MergeSort from './sort/MergeSort';
import QuickSort from './sort/QuickSort';

const generateRandomChar = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const length = Math.floor(Math.random() * 5) + 1;
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
}

const generateRandomArray = () => {
    return Array.from({ length: 1000 }, generateRandomChar);
}

const RandomChar = () => {
    const [randomChars, setRandomChars] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
  
    useEffect(() => {
      setRandomChars(generateRandomArray());
    }, []);
  
    const pageSize = 50;
    const currentItems = randomChars.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  
    const onPageChange = (page) => {
      setCurrentPage(page);
    }

    const [display, setDisplay] = useState(0)

    const {bubbleSort} = BubbleSort()
    const [bubbleArray, setBubbleArray] = useState([]);
    const handleBubbleSort = () => {
        setDisplay(1)
        console.time('bubbleSort')
        const sortedArray = bubbleSort([...randomChars]);
        console.timeEnd('bubbleSort')
        setBubbleArray(sortedArray);
    }
    const currentItems1 = bubbleArray.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const {selectionSort} = SelectionSort()
    const [selectionArray, setSelectionArray] = useState([]);
    const handleSelectionSort = () => {
        setDisplay(2)
        console.time('selectionSort')
        const sortedArray = selectionSort([...randomChars]);
        console.timeEnd('selectionSort')
        setSelectionArray(sortedArray);
    }
    const currentItems2 = selectionArray.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const {insertionSort} = InsertionSort()
    const [insertionArray, setInsertionArray] = useState([]);
    const handleInsertionSort = () => {
        setDisplay(3)
        console.time('insertionSort')
        const sortedArray = insertionSort([...randomChars]);
        console.timeEnd('insertionSort')
        setInsertionArray(sortedArray);
    }
    const currentItems3 = insertionArray.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const {mergeSort} = MergeSort()
    const [mergeArray, setMergeArray] = useState([]);
    const handleMergeSort = () => {
        setDisplay(4)
        console.time('mergeSort')
        const sortedArray = mergeSort([...randomChars]);
        console.timeEnd('mergeSort')
        setMergeArray(sortedArray);
    }
    const currentItems4 = mergeArray.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const {quickSort} = QuickSort()
    const [quickArray, setQuickArray] = useState([]);
    const handleQuickSort = () => {
        setDisplay(5)
        console.time('quickSort')
        const sortedArray = quickSort([...randomChars]);
        console.timeEnd('quickSort')
        setQuickArray(sortedArray);
    }
    const currentItems5 = quickArray.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const handleReloadPage = () => {
        window.location.reload()
    }

    return (
        <div>
        <h1>Random</h1>
        <div className='array'>
            <div className='sort'>
                <button onClick={handleBubbleSort}>Bubble Sort</button>
                <button onClick={handleSelectionSort}>Selection Sort</button>
                <button onClick={handleInsertionSort}>Insertion Sort</button>
                <button onClick={handleMergeSort}>MergeSort Sort</button>
                <button onClick={handleQuickSort}>Quick Sort</button>
                <button onClick={handleReloadPage}>Reload Page</button>
            </div>
            {display == 0 && currentItems.map((char, index) => (
            <p key={index}>{char}</p>
            ))}
            {display == 1 && currentItems1.map((char, index) => (
            <p key={index}>{char}</p>
            ))}
            {display == 2 && currentItems2.map((char, index) => (
            <p key={index}>{char}</p>
            ))}
            {display == 3 && currentItems3.map((char, index) => (
            <p key={index}>{char}</p>
            ))}
            {display == 4 && currentItems4.map((char, index) => (
            <p key={index}>{char}</p>
            ))}
            {display == 5 && currentItems5.map((char, index) => (
            <p key={index}>{char}</p>
            ))}
        </div>
        <Pagination
            current={currentPage}
            onChange={onPageChange}
            total={randomChars.length}
            showSizeChanger={false}
            pageSize={pageSize}
        />
        </div>
    );
};

export default RandomChar
