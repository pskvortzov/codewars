function sumIntervals(intervals) {                            
  intervals.sort((a, b) => a[0] >= b[0] ? 1 : -1);
  
  let previousRangeEnd;
  
  return intervals.reduce((sum, interval) => {
    if (previousRangeEnd !== undefined && previousRangeEnd >= interval[0]) {
     interval[0] = previousRangeEnd; 
    }
    
    if (previousRangeEnd !== undefined && previousRangeEnd >= interval[1]) {
      return sum;
    }
    
    sum += interval[1] - interval[0];
    
    previousRangeEnd = interval[1];

    return sum;
  }, 0);
}