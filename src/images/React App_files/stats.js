google.maps.__gjsload__('stats', function(_){var SY=function(){this.j=new _.Ll},TY=function(a){var b=0,c=0;a.j.forEach(function(d){b+=d.Vm;c+=d.xm});return c?b/c:0},UY=function(a){_.G(this,a,2)},VY=function(a){_.G(this,a,6)},WY=function(a){var b=document;this.A=_.Ih;this.l=a+"/maps/gen_204";this.m=b},XY=function(a,b,c){var d=[];_.Gj(a,function(e,f){d.push(f+b+e)});return d.join(c)},YY=function(a){var b={};_.Gj(a,function(c,d){b[encodeURIComponent(d)]=encodeURIComponent(c).replace(/%7C/g,"|")});return XY(b,":",",")},ZY=function(a,b,c,d){var e=
{};e.host=document.location&&document.location.host||window.location.host;e.v=a;e.r=Math.round(1/b);c&&(e.client=c);d&&(e.key=d);return e},$Y=function(a,b,c,d){var e=_.H(_.K,0,1);this.B=a;this.F=b;this.A=e;this.l=c;this.m=d;this.j=new _.Ll;this.D=_.$a()},aZ=function(a,b,c,d,e){this.D=a;this.F=b;this.B=c;this.m=d;this.A=e;this.l={};this.j=[]},bZ=function(a,b,c){var d=_.Lh;this.m=a;_.S.bind(this.m,"set_at",this,this.A);_.S.bind(this.m,"insert_at",this,this.A);this.D=b;this.F=d;this.B=c;this.l=0;this.j=
{};this.A()},dZ=function(a,b,c,d,e){var f=_.H(_.K,23,500);var g=_.H(_.K,22,2);this.H=a;this.J=b;this.K=f;this.A=g;this.F=c;this.B=d;this.D=e;this.l=new _.Ll;this.j=0;this.m=_.$a();cZ(this)},cZ=function(a){window.setTimeout(function(){eZ(a);cZ(a)},Math.min(a.K*Math.pow(a.A,a.j),2147483647))},eZ=function(a){var b=ZY(a.J,a.F,a.B,a.D);b.t=a.j+"-"+(_.$a()-a.m);a.l.forEach(function(c,d){c=c();0<c&&(b[d]=Number(c.toFixed(2))+(_.Hm()?"-if":""))});a.H.j({ev:"api_snap"},b);++a.j},fZ=function(){this.l=_.I(_.K,
6);this.m=_.I(_.K,16);if(_.rg[35]){var a=_.Bc(_.K);a=_.I(a,11)}else a=_.Hr;this.j=new WY(a);_.Kh&&new bZ(_.Kh,(0,_.z)(this.j.j,this.j),!!this.l);a=_.I(new _.Dc(_.K.C[3]),1);this.J=a.split(".")[1]||a;this.K={};this.F={};this.D={};this.fa={};this.H=_.H(_.K,0,1);_.Hh&&(this.B=new dZ(this.j,this.J,this.H,this.l,this.m));a=this.A=new VY;var b=_.I(new _.Dc(_.K.C[3]),1);a.C[1]=b;this.l&&(this.A.C[2]=this.l);this.m&&(this.A.C[3]=this.m)};SY.prototype.l=function(a,b,c){this.j.set(_.Rd(a),{Vm:b,xm:c})};
_.A(UY,_.D);var gZ;_.A(VY,_.D);WY.prototype.j=function(a,b){b=b||{};var c=_.Qk().toString(36);b.src="apiv3";b.token=this.A;b.ts=c.substr(c.length-6);a.cad=YY(b);a=XY(a,"=","&");a=this.l+"?target=api&"+a;this.m.createElement("img").src=a;(b=_.y.__gm_captureCSI)&&b(a)};$Y.prototype.H=function(a,b){b=_.t(b)?b:1;this.j.isEmpty()&&window.setTimeout((0,_.z)(function(){var c=ZY(this.F,this.A,this.l,this.m);c.t=_.$a()-this.D;var d=this.j;_.Ml(d);for(var e={},f=0;f<d.j.length;f++){var g=d.j[f];e[g]=d.l[g]}_.Jj(c,e);this.j.clear();this.B.j({ev:"api_maprft"},c)},this),500);b=this.j.get(a,0)+b;this.j.set(a,b)};aZ.prototype.H=function(a){this.l[a]||(this.l[a]=!0,this.j.push(a),2>this.j.length&&_.mw(this,this.J,500))};aZ.prototype.J=function(){for(var a=ZY(this.F,this.B,this.m,this.A),b=0,c;c=this.j[b];++b)a[c]="1";a.hybrid=+_.qm();this.j.length=0;this.D.j({ev:"api_mapft"},a)};bZ.prototype.A=function(){for(var a;a=this.m.removeAt(0);){var b=a.cm;a=a.timestamp-this.F;++this.l;this.j[b]||(this.j[b]=0);++this.j[b];if(20<=this.l&&!(this.l%5)){var c={};c.s=b;c.sr=this.j[b];c.tr=this.l;c.te=a;c.hc=this.B?"1":"0";this.D({ev:"api_services"},c)}}};dZ.prototype.register=function(a,b){this.l.set(a,b)};_.p=fZ.prototype;_.p.ck=function(a){a=_.Rd(a);this.K[a]||(this.K[a]=new aZ(this.j,this.J,this.H,this.l,this.m));return this.K[a]};_.p.ak=function(a){a=_.Rd(a);this.F[a]||(this.F[a]=new $Y(this.j,this.J,this.l,this.m));return this.F[a]};_.p.ae=function(a){if(this.B){this.D[a]||(this.D[a]=new _.Mw,this.B.register(a,function(){return b.mb()}));var b=this.D[a];return b}};_.p.$j=function(a){if(this.B){this.fa[a]||(this.fa[a]=new SY,this.B.register(a,function(){return TY(b)}));var b=this.fa[a];return b}};
_.p.Rk=function(a){if(_.Hh){var b=this.A;b=new b.constructor(_.gk(b));var c=Math.floor(_.$a()/1E3);b.C[0]=c;c=new UY(_.J(b,5));c.C[0]=Math.round(1/this.H);c.C[1]=a;a=this.j;c={ev:"api_map_style"};var d=new _.oo;gZ||(gZ={G:"issssm",I:["is"]});b=d.j(b.C,gZ);c.pb=encodeURIComponent(b).replace(/%20/g,"+");b=XY(c,"=","&");a.m.createElement("img").src=a.l+"?target=api&"+b}};var hZ=new fZ;_.Je("stats",hZ);});
