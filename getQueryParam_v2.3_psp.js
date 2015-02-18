/*
 * Plugin getQueryParam v2.3
 */
/*********************************************************************
* DESCRIPTION:
*	Returns the query string parameter values for the parameters 
*		specified in p. If p is a list of names and multiple values 
*		are found, d separates the values found. If multiple values
*		are found they are returned in the order in which they are 
*		specified in p.
*		
* CONFIGURATION VARIABLES:
*	None
*
* PARAMETERS:
*	  p = comma delimited list of case insensitive query string
*		    parameter names
*	  d = (optional) delimiter used to separate query string parameter
*       values if multiple values are found. If omitted and multiple
*       parameters from p are found, the strings are appended to
*       each other without a delimiter.
*	  u = (optional) URL to take query string from. If omitted, 
*       pageURL or window.location is used. If 'f', the
*       top-most frameset URL is used (in case you want to use the
*       URL from the address bar and the code is inside a frame).
*
* RETURNS:
*	  - The query string parameter specified
*   - 'True' if the query string parameter exists without a value
*   - A delimited list of values if multiple parameters are found
*
*********************************************************************/

/********************************************************************
 *
 * Main Plug-in code (should be in Plug-ins section)
 *
 *******************************************************************/
/*
 * Plugin: getQueryParam 2.3
 */
s.getQueryParam=new Function("p","d","u",""
+"var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati"
+"on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
+".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-"
+"1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i="
+"=p.length?i:i+1)}return v");
s.p_gpv=new Function("k","u",""
+"var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
+"=s.pt(q,'&','p_gvf',k)}return v");
s.p_gvf=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
+"epa(v)}return ''");

/********************************************************************
 *
 * Commented example of how to use this is doPlugins function
 *
 *******************************************************************/
	/* Plugin Example: getQueryParam 2.3
	//single parameter
	s.campaign=s.getQueryParam('cid');

	//multiple parameters
	s.campaign=s.getQueryParam('cid,sid',':');

	//non-page URL example
	s.campaign=s.getQueryParam('cid','',document.referrer);

	//parent frame example
	s.campaign=s.getQueryParam('cid','','f');

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
