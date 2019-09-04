package sanr10.saaaanr1097;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import junit.framework.TestCase;

public class cucum_san extends TestCase 
{
  sanr10 sansan;
	protected void setUp() throws Exception
	{
		super.setUp();
		sansan =new sanr10();
	}

	protected void tearDown() throws Exception {
		super.tearDown();
	}
	@Test
	public void test() 
	{
		assertEquals(10, sansan.add(5, 5));
	}

}
