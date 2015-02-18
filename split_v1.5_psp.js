/*
 * Utility Function: split v1.5 (JS 1.0 compatible)
 */
/*********************************************************************
* DESCRIPTION:
*	Returns an array of d-separated elements in l. If l is empty or 
*		null, an array of length 0 is returned. If d is not found, l
*		is the zeroth element in the array of length 1. If d is	empty,
*		the entire string is returned in the array at location 0.
*
* CONFIGURATION VARIABLES:
*	
*   None
*
* PARAMETERS:
*	  l = a string of d separated elements
*	  d = a string of 1 or more characters separating values in l
*
* RETURNS:
*	- An array of elements
*
*********************************************************************/

/********************************************************************
 *
 * Main Plug-in code (should be in Plug-ins section)
 *
 *******************************************************************/
/*
 * Utility Function: split v1.5 (JS 1.0 compatible)
 */
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/********************************************************************
 *
 * Commented example of how to use this is doPlugins function
 *
 *******************************************************************/
 
	Not Applicable - Utility function only

/********************************************************************
 *
 * Config variables (should be above doPlugins section)
 *
 *******************************************************************/

	None

/********************************************************************
 *
 * Utility functions that may be shared between plug-ins (name only)
 *
 *******************************************************************/
 
	None