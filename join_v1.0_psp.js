/*
 * Plugin join v1.0 - Joins an array into a string
 */
/*********************************************************************
* Function join(v,p): Utility that joins elements of an array into a 
*    string delimited by a string.
*
*    var arry = [ 'one','two' ];
*    example s.join( arry, {front:'[', back:']', delim:',', wrap:'\''});
*
* CONFIGURATION VARIABLES:
* 
*     None
*
* PARAMETERS:
*
*     v = Array (may also be array of array)
*     p = (optoinal) formatting parameters (front, back, delim, wrap)
*
* Returns:
*     - The array as a single delimited string
*********************************************************************/

/********************************************************************
 *
 * Main Plug-in code (should be in Plug-ins section)
 *
 *******************************************************************/
/*
 * s.join: 1.0 - Joins an array into a string
 */

s.join = new Function("v","p",""
+"var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back"
+":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0"
+";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el"
+"se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");





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
