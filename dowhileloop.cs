using System;

namespace Loop
{
	class DoWhile
	{
		public static void Main(string[] args)
		{
			int i = 1, n = 2, product;

			do
			{
				product = n * i;
				Console.WriteLine("{0} * {1} = {2}", n, i, product);
				i++;
			} while (i <= 5);
		}
	}
}
