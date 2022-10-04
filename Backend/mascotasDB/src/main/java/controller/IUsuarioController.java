
package controller;


public interface IUsuarioController {
 public String login(String email, String password);
 public String register(String username, String email, String password, String name, String lastname);
 public String pedir(String username);
 public String actualizar_datos(String id, String username,String email, String name, String lastname);
 public String verificar_email(String email);
 
}
 