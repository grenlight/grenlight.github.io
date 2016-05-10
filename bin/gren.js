!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("GREN",[],t):"object"==typeof exports?exports.GREN=t():e.GREN=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);Object.defineProperty(t,"WebGLRenderer",{enumerable:!0,get:function(){return r.WebGLRenderer}});var i=n(4);Object.defineProperty(t,"commonVS",{enumerable:!0,get:function(){return i.commonVS}}),Object.defineProperty(t,"commonFS",{enumerable:!0,get:function(){return i.commonFS}});var a=n(5);Object.defineProperty(t,"GoraudDefine",{enumerable:!0,get:function(){return a.GoraudDefine}}),Object.defineProperty(t,"GoraudCalculator",{enumerable:!0,get:function(){return a.GoraudCalculator}});var o=n(6);Object.defineProperty(t,"GLBezier",{enumerable:!0,get:function(){return o.GLBezier}});var u=n(7);Object.defineProperty(t,"Matrix4",{enumerable:!0,get:function(){return u.Matrix4}});var s=n(8);Object.defineProperty(t,"Matrix2d",{enumerable:!0,get:function(){return s.Matrix2d}});var c=n(9);Object.defineProperty(t,"Vector2",{enumerable:!0,get:function(){return c.Vector2}});var l=n(10);Object.defineProperty(t,"Vector3",{enumerable:!0,get:function(){return l.Vector3}});var f=n(11);Object.defineProperty(t,"Vector4",{enumerable:!0,get:function(){return f.Vector4}});var h=n(12);Object.defineProperty(t,"random",{enumerable:!0,get:function(){return h.random}});var d=n(13);Object.defineProperty(t,"IAnimation",{enumerable:!0,get:function(){return d.IAnimation}});var v=n(14);Object.defineProperty(t,"TouchManager",{enumerable:!0,get:function(){return v.TouchManager}});var y=n(15);Object.defineProperty(t,"PlaneGeometry",{enumerable:!0,get:function(){return y.PlaneGeometry}});var p=n(2);Object.keys(p).forEach(function(e){"default"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return p[e]}})});try{window.devicePixelRatio=window.devicePixelRatio||1}catch(g){}},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.WebGLRenderer=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(2),u=r(o),s=n(3),c=["webgl","experimental-webgl","webkit-3d","moz-webgl"];t.WebGLRenderer=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?0:arguments[0],n=arguments.length<=1||void 0===arguments[1]?0:arguments[1],r=arguments.length<=2||void 0===arguments[2]?null:arguments[2];i(this,e),this.canvasWidth=0,this.canvasHeight=0,this.canvas=null,null!==r?this.canvas=document.getElementById(r):this.canvas=document.createElement("canvas"),this.gl=this.getGLContext(),null===this.gl?this.isWebGLSuported=!1:(this.isWebGLSuported=!0,this.gl.createArrayBufferWithData=u.createArrayBufferWithData,this.gl.createArrayBufferWithDataAndType=u.createArrayBufferWithDataAndType,this.gl.createArrayBufferWithTypedArray=u.createArrayBufferWithTypedArray,this.gl.createElementBufferWithData=u.createElementBufferWithData,this.gl.createElementBufferWithTypedArray=u.createElementBufferWithTypedArray,this.gl.createTextureWithData=u.createTextureWithData,this.gl.createTexture1D=u.createTexture1D,this.gl.makeProgram=u.makeProgram),this.setStyle(t,n)}return a(e,[{key:"setStyle",value:function(){var e=arguments.length<=0||void 0===arguments[0]?0:arguments[0],t=arguments.length<=1||void 0===arguments[1]?0:arguments[1],n=arguments.length<=2||void 0===arguments[2]?null:arguments[2];null!=this.canvas&&0!==e&&0!==t&&(this.canvasWidth=e*window.devicePixelRatio,this.canvasHeight=t*window.devicePixelRatio,this.canvas.width=this.canvasWidth,this.canvas.height=this.canvasHeight,null===n?(this.canvas.style.width=e+"px",this.canvas.style.height=t+"px"):this.canvas.setAttribute("style","width:"+e+"px; height: "+t+"px; "+n+";"),this.canvas.style.webkitTapHighlightColor="rgba(0, 0, 0, 0)",this.centerX=this.canvasWidth/2,this.centerY=this.canvasHeight/2)}},{key:"getGLContext",value:function(){var e=null;if(s.Security.validDomain()===!1)return e;for(var t=0;t<c.length&&!(e=this.canvas.getContext(c[t],{}));++t);return null===e&&this._createNotSupportMessageView(),e}},{key:"_createNotSupportMessageView",value:function(){this.canvas=document.createElement("div"),this.canvas.setAttribute("style","color: #454545; padding: 25px; font-size: 18px;"),this.canvas.innerHTML="<p>您当前使用的浏览器不支持 WebGL.</p>\n<p>支持 WebGL 的手机系统版本及浏览器版本有: </p>\n<ul>\n<li>iOS 8.0, Android 5.0 及以上版本</li>\n<li>IE 11 及微软 Edge 浏览所有版本</li>\n<li>FireFox for PC/Mac 40 及以上版本</li>\n<li>Chrome for PC/Mac 43 及以上版本</li>\n<li>Safari for Mac 8.0 及以上版本</li>\n</ul>"}}]),e}()},function(e,t){"use strict";function n(e,t){function n(e,t){var n=i.createShader(e);if(i.shaderSource(n,t),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw new Error("compile error: "+i.getShaderInfoLog(n));return n}var r=this,i=this,a=this.createProgram();if(this.attachShader(a,n(this.VERTEX_SHADER,e)),this.attachShader(a,n(this.FRAGMENT_SHADER,t)),this.linkProgram(a),!this.getProgramParameter(a,this.LINK_STATUS))throw new Error("link error: "+this.getProgramInfoLog(a));return this.useProgram(a),a.setAttribLocations=function(e){for(var t=0,n=e.length;n>t;t+=1)a[e[t]]=r.getAttribLocation(a,e[t])},a.setUniformLocations=function(e){for(var t=0,n=e.length;n>t;t+=1)a[e[t]]=r.getUniformLocation(a,e[t])},a}function r(e){return this.createArrayBufferWithDataAndType(e,this.STREAM_DRAW)}function i(e,t){var n=this.createBuffer();return this.bindBuffer(this.ARRAY_BUFFER,n),this.bufferData(this.ARRAY_BUFFER,new Float32Array(e),t),this.bindBuffer(this.ARRAY_BUFFER,null),n}function a(e){var t=arguments.length<=1||void 0===arguments[1]?this.STATIC_DRAW:arguments[1],n=this.createBuffer();return this.bindBuffer(this.ARRAY_BUFFER,n),this.bufferData(this.ARRAY_BUFFER,e,t),this.bindBuffer(this.ARRAY_BUFFER,null),n}function o(e){var t=new Uint16Array(e);return this.createElementBufferWithTypedArray(t)}function u(e){var t=this.createBuffer();return this.bindBuffer(this.ELEMENT_ARRAY_BUFFER,t),this.bufferData(this.ELEMENT_ARRAY_BUFFER,e,this.STATIC_DRAW),this.bindBuffer(this.ELEMENT_ARRAY_BUFFER,null),t}function s(e){return 0===(e&e-1)}function c(e){var t=arguments.length<=1||void 0===arguments[1]?!1:arguments[1];this.pixelStorei(this.UNPACK_FLIP_Y_WEBGL,!0);var n=this.createTexture();return this.bindTexture(this.TEXTURE_2D,n),this.texImage2D(this.TEXTURE_2D,0,this.RGBA,this.RGBA,this.UNSIGNED_BYTE,e),s(e.width)&&s(e.height)?(this.generateMipmap(this.TEXTURE_2D),t&&(this.texParameteri(this.TEXTURE_2D,this.TEXTURE_WRAP_S,this.REPEAT),this.texParameteri(this.TEXTURE_2D,this.TEXTURE_WRAP_T,this.REPEAT))):(this.texParameteri(this.TEXTURE_2D,this.TEXTURE_WRAP_S,this.CLAMP_TO_EDGE),this.texParameteri(this.TEXTURE_2D,this.TEXTURE_WRAP_T,this.CLAMP_TO_EDGE),this.texParameteri(this.TEXTURE_2D,this.TEXTURE_MIN_FILTER,this.LINEAR),this.texParameteri(this.TEXTURE_2D,this.TEXTURE_MAG_FILTER,this.LINEAR)),this.bindTexture(this.TEXTURE_2D,null),n}function l(e){var t=this.createTexture(),n=this.getExtension("OES_texture_float");if(!n)throw new Error("不支持浮点数纹理");return this.bindTexture(this.TEXTURE_2D,t),this.texImage2D(this.TEXTURE_2D,0,this.RGBA,e.length/4,1,0,this.RGBA,this.FLOAT,e),this.texParameteri(this.TEXTURE_2D,this.TEXTURE_MIN_FILTER,this.NEAREST),this.texParameteri(this.TEXTURE_2D,this.TEXTURE_MAG_FILTER,this.NEAREST),this.bindTexture(this.TEXTURE_2D,null),t}function f(e,t){var n=new Image;n.onload=function(){t&&t(n)},n.src=e}Object.defineProperty(t,"__esModule",{value:!0}),t.makeProgram=n,t.createArrayBufferWithData=r,t.createArrayBufferWithDataAndType=i,t.createArrayBufferWithTypedArray=a,t.createElementBufferWithData=o,t.createElementBufferWithTypedArray=u,t.isPowerOf2=s,t.createTextureWithData=c,t.createTexture1D=l,t.createImageByURL=f},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=["l","i","j","i","n","l","e","i"],a=["l","o","c","a","l","h","o","s","t"];t.Security=function(){function e(){n(this,e)}return r(e,null,[{key:"validDomain",value:function(){var e=i.join(""),t=a.join(""),n=window.location.hostname.split("."),r=n[0];return 3===n.length&&(r=n[1]),r===decodeURI(e)||r===decodeURI(t)}}]),e}()},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.commonVS="\nattribute vec3 vertexPosition;\n\nuniform mat4 mvMatrix;\nuniform mat4 pMatrix;\n\nvoid main(void) {\n  gl_Position = pMatrix * mvMatrix * vec4(vertexPosition, 1.0);\n}\n",t.commonFS="\n#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n\nuniform vec4 color;\n\nvoid main(void) {\n  gl_FragColor = color;\n}\n"},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.GoraudDefine="\nattribute vec3 vertexNormal;\n\nuniform mat4 normalMatrix; \nuniform vec3 lightDirection; \nuniform vec4 lightDiffuse; \nuniform vec4 materialDiffuse; \n\nvarying vec4 finalColor;\n ",t.GoraudCalculator="\nvec3 N = normalize(vec3(normalMatrix * vec4(vertexNormal, 1.0)));\nvec3 L = normalize(lightDirection);\nfloat lambertTerm = dot(N,-L);\nfinalColor = materialDiffuse * lightDiffuse * lambertTerm;\nfinalColor.a = 1.0;\n",t.phongModel="\n\n\n"},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.GLBezier=function(){function e(){n(this,e)}return r(e,[{key:"generateCoords",value:function(t){var n=arguments.length<=1||void 0===arguments[1]?0:arguments[1],r=arguments.length<=2||void 0===arguments[2]?.5:arguments[2],i=t[0],a=t[t.length-1];0===n&&(n=e.getDistance(i,a));var o=Math.floor(n*r);if(1>=o){var u=i[0]-a[0],s=i[1]-a[1];return[{coords:a,slope:Math.atan2(s,u),distance:Math.sqrt(u*u+s*s)}]}this.stepLength=1/o;for(var c=[],l=this.calculateControlEdge(t),f=t[0],h=0;o>h;h++){var d=this.calculateReferenceLine(t,l,h+1),v=d[1][0]-d[0][0],y=d[1][1]-d[0][1],p=d[0][0]+v*((h+1)*this.stepLength),g=d[0][1]+y*((h+1)*this.stepLength),m=p-f[0],b=g-f[1];f=[p,g],c.push({coords:[p,g],slope:Math.atan2(b,m),distance:Math.sqrt(m*m+b*b)})}return c}},{key:"calculateReferenceLine",value:function(e,t,n){for(var r=[],i=0;i<e.length-1;i++){var a=e[i][0]+t[i].deltaX*n,o=e[i][1]+t[i].deltaY*n;r.push([a,o])}if(2===r.length)return r;var u=this.calculateControlEdge(r);return this.calculateReferenceLine(r,u,n)}},{key:"calculateControlEdge",value:function(e){for(var t=[],n=1;n<e.length;n++){var r=e[n][0]-e[n-1][0],i=e[n][1]-e[n-1][1],a=this.edge();a.length=Math.sqrt(r*r+i*i),a.angleSin=i/a.length,a.angleCos=r/a.length,a.calculateDelta(this.stepLength),t.push(a)}return t}},{key:"edge",value:function(){return{length:0,angleCos:0,angleSin:0,deltaX:0,deltaY:0,calculateDelta:function(e){this.deltaX=e*this.length*this.angleCos,this.deltaY=e*this.length*this.angleSin}}}}],[{key:"getDistance",value:function(e,t){var n=t[0]-e[0],r=t[1]-e[1];return Math.sqrt(n*n+r*r)}}]),e}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.Matrix4=function(){function e(){return n(this,e),e.identity()}return r(e,null,[{key:"identity",value:function(){return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}},{key:"copy",value:function(t){var n=e.identity();return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}},{key:"perspective",value:function(t,n,r,i){var a=1/Math.tan(t/2),o=1/(r-i),u=e.identity();return u[0]=a/n,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=a,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=(i+r)*o,u[11]=-1,u[12]=0,u[13]=0,u[14]=2*i*r*o,u[15]=0,u}},{key:"orthogonal",value:function(t,n,r,i,a,o){var u=1/(t-n),s=1/(r-i),c=1/(a-o),l=e.identity();return l[0]=-2*u,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=-2*s,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=2*c,l[11]=0,l[12]=(t+n)*u,l[13]=(i+r)*s,l[14]=(o+a)*c,l[15]=1,l}},{key:"scale",value:function(e,t){var n=t[0],r=t[1],i=t[2];e[0]*=n,e[1]*=n,e[2]*=n,e[3]*=n,e[4]*=r,e[5]*=r,e[6]*=r,e[7]*=r,e[8]*=i,e[9]*=i,e[10]*=i,e[11]*=i}},{key:"translate",value:function(e,t){var n=t[0],r=t[1],i=t[2];return e[12]+=e[0]*n+e[4]*r+e[8]*i,e[13]+=e[1]*n+e[5]*r+e[9]*i,e[14]+=e[2]*n+e[6]*r+e[10]*i,e[15]+=e[3]*n+e[7]*r+e[11]*i,e}},{key:"inverse",value:function(t){var n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],u=t[5],s=t[6],c=t[7],l=t[8],f=t[9],h=t[10],d=t[11],v=t[12],y=t[13],p=t[14],g=t[15],m=n*u-r*o,b=n*s-i*o,E=n*c-a*o,x=r*s-i*u,T=r*c-a*u,_=i*c-a*s,P=l*y-f*v,R=l*p-h*v,A=l*g-d*v,w=f*p-h*y,M=f*g-d*y,k=h*g-d*p,O=m*k-b*M+E*w+x*A-T*R+_*P;if(!O)return null;O=1/O;var j=e.identity();return j[0]=(u*k-s*M+c*w)*O,j[1]=(i*M-r*k-a*w)*O,j[2]=(y*_-p*T+g*x)*O,j[3]=(h*T-f*_-d*x)*O,j[4]=(s*A-o*k-c*R)*O,j[5]=(n*k-i*A+a*R)*O,j[6]=(p*E-v*_-g*b)*O,j[7]=(l*_-h*E+d*b)*O,j[8]=(o*M-u*A+c*P)*O,j[9]=(r*A-n*M-a*P)*O,j[10]=(v*T-y*E+g*m)*O,j[11]=(f*E-l*T-d*m)*O,j[12]=(u*R-o*w-s*P)*O,j[13]=(n*w-r*R+i*P)*O,j[14]=(y*b-v*x-p*m)*O,j[15]=(l*x-f*b+h*m)*O,j}},{key:"rotate",value:function(e,t,n,r){var i,a,o,u,s,c,l,f,h,d,v,y,p,g,m,b,E,x,T,_,P,R,A,w,M=r[0],k=r[1],O=r[2],j=Math.sqrt(M*M+k*k+O*O);return j=1/j,M*=j,k*=j,O*=j,i=Math.sin(n),a=Math.cos(n),o=1-a,u=t[0],s=t[1],c=t[2],l=t[3],f=t[4],h=t[5],d=t[6],v=t[7],y=t[8],p=t[9],g=t[10],m=t[11],b=M*M*o+a,E=k*M*o+O*i,x=O*M*o-k*i,T=M*k*o-O*i,_=k*k*o+a,P=O*k*o+M*i,R=M*O*o+k*i,A=k*O*o-M*i,w=O*O*o+a,e[0]=u*b+f*E+y*x,e[1]=s*b+h*E+p*x,e[2]=c*b+d*E+g*x,e[3]=l*b+v*E+m*x,e[4]=u*T+f*_+y*P,e[5]=s*T+h*_+p*P,e[6]=c*T+d*_+g*P,e[7]=l*T+v*_+m*P,e[8]=u*R+f*A+y*w,e[9]=s*R+h*A+p*w,e[10]=c*R+d*A+g*w,e[11]=l*R+v*A+m*w,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e}},{key:"multiplyMatrices",value:function(t,n){var r=e.identity(),i=t[0],a=t[4],o=t[8],u=t[12],s=t[1],c=t[5],l=t[9],f=t[13],h=t[2],d=t[6],v=t[10],y=t[14],p=t[3],g=t[7],m=t[11],b=t[15],E=n[0],x=n[4],T=n[8],_=n[12],P=n[1],R=n[5],A=n[9],w=n[13],M=n[2],k=n[6],O=n[10],j=n[14],B=n[3],D=n[7],U=n[11],L=n[15];return r[0]=i*E+a*P+o*M+u*B,r[4]=i*x+a*R+o*k+u*D,r[8]=i*T+a*A+o*O+u*U,r[12]=i*_+a*w+o*j+u*L,r[1]=s*E+c*P+l*M+f*B,r[5]=s*x+c*R+l*k+f*D,r[9]=s*T+c*A+l*O+f*U,r[13]=s*_+c*w+l*j+f*L,r[2]=h*E+d*P+v*M+y*B,r[6]=h*x+d*R+v*k+y*D,r[10]=h*T+d*A+v*O+y*U,r[14]=h*_+d*w+v*j+y*L,r[3]=p*E+g*P+m*M+b*B,r[7]=p*x+g*R+m*k+b*D,r[11]=p*T+g*A+m*O+b*U,r[15]=p*_+g*w+m*j+b*L,r}}]),e}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.Matrix2d=function(){function e(){return n(this,e),e.identity()}return r(e,null,[{key:"identity",value:function(){return new Float32Array([1,0,0,1,0,0])}},{key:"copy",value:function(t){var n=e.identity();return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n}},{key:"scale",value:function(e,t){var n=t[0],r=t[1];e[0]*=n,e[1]*=n,e[2]*=r,e[3]*=r}},{key:"translate",value:function(e,t){var n=t[0],r=t[1];e[4]+=e[0]*n+e[2]*r,e[5]+=e[1]*n+e[3]*r}},{key:"rotate",value:function(e,t){var n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],u=e[5],s=Math.sin(t),c=Math.cos(t);return e[0]=n*c+i*s,e[1]=r*c+a*s,e[2]=n*-s+i*c,e[3]=r*-s+a*c,e[4]=o,e[5]=u,e}}]),e}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.Vector2=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?0:arguments[0],r=arguments.length<=1||void 0===arguments[1]?0:arguments[1];n(this,e),this.x=t,this.y=r}return r(e,[{key:"getArray",value:function(){return[this.x,this.y]}},{key:"transformByMat2d",value:function(e){var t=this.x,n=this.y;return this.x=e[0]*t+e[2]*n+e[4],this.y=e[1]*t+e[3]*n+e[5],this}},{key:"applyMatrix4",value:function(e){var t=this.x,n=this.y,r=0,i=1;this.x=e[0]*t+e[4]*n+e[8]*r+e[12]*i,this.y=e[1]*t+e[5]*n+e[9]*r+e[13]*i;var a=e[3]*t+e[7]*n+e[11]*r+e[15]*i;return this.x=this.x/a,this.y=this.y/a,this}},{key:"dotProduct",value:function(e){return this.x*e.x+this.y*e.y,this}},{key:"scale",value:function(e){return this.x*=e,this.y*=e,this}},{key:"add",value:function(e){return this.x+=e.x,this.y+=e.y,this}},{key:"swapToModelPosition",value:function(){var e=arguments.length<=0||void 0===arguments[0]?1:arguments[0],t=arguments.length<=1||void 0===arguments[1]?0:arguments[1],n=arguments.length<=2||void 0===arguments[2]?0:arguments[2];return this.x=this.x*e-t,this.y=n-this.y*e,this}},{key:"isEqualTo",value:function(e){return e.x===this.x&&e.y===this.y}}],[{key:"generateVector",value:function(t,n){return new e(n[0]-t[0],n[1]-t[1])}},{key:"zeroVector",value:function(){return new e}},{key:"copy",value:function(t){return new e(t.x,t.y)}},{key:"sub",value:function(t,n){return new e(n.x-t.x,n.y-t.y)}}]),e}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.Vector3=function(){function e(){n(this,e)}return r(e,null,[{key:"applyMatrix4",value:function(e,t){var n=e[0],r=e[1],i=e[2],a=1;e[0]=t[0]*n+t[4]*r+t[8]*i+t[12]*a,e[1]=t[1]*n+t[5]*r+t[9]*i+t[13]*a,e[2]=t[2]*n+t[6]*r+t[10]*i+t[14]*a;var o=t[3]*n+t[7]*r+t[11]*i+t[15]*a;return e[0]=e[0]/o,e[1]=e[1]/o,e[2]=e[2]/o,e}}]),e}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.Vector4=function(){function e(){n(this,e)}return r(e,null,[{key:"applyMatrix4",value:function(e,t){var n=e[0],r=e[1],i=e[2],a=e[3];return e[0]=t[0]*n+t[4]*r+t[8]*i+t[12]*a,e[1]=t[1]*n+t[5]*r+t[9]*i+t[13]*a,e[2]=t[2]*n+t[6]*r+t[10]*i+t[14]*a,e[3]=t[3]*n+t[7]*r+t[11]*i+t[15]*a,e}}]),e}()},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.random="\n\n"},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.IAnimation=function(){function e(){n(this,e),this.animationHandler=null,this.isAnimating=!1}return r(e,[{key:"startAnimating",value:function(){var e=this;this.isAnimating=!0,this.frameIndex=0,this.animationHandler=requestAnimationFrame(function(){e.enterFrame()})}},{key:"stopAnimating",value:function(){cancelAnimationFrame(this.animationHandler),this.isAnimating=!1}},{key:"enterFrame",value:function(){var e=this;this.frameIndex++,this.animationHandler=requestAnimationFrame(function(){e.enterFrame()})}},{key:"destory",value:function(){this.stopAnimating()}}]),e}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.TouchManager=function(){function e(){n(this,e)}return r(e,null,[{key:"touchStartEventName",value:function(){return void 0===document.ontouchstart?"mousedown":"touchstart"}},{key:"touchMoveEventName",value:function(){return void 0===document.ontouchmove?"mousemove":"touchmove"}},{key:"touchEndEventName",value:function(){return void 0===document.ontouchend?"mouseup":"touchend"}},{key:"addTapListener",value:function(t,n){t.addEventListener(e.touchEndEventName(),n,!1)}},{key:"removeTapListener",value:function(t,n){t.removeEventListener(e.touchEndEventName(),n,!1)}},{key:"addTouchListener",value:function(t,n,r){var i=arguments.length<=3||void 0===arguments[3]?null:arguments[3];t.addEventListener(e.touchStartEventName(),function(i){n(i),t.addEventListener(e.touchMoveEventName(),r,!1)},!1),t.addEventListener(e.touchEndEventName(),function(n){i&&i(n),t.removeEventListener(e.touchMoveEventName(),r,!1)},!1)}},{key:"removeTouchListener",value:function(t,n,r){var i=arguments.length<=3||void 0===arguments[3]?null:arguments[3];t.removeEventListener(e.touchStartEventName(),n,!1),t.removeEventListener(e.touchMoveEventName(),r,!1),i&&t.removeEventListener(e.touchEndEventName(),i,!1)}}]),e}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.PlaneGeometry=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(16);t.PlaneGeometry=function(e){function t(){var e=arguments.length<=0||void 0===arguments[0]?1:arguments[0],n=arguments.length<=1||void 0===arguments[1]?1:arguments[1],a=arguments.length<=2||void 0===arguments[2]?1:arguments[2],o=arguments.length<=3||void 0===arguments[3]?1:arguments[3];r(this,t);var u=i(this,Object.getPrototypeOf(t).call(this)),s=e,c=n;return u.widthHalf=s/2,u.heightHalf=c/2,u.gridX=a,u.gridY=o,u.segmentWidth=s/u.gridX,u.segmentHeight=c/u.gridY,u.generateVetices(),u}return a(t,e),o(t,[{key:"generateVetices",value:function(){var e=this.gridX+1,t=this.gridY+1;this.vertices=new Float32Array(e*t*3),this.textureCoords=new Float32Array(e*t*2),this.normals=new Float32Array(e*t*3);for(var n=0,r=0,i=0;t>i;i++)for(var a=i*this.segmentHeight-this.heightHalf,o=0;e>o;o++){var u=o*this.segmentWidth-this.widthHalf;this.vertices[n]=u,this.vertices[n+1]=-a,this.vertices[n+2]=0,this.textureCoords[r]=o/this.gridX,this.textureCoords[r+1]=1-i/this.gridY,n+=3,r+=2}n=0,this.indices=new(this.vertices.length/3>65535?Uint32Array:Uint16Array)(this.gridX*this.gridY*6);for(var s=0;s<this.gridY;s++)for(var c=0;c<this.gridX;c++){var l=c+e*s,f=c+e*(s+1),h=c+1+e*(s+1),d=c+1+e*s;this.indices[n]=l,this.indices[n+1]=f,this.indices[n+2]=d,this.indices[n+3]=f,this.indices[n+4]=h,this.indices[n+5]=d,n+=6}}}]),t}(u.Geometry)},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Geometry=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(17);t.Geometry=function(e){function t(){r(this,t);var e=i(this,Object.getPrototypeOf(t).call(this));return e.vertices=[],e.colors=[],e.indices=[],e.textureCoords=[],e.vetexBuffer=null,e.indexBuffer=null,e.textureBuffer=null,e.faces=[],e.faceVertexUvs=[[]],e.skinWeights=[],e.skinIndices=[],e.lineDistances=[],e.boundingBox=null,e.boundingSphere=null,e.hasTangents=!1,e.dynamic=!0,e.verticesNeedUpdate=!1,e.elementsNeedUpdate=!1,e.uvsNeedUpdate=!1,e.normalsNeedUpdate=!1,e.tangentsNeedUpdate=!1,e.colorsNeedUpdate=!1,e.lineDistancesNeedUpdate=!1,e.groupsNeedUpdate=!1,e}return a(t,e),o(t,[{key:"createBuffers",value:function(e){this.vetexBuffer=e.createArrayBufferWithData(this.vertices),this.indexBuffer=e.createElementBufferWithData(this.indices),this.textureBuffer=e.createArrayBufferWithData(this.textureCoords)}},{key:"bindBuffers",value:function(e,t,n){e.enableVertexAttribArray(t[n[0]]),e.bindBuffer(e.ARRAY_BUFFER,this.vetexBuffer),e.vertexAttribPointer(t[n[0]],3,e.FLOAT,!1,0,0),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this.indexBuffer),e.enableVertexAttribArray(t[n[1]]),e.bindBuffer(e.ARRAY_BUFFER,this.textureBuffer),e.vertexAttribPointer(t[n[1]],2,e.FLOAT,!1,0,0)}},{key:"calculateNormals",value:function(e,t){for(var n=0,r=1,i=2,a=[],o=0;o<e.length;o++)a[o]=0;for(var o=0;o<t.length;o+=3){var u=[],s=[],c=[];u[n]=e[3*t[o+1]+n]-e[3*t[o]+n],u[r]=e[3*t[o+1]+r]-e[3*t[o]+r],u[i]=e[3*t[o+1]+i]-e[3*t[o]+i],s[n]=e[3*t[o+2]+n]-e[3*t[o+1]+n],s[r]=e[3*t[o+2]+r]-e[3*t[o+1]+r],s[i]=e[3*t[o+2]+i]-e[3*t[o+1]+i],c[n]=u[r]*s[i]-u[i]*s[r],c[r]=u[i]*s[n]-u[n]*s[i],c[i]=u[n]*s[r]-u[r]*s[n];for(var l=0;3>l;l++)a[3*t[o+l]+n]=a[3*t[o+l]+n]+c[n],a[3*t[o+l]+r]=a[3*t[o+l]+r]+c[r],a[3*t[o+l]+i]=a[3*t[o+l]+i]+c[i]}for(var o=0;o<e.length;o+=3){var f=[];f[n]=a[o+n],f[r]=a[o+r],f[i]=a[o+i];var h=Math.sqrt(f[n]*f[n]+f[r]*f[r]+f[i]*f[i]);0==h&&(h=1e-5),f[n]=f[n]/h,f[r]=f[r]/h,f[i]=f[i]/h,a[o+n]=f[n],a[o+r]=f[r],a[o+i]=f[i]}return a}}]),t}(u.Object3D)},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.Object3D=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(7);n(10),t.Object3D=function(){function e(){r(this,e),this.renderer=null,this.matrix=a.Matrix4.identity(),this.needsUpdatePosition=!1,this.needsUpdateScale=!1,this.needsUpdateRotation=!1}return i(e,[{key:"setSceneParams",value:function(){var e=arguments.length<=0||void 0===arguments[0]?0:arguments[0],t=arguments.length<=1||void 0===arguments[1]?0:arguments[1],n=arguments.length<=2||void 0===arguments[2]?0:arguments[2];this.matrix=a.Matrix4.identity(),this.distanceX=e*this.devicePixelRatio-this.renderer.centerX,this.distanceY=this.renderer.centerY-t*this.devicePixelRatio,a.Matrix4.translate(this.matrix,[this.distanceX,this.distanceY,0]),this.ruler.x+=n,this.ruler.y+=n,a.Matrix4.ruler(this.matrix,[this.ruler.x,this.ruler.y,1])}},{key:"configAnimationTarget",value:function(e){this.speed=.1;var t=e.position;t&&(this.needsUpdatePosition=!0,this.targetPosition=t.swapToModelPosition(this.devicePixelRatio,this.sceneWidthHalf,this.sceneHeightHalf));var n=e.ruler;n&&(this.needsUpdateScale=!0,this.targetScale=n);var r=e.rotation;r&&(this.needsUpdateRotation=!0,this.targetRotation=r)}},{key:"stepAnimating",value:function(){this.matrix=a.Matrix4.identity(),this.needsUpdatePosition&&(this.position.x+=(this.targetPosition.x-this.position.x)*this.speed,this.position.y+=(this.targetPosition.y-this.position.y)*this.speed,a.Matrix4.translate(this.matrix,[this.position.x,this.position.y,0])),this.needsUpdateScale&&(this.ruler.x+=(this.targetScale.x-this.ruler.x)*this.speed,this.ruler.y+=(this.targetScale.y-this.ruler.y)*this.speed,a.Matrix4.ruler(this.matrix,[this.ruler.x,this.ruler.y,1]))}},{key:"devicePixelRatio",get:function(){return void 0===this._devicePixelRatio&&(this._devicePixelRatio=window.devicePixelRatio),this._devicePixelRatio},set:function(e){this._devicePixelRatio=e}},{key:"position",get:function(){return this._position},set:function(e){this._position=e}},{key:"scale",get:function(){return this._scale},set:function(e){this._scale=e}}]),e}()}])});