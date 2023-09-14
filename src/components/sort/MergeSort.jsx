const MergeSort =  () => {
    
    const mergeSort = (arr) => {
        if (arr.length <= 1) {
          return arr;
        }
      
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);
      
        const merge = (left, right) => {
            let result = [];
            let i = 0, j = 0;
      
            while (i < left.length && j < right.length) {
                if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
                } else {
                result.push(right[j]);
                j++;
                }
            }
      
          return result.concat(left.slice(i), right.slice(j));
        }
      
        return merge(mergeSort(left), mergeSort(right));
    };

    return {
        mergeSort
    }
}

export default MergeSort