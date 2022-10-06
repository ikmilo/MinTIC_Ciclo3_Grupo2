/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package connection;

import java.sql.Connection;
import java.sql.DriverManager;


public class DBConnection {
    Connection connection;
    static String bd = "railway";
    static String port = "7430";
    static String login = "root";
    static String password = "wMCjJQWKcT3qIMV2P24s";
    static String ip = "containers-us-west-85.railway.app";
    
    
    public DBConnection(){
        try {
            Class.forName("com.mysql.jdbc.Driver");          
            String url = "jdbc:mysql://"+this.ip +":"+this.port + "/"+ this.bd;
            connection = DriverManager.getConnection(url,this.login,this.password); 
            if(connection==null){
                System.out.println("Conexión Fallida");
            }else{
                System.out.println("Conexión Exitosa");
            }
        } catch (Exception ex) {
            System.out.println("Conexión Fallida");
        }
    }

    public Connection getConnection() {
        return connection;
    }
    public void desconectar(){
        connection = null;
    }
    
}
