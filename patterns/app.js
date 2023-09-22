// Pyramid -> (i = 0) 
//#region ---------------------------------------------------------------

function pyramid(nums) {

  // Initialize a variable to store the spaces and characters.
  let result = '';

  // Outer loop
  for (let i = 0; i < nums; i++) {

    // Inner loop - spaces
    for (let j = 0; j < nums - i; j++) {

      // Append a space to result.
      result += ' ';
    }

    // Inner loop - characters
    for (let k = 0; k < ((i + 1) * 2 - 1); k++) {
      // Append the 'X' character to result.
      result += 'X';
    }

    // new line
    result += '\n';
  }

  return result;
}

console.log(pyramid(5));
console.log(pyramid(9));

//#endregion


// Pyramid -> (i = 1)
//#region ---------------------------------------------------------------

// Create a function to print a pyramid with a single parameter.
function pyramid(rows) {
  
  // Initialize a variable to store the spaces and characters.
  let result = '';

  // OUTER LOOP: Determines the number of rows.
  for (let i = 1; i <= rows; i++) {
    
    // INNER LOOP: Adds leading spaces based on the current row. 
    for (let j = 0; j < rows - i; j++) {
      
      // Append a space to 'result'
      result += ' ';
    }

    // INNER LOOP for adding characters: Adds 'X' characters based on the current row.
    for (let k = 0; k < i * 2 - 1; k++) {
      
      // Append 'X' character to 'result'
      result += 'X';
    }

    // Add a new line to start a new row.
    result += '\n';
  }

  return result;
}

console.log(pyramid(5));
console.log(pyramid(7));

// STEPS
// Create a function named 'pyramid' with a single parameter named 'rows'.
// The parameter 'rows' represents the desired number of rows of the pyramid.

// Initialize a variable and set it to an empty string. Name it 'result'. This variable will hold the characters and spaces.

// OUTER LOOP
    // The outer loop determines the number of rows in the pyramid which is dictated by the parameter 'rows'.
    // Start the loop at 1, and continue until 'i' is less than or equal to 'rows'.

// INNER LOOPS

    // SPACES inner loop:
      // The spaces inner loop is responsible for adding the spaces before the 'X' characters.
      // Use 'j' as the loop variable, starting at 0 and continuing as long as 'j' is less than 'rows - 1'
      // ^^ Set 'j' to rows - 1 to account for the last row in the triangle and exclude it. -> (let j = rows - 1)
          // Append a space ' ' to 'result'.

    // CHARACTERS Inner Loop:
      // The characters inner loop is responsible for adding the 'X' characters after the spaces in each row.
      // Use 'k' as the loop variable, starting at 0, and continuing as long as 'k' is less than 'i * 2 - 1'
      // ^^ the -1 is used to adjust the count of 'X' characters based on the current row number and ensuring the pyramid shape is correctly formed.
          // Append 'X' to 'result'.

// After the inner loops are completed, append '\n' to 'result' in order to get a new line.

// Return 'result'

//#endregion


// Downward Triangle
//#region ---------------------------------------------------------------

// function downwardTriangle(nums) {

//   let result = '';

//   for (let i = 0; i < nums; i++) {

//     for (let j = 0; j < nums - i; j++) {
//       result += 'X';
//     }

//     result += '\n';
//   }

//   return result;
// }

// console.log(downwardTriangle(5));


// STEPS
// Create a function named 'downwardTriangle' with a single paramater named 'nums'.
// 'nums' represents the number of desired rows. 

// Initialize a variable and set it to an empty string. Name the variable 'result'. This variable will hold the generated characters in the iterations.

// Outer loop
    // The outer loop determines the number of rows dictated by the 'nums' parameter.
    //  - 'i' will run 'nums' times.
    // - 'i < nums'

  // Inner loop
      // The inner loop is responsible for generating the number of 'X' characters on each row. 
      // The number of 'X' characters decreases with each row.
      // Initialize 'j' to 0.
      // Continue the loop while 'j' is less than 'nums - i', where 'nums' is the total number of rows, and 'i' is the current row number (iterator) starting at 0 and increasing by 1 with each row.
        // Append 'X' to 'result'.

