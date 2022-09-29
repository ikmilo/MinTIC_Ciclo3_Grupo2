package beans;

public class Articulos {
    
 private int id, stock ;   
 private String title, description, url, categoria, typePet;
 private float price ;
 private boolean status;

    public Articulos(int id, int stock, String title, String description, String url, String categoria, String typePet, float price, boolean status) {
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

    public int getId() {
        return id;
    }

    public void setId(int id) {
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

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Articulos{" + "id=" + id + ", stock=" + stock + ", title=" + title + ", description=" + description + ", url=" + url + ", categoria=" + categoria + ", typePet=" + typePet + ", price=" + price + ", status=" + status + '}';
    }
 
 
 
 

    
}
