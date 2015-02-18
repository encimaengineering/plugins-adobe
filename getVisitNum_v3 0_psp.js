/*
 * Plugin getVisitNum v3.0
 */
/*********************************************************************
* DESCRIPTION:
*	Detailed description of functionality
*		goes here. This should be a thorough description of how
*		this function works.
*
* CONFIGURATION VARIABLES:
*	None
*
* PARAMETERS:
* tp = (optional) Tracking period.  use "d" for day, "w" for week, "m" for month, or a number for a custom number of days.  
*      If day, week, or month is selected then the visit number will reset at the end of the day/week/month.  
*      If a custom number of days is selected then the visit number will reset after that number of days.
*      If no value is provided then "m" will be used.
* c  = (optional) Specify the persistent cookie name. Default is 's_vnum'.
* c2 = (optional) Specify the session cookie name. Default is 's_invisit'.
* 
*
* RETURNS:
*     - returns the visit number (1,2,3,etc) of the visit.  This number is incremented only on the first page of each visit.
*     - returns "unknown visit number" if the plug-in is unable to identify the visit number (cookies are blocked).
*
*********************************************************************/


/********************************************************************
 *
 * Main Plug-in code (should be in Plug-ins section)
 *
 *******************************************************************/
 
  /*                                                                  
   * Plugin: getVisitNum - version 3.0
   */
   s.getVisitNum=new Function("tp","c","c2",""
  +"var s=this,e=new Date,cval,cvisit,ct=e.getTime(),d;if(!tp){tp='m';}"
  +"if(tp=='m'||tp=='w'||tp=='d'){eo=s.endof(tp),y=eo.getTime();e.setTi"
  +"me(y);}else {d=tp*86400000;e.setTime(ct+d);}if(!c){c='s_vnum';}if(!"
  +"c2){c2='s_invisit';}cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn="
  +"'),str=cval.substring(i+4,cval.length),k;}cvisit=s.c_r(c2);if(cvisi"
  +"t){if(str){e.setTime(ct+1800000);s.c_w(c2,'true',e);return str;}els"
  +"e {return 'unknown visit number';}}else {if(str){str++;k=cval.substri"
  +"ng(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+1800000);"
  +"s.c_w(c2,'true',e);return str;}else {s.c_w(c,e.getTime()+'&vn=1',e)"
  +";e.setTime(ct+1800000);s.c_w(c2,'true',e);return 1;}}");
  s.dimo=new Function("m","y",""
  +"var d=new Date(y,m+1,0);return d.getDate();");
  s.endof=new Function("x",""
  +"var t=new Date;t.setHours(0);t.setMinutes(0);t.setSeconds(0);if(x=="
  +"'m'){d=s.dimo(t.getMonth(),t.getFullYear())-t.getDate()+1;}else if("
  +"x=='w'){d=7-t.getDay();}else {d=1;}t.setDate(t.getDate()+d);return "
  +"t;");



/********************************************************************
 *
 * Commented example of how to use this is doPlugins function
 *
 *******************************************************************/
  
  /* Plugin Examples: getVisitNum 3.0
	s.prop1=s.getVisitNum(365);
	s.prop1=s.getVisitNum('w','s_vnum','s_invisit');
	s.prop1=s.getVisitNum('m','s_vmonthnum','s_monthinvisit');
	s.prop1=s.getVisitNum('d');
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
