
package controller;


public interface IArticuloController {
 public String consultar_articulo(String id);
 public String listar_articulos();
 public String registrar_articulo(String title, String description,String url, int stock, float price, String categoria,String typepet);
}
 