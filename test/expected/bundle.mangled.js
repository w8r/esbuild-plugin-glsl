var o=`#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
varying vec3 f;
varying vec3 g;
varying vec3 h;
uniform vec4 u_color;
uniform float u_shininess;
void main() {
vec3 v = normalize(f);
vec3 w = normalize(g);
float x = dot(v, w);
gl_FragColor = u_color;
gl_FragColor.rgb *= x;
#ifdef GL_FRAGMENT_PRECISION_HIGH
vec3 ae = normalize(h);
vec3 af = normalize(w + ae);
float ag = 0.0;
if (x > 0.0) {
ag = pow(dot(v, af), u_shininess);
}
gl_FragColor.rgb += ag;
#endif
}
`;console.log(o);
