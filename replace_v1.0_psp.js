/*
 * Plugin Utility replace v1.0 - replace a value within a string
 */
/*********************************************************************
* Function replace(x,o,n): replaces all occurance of o in x with n.
* 
* CONFIGURATION VARIABLES:
* 
*     None
*
* PARAMETERS:
*
*     x = string to perform replace on
*     o = string to replace in x
*     n = string to replace o with in x
*
* RETURNS:
*     - value of x with all occurances of o replaced by value of n.
*********************************************************************/

/********************************************************************
 *
 * Main Plug-in code (should be in Plug-ins section)
 *
 *******************************************************************/
/*
 * Plugin Utility: Replace v1.0
 */
s.repl=new Function("x","o","n",""
+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
+"substring(i+o.length);i=x.indexOf(o,i+l)}return x");


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
