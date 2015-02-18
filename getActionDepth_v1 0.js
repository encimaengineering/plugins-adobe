/********************************************************************
 *
 * Main Plug-in code (should be in Plug-ins section)
 *
 *******************************************************************/
/*
 * Plugin: getActionDepth v1.0 - Returns the current
 * page number of the visit
 */
s.getActionDepth=new Function("c",""
+ "var s=this,v=1,t=new Date;t.setTime(t.getTime()+1800000);"
+ "if(!s.c_r(c)){v=1}if(s.c_r(c)){v=s.c_r(c);v++}"
+ "if(!s.c_w(c,v,t)){s.c_w(c,v,0)}return v;");


/********************************************************************
 *
 * Commented example of how to use this is doPlugins function
 *
 *******************************************************************/
	/* Plugin Example: getActionDepth v1.0
		if(s.ActionDepthTest){
			s.pdvalue=s.getActionDepth("s_depth");
			if(s.pdvalue == 3) s.events=s.apl(s.events,'event8',',',2);
			s.ActionDepthTest=false;
      }
	*/


/********************************************************************
 *
 * Config variables (should be above doPlugins section)
 *
 *******************************************************************/

s.ActionDepthTest=true

/********************************************************************
 *
 * Utility functions that may be shared between plug-ins (name only)
 *
 *******************************************************************/

 None

