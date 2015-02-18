/********************************************************************
 *
 * Main Plug-in code (should be in Plug-ins section)
 *
 *******************************************************************/
/*
 * Plugin: getPercentPageViewed v1.2
 */
s.getPercentPageViewed=new Function("",""
+"var s=this;if(typeof(s.linkType)=='undefined'||s.linkType=='e'){var"
+" v=s.c_r('s_ppv');s.c_w('s_ppv',0);return v;}");
s.getPPVCalc=new Function("",""
+"var s=s_c_il["+s._in+"],dh=Math.max(Math.max(s.d.body.scrollHeight,"
+"s.d.documentElement.scrollHeight),Math.max(s.d.body.offsetHeight,s."
+"d.documentElement.offsetHeight),Math.max(s.d.body.clientHeight,s.d."
+"documentElement.clientHeight)),vph=s.wd.innerHeight||(s.d.documentE"
+"lement.clientHeight||s.d.body.clientHeight),st=s.wd.pageYOffset||(s"
+".wd.document.documentElement.scrollTop||s.wd.document.body.scrollTo"
+"p),vh=st+vph,pv=Math.round(vh/dh*100),cp=s.c_r('s_ppv');if(pv>100){"
+"s.c_w('s_ppv','');}else if(pv>cp){s.c_w('s_ppv',pv);}");
s.getPPVSetup=new Function("",""
+"var s=this;if(s.wd.addEventListener){s.wd.addEventListener('load',s"
+".getPPVCalc,false);s.wd.addEventListener('scroll',s.getPPVCalc,fals"
+"e);s.wd.addEventListener('resize',s.getPPVCalc,false);}else if(s.wd"
+".attachEvent){s.wd.attachEvent('onload',s.getPPVCalc);s.wd.attachEv"
+"ent('onscroll',s.getPPVCalc);s.wd.attachEvent('onresize',s.getPPVCa"
+"lc);}");
s.getPPVSetup();


/********************************************************************
 *
 * Commented example of how to use this in doPlugins function
 *
 *******************************************************************/
	/* Plugin Example: getPercentPageView v1.2
		s.prop2=s.getPercentPageViewed();
	*/
	
	/* To understand which page is getting what value
	*/
	s.prop3=s.getPreviousValue(s.pageName,"s_pv");
	if (s.prop3){
		s.prop2=s.getPercentPageViewed();
	}

	/* To send the hit on an exit link */
	var url=s.exitLinkHandler()
	if(url){
		s.prop3=s.getPreviousValue(s.pageName,"s_pv");
		if (s.prop3){
			s.linkTrackVars='prop2,prop3';
	    		s.prop2=s.getPercentPageViewed();
		}
	}



/********************************************************************
 *
 * Config variables (should be above doPlugins section)
 *
 *******************************************************************/



/********************************************************************
 *
 * Utility functions that may be shared between plug-ins (name only)
 *
 *******************************************************************/
 
 List function names
 
 getPreviousValue()
 exitLinkHandler()