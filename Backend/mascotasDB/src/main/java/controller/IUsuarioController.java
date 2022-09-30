
package controller;


public interface IUsuarioController {
 public String login(String email, String password);
 public String register(String username, String email, String password, String name, String lastname);
 public String pedir(String username);
}
 