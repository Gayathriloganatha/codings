using System;

namespace Loop
{
	class ForLoop
	{
		public static void Main(string[] args)
		{
			int num = 10,sum = 0;

			for (int i=1; i<=num; i++)
			{
				
				sum += i;
			}

			Console.WriteLine(sum);
		}
	}
}
