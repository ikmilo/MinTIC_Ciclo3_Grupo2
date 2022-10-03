/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package test;

import beans.Articulos;
import connection.DBConnection;
import java.sql.ResultSet;
import java.sql.Statement;


public class OperacionesBD {
    
    public static void main(String[] args) {
       // listarPeliculas();
        actualizarArticulo(10, "Comedero para perro", "perro");
        
    }
    public static void actualizarArticulo(int id, String title, String categoria){
        DBConnection con = new DBConnection();
        String sql = "UPDATE articulos SET title = '"+title+"', categoria = '"+categoria+"' WHERE id = "+id;
        
        try {
            Statement st = con.getConnection().createStatement();
            st.executeUpdate(sql);
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        }
        finally{
            con.desconectar();
        }
    }
    
    public static void listarPeliculas(){
        DBConnection con = new DBConnection();
        String sql = "SELECT * FROM peliculas";
        
         try {
            Statement st = con.getConnection().createStatement();
            ResultSet rs = st.executeQuery(sql);
            while(rs.next()){
                int id = rs.getInt("id");
                int stock = rs.getInt("stock");
                String title = rs.getString("title");
                String description = rs.getString("description");
                String url = rs.getString("url");
                String categoria = rs.getString("categoia");
                String typePet = rs.getString("typePet");
                float price = rs.getFloat("price");
                int status = rs.getInt("status");
               // Articulos articulos = new Articulos(id, stock, title, description, url, categoria, typePet, price, status);
               // System.out.println(articulos.toString());
            }
            st.executeQuery(sql);
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        }
         finally{
             con.desconectar();
         }
        
    }
    
}
