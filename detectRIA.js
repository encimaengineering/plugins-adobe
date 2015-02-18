/*
 * Plugin: detectRIA v0.1 - detect and set Flash, Silverlight versions
 * -captures Flash and Silverlight versions and writes them to 2 props
 * -writes value to a cookie to only test once per visit
 * -can be called inside or outside s_doPlugins
 * -capture value on every page or use flag to set only once
 * -allows for a max version to be look for (IE-only)
 *  -10 for Flash, 2 for Silverlight
 */
 
/********************************************************************
 *
 * Main Plug-in code (should be in Plug-ins section)
 *
 *******************************************************************/
/*
 * Plugin: detectRIA v0.1 - detect and set Flash, Silverlight versions
 */
s.detectRIA=new Function("cn", "fp", "sp", "mfv", "msv", "sf", ""
+"cn=cn?cn:'s_ria';msv=msv?msv:2;mfv=mfv?mfv:10;var s=this,sv='',fv=-"
+"1,dwi=0,fr='',sr='',w,mt=s.n.mimeTypes,uk=s.c_r(cn),k=s.c_w('s_cc',"
+"'true',0)?'Y':'N';fk=uk.substring(0,uk.indexOf('|'));sk=uk.substrin"
+"g(uk.indexOf('|')+1,uk.length);if(k=='Y'&&s.p_fo('detectRIA')){if(u"
+"k&&!sf){if(fp){s[fp]=fk;}if(sp){s[sp]=sk;}return false;}if(!fk&&fp)"
+"{if(s.pl&&s.pl.length){if(s.pl['Shockwave Flash 2.0'])fv=2;x=s.pl['"
+"Shockwave Flash'];if(x){fv=0;z=x.description;if(z)fv=z.substring(16"
+",z.indexOf('.'));}}else if(navigator.plugins&&navigator.plugins.len"
+"gth){x=navigator.plugins['Shockwave Flash'];if(x){fv=0;z=x.descript"
+"ion;if(z)fv=z.substring(16,z.indexOf('.'));}}else if(mt&&mt.length)"
+"{x=mt['application/x-shockwave-flash'];if(x&&x.enabledPlugin)fv=0;}"
+"if(fv<=0)dwi=1;w=s.u.indexOf('Win')!=-1?1:0;if(dwi&&s.isie&&w&&exec"
+"Script){result=false;for(var i=mfv;i>=3&&result!=true;i--){execScri"
+"pt('on error resume next: result = IsObject(CreateObject(\"Shockwav"
+"eFlash.ShockwaveFlash.'+i+'\"))','VBScript');fv=i;}}fr=fv==-1?'flas"
+"h not detected':fv==0?'flash enabled (no version)':'flash '+fv;}if("
+"!sk&&sp&&s.apv>=4.1){var tc='try{x=new ActiveXObject(\"AgControl.A'"
+"+'gControl\");for(var i=msv;i>0;i--){for(var j=9;j>=0;j--){if(x.is'"
+"+'VersionSupported(i+\".\"+j)){sv=i+\".\"+j;break;}}if(sv){break;}'"
+"+'}}catch(e){try{x=navigator.plugins[\"Silverlight Plug-In\"];sv=x'"
+"+'.description.substring(0,x.description.indexOf(\".\")+2);}catch('"
+"+'e){}}';eval(tc);sr=sv==''?'silverlight not detected':'silverlight"
+" '+sv;}if((fr&&fp)||(sr&&sp)){s.c_w(cn,fr+'|'+sr,0);if(fr)s[fp]=fr;"
+"if(sr)s[sp]=sr;}}");
 


/********************************************************************
 *
 * Commented example of how to use this in doPlugins function
 * s.detectRIA('cn','fp','sp','mfv','msv','sf');
 * cn:    (optional) cookie name
 * fp:    (optional) prop for Flash version
 * sp:    (optional) prop for Silverlight version
 * mfv:   (optional) max Flash version to look for, defaults to 10 (IE only)
 * msf:   (optional) max Silverlight version to look for, defaults to 2 (IE only)
 * sf:    (optional) flag for setting on every page
 *        -empty sets on every page
 *        -any other value sets only once
 * 
 *******************************************************************/

	/* Plugin Example: detectRIA v0.1
          // set on every page with default max versions
          s.detectRIA('s_ria','prop1','prop2','','','');
		
		// set on first page of visit with new max versions
          s.detectRIA('s_ria','prop1','prop2','8','1','1');
	*/



/********************************************************************
 *
 * Utility functions that may be shared between plug-ins (name only)
 *  p_fo
 *******************************************************************/


/*********************************************************************
* Function p_fo(x,y): Ensures the plugin code is fired only on the 
*      first call of do_plugins
*
*
* Returns:
*     - 1 if first instance on firing
*     - 0 if not first instance on firing
*********************************************************************/
s.p_fo=new Function("n",""
+"var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]="
+"new Object;return 1;}else {return 0;}");
