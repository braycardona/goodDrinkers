//tipo documento
function tipo_documento(nombre, descripcion){
  this.nombre = nombre;
  this.descripcion = descripcion;
}

tipo_documento.prototype.toString = function (){
  return this.nombre + (' ') + this.descripcion;
}

tipo_documento.prototype.setNombre = function (nombre){
   this.nombre = nombre;
}

tipo_documento.prototype.getNombre = function (){
  return this.nombre;
}

tipo_documento.prototype.setDescripcion = function (descripcion){
   this.descripcion = descripcion;
}

tipo_documento.prototype.getDescripcion = function (){
  return this.descripcion;
}

//
function Persona(nombre, apellido, documento, tipo_documento, usuario, clave, id_rol){
  this.nombre = nombre;
  this.apellido = apellido;
  this.documento = documento;
  this.tipo_documento = tipo_documento;
  this.usuario = usuario;
  this.clave = clave;
  this.id_rol = id_rol;
}

Persona.prototype.setNombre = function (nombre){
   this.nombre = nombre;
}

Persona.prototype.getNombre = function (){
  return this.nombre;
}

Persona.prototype.setApellido = function (apellido){
   this.apellido = apellido;
}

Persona.prototype.getApellido = function (){
  return this.apellido;
}

Persona.prototype.setDocumento = function (documento){
   this.documento = documento;
}

Persona.prototype.getDocumento = function (){
  return this.documento;
}

Persona.prototype.setTipo_documento = function (tipo_documento){
   this.tipo_documento = tipo_documento;
}

Persona.prototype.getTipo_documento = function (){
  return this.tipo_documento;
}

Persona.prototype.setUsuario = function (usuario){
   this.usuario = usuario;
}

Persona.prototype.getUsuario = function (){
  return this.usuario;
}

Persona.prototype.setClave = function (clave){
   this.clave = clave;
}

Persona.prototype.getClave = function (){
  return this.clave;
}


Persona.prototype.setRol = function (rol){
   this.rol = rol;
}

Persona.prototype.getRol = function (){
  return this.rol;
}

//Rol
function rol(id_rol,nombre, descripcion){
  this.id_rol = id_rol;
  this.nombre = nombre;
  this.descripcion = descripcion;
}

rol.prototype.toString = function (){
  return this.nombre + (' ') + this.descripcion;
}

rol.prototype.setNombre = function (nombre){
   this.nombre = nombre;
}

rol.prototype.getNombre = function (){
  return this.nombre;
}

rol.prototype.setDescripcion = function (descripcion){
   this.descripcion = descripcion;
}

rol.prototype.getDescripcion = function (){
  return this.descripcion;
}

//Marca
function marca(id_marca,nombre, descripcion){
  this.id_marca = id_marca;
  this.nombre = nombre;
  this.descripcion = descripcion;
}

marca.prototype.toString = function (){
  return this.nombre + (' ') + this.descripcion;
}

marca.prototype.setNombre = function (nombre){
   this.nombre = nombre;
}

marca.prototype.getNombre = function (){
  return this.nombre;
}

marca.prototype.setDescripcion = function (descripcion){
   this.descripcion = descripcion;
}

marca.prototype.getDescripcion = function (){
  return this.descripcion;
}

//Producto
function producto(id_producto,marca,referencia,nombre, descripcion, venta, imagen){
  this.id_producto = id_producto;
  this.marca = marca;
  this.referencia = referencia;
  this.nombre = nombre;
  this.descripcion = descripcion;
  this.venta = venta;
  this.imagen = imagen;
}

producto.prototype.toString = function (){
  return this.nombre + (' ') + this.descripcion;
}

producto.prototype.setMarca = function (marca){
   this.marca = marca;
}

producto.prototype.getMarca = function (){
  return this.marca;
}

producto.prototype.setReferencia = function (referencia){
   this.referencia = referencia;
}

producto.prototype.getReferencia = function (){
  return this.referencia;
}

producto.prototype.setNombre = function (nombre){
   this.nombre = nombre;
}

producto.prototype.getNombre = function (){
  return this.nombre;
}

producto.prototype.setDescripcion = function (descripcion){
   this.descripcion = descripcion;
}

producto.prototype.getDescripcion = function (){
  return this.descripcion;
}

producto.prototype.setVenta = function (venta){
   this.venta = venta;
}

producto.prototype.getVenta = function (){
  return this.venta;
}

producto.prototype.setImagen = function (imagen){
   this.imagen = imagen;
}

producto.prototype.getImagen = function (){
  return this.imagen;
}

//catalogo
function catalogo(id_catalogo,nombre,descripcion){
  this.id_catalogo = id_catalogo;
  this.nombre = nombre;
  this.descripcion = descripcion;
}

catalogo.prototype.toString = function (){
  return this.nombre + (' ') + this.descripcion;
}

catalogo.prototype.setNombre = function (nombre){
   this.nombre = nombre;
}

catalogo.prototype.getNombre = function (){
  return this.nombre;
}

catalogo.prototype.setDescripcion = function (descripcion){
   this.descripcion = descripcion;
}

catalogo.prototype.getDescripcion = function (){
  return this.descripcion;
}

