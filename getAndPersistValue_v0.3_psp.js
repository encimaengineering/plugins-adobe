/*
 * Plugin getAndPersistValue v0.3
 */
/*********************************************************************
* Function getAndPersistValue(v,c,e): writes the value of v to cookie c
*           and returns the value.  The cookie expires after e days (0 
*           for session).  If v is blank, returns the value from cookie
*           Test cases:
*           Page A:
*             s.campaign='123';
*             s.prop1=s.getAndPersistValue(s.campaign,'s_cp_persist',0);
*             <prop1 should be set to 123>
*           Page B:
*             s.campaign='';
*             s.prop1=s.getAndPersistValue(s.campaign,'s_cp_persist',0);
*             <prop1 should be set to 123>
*           If cookies are disabled:
*             No value is returned. This allows customers to infer the 
*             number of page views that came from non-cookied users, 
*             rather than have a partial view of their hits.
*
*	CONFIGURATION VARIABLES:
*		None
*
* PARAMETERS:
*     v = Value to write in cookie and return
*     c = Cookie Name - something like 's_cp_persist'
*     e = (optional) Number of days to expiration - 0 for session
*
* RETURNS:
*     - cookie value or ''
*********************************************************************/

/********************************************************************
 *
 * Main Plug-in code (should be in Plug-ins section)
 *
 *******************************************************************/
/*
 * Plugin: getAndPersistValue 0.3 - get a value on every page
 */
s.getAndPersistValue=new Function("v","c","e",""
+"var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if("
+"v)s.c_w(c,v,e?a:0);return s.c_r(c);");


/********************************************************************
 *
 * Commented example of how to use this is doPlugins function
 *
 *******************************************************************/
/* Plugin Example: s.getAndPersistValue 0.3
	s.prop1=s.getAndPersistValue(s.campaign,'s_cp_persist',30);
*/


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

