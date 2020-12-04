// Given an M x N matrix, return true if the matrix is Toeplitz. Otherwise, return false. 
// A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.

import java.io.*;
import java.util.*;

class Solution {
  public static boolean toeplitz(int[][] matrix){
    for (int r = 0;  r < matrix.length; ++r) 
      for (int c = 0; c < matrix[0].length; ++c) 
        if (r > 0 && c > 0 && matrix[r-1][c-1] != matrix[r][c]) 
          return false;
    return true;
  }
  
  public static void main(String[] args) {
    int [][] matrix1 = {{1,2,3,4},{5,0,2,3},{9,5,1,2}};
    boolean result = (toeplitz(matrix1));
    if (result) 
      System.out.println("true"); 
    else 
      System.out.println("false"); 
  }
  
}
