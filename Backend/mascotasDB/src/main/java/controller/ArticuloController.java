
package controller;

import java.sql.ResultSet;
import java.sql.Statement;
import java.util.List;
import com.google.gson.Gson;
import beans.Articulos;
import connection.DBConnection;
import java.util.ArrayList;


public class ArticuloController {
    
    Gson gson = new Gson();

    public String listar_articulos() {
        DBConnection con = new DBConnection();
        String sql = "SELECT * FROM articulos";
        List<String> item = new ArrayList<String>();
        try {
            Statement st = con.getConnection().createStatement();
            ResultSet rs = st.executeQuery(sql);

            while (rs.next()) {
                
                int id = rs.getInt("id");
                String idStr=String.valueOf(id);
                String titulo_completo=rs.getString("title");
                String descripcion_completa=rs.getString("description");
                String categoria_completa=rs.getString("categoria");
                String url = rs.getString("url");
                int stock = rs.getInt("stock");
                float price = rs.getFloat("price");
                String typePet = rs.getString("typePet");
                int status = rs.getInt("status");
                
                Articulos articulo = new Articulos(idStr,titulo_completo, descripcion_completa,url,stock,price,categoria_completa,typePet, status);
                item.add(gson.toJson(articulo));
                
            }
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        } finally {
            con.desconectar();
        }
         return gson.toJson(item);
    }
    
    //función registrar articulo
    
   /*  public String registrar_articulo(String title, String description,String url, int stock, float price, String categoria,String typepet) {

          int id=0;
          int loggin = 1;
        
        DBConnection con = new DBConnection();
        String sql = "insert into articulos values ('0','"+ username + "','" + email + "','" + password + "','" + name + "','" + lastname + "','"+loggin+"')";
        try {

            Statement st = con.getConnection().createStatement();
            st.executeUpdate(sql);

          

            Articulos articulo = new Articulos(id, username, email, password, name, lastname, loggin);
            st.close();

            return gson.toJson(articulo);

        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        } finally {
            con.desconectar();
        }
        return "false";

    }*/
    
    
    //función para consultar articulo
    
        public String consultar_articulo(String id) {
        DBConnection con = new DBConnection();
        
      //  int id2=Integer.valueOf(id);
        
        String sql = "Select * from articulos where id = '" + id + "' and status='1'";
        try {
            Statement st = con.getConnection().createStatement();
            ResultSet rs = st.executeQuery(sql);

            while (rs.next()) {
                
                String titulo = rs.getString("title");
                String descripcion = rs.getString("description");
                String url = rs.getString("url");
                int cantidad = rs.getInt("stock");
                float precio = rs.getFloat("price");
                String categoria = rs.getString("categoria");
                String typePet = rs.getString("typePet");
                 int estado = 1;
                
                Articulos articulo = new Articulos(id,titulo,descripcion, url,cantidad, precio, categoria, typePet, estado);
                System.out.println("se han listado los datos del articulo");
                return gson.toJson(articulo);
            }
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        } finally {
            con.desconectar();
        }
        return "false";
    }
    
    
    
}
