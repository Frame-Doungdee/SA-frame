package sut.sa.g21.entity;
import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.*;
@Data
@Entity
@Getter @Setter
@Table(name="Product")
public class Product{
    @Id
    @SequenceGenerator(name="product_seq",sequenceName="product_seq")               
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="product_seq")
    private @NonNull Long productId;
    private @NonNull String productName;   
    private String productDetail;
    private double productPrice;
    private String productImgUrl;
    

    @ManyToOne()   
    @JoinColumn(name= "classId")     
    private Classification classification;
    
    @ManyToOne()
    @JoinColumn(name= "countryId")
    private Country country;

    @ManyToOne()
    @JoinColumn(name= "typeId")
    private Type type;
    
    public Product(){}
    

    public Product(String productName){
        Country country = new Country(1);
        Classification classification = new Classification(1);
        Type type = new Type(1);
        this.productName = productName;
        this.country = country;
        this.classification = classification;
        this.type = type;
    }
    
    /*
    public Product(String productName,String productDetail,double productPrice,String productImgUrl,long classId,long countryId,long typeId){
        Country country = new Country(countryId);
        Classification classification = new Classification(classId);
        Type type = new Type(typeId);
        this.productName = productName;
        this.productDetail = productDetail;
        this.productPrice = productPrice;
        this.productImgUrl = productImgUrl;
        this.country = country;
        this.classification = classification;
        this.type = type;
    }
    */
}