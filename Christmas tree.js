function christmasTree(height) {
    return Array(height).fill(0).map((_,index)=>' '.repeat(height-index-1)+'*'.repeat(2*index+1) +' '.repeat(height-index-1)).join('\n')
  }