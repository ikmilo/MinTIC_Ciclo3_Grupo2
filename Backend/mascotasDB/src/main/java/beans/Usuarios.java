package beans;

public class Usuarios {

    private int id;
    private String username;
    private String email;
    private String password;
    private String name;
    private String lastname;
    private int loggin;

    public Usuarios(int id, String username, String email, String password, String name, String lastname, int loggin) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.name = name;
        this.lastname = lastname;
        this.loggin = loggin;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public int isLoggin() {
        return loggin;
    }

    public void setLoggin(int loggin) {
        this.loggin = loggin;
    }

    @Override
    public String toString() {
        return "Usuarios{" + "id=" + id + ", username=" + username + ", email=" + email + ", password=" + password + ", name=" + name + ", lastname=" + lastname + ", loggin=" + loggin + '}';
    }

}
