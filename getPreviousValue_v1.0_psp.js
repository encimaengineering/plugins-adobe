/*
 * Plugin: getPreviousValue v1.0 - return previous value of designated
 *   variable (requires split utility)
 */
/*********************************************************************
* Function getPreviousValue(v,c,el): The getPreviousValue plugin is a 
*       rework of getPreviousPage. The code has been expanded for the 
*       following reasons:
*       - getPreviousPage required the use of the ClickMap cookie. 
*         There were some obvious limitations with this dependency.
*       - The request has been made to allow any value to be retained 
*         from page to page, not just the pageName variable.
*
*       The updates include:
*       - the ability to select the variable to persist
*       - the ability to choose a cookie name for the persisted value
*       - if no value is present for the variable on any given page, 
*         the text 'no value' will be set in the cookie, thus retaining
*         a single cookie per variable persisted per session
*       - a fixed 30 minute expiration is now set for each cookie, 
*         refereshed with each page load
*
* CONFIGURATION VARIABLES: 
*     None
*
* PARAMETERS:
*     v = variable to persist from page to page
*         if you want to get the previous value for pageName, insert 
*         s.pageName
*     c = cookie name for stored value
*         Recommended: append "gpv_" as prefix identifier
*    el = (optional) event list to get previous value for when event 
*         was last set.  If this variable is set, the plugin will only
*         set and capture values when the event is set.
*
* RETURNS:
*     - returns previous value for v or 'no value' if there is no
*       previous value
*********************************************************************/

/********************************************************************
 *
 * Main Plug-in code (should be in Plug-ins section)
 *
 *******************************************************************/
/*
 * Plugin: getPreviousValue v1.0 - return previous value of designated
 *   variable (requires split utility)
 */
s.getPreviousValue=new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");

/********************************************************************
 *
 * Commented example of how to use this is doPlugins function
 *
 *******************************************************************/
	/* Plugin Example: getPreviousValue v1.0
	 // get previous value for s.pageName variable, set to prop5 on every page	
	 s.prop5=s.getPreviousValue(s.pageName,'gpv_p5','');  	
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
 
  Split
