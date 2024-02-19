const spinner = "\r|  \r/  \r-  \r\\  \r|  \r/  \r-  \r\\  \r|  \n";
const spinnerArr = spinner.split(" ");

for (let i = 0; i < spinnerArr.length; i++)  {
  setTimeout(() => {
  
    process.stdout.write(spinnerArr[i]);
  }, i * 500);
}










