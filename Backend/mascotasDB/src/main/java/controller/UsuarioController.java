package controller;

import beans.Usuarios;
import connection.DBConnection;
import java.sql.ResultSet;
import java.sql.Statement;
import com.google.gson.Gson;

public class UsuarioController implements IUsuarioController {

    Gson gson = new Gson();

    @Override
    public String login(String email, String password) {
        DBConnection con = new DBConnection();
        String sql = "Select * from users where email = '" + email + "' and password = '" + password + "'";
        try {
            Statement st = con.getConnection().createStatement();
            ResultSet rs = st.executeQuery(sql);

            while (rs.next()) {
                int id = rs.getInt("id");
                String username = rs.getString("username");
                String name = rs.getString("name");
                String lastname = rs.getString("lastName");
                int loggin = rs.getInt("loggin");
                Usuarios usuario = new Usuarios(id, username, email, password, name, lastname, loggin);
                System.out.println("el usuario " + username + " ingresó al sistema");
                return gson.toJson(usuario);
            }
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        } finally {
            con.desconectar();
        }
        return "false";
    }

    @Override
    public String register(String username, String email, String password, String name, String lastname) {

          int id=0;
          int loggin = 1;
        
        DBConnection con = new DBConnection();
        String sql = "insert into users values ('0','"+ username + "','" + email + "','" + password + "','" + name + "','" + lastname + "','"+loggin+"')";
        try {

            Statement st = con.getConnection().createStatement();
            st.executeUpdate(sql);

          

            Usuarios usuario = new Usuarios(id, username, email, password, name, lastname, loggin);
            st.close();

            return gson.toJson(usuario);

        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        } finally {
            con.desconectar();
        }
        return "false";

    }

    @Override
    public String pedir(String username) {
        throw new UnsupportedOperationException("Not supported yet.");
    }

}
