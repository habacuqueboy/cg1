const Triangulo = (gl) => ({
    vertices: [
	    0.0, 1.0, 0.0,
	    1.0,-1.0, 0.0,
       -1.0,-1.0, 0.0,
      ],
    itemSize: 3,
    numItems: 3,
    tipo: gl.TRIANGLES,
})

export default Triangulo
