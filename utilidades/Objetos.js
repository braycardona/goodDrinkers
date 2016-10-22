
// Tipos de documento
function tipo_documento(id_tipo_documento,nombre, descripcion){
  this.id_tipo_documento = id_tipo_documento;
  this.nombre = nombre;
  this.descripcion = descripcion;
}

//Usuarios del sistema
function Persona(id_persona, nombre, apellido, documento, tipo_documento, usuario, clave, id_rol){
  this.id_persona = id_persona;
  this.nombre = nombre;
  this.apellido = apellido;
  this.documento = documento;
  this.tipo_documento = tipo_documento;
  this.usuario = usuario;
  this.clave = clave;
  this.id_rol = id_rol;
}

//Roles del sistema
function rol(id_rol, nombre_rol, codigo_rol){
	this.id_rol = id_rol;
  this.nombre_rol = nombre_rol;
  this.codigo_rol = codigo_rol;
}

//tipo del sistema productos
function marca(id_marca, nombre, descripcion){
  this.id_marca = id_marca;
  this.nombre = nombre;
  this.descripcion = descripcion;
}

//Productos 
function producto(id_producto, marca, referencia, nombre, descripcion, venta, imagen){
  this.id_producto = id_producto;
  this.marca = marca;
  this.referencia = referencia;
	this.nombre = nombre;
  this.descripcion = descripcion;
  this.venta = venta;
  this.imagen = imagen;
}  

//catalogos o cartas del sistema
function catalogo(id_catalogo, nombre, descripcion){
  this.id_catalogo = id_catalogo;
  this.nombre = nombre;
  this.descripcion = descripcion;
}

//relacion de catalogos por productos
function catalogo_x_producto(id_catalogo, id_producto){
   this.id_catalogo = id_catalogo;
	 this.id_producto = id_producto;
}

//inventario del sistema por productos
function inventario(id_inventario, id_producto, disponible, compromiso){
  this.id_inventario = id_inventario;
  this.id_producto = id_producto;
  this.disponible = disponible;
  this.compromiso = compromiso;
}

//movimientos del inventario
function movimiento_inventario(id_movimiento, id_inventario,id_producto, cantidad, descripcion){
  this.id_movimiento = id_movimiento;
  this.id_inventario = id_inventario;
  this.id_producto = id_producto;
  this.cantidad = cantidad;
  this.descripcion = descripcion;
}

//estados del pedido
function estado_pedido(id_estado_pedido, nombre, descripcion){
  this.id_estado_pedido = id_estado_pedido;
  this.nombre = nombre;
  this.descripcion = descripcion;
}

//tabla de pedidos
function pedido(id_pedido, id_persona, id_estado_pedido, total, fecha_pedido, pagado){
  this.id_pedido = id_pedido;
	this.id_persona = id_persona;
  this.id_estado_pedido = id_estado_pedido;
  this.total = total;
  this.fecha_pedido = fecha_pedido;
  this.pagado = pagado;
}

//tabla de detalle de pedidos
function detalle_pedido(id_detalle_pedido, id_pedido, id_producto, cantidad, sub_total){
  this.id_detalle_pedido = id_detalle_pedido,
	this.id_pedido = id_pedido;
  this.id_producto = id_producto;
  this.cantidad = cantidad;
  this.sub_total = sub_total;
}
