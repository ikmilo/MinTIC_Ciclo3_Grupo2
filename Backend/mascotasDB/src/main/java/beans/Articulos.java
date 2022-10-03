package beans;

public class Articulos {
    
   
 private String id;
 private String title, description, url;
 private int stock ;
 private String categoria, typePet;
 private float price ;
 private int status;

    public Articulos(String id, String title, String description, String url, int stock, float price, String categoria, String typePet, int status) {
        this.id = id;
        this.stock = stock;
        this.title = title;
        this.description = description;
        this.url = url;
        this.categoria = categoria;
        this.typePet = typePet;
        this.price = price;
        this.status = status; 
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getTypePet() {
        return typePet;
    }

    public void setTypePet(String typePet) {
        this.typePet = typePet;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public int isStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Articulos{" + "id=" + id + ", title=" + title + ", description=" + description + ", url=" + url + ",stock=" + stock +", price=" + price +", categoria=" + categoria + ", typePet=" + typePet + ", status=" + status + '}';
    }    

}
