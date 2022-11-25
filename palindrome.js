using System;  
  public class PalindromeExample  
   {  
     public static void Main(string[] args)  
      {  
          int num,r,sum=0,temp;    
          num = int.Parse(Console.ReadLine());  
          temp=num;      
          while(num>0)      
          {      
           r=num%10;      
           sum=(sum*10)+r;      
           num=num/10;      
          }      
          if(temp==sum)      
           Console.Write("Palindrome.");      
          else      
           Console.Write(" Palindrome");     
    }  
  }  
