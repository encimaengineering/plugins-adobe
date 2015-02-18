/*
 * Plugin getValOnce_v1.0 - Returns a "new" value of a variable.
 */
/*********************************************************************
* DESCRIPTION:
*    getValOnce compares the value of an input variable with the
*        previous value of that variable and, if it is different, will
*        return the new value, otherwise it will return an empty string.
* 
* CONFIGURATION VARIABLES:
*    NONE
*
* PARAMETERS:
*    v = value that will be checked
*    c = name of the cookie that will store the "compare" value. Default
*        value "s_gvo" is used if no parameters is sent.
*    e = Expiration, in days, of the cookie.  Use 0 for session
*        expiration. Default of 0 is used.
*
* RETURNS:
*    IF the value sent in is different from the previous value sent
*        in, the new value is returned, ELSE an empty string
*        is returned.
*		
*********************************************************************/

/********************************************************************
 *
 * Main Plug-in code (should be in Plug-ins section)
 *
 *******************************************************************/
/*
 * Plugin: getValOnce_v1.0
 */
s.getValOnce=new Function("v","c","e",""
+"var s=this,a=new Date,v=v?v:v='',c=c?c:c='s_gvo',e=e?e:0,k=s.c_r(c"
+");if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return"
+" v==k?'':v");



/********************************************************************
 *
 * Commented example of how to use this is doPlugins function
 *
 *******************************************************************/
	/* Plugin Example: getValOnce_v1.0
		s.campaign=s.getValOnce(s.campaign,'s_campaign',30);
	*/


/********************************************************************
 *
 * Config variables (should be above doPlugins section)
 *
 *******************************************************************/
NONE


/********************************************************************
 *
 * Supporting functions that may be shared between plug-ins (name only)
 *
 *******************************************************************/
NONE
