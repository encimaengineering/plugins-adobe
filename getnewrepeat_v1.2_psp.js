/*
 * Plugin getNewRepeat v1.2
 */
/*********************************************************************
* Function getNewRepeat(d)
* 	Determine whether a user is New or Repeat, based on whether they have
* 	a cookie from a previous visit stored.  The expiration value and cookine 
* 	name of that cookie identifying them as a repeat visitor is configurable.
* 	The expiration date is updated each time the plug-in is called.
* 	
*	CONFIGURATION VARIABLES:
*		None
*	
*	PARAMETERS:
*		d = (optional) Number of days until the cookie will expire.  Default is 30 days.
*		cn = (optional) Name of cookie.  Default is "s_nr".
*
*	RETURNS:
*		IF the visitor has visited the site within the last "d" days, they
*			"Repeat" will be returned
*		ELSE "New" will be returned
*		If the visitor blocks first party cookies "New" will be returned
*********************************************************************/


/********************************************************************
 *
 * Main Plug-in code (should be in Plug-ins section)
 *
 *******************************************************************/

/*
 * Plugin: getNewRepeat 1.2 - Returns whether user is new or repeat
 */
s.getNewRepeat=new Function("d","cn",""
+"var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:"
+"'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length="
+"=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct"
+"-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N"
+"ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");
 

/********************************************************************
 *
 * Commented example of how to use this is doPlugins function
 *
 *******************************************************************/
/* Plug-in Example: getNewRepeat v1.2
	In the following sample call:
	s.prop1 will be set to "New" or "Repeat" depending on whether the
	visitor has visited the site within the last 30 days. 
  	
  s.prop1 = s.getNewRepeat();

*/

/* Plug-in Example: getNewRepeat v1.2
	In the following sample call:
	s.prop1 will be set to "New" or "Repeat" depending on whether the
	visitor has visited the site within the last 60 days. 
	s.prop2 will be set to "New" or "Repeat" depending on whether the
	visitor has visited the site within the last 365 days.  The cookie
	for s.prop2 will be named s_nr2.
	
  s.prop1 = s.getNewRepeat(60);
	s.prop2 = s.getNewRepeat(365,'s_nr2');
*/

/********************************************************************
 *
 * Config variables (should be above doPlugins section)
 *
 *******************************************************************/
  None

/********************************************************************
 *
 * Required utility functions
 *
 *******************************************************************/
 
 	split