// Once the inner loop finishes, append a new line to result -> result += \n

// return result.

//#endregion



// Left-angled triangle - (Spaces Left to Right)
//#region ---------------------------------------------------------------

// function leftAngledTriangle(rows) {

//   // Variable to store spaces and characters
//   let result = '';

//   // Outer loop
//   for (let i = 0; i < rows; i++) {
    
//     // Inner loop for spaces
//     for (let j = 0; j < rows - i; j++) {
//       result += ' ';
//     }

//     // Inner loop for characters
//     for (let k = 0; k <= i; k++) {
//       result += 'X';
//     }

//     result += '\n';
//   }

//   return result;
// }

// console.log(leftAngledTriangle(5));



// STEPS
// Create a function named 'leftAngledTriangle' with a single parameter named 'rows'.
// 'rows' represents the desired number of rows within the triangle pattern.

// Initialize a variable and set it to an empty string. Name the variable 'result'. This is where the 'X' and ' ' space characters will be stored.

// OUTER LOOP
  // The outer loop is used for the number of rows that will be printed. This is determined by the 'rows' parameter, where the desired number of rows is stored.

  // INNER LOOPS:
    // Inner loop for spaces:
      // The 'inner loop for spaces' is used to create spaces before the first 'X' character.
      // Set 'j' to rows - 1 to account for the last row in the triangle and exclude it. -> (let j = rows - 1)
      // Decrement 'j' while 'j' is greater than 'i', to decrease the number of spaces.
        // Append an empty space to 'result'. -> (result += ' ')

    // Inner loop for characters:
      // The 'inner loop for characters' is used for the number of 'X' characters printed after the spaces.
      // The 'X' characters will increase in amount while 'k' is greater than or equal to 'i'.
        // append 'X' to 'result'

// Once the inner loops finish, append a new line to 'result' -> (result += '\n')

// return 'result'

//#endregion



// Left-angled triangle (Spaces from Right to Left)
//#region ---------------------------------------------------------------

// Function named 'leftAngledTriangle', where the parameter 'rows' represents the number of desired rows.
// function leftAngledTriangle(rows) {

//   // Variable to store the characters.
//   let result = '';

//   // OUTER LOOP: Iterates for each row.
//   for (let i = 0; i < rows; i++) {

//     // INNER LOOP (Spaces): Adds spaces before characters.
//     for (let j = rows - 1; j > i; j--) {
//       result += ' ';
//     }

//     // INNER LOOP (Characters): Adds characters on each row, after the spaces.
//     for (let k = 0; k <= i; k++) {
//       // Append 'X' character to result.
//       result += 'X';
//     }

//     // Add a new line to start a new row.
//     result += '\n';
//   }

//   // return the left angled triangle pattern.
//   return result;
// }

// console.log(leftAngledTriangle(5));



// STEPS
// Create a function named 'leftAngledTriangle' with a single parameter named 'rows'
// 'rows' represents the number of desired rows.

// Initialize a variable that holds an empty string. Name it 'result'. This is where the 'X' characters will be stored.

// OUTER LOOP
    // The outer loop determines how many rows there will be in the triangle, which is represented by 'rows'
    // Continue adding rows until 'i' is less than 'rows' -> (i < rows)

    // INNER LOOPS
      // Inner loop for spaces:
        // The Inner Loop for spaces, determines how many blank spaces there will be on each row before the 'X' character.
        // Set 'j' to 'rows - 1' to account for the final row and exclude it. -> (j = rows -1)
        // Have 'j' decrement in size to get fewer and fewer spaces until it reaches rows - 1;
        // Another way to say ^^ (Decrement 'j' to decrease the number of spaces in each iteration until it reaches rows - 1 )

      // Inner loop for characters
        // The inner loop for characters determines how many 'X' characters there will be in each row. 
          // append 'X' to result.

// Once the Inner loops finsh running, append '\n' to 'result' in order to create a new line with each iteration.

// Return 'result'.


//#endregion



