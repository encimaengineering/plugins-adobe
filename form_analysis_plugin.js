//Below goes above the plugins section (s_doPLugins) and needs customization

/* Form Analysis Config */
s.formList=""
s.trackFormList=false
s.trackPageName=true
s.useCommerce=false
s.varUsed="prop10"
s.eventList="" //Abandon,Success,Error



//Below goes where all other normal plugins go

	/*
	 * Plugin: Form Analysis 2.1 (Success, Error, Abandonment)
	 */
	s.setupFormAnalysis=new Function(""
	+"var s=this;if(!s.fa){s.fa=new Object;var f=s.fa;f.ol=s.wd.onload;s."
	+"wd.onload=s.faol;f.uc=s.useCommerce;f.vu=s.varUsed;f.vl=f.uc?s.even"
	+"tList:'';f.tfl=s.trackFormList;f.fl=s.formList;f.va=new Array('',''"
	+",'','')}");
	s.sendFormEvent=new Function("t","pn","fn","en",""
	+"var s=this,f=s.fa;t=t=='s'?t:'e';f.va[0]=pn;f.va[1]=fn;f.va[3]=t=='"
	+"s'?'Success':en;s.fasl(t);f.va[1]='';f.va[3]='';");
	s.faol=new Function("e",""
	+"var s=s_c_il["+s._in+"],f=s.fa,r=true,fo,fn,i,en,t,tf;if(!e)e=s.wd."
	+"event;f.os=new Array;if(f.ol)r=f.ol(e);if(s.d.forms&&s.d.forms.leng"
	+"th>0){for(i=s.d.forms.length-1;i>=0;i--){fo=s.d.forms[i];fn=fo.name"
	+";tf=f.tfl&&s.pt(f.fl,',','ee',fn)||!f.tfl&&!s.pt(f.fl,',','ee',fn);"
	+"if(tf){f.os[fn]=fo.onsubmit;fo.onsubmit=s.faos;f.va[1]=fn;f.va[3]='"
	+"No Data Entered';for(en=0;en<fo.elements.length;en++){el=fo.element"
	+"s[en];t=el.type;if(t&&t.toUpperCase){t=t.toUpperCase();var md=el.on"
	+"mousedown,kd=el.onkeydown,omd=md?md.toString():'',okd=kd?kd.toStrin"
	+"g():'';if(omd.indexOf('.fam(')<0&&okd.indexOf('.fam(')<0){el.s_famd"
	+"=md;el.s_fakd=kd;el.onmousedown=s.fam;el.onkeydown=s.fam}}}}}f.ul=s"
	+".wd.onunload;s.wd.onunload=s.fasl;}return r;");
	s.faos=new Function("e",""
	+"var s=s_c_il["+s._in+"],f=s.fa,su;if(!e)e=s.wd.event;if(f.vu){s[f.v"
	+"u]='';f.va[1]='';f.va[3]='';}su=f.os[this.name];return su?su(e):tru"
	+"e;");
	s.fasl=new Function("e",""
	+"var s=s_c_il["+s._in+"],f=s.fa,a=f.va,l=s.wd.location,ip=s.trackPag"
	+"eName,p=s.pageName;if(a[1]!=''&&a[3]!=''){a[0]=!p&&ip?l.host+l.path"
	+"name:a[0]?a[0]:p;if(!f.uc&&a[3]!='No Data Entered'){if(e=='e')a[2]="
	+"'Error';else if(e=='s')a[2]='Success';else a[2]='Abandon'}else a[2]"
	+"='';var tp=ip?a[0]+':':'',t3=e!='s'?':('+a[3]+')':'',ym=!f.uc&&a[3]"
	+"!='No Data Entered'?tp+a[1]+':'+a[2]+t3:tp+a[1]+t3,ltv=s.linkTrackV"
	+"ars,lte=s.linkTrackEvents,up=s.usePlugins;if(f.uc){s.linkTrackVars="
	+"ltv=='None'?f.vu+',events':ltv+',events,'+f.vu;s.linkTrackEvents=lt"
	+"e=='None'?f.vl:lte+','+f.vl;f.cnt=-1;if(e=='e')s.events=s.pt(f.vl,'"
	+",','fage',2);else if(e=='s')s.events=s.pt(f.vl,',','fage',1);else s"
	+".events=s.pt(f.vl,',','fage',0)}else{s.linkTrackVars=ltv=='None'?f."
	+"vu:ltv+','+f.vu}s[f.vu]=ym;s.usePlugins=false;var faLink=new Object"
	+"();faLink.href='#';s.tl(faLink,'o','Form Analysis');s[f.vu]='';s.us"
	+"ePlugins=up}return f.ul&&e!='e'&&e!='s'?f.ul(e):true;");
	s.fam=new Function("e",""
	+"var s=s_c_il["+s._in+"],f=s.fa;if(!e) e=s.wd.event;var o=s.trackLas"
	+"tChanged,et=e.type.toUpperCase(),t=this.type.toUpperCase(),fn=this."
	+"form.name,en=this.name,sc=false;if(document.layers){kp=e.which;b=e."
	+"which}else{kp=e.keyCode;b=e.button}et=et=='MOUSEDOWN'?1:et=='KEYDOW"
	+"N'?2:et;if(f.ce!=en||f.cf!=fn){if(et==1&&b!=2&&'BUTTONSUBMITRESETIM"
	+"AGERADIOCHECKBOXSELECT-ONEFILE'.indexOf(t)>-1){f.va[1]=fn;f.va[3]=e"
	+"n;sc=true}else if(et==1&&b==2&&'TEXTAREAPASSWORDFILE'.indexOf(t)>-1"
	+"){f.va[1]=fn;f.va[3]=en;sc=true}else if(et==2&&kp!=9&&kp!=13){f.va["
	+"1]=fn;f.va[3]=en;sc=true}if(sc){nface=en;nfacf=fn}}if(et==1&&this.s"
	+"_famd)return this.s_famd(e);if(et==2&&this.s_fakd)return this.s_fak"
	+"d(e);");
	s.ee=new Function("e","n",""
	+"return n&&n.toLowerCase?e.toLowerCase()==n.toLowerCase():false;");
	s.fage=new Function("e","a",""
	+"var s=this,f=s.fa,x=f.cnt;x=x?x+1:1;f.cnt=x;return x==a?e:'';");
