//tipo documento
class tipo_documento{
  constructor(nombre, descripcion){
  this._nombre = nombre;
  this._descripcion = descripcion;
  }
  
  get nombre(){
    return this._nombre;
  }
  
  set nombre(nombre){
    this._nombre = nombre;
  }
  
  get descripcion(){
    return this._descripcion;
  }
  
  set descripcion(descripcion){
    this._descripcion = descripcion;
  }
}


//Persona
class Persona{
  constructor(nombre, apellido, documento, tipo_documento, usuario, clave, rol){
  this._nombre = nombre;
  this._apellido = apellido;
  this._documento = documento;
  this._tipo_documento = tipo_documento;
  this._usuario = usuario;
  this._clave = clave;
  this._rol = rol;
  }
  
  get nombre(){
    return this._nombre;
  }
  
  set nombre(nombre){
    this._nombre = nombre;
  }
  
  get apellido(){
    return this._apellido;
  }
  
  set apellido(apellido){
    this._apellido = apellido;
  }
  
  get documento(){
    return this._documento;
  }
  
  set documento(documento){
    this._documento = documento;
  }
  
  get tipo_documento(){
    return this._tipo_documento;
  }
  
  set tipo_documento(tipo_documento){
    this._tipo_documento = tipo_documento;
  }
  
  get usuario(){
    return this._usuario;
  }
  
  set usuario(usuario){
    this._usuario = usuario;
  }
  
  get clave(){
    return this._clave;
  }
  
  set clave(clave){
    this._clave = clave;
  }
  
  get rol(){
    return this._rol;
  }
  
  set rol(rol){
    this._rol = rol;
  }
  
}

//Rol
class rol{
  constructor(nombre, descripcion){
  this._nombre = nombre;
  this._descripcion = descripcion;
  }
  
  get nombre(){
    return this._nombre;
  }
  
  set nombre(nombre){
    this._nombre = nombre;
  }
  
  get descripcion(){
    return this._descripcion;
  }
  
  set descripcion(descripcion){
    this._descripcion = descripcion;
  }
}

//Marca
class marca{
  constructor(nombre, descripcion){
  this._nombre = nombre;
  this._descripcion = descripcion;
  }
  
  get nombre(){
    return this._nombre;
  }
  
  set nombre(nombre){
    this._nombre = nombre;
  }
  
  get descripcion(){
    return this._descripcion;
  }
  
  set descripcion(descripcion){
    this._descripcion = descripcion;
  }
}

//Producto
class producto{
  constructor(id_producto,marca,referencia,nombre, descripcion, venta, imagen){
  this._marca = marca;
  this._referencia = referencia;
  this._nombre = nombre;
  this._descripcion = descripcion;
  this._venta = venta;
  this._imagen = imagen;
}
  
  get marca(){
    return this._marca;
  }
  
  set marca(marca){
    this._marca = marca;
  }
  
  get referncia(){
    return this._referencia;
  }
  
  set referncia(referncia){
    this._referncia = referncia;
  }
  
  get nombre(){
    return this._nombre;
  }
  
  set nombre(nombre){
    this._nombre = nombre;
  }
  
  get descripcion(){
    return this._descripcion;
  }
  
  set descripcion(descripcion){
    this._descripcion = descripcion;
  }
  
  get venta(){
    return this._venta;
  }
  
  set venta(venta){
    this._venta = venta;
  }
  
  get imagen(){
    return this._imagen;
  }
  
  set imagen(imagen){
    this._imagen = imagen;
  }
}

//catalogo
class catalogo{
  constructor(nombre, descripcion){
  this._nombre = nombre;
  this._descripcion = descripcion;
  }
  
  get nombre(){
    return this._nombre;
  }
  
  set nombre(nombre){
    this._nombre = nombre;
  }
  
  get descripcion(){
    return this._descripcion;
  }
  
  set descripcion(descripcion){
    this._descripcion = descripcion;
  }
}

//catalogo_x_producto
class catalogo_x_producto{
  constructor(catalogo, producto){
  this._catalogo = catalogo;
  this._producto = producto;
}
  
  get catalogo(){
    return this._catalogo;
  }
  
  set catalogo(catalogo){
    this._catalogo = catalogo;
  }
  
  get producto(){
    return this._producto;
  }
  
  set producto(producto){
    this._producto = producto;
  }
}

//inventario
class inventario{
  constructor(inventario, producto, disponible, compromiso){
  this._producto = producto;
  this._disponible = disponible;
  this._compromiso = compromiso;
}
  
  get producto(){
    return this._producto;
  }
  
  set producto(producto){
    this._producto = producto;
  }
  
  get disponible(){
    return this._disponible;
  }
  
  set disponible(disponible){
    this._disponible = disponible;
  }
  
  get compromiso(){
    return this._compromiso;
  }
  
  set compromiso(compromiso){
    this._compromiso = compromiso;
  }
}

//movimiento inventario
class movimiento_inventario{
  constructor(inventario, producto, cantidad, descripcion){
    this._inventario = inventario;
    this._producto = producto;
    this._cantidad = cantidad;
    this._descripcion = descripcion;
  }
  
  get inventario(){
    return this._inventario;
  }
  
  set inventario(inventario){
    this._inventario = inventario;
  }
  
  get producto(){
    return this._producto;
  }
  
  set producto(producto){
    this._producto = producto;
  }
  
  get cantidad(){
    return this._cantidad;
  }
  
  set cantidad(cantidad){
    this._cantidad = cantidad;
  }
  
  get descripcion(){
    return this._descripcion;
  }
  
  set descripcion(descripcion){
    this._descripcion = descripcion;
  }
}

//estado Pedido
class estado_pedido{
  constructor(nombre, descripcion){
  this._nombre = nombre;
  this._descripcion = descripcion;
  }
  
  get nombre(){
    return this._nombre;
  }
  
  set nombre(nombre){
    this._nombre = nombre;
  }
  
  get descripcion(){
    return this._descripcion;
  }
  
  set descripcion(descripcion){
    this._descripcion = descripcion;
  }
}

//Pedido
class pedido{
  constructor(persona, estado_pedido, total, fecha_pedido, pagado){
    this._estado_pedido = estado_pedido;
    this.total = total;
    this.fecha_pedido = fecha_pedido;
    this.pagado = pagado;
  }
  
  get estado_pedido(){
    return this._estado_pedido;
  }
  
  set estado_pedido(estado_pedido){
    this._estado_pedido = estado_pedido;
  }
  
  get total(){
    return this._total;
  }
  
  set total(total){
    this._total = total;
  }
  
  get fecha_pedido(){
    return this._fecha_pedido;
  }
  
  set fecha_pedido(fecha_pedido){
    this._fecha_pedido = fecha_pedido;
  }
  
  get pagado(){
    return this._pagado;
  }
  
  set pagado(pagado){
    this._pagado = pagado;
  }
}

//Pedido
class detalle_pedido{
  constructor(pedido, producto, cantidad, sub_total){
    this._pedido = id_pedido;
    this._producto = producto;
    this._cantidad = cantidad;
    this._subtotal = subtotal;
  }
  
  get pedido(){
    return this._pedido;
  }
  
  set pedido(pedido){
    this._pedido = pedido;
  }
  
  get producto(){
    return this._producto;
  }
  
  set producto(producto){
    this._producto = producto;
  }
  
  get cantidad(){
    return this._cantidad;
  }
  
  set cantidad(cantidad){
    this._cantidad = cantidad;
  }
  
  get subtotal(){
    return this._subtotal;
  }
  
  set subtotal(subtotal){
    this._subtotal = subtotal;
  }
}