// Right-angled triangle - 2
//#region ---------------------------------------------------------------

// function rightAngledTriangle(nums) {
  
//   let result = '';

//   for (let i = 0; i < nums; i++) {
    
//     for (let j = 0; j <= i; j++) {
//       result += 'X';
//     }

//     result += '\n';
//   }

//   return result;
// }

// console.log(rightAngledTriangle(4));


// STEPS
// Create a function named 'rightAngledTriangle' with a single parameter named 'nums'.

// Initialize a variable to hold an empty string and name it 'result'. 
// This variable will store the 'X' symbol. 

// Outer loop
    // This will determine how many rows there will be / how many times an action will be repeated.
    // The outer loop runs 'num' times, where 'num' represents the desired number of rows.

        // Inner loop
            // The inner loop determines how 'X' will be represented on each new row
            // Set the inner loop's condition to j <= i so the amount of 'X' characters mirrors the number of rows
            // It runs 'i' times, where 'i' is the current row number.

          // append 'X' to result.

// After the inner loop completes, append '\n' (newline) to 'result' in order to move to a new line.

// return 'result', which now contains the right-angled triangle.


//#endregion



// Right-angled triangle
//#region ---------------------------------------------------------------

//    X
//    XX
//    XXX
//    XXXX
//    XXXXX

// Create a function with a single paramater called num
// function rightAngledTriangle(num) {

//   // Initialize an empty string to allow you to accumulate characters
//   let result = '';

//   // Outer loop to determine how many rows of 'X' there will be
//   for (let i = 0; i < num; i++) {
//     result += '-';
//     // Inner loop to determine how many 'X' characters are printed on each row
//     for (let j = 0; j <= i; j++) {
//       // Append 'X' to 'result'
//       result += 'X';
      
//     }
//     // Move to a new row by appending new row ('\n') to 'result'
//     result += '\n';
//   }

//   // return 'result'
//   return result;
// }

// console.log(rightAngledTriangle(5));
// console.log(rightTriangle(8));


// STEPS
// 1) Create a function with a single paramater called num

// 2) Initialize an empty string and assign it to the variable 'result'. This will allow you to accumulate the characters

// 2) Outer loop - determines how many times a certain action will be preformed -> In this instance, it determines how many rows of 'x' there will be

    // 4) Inner loop - determines the actions within each row / what will be printed -> in this case how many 'x' characters are printed on each row
              // The pattern does not generate a fifth row (in ex: excepting num as 4) because the outer loop condition ensures that i never reaches 4. So, the loop conditions i < num and j <= i correctly generate a right-angled triangle with num rows.
              // "In the fourth row (when i is 3), the inner loop runs four times (j is 0, 1, 2, and 3), printing 4 'X' characters."
         // 5) Append 'x' to 'result' 
// 6) Outer loop - move to the next row (append 'result' to '\n')

// 7) Return 'result'

//#endregion


// Box of repeated characters
//#region -----------------------------------------------------------------

// function box(num) {
//   // Initialize an empty string to accumulate the characters. Name variable 'result'
//   let result = '';

//   for (let i = 0; i < num; i++) {
//     for (let j = 0; j < num; j++) {
//       result += 'X';
//     }
//     // Move to the next row
//     result += '\n'
//   }
  
//   return result;
// }

// console.log(box(4));
// console.log(box(6));

// STEPS
// 1) Initialize an empty string to accumulate the characters. Name variable 'result'

// 2) Outer for loop to iterate through each new row
//       3) Inner loop to print the characters for each row
//           4) Inner loop - append the character 'x' to 'result'
//   5) Outer loop - Move to the next row

// 6) return 'result'

//#endregion



// Single line of repeated characters
//#region -----------------------------------------------------------------/

// function repeatCharacter(num) {
//   // Initialize an empty string and assign it to the variable 'result'. This will accumulate characters
//   let result = '';

//   for (let i = 0; i < num; i++) {

//     // Append 'X' to the result on each iteration
//     result += 'X';
//   }
//   return result;
// }

// console.log(repeatCharacter(2));
// console.log(repeatCharacter(5));

//#endregion





