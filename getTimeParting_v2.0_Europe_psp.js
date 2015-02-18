/*
 * Plugin: TimeParting 2.0 - Time Parting
 */
/*********************************************************************
* Function getTimeParting(t,z,y): This plugin takes the clients time 
*             and returns diferent portions of it based on the 
*             parameters set.
*
* CONFIGURATION VARIABLES:
*
*      s.dstStart - (optional coinfiguration variable) the date that 
*             Daylight savings starts "MM/DD/YYYY".  If this variable 
*             is not populated, then this variable defaults to the 
*             daylight savings times for Europe.
*      s.dstEnd - (optional coinfiguration variable) the date that 
*             Daylight savings ends "MM/DD/YYYY". If this variable is 
*             not populated, then this variable defaults to the 
*             daylight savings times for Europe.
*
* PARAMETERS:
* 
*     t = (optional) Time period - The hour of day (30 minute 
*             intervals) is returned when the value 'h' is populated 
*             here.  When the value is 'd' then the day of the week is
*             returned, when the value is 'w', then Weekday or Weekend
*             is returned.  When no value is listed, then the day and 
*             the hour are returned.
*     z = (optional) Time Zone - If you would like the data to be 
*             based upon a specific time period, then that will need 
*             to be specified as the hours different from GMT here.  
*             If no value is specified, it defaults to GMT  (i.e. '-5' 
*             for US Eastern Time)
*     y = (optional) Year - If you would like to check the clients 
*             year against the current year, then this needs to be 
*             specified here.  Otherwise, it will not run this check.
*     l = (optional) no Daylight Savings – If you would not like 
*             daylight savings to be accounted for, thwn set this 
*             parameter to '0'
*
* RETURNS:
*     - returns Hour of Day if t='h'
*     - returns Day of Week if t='d'
*     - returns Weekday vs. Weekend if t='w'
*********************************************************************/

/********************************************************************
 *
 * getTimeParting 2.0
 *
 *******************************************************************/
/*
 * Plugin: getTimeParting 2.0 
 */
s.getTimeParting=new Function("t","z","y","l",""
+"var s=this,d,A,U,X,Z,W,B,C,D,Y;d=new Date();A=d.getFullYear();Y=U=S"
+"tring(A);if(s.dstStart&&s.dstEnd){B=s.dstStart;C=s.dstEnd}else{;U=U"
+".substring(2,4);X='092925|102831|112730|122528|133127|143026|152925"
+"|162730|172629|182828|193127';X=s.split(X,'|');for(W=0;W<=10;W++){Z"
+"=X[W].substring(0,2);if(U==Z){B=X[W].substring(2,4);C=X[W].substrin"
+"g(4,6)}}if(!B||!C){B='29';C='25'}B='03/'+B+'/'+A;C='10/'+C+'/'+A;}D"
+"=new Date('1/1/2000');if(D.getDay()!=6||D.getMonth()!=0){return'Dat"
+"a Not Available'}else{z=z?z:'0';z=parseFloat(z);B=new Date(B);C=new"
+" Date(C);W=new Date();if(W>B&&W<C&&l!='0'){z=z+1}W=W.getTime()+(W.g"
+"etTimezoneOffset()*60000);W=new Date(W+(3600000*z));X=['Sunday','Mo"
+"nday','Tuesday','Wednesday','Thursday','Friday','Saturday'];B=W.get"
+"Hours();C=W.getMinutes();D=W.getDay();Z=X[D];U='AM';A='Weekday';X='"
+"00';if(C>30){X='30'}if(B>=12){U='PM';B=B-12};if(B==0){B=12};if(D==6"
+"||D==0){A='Weekend'}W=B+':'+X+U;if(y&&y!=Y){return'Data Not Availab"
+"le'}else{if(t){if(t=='h'){return W}if(t=='d'){return Z}if(t=='w'){r"
+"eturn A}}else{return Z+', '+W}}}");

/********************************************************************
 *
 * Commented example of how to use this in doPlugins function
 *
 *******************************************************************/
	/* getTimeParting example with year check
	s.prop1=s.getTimeParting('h','-7','2009');
	*/
	
	/* getTimeParting example without year check
	s.prop1=s.getTimeParting('h','-7');
	*/

	/* getTimeParting example without daylight savings, GMT timezone
	s.prop1=s.getTimeParting('h','','','0');
	*/

	/* getTimeParting example without year check, GMT timezone
	s.prop1=s.getTimeParting('h');
	*/

	/* getTimeParting example without year check, GMT timezone, combine hour and day
	s.prop1=s.getTimeParting();
	*/
/********************************************************************
 *
 * Config variables (should be above doPlugins section)
 *
 *******************************************************************/
s.dstStart="03/29/2009";
s.dstEnd="10/25/2009";

/********************************************************************
 *
 * Utility functions that may be shared between plug-ins (name only)
 *
 *******************************************************************/
split