#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
#else
  precision mediump float;
#endif

// Passed in from the vertex shader.
varying vec3 v_normal;
varying vec3 v_surfaceToLight;
varying vec3 v_surfaceToView;

uniform vec4 u_color;
uniform float u_shininess;

void main() {
  // because v_normal is a varying it's interpolated
  // so it will not be a unit vector. Normalizing it
  // will make it a unit vector again
  vec3 normal = normalize(v_normal);

  vec3 surfaceToLightDirection = normalize(v_surfaceToLight);
  float light = dot(normal, surfaceToLightDirection);

  gl_FragColor = u_color;

  // Lets multiply just the color portion (not the alpha)
  // by the light
  gl_FragColor.rgb *= light;

#ifdef GL_FRAGMENT_PRECISION_HIGH
  vec3 surfaceToViewDirection = normalize(v_surfaceToView);
  vec3 halfVector = normalize(surfaceToLightDirection + surfaceToViewDirection);

  float specular = 0.0;
  if (light > 0.0) {
    specular = pow(dot(normal, halfVector), u_shininess);
  }

  // Just add in the specular
  gl_FragColor.rgb += specular;
#endif
}