//catalogo_x_producto
function catalogo_x_producto(id_catalogo,id_producto){
  this.id_catalogo = id_catalogo;
  this.producto = producto;
}

catalogo_x_producto.prototype.setProducto = function (producto){
   this.producto = producto;
}

catalogo_x_producto.prototype.getProducto = function (){
  return this.producto;
}

catalogo_x_producto.prototype.setCatalogo = function (catalogo){
   this.catalogo = catalogo;
}

catalogo_x_producto.prototype.getCatalogo = function (){
  return this.catalogo;
}

//inventario
function inventario(id_inventario, producto, disponible, compromiso){
  this.id_inventario = id_inventario;
  this.producto = producto;
  this.disponible = disponible;
  this.compromiso = compromiso;
}

inventario.prototype.setProducto = function (producto){
   this.producto = producto;
}

inventario.prototype.getProducto = function (){
  return this.producto;
}

inventario.prototype.setDisponible = function (disponible){
   this.disponible = disponible;
}

inventario.prototype.getDisponible = function (){
  return this.disponible;
}

inventario.prototype.setCompromiso = function (compromiso){
   this.compromiso = compromiso;
}

inventario.prototype.getCompromiso = function (){
  return this.compromiso;
}

//movimiento inventario
function movimiento_inventario(id_movimiento,id_inventario, producto, cantidad, descripcion){
  this.movimiento = id_movimiento;
  this.inventario = id_inventario;
  this.producto = producto;
  this.cantidad = cantidad;
  this.descripcion = descripcion;
}

movimiento_inventario.prototype.setInventario = function (inventario){
   this.inventario = inventario;
}

movimiento_inventario.prototype.getInventario = function (){
  return this.inventario;
}

movimiento_inventario.prototype.setProducto = function (producto){
   this.producto = producto;
}

movimiento_inventario.prototype.getProducto = function (){
  return this.producto;
}

movimiento_inventario.prototype.setCantidad = function (cantidad){
   this.cantidad = cantidad;
}

movimiento_inventario.prototype.getCantidad = function (){
  return this.cantidad;
}

movimiento_inventario.prototype.setDescripcion = function (descripcion){
   this.descripcion = descripcion;
}

movimiento_inventario.prototype.getDescripcion = function (){
  return this.descripcion;
}

//estado Pedido
function estado_pedido(id_estado,nombre,descripcion){
  this.id_estado = id_estado;
  this.nombre = nombre;
  this.descripcion = descripcion;
}

estado_pedido.prototype.toString = function (){
  return this.nombre + (' ') + this.descripcion;
}

estado_pedido.prototype.setNombre = function (nombre){
   this.nombre = nombre;
}

estado_pedido.prototype.getNombre = function (){
  return this.nombre;
}

estado_pedido.prototype.setDescripcion = function (descripcion){
   this.descripcion = descripcion;
}

estado_pedido.prototype.getDescripcion = function (){
  return this.descripcion;
}

//Pedido
function pedido(id_pedido, id_persona, id_estado_pedido, total, fecha_pedido, pagado){
  this.id_pedido = id_pedido;
  this.id_persona = id_persona;
  this.id_estado_pedido = id_estado_pedido;
  this.total = total;
  this.fecha_pedido = fecha_pedido;
  this.pagado = pagado;
}

pedido.prototype.setPersona = function (persona){
   this.id_persona = persona;
}

pedido.prototype.getPersona = function (){
  return this.id_persona;
}

pedido.prototype.setEstado = function (estado){
   this.id_estado_pedido = estado;
}

pedido.prototype.getEstado = function (){
  return this.id_estado_pedido;
}

pedido.prototype.setTotal = function (total){
   this.total = total;
}

pedido.prototype.getTotal = function (){
  return this.total;
}

pedido.prototype.setFecha = function (fecha){
   this.fecha_pedido = fecha;
}

pedido.prototype.getFecha = function (){
  return this.fecha_pedido;
}

pedido.prototype.setPagado = function (pagado){
   this.pagado = pagado;
}

pedido.prototype.getPagado = function (){
  return this.pagado;
}

//Pedido
function detalle_pedido(id_detalle_pedido, id_pedido, id_producto, cantidad, sub_total){
  this.id_pedido = id_pedido;
  this.id_detalle_pedido = id_detalle_pedido;
  this.id_producto = id_producto;
  this.cantidad = cantidad;
  this.subtotal = subtotal;
}

detalle_pedido.prototype.setPedido = function (pedido){
   this.id_pedido = pedido;
}

detalle_pedido.prototype.getPedido = function (){
  return this.id_pedido;
}

detalle_pedido.prototype.setProducto = function (producto){
   this.id_producto = producto;
}

detalle_pedido.prototype.getProducto = function (){
  return this.id_producto;
}

detalle_pedido.prototype.setCantidad = function (cantidad){
   this.cantidad = cantidad;
}

detalle_pedido.prototype.getCantidad = function (){
  return this.cantidad;
}

detalle_pedido.prototype.setSubtotal = function (subtotal){
   this.subtotal = subtotal;
}

detalle_pedido.prototype.getSubtotal = function (){
  return this.subtotal;
}