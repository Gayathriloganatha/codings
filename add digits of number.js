
  var num=7865, rem, sum=0;
  while(num)
  {
    rem = num%10;
    sum = sum+rem;
    num = Math.floor(num/10);
  }
  document.write(sum);
